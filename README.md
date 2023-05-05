# Instructions
The aim of this project is to create a web page that works correctly on a desktop computer and a mobile phone. Use the link to the [Figma](https://www.figma.com/file/qIyiRXgAFeHqerGu7eS1Ez/CSS-Selectors-and-Responsive?node-id=0%3A1) tool to get acquainted with the prototype of the design.

Please know that you don't need to replace text or images. Your task is to create a proper working page and style it according to the design specified using the BEM methodology and Sass preprocessor. Then, you will adapt the page for mobile phones and ensure cross-browser accessibility and code quality.

You will have about 20 hours to complete the project. Though this might seem like a long time, the sooner you get started, the better.

The page should support both desktop and mobile browsers and must have an adaptable layout. Screen size breakpoints for media queries should be > 600px and < 600px.

## Hard Drive Disk
- Microsoft Windows
- Google Chrome (the latest stable version)
- Firefox (the latest stable version)
- Microsoft Edge (the latest stable version; Chromium-based only)
- MacOS 10.12 and newer
- Google Chrome (the latest stable version)
- Safari (the latest stable version)

## Solid-state Drives
- Android 5 and newer
- Google Chrome (the latest stable version)
- iOS 10 and newer
- Safari (the latest stable version)

## Recommended folder/file structure:
```
.
├── package.json
├── package.lock.json
├── README.md
├── .prettierrc
├── .gitignore
├── .stylelintrc.json
├── ... //Place all configuration files in the root folder.
├── src
│   ├── Index.html
│   ├── assets
│   │   ├── stars.png
│   │   ├── logo.png
│   │   ├── ... //Place all images in the "assets" folder.
│   │   ├── fonts
│   │   │   ├── font-osvald.ttf
│   │   │   └── ... //Place all fonts in the "assets/fonts" folder.
│   │   ├── styles
│   │   │   ├── kit
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _variables.scss
│   │   │   │   ├── _functions.scss (optional)
│   │   │   │   └── ...//Place all mixins, variables, and functions in the "styles/kit" folder.
│   │   │   ├── styles.scss
│   │   │   ├── header.scss
│   │   │   ├── header.mobile.scss
│   │   │   ├── menu.scss
│   │   │   ├── menu.mobile.scss
│   │   │   ├── text-section.scss
│   │   │   ├── text-section.mobile.scss
│   │   │   ├── video-section.scss
│   │   │   ├── video.section.mobile.scss
│   │   │   ├── footer.scss
│   │   │   └── footer.mobile.scss
```
//Place all scss files for each block (e.g., header, footer, menu) here. You can add global styles (for body, section, etc.) in the styles.scss file.

# Stages
To guide you through the process, the project is divided into seven stages:

- Setup
- Creating HTML markup
- Styling
- Creating the mobile version
- Creating animation
- Compiling Sass into CSS
- Verification

In each stage, you will find a list of required steps, evaluation criteria, and helpful resources to refer to if you have any questions.


## Set up the project
Start by creating a Git repository in GitHub or the GitLab of your choice. Then, follow the steps below:

- [x] Clone the repository locally. Create a project inside your cloned repository using npm. Verify that the package.json file was created.
- [x] Create a .gitignore file and add node modules to .gitignore.
- [x] Add node-sass to the project and implement the "compile" script, which should compile all your .scss files into .css.

If you are not sure how to initialize a project, you can follow the instructions in this [article](https://docs.npmjs.com/cli/v8/commands/npm-init).

If you need to recall how to compile .scss files to .css, review the lesson on CSS Preprocessors. The following resources may be beneficial:

- [How to set up Sass in your project](https://dev.to/chrissiemhrk/how-to-setup-sass-in-your-project-2bo1)
- [Sass official documentation](https://sass-lang.com/documentation/)
You can use the table below to evaluate this stage (max 20 points):

| Points | Requirements                                           |
|--------|--------------------------------------------------------|
| 5      | Git repository created                                 |
| 5      | All local changes are present in the remote repository |
| 5      | Node modules are not present in the remote repository  |
| 5      | All required dependencies are present in package.json  |

 ## Creating HTML markup
The next phase is the creation of the structure. Follow the list below to build the web page:

- [x] Create HTML markup with semantic tags (`<header>`, `<footer>`, `<article>`, etc.). Note that the bottom section doesn't contain video. You will prepare the markup to design this section using a background image and a styled button.
- [x] Create a top menu for desktop view using the `<nav>`, `<ul>`, `<li>`, and `<a>` tags
- [x] Divide headings using the `<br>` tag
- [x] Add a bottom button that contains the ▶ symbol &#9654
- [x] When a user clicks on an email address, the default email agent should open
- [x] BEM methodology should be used to name classes

If you need help creating a semantic markup, review the lesson "Accessibility fundamentals and HTML semantics." Pay particular attention to the following articles:

- [\<h1>–\<h6>: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [\<header>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
- [\<footer>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
- [\<aside>: The Aside element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
- [\<nav>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [A Complete Guide To Accessible Front-End Components](https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/)
- [How to Section Your HTML](https://css-tricks.com/how-to-section-your-html/)
- [Semantic HTML & Accessibility](https://www.youtube.com/watch?v=0Y1EEG4GyKU)

If you have questions about BEM methodology, please review the lesson "CSS Methodologies fundamentals." You will most likely find hints in the following resources:

- [Introduction to BEM](http://getbem.com/introduction/)
- [BEM naming](http://getbem.com/naming/)
- [BEM 101](https://css-tricks.com/bem-101/)
- [BEM FAQ](http://getbem.com/faq/)

You can use the table below to evaluate this stage (max 40 points).

| Points | Requirements                                                                           |
|--------|----------------------------------------------------------------------------------------|
| 15     | HTML markup was created with semantic tags (`<header>`, `<footer>`, `<article>`, etc.) |
| 3      | A top menu for desktop view was created using the `<nav>`, `<ul>`, `<li>`, `<a>` tags  |
| 3      | Headings are divided using the `<br>` tag                                              |
| 5      | A bottom button was created that contains the ▶ symbol &#9654                          |
| 4      | When a user clicks on an email address, the default email agent opens                  |
| 10     | BEM methodology was used                                                               |

## Styling the Page With the Sass Preprocessor

Now that you have created the structure, you need to style it. Add the necessary styles to your HTML markup using CSS by following the steps below:

- [x] Style the page for desktop view (screen width ≥ 1200px) using the [design](https://www.figma.com/file/qIyiRXgAFeHqerGu7eS1Ez/CSS-Selectors-and-Responsive?node-id=0%3A1) provided
- [x] Use Flexbox and/or Grid
- [x] Add hover effect for the menu: bottom border or outline appears when the user hovers over the link to the menu
- [x] Styles should be created in a separate style.scss file according to the folder structure provided in the Pre-Task instructions
- [x] Use mixins for variables that are repeated in the text
- [x] Use mixins for CSS rules that are repeated in the text
- [x] Use nested selectors

If you have any questions about Grid or Flexbox, review the topics "CSS Flexbox" and "CSS Grid" or read the following articles:

- [Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Mastering Wrapping of Flex Items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Properties of flex items](https://www.w3schools.com/css/css3_flexbox_items.asp#order)
- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/#flex-items)
- [Basic Concepts of Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Line-based placement with CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)

If you need to refresh your memory about Sass, review the lesson "CSS Preprocessors" or study the resources below:

- [Sass and SCSS syntax](https://www.linkedin.com/learning/sass-essential-training-15630917/sass-syntax)
- [Sass variables](https://www.linkedin.com/learning/sass-essential-training-15630917/using-variables)
- [Nested selectors](https://www.linkedin.com/learning/sass-essential-training-15630917/nesting)
- [Mixins](https://www.linkedin.com/learning/sass-essential-training-15630917/mixins)

You can use the table below to evaluate this stage (max 70 points).

| Points | Requirements                                                                                                                      |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| 25     | Page styles match the design provided for the desktop view (screen width ≥ 1200px)                                                |
| 10     | Flexbox and/or Grid is used                                                                                                       |
| 5      | The menu has the hover effect in desktop view (the bottom border or outline appears when the user hovers on the link to the menu) |
| 10     | Mixins are used for variables that are repeated in the text                                                                       |
| 10     | Mixins are used for CSS rules that are repeated in the text                                                                       |
| 10     | Nested selectors are implemented properly                                                                                         |

## Implementing the Design for Mobile View
At this stage, you need to adapt your web page for mobile devices. You should complete the following steps:

- [x] Replace the common menu with the burger menu in mobile view. When a user clicks on the burger icon, the menu should expand, and the icon should change to the close icon (x symbol). When the user closes the menu, the icon should change to a burger again, and the menu should be hidden. See some examples [here](https://alvarotrigo.com/blog/hamburger-menu-css/). The hover effect (menu item outline) should also be implemented for mobile devices where hover is appropriate.
- [x] The page styles for a 480px-wide screen should match the [design provided](https://www.figma.com/file/qIyiRXgAFeHqerGu7eS1Ez/CSS-Selectors-and-Responsive?node-id=0%3A1) for mobile view.
- [x] The project width (layout) should be responsive and match the provided design with a 768px breakpoint.
- [x] You should use a separate mobile.scss file for media queries.

For this part of the task, you should combine your knowledge of CSS selectors, CSS positioning, CSS flow, and media queries. If you need to refresh your memory, review the lessons "CSS selectors," "CSS layout Basics," and "Media queries and advanced responsive design."
The following resources may also be helpful:

- [W3C CSS Selectors Level 4](https://www.w3.org/TR/selectors-4/)
- [Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [In Flow and Out of Flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)
- [Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- [Responsive Web Design—Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

You can use the table below to evaluate this part of the work (max 35 points).

| Points  | Requirements                                                                                           |
|---------|--------------------------------------------------------------------------------------------------------|
| 15      | In mobile view (768px >= screen width >= 480px), the menu changes to a burger menu that works properly |
| 15      | The page styles for a 480px-wide screen match the design provided                                      |
| 5       | Styles are created in separate files: style.scss (desktop styles) and mobile.scss (media queries)      |

## Adding Animations to Desktop and Mobile View

Make your web page more interactive with transition and transform options and small animations.

- [X] Apply the [rotate the Read More button](https://elearn.epam.com:18010/assets/courseware/v1/07ce8b5d4bdec21cc51bfdadc2cea8b4/asset-v1:UPSKILL+CIS201+2021_1+type@asset+block@02-transition--read-more.gif) and [Video button transformation](https://elearn.epam.com:18010/assets/courseware/v1/24a9a6867aa5cb63e5597c30cb419427/asset-v1:UPSKILL+CIS201+2021_1+type@asset+block@03-transition--video.gif) effects by hovering your mouse over an element
- [X] Implement [logo rotation and zooming](https://elearn.epam.com:18010/assets/courseware/v1/75a32c96a00b956ecc946c09621f9309/asset-v1:UPSKILL+CIS201+2021_1+type@asset+block@01-transition--logo.gif) as an infinite animation

If you need to refresh your memory about transforming elements, please review the lesson "CSS Transitions and Transform." And if you have questions about CSS animations, check out "CSS animations." The articles below might also answer any questions you have:

- [CSS transform Property](https://www.w3schools.com/cssref/css3_pr_transform.asp)
- [CSS transform-origin Property](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp)
- [CSS transform-style Property](https://www.w3schools.com/cssref/css3_pr_transform-style.asp)
- [CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
- [CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)
- [How to create high-performance CSS animations](https://web.dev/animations-guide/)
- [Writing Smarter Animation Code](https://css-tricks.com/writing-smarter-animation-code/)

You can use the table below to evaluate this stage (max 25 points).

| Points | Requirements                                                                                                                 |
|--------|------------------------------------------------------------------------------------------------------------------------------|
| 15     | Two effects (rotate the Read More button and Video button transformation) are applied by hovering your mouse over an element |
| 10     | Logo rotation and zooming are applied as an infinite animation                                                               |

## Compiling Sass into CSS Using CSS Tools

Now it is time to check the code for correctness, clean it by removing unused fragments, and format it correctly so that the entire document is in standard view. Follow the steps below:

- [x] Add the following tools to your project: Post CSS, autoprefixer, cssnano, PurifyCSS or PurgeCSS, Stylelint, and Prettier.
- [x] Create a "prod" script in package.json. The script should compile .scss into .css, add vendor prefixes to the compiled file, remove unused CSS code from the file, and minify it.
- [x] Add "lint" script to package.json. The script should check all your .scss files, auto-fix common problems, and show a report.
- [x] Fix any manual linter errors.
- [x] Format .scss files with Prettier.
- [x] Create a minified .css file with automatically added vendor prefixes using the "prod" script.

Please review the lesson "CSS Utilities and tools" to refresh your memory if you have difficulties with the task. Pay special attention to the following articles:

- [PostCSS overview](https://www.sitepoint.com/an-introduction-to-postcss/)
- [AutoPrefixer plug-in](https://github.com/postcss/autoprefixer)
- [cssnano](https://cssnano.co/docs/introduction/)
- [PurgeCSS](https://purgecss.com/introduction.html)
- [Prettier](https://medium.com/front-end-weekly/prettier-an-opinionated-code-formatter-excellent-for-open-source-5ecd2685238f)
- [Stylelint](https://blog.logrocket.com/using-stylelint-improve-lint-css-scss-sass/)

You can use the table below to evaluate this stage (max 60 points).

| Points  | Requirements                                                                                                                                                                               |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5       | All the required tools are added to the project                                                                                                                                            |
| 5       | .scss files are compiled to .css with "compile" script                                                                                                                                     |
| 20      | The "prod" script is implemented in package.json. The script should compile .scss into .css, add vendor prefixes to the compiled file, remove unused CSS code from the file, and minify it |
| 10      | Stylelint is added to the project, and the "lint" script is implemented in package.json                                                                                                    |
| 10      | Prettier is added to the project as a dependency or Visual Studio Code extension                                                                                                           |
| 7       | .scss files are formatted with Prettier, and all linter errors are fixed                                                                                                                   |
| 3       | minified .css bundle(s) for production are created                                                                                                                                         |

## Verifying
After you finish the task, push it into your remote repository and verify that all local changes are present in the repository.

## Submitting the Final Project

To receive a grade for the practical task, you should:

- Send the link to the repository before the deadline.
- Wait for an evaluation score. If you earn at least 125 points for the project tasks, you will receive an invitation to a one-on-one meeting with an instructor within three weeks. Please note that you will not be invited to a one-on-one session if you do not earn at least 125 points for the project tasks.

To submit your project, enter the link to your GitLab repository in the input field. Be sure you have granted your teachers access to your repository.
