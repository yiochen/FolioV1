var app;
var data;

(function (document) {
    'use strict';
    
    app = document.querySelector('#app');
    app.project=document.querySelector('#project');
    app.pages = document.querySelector('core-animated-pages');
    app.goHome=function(e){
        app.pages.selected=0;
    }
    app.goFolio=function(e){
        app.pages.selected=1;
    };
    app.goBlog=function(e){
        app.pages.selected=2; 
    };
    app.goAbout=function(e){
        alert("about page is not done yet");
    };
    app.goContact=function(e){
        alert("Contact page is not done yet");
    };
    document.addEventListener('core-select',function(e){
        var eve=e.detail;
//        if (eve.isSelected){
//            document.querySelector('body').style.overflow=eve.item.overflow;
//            document.body.scrollTop = document.documentElement.scrollTop = 0;
//        }
    });
    app.pages.selected=0;
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
    app.handleProjectData = function (eve) {

            app.project.response = eve.detail.response;
            console.log(app.project.response);
            
        }
        // wrap document so it plays nice with other libraries
        // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));