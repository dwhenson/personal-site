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
  mobile: "https://ik.imagekit.io/dwhenson/personal-site/portfolio/mobile/image-portfolio-manage_2x_ab92NU48iC.jpg?updatedAt=1639819821022"
  tablet: "https://ik.imagekit.io/dwhenson/personal-site/portfolio/tablet/image-portfolio-manage_2x_UieXJuYcR.jpg?updatedAt=1639820370919"
  desktop: "https://ik.imagekit.io/dwhenson/personal-site/portfolio/desktop/image-portfolio-manage_2x_v26dCmy44.jpg?updatedAt=1639820381509"

project:
  hero:
    mobile: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/mobile-image-manage-hero_2x_jsfNg4fyG.jpg?updatedAt=1639892342851"
    tablet: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/tablet-image-manage-hero_2x_qKuxfvUwF.jpg?updatedAt=1639892349227"
    desktop: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/manage-image-manage-hero_2x_lUgKK87ij.jpg?updatedAt=1639892348723"
  previews:
    mobile:
      one: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/mobile-image-manage-preview-1_2x_BF1Z6FD5V.jpg?updatedAt=1639892341021"
      two: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/mobile-image-manage-preview-2_2x_g0l-afF8F.jpg?updatedAt=1639892346087"
    tablet:
      one: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/tablet-image-manage-preview-1_2x_e72FPYhJ9Kd.jpg?updatedAt=1639892344927"
      two: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/tablet-image-manage-preview-2_2x_v1ooizBE7.jpg?updatedAt=1639892352242"
    desktop:
      one: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/manage-image-manage-preview-1_2x_3FfHfXNpl.jpg?updatedAt=1639892348074"
      two: "https://ik.imagekit.io/dwhenson/personal-site/project/manage/manage-image-manage-preview-2_2x_LW7VKaZrM.jpg?updatedAt=1639892343738"
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
