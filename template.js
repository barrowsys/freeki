// ==UserScript==
// @name         Freeki Games Auto Doer
// @namespace    http://tampermonkey.net/
// @version      {version}
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
       if(children[i].children[1].innerHTML.trim() === answer) {
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

function get_results() {
    var quizResults = document.querySelector("#quizResults")
    var answers = quizResults.children
    var data = ""
    for(var i = 1; i < answers.length; i++) {
        data += (answers[i].innerText || answers[i].textContent) + "\n"
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://xmpp.bobson.me:4888/")
    xmlhttp.send(data)
    document.querySelector(".quizContainer").innerHTML += "<h3 style=\"text-align: center;\">Quiz answers automatically uploaded to ezra!<br>Thanks for making my script better!</h3>"
}

(function() {
    'use strict';
    if(document.querySelector(".quizMedallion"))  {
        get_results()
        return
    }
    question = document.querySelector(".quizQuestion").innerText || document.querySelector(".quizQuestion").textContent
{js_text}
})();
