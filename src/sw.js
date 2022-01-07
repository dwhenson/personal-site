//
// Settings & Variables
//

// Version number
const version = "1.0.0";

// Cache IDs
const coreID = `${version}_core`;
const pageID = `${version}_pages`;
const imgID = `${version}_img`;
const cacheIDs = [coreID, pageID, imgID];

// Max number of files in cache
const limits = {
  pages: 35,
  imgs: 20,
};

// Core assets
const coreAssets = [
  "offline/",
  "fonts/biorhyme-bold-webfont.woff2",
  "fonts/worksans-regular-webfont.woff2",
  "fonts/worksans-italic-webfont.woff2",
  "fonts/worksans-bolditalic-webfont.woff2",
];

//
// Helper Methods
//

/**
 * Remove cached items over a certain number
 * @param  {String}  key The cache key
 * @param  {Integer} max The max number of items allowed
 */
function trimCache(key, max) {
  caches.open(key).then(function (cache) {
    cache.keys().then(function (keys) {
      if (keys.length <= max) return;
      cache.delete(keys[0]).then(function () {
        trimCache(key, max);
      });
    });
  });
}

/**
 * Check if cached API data is still valid
 * @param  {Object}  response The response object
 * @param  {Number}  goodFor  How long the response is good for, in milliseconds
 * @return {Boolean}          If true, cached data is valid
 */
function isValid(response, goodFor) {
  if (!response) return false;
  const fetched = response.headers.get("sw-fetched-on");
  if (fetched && parseFloat(fetched) + goodFor > new Date().getTime()) return true;
  return false;
}

//
// Event Listeners
//

// On install, activate immediately
self.addEventListener("install", function (event) {
  // Activate immediately
  self.skipWaiting();

  // Cache core assets
  event.waitUntil(
    caches.open(coreID).then(function (cache) {
      for (const asset of coreAssets) {
        cache.add(new Request(asset));
      }
      return cache;
    })
  );
});

// On version update, remove old cached files
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        // Get the keys of the caches to remove
        const keysToRemove = keys.filter(function (key) {
          return !cacheIDs.includes(key);
        });

        // Delete each cache
        const removed = keysToRemove.map(function (key) {
          return caches.delete(key);
        });

        return Promise.all(removed);
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

// Listen for request events
self.addEventListener("fetch", function (event) {
  // Get the request
  const request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") return;

  // HTML files
  // Network-first
  if (request.headers.get("Accept").includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          // Create a copy of the response and save it to the cache
          const copy = response.clone();
          event.waitUntil(
            caches.open(pageID).then(function (cache) {
              return cache.put(request, copy);
            })
          );

          // Return the response
          return response;
        })
        .catch(function (error) {
          console.warn(error);
          // If there's no item in cache, respond with a fallback
          return caches.match(request).then(function (response) {
            return response || caches.match("offline/");
          });
        })
    );
  }

  // CSS & JavaScript
  // Offline-first
  if (request.headers.get("Accept").includes("text/css") || request.headers.get("Accept").includes("text/javascript")) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request).then(function (response) {
            // Return the response
            return response;
          })
        );
      })
    );
    return;
  }

  // Images & Fonts
  // Offline-first
  if (request.headers.get("Accept").includes("image") || request.url.includes("woff2")) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request).then(function (response) {
            // If the request is for an image, save a copy of it in cache
            if (request.headers.get("Accept").includes("image")) {
              const copy = response.clone();
              event.waitUntil(
                caches.open(imgID).then(function (cache) {
                  return cache.put(request, copy);
                })
              );
            }

            // Return the response
            return response;
          })
        );
      })
    );
    // return;
  }
});

// Trim caches over a certain size
self.addEventListener("message", function (event) {
  // Make sure the event was from a trusted site
  // if (event.origin !== 'https://your-awesome-website.com') return;

  // Only run on cleanUp messages
  if (event.data !== "cleanUp") return;

  // Trim the cache
  trimCache("pages", limits.pages);
  trimCache("img", limits.imgs);
});
