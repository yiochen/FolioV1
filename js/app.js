var app;
(function (document) {
    'use strict';
    var data;
    app = document.querySelector('#app');
    app.home = 0;
    app.folio = 1;
    app.blog = 2;
    app.about = 3;
    app.contact = 4;
    app.article = 5;
    app.api="0q6nbQaibqLbvTRQoOYiHqQEJbcHSMtgNIcdopG1NfVrBZF9b5";
    app.posts = [];
    app.projects=[];
    app.currentpost={};
    var background=document.querySelector('#background');
    aja()
        .url('background.json')
        .on('success', function (data) {
            app.backgrounds=data;
            if (background){
              background.src="images/background/"+data[Math.floor(Math.random()*data.length)];
            }
        }).go();
    app.addEventListener('dom-change', function (e) {
        app.project = document.querySelector('#project');
        app.pages = document.querySelector('iron-pages');
        app.route="home";
        if (!background) background=document.querySelector('#background');
        if (!background.src) background.src="images/background/"+app.backgrounds[Math.floor(Math.random()*app.backgrounds.length)];
    });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
