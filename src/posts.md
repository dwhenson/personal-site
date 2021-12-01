---
title: "Articles"
layout: "layouts/posts.html"
pagination:
  data: collections.posts
  size: 6
permalink: "posts{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Older posts"
paginationNextText: "Newer posts"
paginationAnchor: "#post-list"
---

Notes on Learning to Code and Other Things
