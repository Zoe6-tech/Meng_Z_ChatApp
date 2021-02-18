https://browsersync.io/
npm install -g browser-sync

* split the scripts into 2 and run them sequentially, like so:

scripts: {
"start": "node app",
"start-dev": "nodemon app",
"start-ui": "browser-sync start ..... "
}

* and then run the 2 scripts each in their own terminal windows or tabs. start-ui should be invoked last.

* sass --watch assets/sass:public/css --style compressed

* second window :localhost:5050/chat

* https://chat-app-meng.herokuapp.com/