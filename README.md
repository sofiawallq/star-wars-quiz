# The ultimate Star Wars quiz

As the headline suggests, this page is all about Star Wars. It features a quiz with ten questions of various difficulty that will amuse both the hardcore fan of Star Wars and the user who is new to this universe. The layout is simple, has a good contrast between different elements and is responsive on different devices.

![printscreen responsive design](assets/images_readme/responsive_design.jpg)

## Features
The Star Wars quiz page consists of one landing page that instantly takes the user to the quiz/game area. Instead of making a bunch of different pages for the quiz itself - containing for example the users score and other features, I let JavaScript do the talking for this project. 

### Existing Features

### Header
- The header is pretty straight forward - it tells the user what they will encounter on the website. 

![printscreen header](assets/images_readme/header.jpg)

### Quiz area
- The quiz area is mainly where the action is - here the user gets to answer 10 questions of various difficulty about the Star Wars Universe. The layout is simple and user friendly with the question at the top of the section, and three answers in the shape of buttons to choose from below. 

![printscreen quiz area](assets/images_readme/quiz_area.jpg)

- The quiz automatically takes the user to the next question when an answer is given/a button is pressed. To make it more user friendly all the buttons change colour and has a hover-effect in the form of a changed cursor when the user hovers over them, simply to make it more clear which answer they are choosing.

![printscreen buttons](assets/images_readme/button_colour_change.jpg)

- One of the questions also has an image incorporated in the quiz area, to make it a bit more visual. If given the time I would love to have a visual element incorporated with all questions, but for now this serves as an example of a JavaScript feature. 

![printscreen incorporate image in quiz](assets/images_readme/image_feature.jpg)

### Progress bar
- The quiz features a progress bar that tells the user how far along into the quiz they are. For every question the user answers, the progress bar fills up a little more.

![printscreen progress bar](assets/images_readme/progress_bar.jpg)

### Score/Result pop-up
- When the user has finished the quiz and answered all ten questions their final scores pop up on the screen. Along with a comment about their score, which changes depending on how high their score is.
- Here you also have the option to give the quiz another go if you push the "Play again?"-button which reloads the quiz.

![printscreen score board]()

### Features left to Implement
There is a couple of features that I would have wanted to incorporate into the page if the time was given:
- A score board that saves your scores.
- The option to put in a user name and connect it to your score board.
- Some different quiz to choose from, with the possibility of chosing your preffered degree of difficulty.
- A pop-up section with instructions on how to play, if the page would have the above features (For now the design and approach is simple enough that instructions feels superfluous).


## Design choices
- The chosen colours for the webpage are loosely based on the colour scheme of the movie intros. 
- The same goes for the font on headlines and questions, it's the same font they use for the movies. 
- The background image hopefully gives a galaxy vibe to the quiz. 


## Testing
- The page has been tested on different devices - such as phones, tablets and laptops. Among others the page has been tested on Samsung S22, Iphone 11, Apple Ipad, Goolge Chromebook and a wide screen desktop.
- When it comes to phones it has been viewed on different models to make sure it looks the same depending on the brand and screen size of the phone.
- It has been tested in different web browsers such as Google Chrome, Microsoft Edge, Safari and Mozilla Firefox to make sure everything acts as it should.
- Responsivness has been tested on devices as small as 280px in screen size up to 2560px, with the help of Chrome DevTools. On screens sizes over 1200px wide the width becomes fixed so the content won't stretch on wide screens. 
- No elements overlap when viewed on smaller screens. Every element aligns itself in a column when viewed on smaller screens. 

![printscreen mobile device](assets/images_readme/mobile_device.jpg)

![printscreen laptop device](assets/images_readme/laptop_device.jpg)


## Validator testing
- HTML - no errors was returned when the page was tested through the official W3C validator.

![printscreen html validator](assets/images_readme/html_validator.jpg)

- CSS - no errors was returned when tested through the official Jigsaw validator.

![printscreen css validator](assets/images_readme/css_validator.jpg)

- JavaScript - the JavaScript check in JSHint came back with issues regarding the use of the let-keyword which isn't supported in older browsers from what I understand, no other error messages showed up. 

![printscreen javascript validator](assets/images_readme/javascript_validator.jpg)

- When testing the accessibility using Lighthouse for Chrome,

![printscreen lighthouse report](assets/images_readme/lighthouse_validator.jpg)

## Unfixed bugs

- Quite a few error-messages occured in the Console in DevTools during the development of the JavaScript-functions, which caused some minor breakdows. At two times I had to go back to an older version of the script.js because the answers stopped loading into the buttons due to some errors further down in the code. They are hopefully all fixed now since no error messages remain when testing the page. 
- One of the most persistant errors occured due to the fact that I had declared buttons in the script, but had forgotten to give them a common class in the index.html-file. 
- When viewing the page with Devtools the colour on the buttons persist when a new question is loaded, which I do not know how to fix. When viewed in regular mode on all device the hover-effect works as it should though. 
- The import-command to fetch the questions from the questions.js-file is not supported in some old browsers. Since I have viewed the webpage in many different browsers that I think most people use today, I chose to go with that command. 

## Deployment

The website was deployed using a hosting platform in the form of GitHub. The steps to deploy are as follows:

1. In the GitHub repository of the project, navigate to the "Settings"-tab
2. Select "Pages" in the left-hand menu and in the "Source" drop-down menu select "Deploy from a branch"
3. In the "Branch" section below chose the main branch
4. When the main branch is selected the GitHub repository will automatically refresh and after a little while you will find the Deployed page on the right-hand side with a detailed list of every updated deployment going forward.

The link to the live project-site can be found here: https://sofiawallq.github.io/star-wars-quiz/

## Credits

### ContentS
- The font for the header and questions were found at [fontmeme](https://fontmeme.com/star-wars-font/).
- When it came to CSS I needed some help with the box-shadows for my header, which I found at [mdm web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).

Quite some googling was made to get the functions working as they should, links to used tutorials and visited pages are listed below:
- To get the image to appear in the middle of the quiz I took some help with the logic from [w3schools](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp), as well as [stackoverflow](https://stackoverflow.com/questions/6242976/javascript-hide-show-element).
- The progress bar was created with help from [Geeks for Geeks](https://www.geeksforgeeks.org/creating-progress-bar-using-javascript/), and some useful code by Evan Abner found on [Codepen](https://codepen.io/by_EvanAbner/pen/WNQYybg).
- For inspo on how to create at pop-up with the final score and a message to the user, I took some help from [w3schools](https://www.w3schools.com/js/js_popup.asp) on how to create a Prompt Box, but also took some inspo from other code in my script regarding the score and Play Again-function.
- I would never have gotten the loading of questions and answers into the buttons without help from my mentor Spencer Barriball, who provided me with snippets of code to alter for my project. He also helped med with the script for loading the final score into the pop-up window. 

### Media
- The favicon came from [Favicon](https://favicon.io/emoji-favicons/).
- Background image and the Star Wars character images came from [Pexels](https://www.pexels.com/sv-se/sok/star%20wars/).
- Some of the images were compressed to take less time to load, made possible with the help of [I love Img](https://www.iloveimg.com/sv/komprimera-bild).



