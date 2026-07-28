(function () {
    'use strict';

    console.log('Main.js завантажено');

    Lampa.Listener.follow('app', function (e) {

        if (e.type !== 'ready') return;

        Lampa.Noty.show('Плагін Сані v1.0');

        Lampa.SettingsApi.addParam({
            component: 'interface',
            param: {
                name: 'sania_menu',
                type: 'button'
            },
            field: {
                name: '🎬 Саня'
            },
            onChange: function () {
                Lampa.Noty.show('Наступний крок — власне меню');
            }
        });

    });

})();