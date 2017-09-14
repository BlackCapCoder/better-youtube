// ==UserScript==
// @name         youtube thumb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @run-on       document-end
// @grant        none
// ==/UserScript==

(function() {
    let videosDisabled = false;
    function disableVideos () {
        if (videosDisabled) return;
        HTMLVideoElement.prototype.play = () => {};
        document.styleSheets[0].addRule('#player', 'display: none');
        videosDisabled = true;
    }

    function linkClicked (url) {
        window.location = "vlc://https://youtube.com/" + url;
    }
    function updateLinks () {
        var ys = document.querySelectorAll('a[href^="/watch?"]');

        for (let i = 0; i<ys.length; i++) {
            var href = ys[i].getAttribute('href');
            ys[i].setAttribute('onclick', '(' + linkClicked.toString() + ')("' + href + '");');
        }
    }

    function updateThumb () {
        var el = document.getElementById('header');
        var ms = (/.*youtube\.com\/watch\?v=(\w+)/g).exec(window.location);

        if (el === undefined) return;
        if (ms === null || ms.length == 1) return el.style.background = "none";
        el.style.background = "url('https://img.youtube.com/vi/" + ms[1] + "/maxresdefault.jpg')";
    }
    function youtubePageChange()
    {
        updateLinks();
        updateThumb();
        document.body.addEventListener('transitionend', function(event) {
            if (event.target.id != 'progress') return false;
            disableVideos();
            updateLinks();
            updateThumb();
        });
    }
    youtubePageChange();
})();
