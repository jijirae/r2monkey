// ==UserScript==
// @name         r2monkey
// @namespace    https://github.com/jijirae/r2monkey
// @version      1.0
// @description  Pressing "SHIFT+D" opens the current Reddit video in RapidSave, allowing you to download.
// @author       jijirae
// @match        https://www.reddit.com/*
// @grant        none
// @icon         https://user-images.githubusercontent.com/122718637/224405235-151712ab-86d0-4c0e-98a0-ca353c850293.png
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.shiftKey && event.key === 'D') {
            event.preventDefault();
            var currentUrl = window.location.href;
            var rapidsaveUrl = 'https://rapidsave.com/info?url=';
            window.open(rapidsaveUrl + currentUrl, '_blank');
        }
    });
})();