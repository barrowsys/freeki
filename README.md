# Freeki Games Auto Answerer
[![Generic badge](https://img.shields.io/badge/Status-Pretty%20Much%20Done-brightgreen.svg)](https://shields.io/)

Wizard101, that is all (also i cobbled it together in a few hours)

Quiz questions that are in the script are automatically selected and submitted. Quiz questions that are not in the script are not.

At the end of the quiz, where it shows the score, the script will automatically upload the answers to me so I can add them to the script.

# How to use

You'll need the Tampermonkey extension. Then, you need to get the userscript.  
- You can find the latest release in my keybase public folder at https://bobbybobson4888.keybase.pub/freeki.user.js  (this will update when you tell tampermonkey to update scripts)
- You can compile the script yourself, by cloning this repository and running "python3 freeki.py all"
- You can download the latest weekly release from github.

Opening the freeki.user.js file in your browser should open the dialog to install it with tampermonkey.

# For Developers

To prune the questions list of duplicates, run "freeki.py prune"  
To build the script, run "freeki.py build"  
To do both, run "freeki.py all"
