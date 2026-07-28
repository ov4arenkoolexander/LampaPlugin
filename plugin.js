(function () {
    'use strict';

    if (!window.Lampa) return;

    Lampa.Listener.follow('app', function (event) {

        if (event.type !== 'ready') return;

        Lampa.Noty.show('Плагін Сані запущено 🚀');

        Lampa.SettingsApi.addParam({
            component: 'interface',
            param: {
                name: 'sania_test',
                type: 'button'
            },
            field: {
                name: '🎬 Плагін Сані'
            },
            onChange: function () {
                Lampa.Noty.show('Кнопка працює!');
            }
        });

    });

})();
