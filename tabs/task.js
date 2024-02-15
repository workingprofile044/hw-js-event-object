document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab');
    var tabContents = document.querySelectorAll('.tab__content');

    tabs.forEach(function(tab, tabIndex) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(t) {
                t.classList.remove('tab_active');
            });
            tabContents.forEach(function(content) {
                content.classList.remove('tab__content_active');
            });

            tab.classList.add('tab_active');
            tabContents[tabIndex].classList.add('tab__content_active');
        });
    });
});
