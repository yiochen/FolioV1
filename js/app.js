var app;
(function (document) {
    'use strict';
    app = document.querySelector('#app');
    
    document.addEventListener('next_page', function (e) {
            var pages = document.querySelector('core-pages');
            pages.selected = (pages.selected + 1) % pages.children.length;
        });
        // wrap document so it plays nice with other libraries
        // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));