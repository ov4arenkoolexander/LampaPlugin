(function () {
    'use strict';

    if (!window.Lampa) return;

    console.log('[Sania Plugin] Завантажено');

    Lampa.Listener.follow('app', function (event) {
        if (event.type === 'ready') {
            Lampa.Noty.show('Плагін Сані запущено 🚀');
        }
    });

})();
