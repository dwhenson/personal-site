---
title: "Articles"
layout: "layouts/posts.html"
pagination:
  data: collections.posts
  size: 2
permalink: "posts{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer posts"
paginationNextText: "Older posts"
paginationAnchor: "#post-list"
---

Notes on Learning to Code and Other Things
