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

    Lampa.Modal.open({
        title: '🎬 Плагін Сані',
        html: `
            <div style="padding:20px">
                <h2>Вітаю!</h2>
                <p>Це моє перше власне вікно в Lampa.</p>
                <p>Незабаром тут буде список моїх фільмів.</p>
            </div>
        `
    });
            }
        });

    });

})();
