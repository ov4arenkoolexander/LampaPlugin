(function () {
    'use strict';

    console.log('My Lampa Plugin loaded');

    if (window.Lampa) {
        Lampa.Noty.show('Привіт! Плагін працює.');
    }
})();
