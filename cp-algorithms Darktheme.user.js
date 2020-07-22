// ==UserScript==
// @name         cp-algorithms Darktheme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Smoke good leaves and fly
// @author       Nishan Singh (codeforces.com/Retarded_Ape)
// @match        https://cp-algorithms.com/*
// @match        http://cp-algorithms.com/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('#container { background-color:rgb(41, 41, 41); }');
addGlobalStyle('body{ background-color:#191919; }');
addGlobalStyle('#container {color:#deeff7; }');
addGlobalStyle('h1,h2,h3 {color:#e5a835; }');
addGlobalStyle('.hljs {color:#c0baba; background-color:#220000; }');
addGlobalStyle('a {color:red; }');
addGlobalStyle('#navbar,#footer {background:#6e4c00; }');
