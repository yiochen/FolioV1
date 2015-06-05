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
    
    app.addEventListener('dom-change', function (e) {
        app.project = document.querySelector('#project');
        app.pages = document.querySelector('iron-pages');
        app.route="home";
        
        
//        console.log('defining go home');
//        app.goHome = function (e) {
//            app.pages.select(app.home);
//        };
//        app.goFolio = function (e) {
//            app.pages.select(app.folio);
//        };
//        app.goBlog = function (e) {
//            app.pages.select(app.blog);
//        };
//        app.goAbout = function (e) {
//            app.pages.select(app.about);
//        };
//        app.goContact = function (e) {
//            app.pages.select(app.contact);
//        };
//        app.goArticle = function (e) {
//            app.pages.select(app.article);
//        }
        
        
//        
//        app.pages._oldSelectedPageChanged=app.pages._selectedPageChanged;
//        app.pages._selectedPageChanged = function (selected, old) {
//            app.pages._oldSelectedPageChanged();
//            if (app.pages.children[selected].refresh) {
//                app.pages.children[selected].refresh();
//            }
//            app.$.headerPane.scrollTop = document.documentElement.scrollTop = 0;
//        };
    });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));