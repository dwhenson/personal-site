---
title: "Manage"
summary: "This project was a challenge from <a href='https://www.frontendmentor.io'>Frontend Mentor</a>. The specifications required me to build a fully responsive landing page to the designs provided. I used semantic HTML, CSS for layout (CUBE CSS),  with JavaScript for form validation and <a href='https://github.com/pawelgrzybek/siema'>Siema</a> for the carousel."
displayOrder: 2

#Content
stack: "HTML / CSS / JS"
link: "https://frontendmentor-manage.vercel.app/"
repo: "https://github.com/dwhenson/frontendmentor-manage"

# Images
portfolio:
  mobile: "../../images/portfolio/mobile/image-portfolio-manage@2x.jpg"
  tablet: "../../images/portfolio/tablet/image-portfolio-manage@2x.jpg"
  desktop: "../../images/portfolio/desktop/image-portfolio-manage@2x.jpg"

project:
  hero:
    mobile: "../../images/project/mobile/image-manage-hero@2x.jpg"
    tablet: "../../images/project/tablet/image-manage-hero@2x.jpg"
    desktop: "../../images/project/desktop/image-manage-hero@2x.jpg"
  previews:
    mobile:
      one: "../../images/project/mobile/image-manage-preview-1@2x.jpg"
      two: "../../images/project/mobile/image-manage-preview-2@2x.jpg"
    tablet:
      one: "../../images/project/tablet/image-manage-preview-1@2x.jpg"
      two: "../../images/project/tablet/image-manage-preview-2@2x.jpg"
    desktop:
      one: "../../images/project/desktop/image-manage-preview-1@2x.jpg"
      two: "../../images/project/desktop/image-manage-preview-2@2x.jpg"
---

I need to say it up front: The carousel shown on small screens is problematic. It's not accessible, and the buttons for changing the image shown are too small (only shown on small viewports). This is in line with the design provided. But I don't like it.

I used <a href='https://github.com/pawelgrzybek/siema'>Siema</a> for the carousel, but even the package creator notes <q>I consider carousels as an anti-pattern and I would suggest you to find a better UI pattern than carousel for your current project.</q> I would agree. It seems just so difficult to make one that works properly.

I also misunderstood the design specifications, as I thought the carousel was only needed at small screen sizes (a lesson in itself there). This was more complicated than I had hoped as I needed to set this up in a JS file before the carousel component was created.

I achieved this using the following in my JS:

```js
if (width.matches) {
  // instantiate the carousel
}
```

This worked, but this means that content is hidden if the viewport is expanded from the small to medium media query (I don't know if anyone really does this aside from web developers, but better not to take the chance), which is not ideal (although it works the other way round - of a fashion).
