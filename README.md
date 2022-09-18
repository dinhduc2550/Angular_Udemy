
# How to set up new project Angular




## Install :exclamation:

Create new project:
 ```bash 
 ng new [project-name] --no-strict
 ```

Create folder have all html,css,ts file:
 ```bash 
ng g c + [fileName]
 ```
 ```bash 
 ng g c [fileName] --skipTests true: skip test file
 ```

Add Bootstrap3
 ```bash
 npm install --save bootstrap@3
 ```
- Go to `angular.json`  -> Edit `styles` to add 
```bash
 "node_modules/bootstrap/dist/css/bootstrap.min.css"
```

More
- [Complete guide](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655614/)
- [Help problem](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/17862130#questions/10444944)

## Start project :exclamation:
- `ng serve`
