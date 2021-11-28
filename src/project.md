---
layout: "layouts/project.html"
pagination:
  data: collections.projects
  size: 1
  alias: project
permalink: /project/{{ project.data.title | slug }}/index.html
paginationPrevText: "Previous Project"
paginationNextText: "Next Project"
---
