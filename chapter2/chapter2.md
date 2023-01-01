#Chapter 2 : Igniting our App

Assignment -
1)Initialize npm in your app
--> npm init
--> npm init -y [default selection]
It will generate package.json in directory
2)Install the react and react-dom
--> npm i react react-dom
It will generate node_modules folder which will have all the dependencies
It will generate package-lock.json which will have exact versions of dependencies
To use react and react-dom we will use import statements and remove the cdn scripts
and to make use of import statement we will add type = "module" in script tag
\*\*\* DON'T KEEP PACKAGE-LOCK.JSON FILE IN .GITIGNORE \*\*\*
3)install parcel
--> npm i parcel -D
D flag will append package into dev dependencies
It will not be installed in production server
4)Ignite your app with parcel
npx parcel <entrypoint>
--> npx parcel index.html
--> npx parcel build index.html
it generates dist folder as well as .parcel-cache
dist has bundled js and other assets
.parcel-cache stores cache to make build faster
5)Add scripts for “start” and “build” with parcel commands
"start": "parcel index.html"
"build": "parcel build index.html"
we can run this scripts in following way:
npm run start / npm start
npm run build
6)Add .gitignore
.gitingnore file keeps the files/directories to be ignored by Git
7)Add browserlists
It makes our app compatible with browsers specified
we can give query in package json file as
browserlists:[<string queries>]
we can use browserslist.dev to learn more about it
8)Build a production version of your code using `parcel build`
npm run build
It will generate dist folder inside which we get production ready app code

Homework -
