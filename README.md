# Sign-Up-Form-MM


### **[Assignment](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form#assignment)**

**Step 1: Set up and planning**
- [x] Set up your git repository (refer to past projects if you need a refresher). 
- [x] Set up your HTML and CSS files with some dummy content, just to make sure you have everything linked correctly.
- [x] Download a full-resolution copy of **[the design file](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/sign-up-form.png)**, and get a general idea for how you’re going to need to lay things out in your HTML document. 
![sign up form](images/sign-up-form.png)
---
**Step 2: Gather assets**
- [x] The design has a large background-image, so go find and download an image you want to use for that section. The one in the design can be found on **[unsplash.com](https://unsplash.com/photos/25xggax4bSA)**, but feel free to select your own. Be sure to credit the creator of your image! I have selected this image by Ruslan Sikunov.. Photo by <a href="https://unsplash.com/@sicunov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ruslan Sikunov</a> on <a href="https://unsplash.com/photos/silhouette-of-trees-under-cloudy-sky-during-sunset-8XYHZPjZZYo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

- [x] Pick an external font for the ‘logo’ section. We’ve used **[Norse Bold](https://cdn.statically.io/gh/TheOdinProject/theodinproject/efdc2888072f409e687d31dc580595dbe4fe0ff4/app/assets/fonts/Norse-Bold.otf)**, but you can use any font you like.
- [x] For the image-sidebar, we’ve used **[this Odin logo](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png)**. Again, feel free to replace it.
---
**Step 3: Some tips!**
- [x] How you attack this project is mostly up to you, but it is wise to begin by scaffolding out the structure of the page, and then tackle the various sections one by one.
2. The area behind the “ODIN” logo is a div that has a dark, but semi-transparent background color. This enhances the readability of the text against the busy background image.
3. The color we’ve chosen for the ‘Create Account’ button is similar to tones found in the background image. Specifically, it is `#596D48`.
4. The inputs, by default have a very light border (`#E5E7EB`), but we’ve included 2 variations. For starters, the password inputs should be given an `error` class.
5. The other variation is the selected input, which should have a blue border and subtle box-shadow. This can be done with the `:focus` pseudo-class you’ve learned about in an earlier lesson.
6. Do not worry about making your project look nice on mobile, but DO resize your browser a little bit to make sure that it’s not completely broken at different desktop resolutions.
7. Checking that the password fields match each other requires javascript. Try to implement this if you feel confident, otherwise just validate each field separately.