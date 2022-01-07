---
title: "Bookmark"
summary: "This project was a challenge from <a href='https://www.frontendmentor.io'>Frontend Mentor</a>. The specifications required me to build a fully responsive landing page to the designs provided. I used semantic HTML, modern SCSS complied to CSS (based on CUBE CSS),  with JavaScript for form validation and the tabbed component."
displayOrder: 1

# Content
stack: "HTML / CSS / JS"
link: "https://frontendmentor-bookmark-landing.vercel.app/"
repo: "https://github.com/dwhenson/frontendmentor-bookmark-landing"

# Images
portfolio:
  mobile: "https://ik.imagekit.io/dwhenson/personal-site/portfolio/desktop/image-portfolio-fylo_2x_dS4AX12BU.jpg?updatedAt=1639820377924"
  tablet: "https://ik.imagekit.io/dwhenson/personal-site/portfolio/tablet/image-portfolio-bookmark_2x_HgLPke_DGC.jpg?updatedAt=1639820149893"
  desktop: "https://ik.imagekit.io/dwhenson/personal-site/portfolio/desktop/image-portfolio-bookmark_2x_y3r2ocIc6.jpg?updatedAt=1639820392948"

project:
  hero:
    mobile: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/mobile-image-bookmark-hero_2x_R1wzFF_-m.jpg?updatedAt=1639891877521"
    tablet: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/tablet-image-bookmark-hero_2x_6B9A7LjbM.jpg?updatedAt=1639891879261"
    desktop: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/desktop-image-bookmark-hero_2x_QcopcF8KDr.jpg?updatedAt=1639891871242"
  previews:
    mobile:
      one: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/mobile-image-bookmark-preview-1_2x_dcUyDVLkjFt.jpg?updatedAt=1639891872002"
      two: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/mobile-image-bookmark-preview-2_2x_WBLs6www1c.jpg?updatedAt=1639891876020"
    tablet:
      one: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/tablet-image-bookmark-preview-1_2x_EIWKSx6z_.jpg?updatedAt=1639891874757"
      two: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/tablet-image-bookmark-preview-2_2x_nzaDD3o47sk.jpg?updatedAt=1639891867552"
    desktop:
      one: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/desktop-image-bookmark-preview-1_2x_x_SE9Tce1.jpg?updatedAt=1639891861837"
      two: "https://ik.imagekit.io/dwhenson/personal-site/project/bookmark/desktop-image-bookmark-preview-2_2x_X0ldH33FE.jpg?updatedAt=1639891873728"
---

There were a couple of tricky aspects to this challenge. Notably the tabbed component and managing tab order to allow keyboard users to tab into the focused component, rather than onto the next tab. I used Heydon Pickering's [in-depth write up on tabbed interfaces](https://inclusive-components.design/tabbed-interfaces/) as a basis for the tabbed component. This was especially useful for dealing with the tab order.

The burger-menu shown on smaller screens was fiddly. The component is based on Andy Bell's totally full on [fully responsive progressively enhanced burger menu ](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/) which is excellent and very robust. Again, if JS should fail for any reason no content is hidden. I also allow the `body` scroll when the menu is open — some people don't like this, but I prefer not to restrict the user if possible.

The page also takes advantage of in-built HTML functionality. The FAQ section is created using the `details-summary` element (which has built in focus states). The `no-validate` attribute is added to the form using JavaScript, which enables a fallback to built-in, browser validation. I in-lined the CSS to improve performance, but some CLS issues remain that I need to look at again.
