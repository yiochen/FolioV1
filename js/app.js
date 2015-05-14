var app;
(function (document) {
    'use strict';
    app=document.querySelector('#app');
    app.toggle1=function(e){
        app.col1=!app.col1;
        app.col2=false;
    }
    app.toggle2=function(e){
        app.col1=false;
        app.col2=!app.col2;
    }
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
