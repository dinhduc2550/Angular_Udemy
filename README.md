# Angular_Udemy
ng g c + ten file de tao ra 1 thu muc co day du html,css,ts component
Run server: ng serve

//SET UP NEW PROJECT
In the next lecture, we set up the course project.

Make sure, you do create that app by also adding the --no-strict flag to the ng new command - otherwise you will run into issues later on (we'll still dive into that "Strict Mode" later in the course of course, no worries)!

We'll also install the Bootstrap CSS Framework and in this course, we use version 3 of the framework. Install it via npm install --save bootstrap@3  => The @3  is important!

Additionally, when using a project created with Angular CLI 6+ (check via ng v ), you'll have an angular.json  file instead of an .angular-cli.json  file. In that file, you still need to add Bootstrap to the styles[]  array as shown in the next video, but the path should be node_modules/bootstrap/dist/css/bootstrap.min.css , NOT ../node_modules/bootstrap/dist/css/bootstrap.min.css . The leading ../  must not be included.

Also see this lecture - I do show the complete setup process there: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655614/

If you're facing any problems, please have a look at this very thorough thread by Jost: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/17862130#questions/10444944
//END SETUP
