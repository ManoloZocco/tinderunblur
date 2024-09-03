// ==UserScript==
// @name         Tinder Unblur
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Unblur Tinder fast match teasers
// @match        https://tinder.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function unblur() {
        const teasers = await fetch("https://api.gotinder.com/v2/fast-match/teasers", {
            headers: {
                "X-Auth-Token": localStorage.getItem("TinderWeb/APIToken"),
                platform: "android",
            },
        })
            .then((res) => res.json())
            .then((res) => res.data.results);

        const teaserEls = document.querySelectorAll(
            ".Expand.enterAnimationContainer > div:nth-child(1)"
        );

        teasers.forEach((teaser, index) => {
            const teaserEl = teaserEls[index];
            const teaserImage = `https://preview.gotinder.com/${teaser.user._id}/original_${teaser.user.photos[0].id}.jpeg`;
            teaserEl.style.backgroundImage = `url(${teaserImage})`;
        });
    }

    // Run the unblur function when the page is fully loaded
    window.addEventListener('load', unblur);

    // Create a button to manually trigger the unblur function
    const unblurButton = document.createElement('button');
    unblurButton.textContent = 'Unblur images!';
    unblurButton.style.position = 'fixed';
    unblurButton.style.top = '10px';
    unblurButton.style.left = '50%';
    unblurButton.style.transform = 'translateX(-50%)'; // Center horizontally
    unblurButton.style.zIndex = '9999';

    // Styling the button to match Tinder's color scheme
    unblurButton.style.backgroundColor = '#FE3C72'; // Tinder red
    unblurButton.style.color = '#FFFFFF'; // White text
    unblurButton.style.border = 'none';
    unblurButton.style.borderRadius = '20px';
    unblurButton.style.padding = '10px 20px';
    unblurButton.style.fontSize = '16px';
    unblurButton.style.cursor = 'pointer';
    unblurButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    unblurButton.style.transition = 'background-color 0.3s ease';

    // Add hover effect
    unblurButton.addEventListener('mouseover', function() {
        unblurButton.style.backgroundColor = '#FF6B81'; // Slightly lighter red
    });

    unblurButton.addEventListener('mouseout', function() {
        unblurButton.style.backgroundColor = '#FE3C72'; // Tinder red
    });

    unblurButton.addEventListener('click', unblur);
    document.body.appendChild(unblurButton);
})();
