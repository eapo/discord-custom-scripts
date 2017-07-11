// ==UserScript==
// @name          DiscordApp.com Effective Hacks
// @description   Easier to use DiscordApp.com with Effective Hacks
// @namespace    http://tampermonkey.net/
// @author        eaposztrof
// @updateURL     https://raw.githubusercontent.com/eapo/discord-custom-scripts/master/Effective-Hacks.user.js
// @downloadURL   https://raw.githubusercontent.com/eapo/discord-custom-scripts/master/Effective-Hacks.user.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/@eaposztrof?r=eaposztrof
// @include       http://discordapp.com/*
// @include       https://discordapp.com/*
// @include       http://*.discordapp.com/*
// @include       https://*.discordapp.com/*
// @require       https://code.jquery.com/jquery-1.8.3.js
// @run-at        document-start
// @version       0.1
// ==/UserScript==

(function() {
    $(document).on('keydown', function ( e ) {
        // Alt+F1 to toggle #channels panel
        if ((e.metaKey || e.altKey) && ((e.which || e.keyCode) == 112) ) {
            console.log( "Alt+F1 pressed" );
            $('.flex-vertical.channels-wrap').stop().toggle("slide");
        }
        // Alt+F2 to toggle @members panel
        if ((e.metaKey || e.altKey) && ((e.which || e.keyCode) == 113) ) {
            console.log( "Alt+F2 pressed" );
            $('.channel-members-wrap').stop().toggle("slide");
        }
        // Alt+F3 to toggle guilds panel
        if ((e.metaKey || e.altKey) && ((e.which || e.keyCode) == 114) ) {
            console.log( "Alt+F3 pressed" );
            $('.guilds-wrapper').stop().toggle("slide");
        }
        if ((e.metaKey || e.altKey) && ((e.which || e.keyCode) == 27) ) {
            e.preventDefault();
            // Alt+ESC to toggle all panels
            console.log( "Alt+ESC pressed" );
            $('.guilds-wrapper').stop().toggle("slide");
            $('.flex-vertical.channels-wrap').stop().toggle("slide");
            $('.channel-members-wrap').stop().toggle("slide");
        }
        if ((e.metaKey || e.altKey) && ((e.which || e.keyCode) == 49) ) {
            // Alt+1 to jump to #upvote channel on PAL
            console.log( "Alt+1 pressed" );
            window.location.href = "https://discordapp.com/channels/319885228464406528/319885497428344832";
        }
        if ((e.metaKey || e.altKey) && ((e.which || e.keyCode) == 50) ) {
            // Alt+2 to paste '$upvote' string and start @minnowsupport's cool-sown timer
            console.log( "Alt+2 pressed" );
            $('textarea').text("\$upvote ").val("\$upvote ");
            setTimeout(function() {alert('end of cool-down @minnowsupport');}, 43200000);
        }
    });
})();
