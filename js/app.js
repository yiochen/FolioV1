var app;
(function (document) {
    'use strict';
    
    var data;
    app = document.querySelector('#app');
    app.home=0;
    app.folio=1;
    app.blog=2;
    app.about=3;
    app.contact=4;
    app.article=5;
    app.addEventListener('template-bound', function (e) {
        
        app.project=document.querySelector('#project');
        app.pages = document.querySelector('core-animated-pages');
        app.posts=[];
        app.goHome=function(e){
            app.pages.selected=app.home;
        }
        app.goFolio=function(e){
            app.pages.selected=app.folio;
        };
        app.goBlog=function(e){
            app.pages.selected=app.blog; 
        };
        app.goAbout=function(e){
            app.pages.selected=app.about;
        };
        app.goContact=function(e){
            app.pages.selected=app.contact;
        };
        app.pages.selected=0;
        
        app.handleProjectData = function (eve) {

            app.project.response = eve.detail.response;
            //console.log(app.project.response);
            
        }
    });
    
    document.addEventListener('core-select',function(e){
        var eve=e.detail;
        if (eve.isSelected){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    });
    
    document.addEventListener('next_page', function (e) {
        app.pages.selected = (app.pages.selected + 1) % app.pages.children.length;
    });
    //    var request = new XMLHttpRequest();
    //    request.open('GET', '/data/projects.json', true);
    //    request.onload = function () {
    //        alert("haha");
    //        if (request.status >= 200 && request.status < 400) {
    //            // Success!
    //            data = JSON.parse(request.responseText);
    //            
    //        } else {
    //            // We reached our target server, but it returned an error
    //
    //        }
    //
    //    };
    //    request.send();
    
        // wrap document so it plays nice with other libraries
        // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));