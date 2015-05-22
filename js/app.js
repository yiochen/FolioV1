var app;
var data;
(function (document) {
    'use strict';
    app = document.querySelector('#app');
    app.project=document.querySelector('#project');
    document.addEventListener('next_page', function (e) {
        var pages = document.querySelector('core-pages');
        pages.selected = (pages.selected + 1) % pages.children.length;
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