// ==UserScript==
// @name         Remove AI search from google
// @namespace    http://tampermonkey.net/
// @version      2025-10-17
// @updateURL    https://github.com/mraliscoder/remove-ai-google/raw/refs/heads/main/remove-ai-google.user.js
// @downloadURL  https://github.com/mraliscoder/remove-ai-google/raw/refs/heads/main/remove-ai-google.user.js
// @description  Remove AI search from Google
// @author       edwardcode
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';


    document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('[role="listitem"]');
    const aiModeNode = Array.from(nodes).find(node => {
        return node.textContent.includes('AI') || node.textContent.includes('ИИ');
    });

    aiModeNode.remove();
    });
})();
