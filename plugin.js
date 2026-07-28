(function () {
    'use strict';

    if (!window.Lampa) return;

    Lampa.Utils.putScriptAsync([
        'https://ov4arenkoolexander.github.io/LampaPlugin/main.js'
    ], function () {
        console.log('Sania Plugin Loader');
    });
})();