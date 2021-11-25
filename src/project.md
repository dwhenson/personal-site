---
layout: "layouts/project.html"
pagination:
  data: collections.projects
  size: 1
  alias: projects
permalink: /project/{{ projects.data.title | slug }}/index.html
paginationPrevText: "Previous Project"
paginationNextText: "Next Project"
---
