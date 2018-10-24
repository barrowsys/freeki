// ==UserScript==
// @name         Freeki Games Auto Doer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically answer trivia questions on freeki games
// @author       BobbyBobson4888
// @match        https://www.freekigames.com/*
// @grant        none
// ==/UserScript==

var question

function answer(answer) {
    var container = document.querySelector(".answersContainer")
    var children = container.children
    for(var i = 0; i < 4; i++) {
       if(children[i].children[1].innerHTML.includes(answer)) {
           children[i].children[0].children[0].click()
           document.getElementById("nextQuestion").click()
       }
    }
}

function is(text, ans) {
    if(question.includes(text)) {
        answer(ans)
    }
}

(function() {
    'use strict';
    question = document.querySelector(".quizQuestion").innerHTML
{js_text}
})();
