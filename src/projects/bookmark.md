---
title: "Bookmark"
summary: "This project was a challenge from <a href='https://www.frontendmentor.io'>Frontend Mentor</a>. The specifications required me to build a fully responsive landing page to the designs provided. I used semantic HTML, CSS for layout (CUBE CSS),  with JavaScript for form validation and for the tabbed component."
displayOrder: 1

# Content
stack: "HTML / CSS / JS"
link: "https://frontendmentor-bookmark-landing.vercel.app/"

# Images
portfolio:
  mobile: "../../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg"
  tablet: "../../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg"
  desktop: "../../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"

project:
  hero:
    mobile: "../../images/project/mobile/image-bookmark-hero@2x.jpg"
    tablet: "../../images/project/tablet/image-bookmark-hero@2x.jpg"
    desktop: "../../images/project/desktop/image-bookmark-hero@2x.jpg"
  previews:
    mobile:
      one: "../../images/project/mobile/image-bookmark-preview-1@2x.jpg"
      two: "../../images/project/mobile/image-bookmark-preview-2@2x.jpg"
    tablet:
      one: "../../images/project/tablet/image-bookmark-preview-1@2x.jpg"
      two: "../../images/project/tablet/image-bookmark-preview-2@2x.jpg"
    desktop:
      one: "../../images/project/desktop/image-bookmark-preview-1@2x.jpg"
      two: "../../images/project/desktop/image-bookmark-preview-2@2x.jpg"
---

There were a couple of tricky aspects to this challenge. Notably the tabbed component and managing tab order to allow keyboard users to tab into the focused component, rather than onto the next tab. I used Heydon Pickering's [in-depth write up on tabbed interfaces](https://inclusive-components.design/tabbed-interfaces/) as a basis for the tabbed component, which was especially useful for dealing with the tab order.

The burger-menu shown on smaller screens was as fiddly as ever. The component is based on Andy Bell's totally full on [fully responsive progressively enhanced burger menu ](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/) which is excellent and very robust. Again, if JS should fail for any reason no content his hidden. I also allow scroll when the menu is open — I know some people don't like this but I prefer not to restrict the user unless essential.

Wherever possible the page also takes advantage of in-built HTML functionality. The FAQ section is created using uses the `details-summary` element and the `no-validate` attribute is added to the form using JavaScript enabling a fallback to built in validation. I in-lined the CSS to improve performance, but I am still struggling with some CLS issues.
