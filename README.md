# Freeki Games Auto Answerer
[![Generic badge](https://img.shields.io/badge/Status-Pretty%20Much%20Done-brightgreen.svg)](https://shields.io/)

Wizard101, that is all (also i cobbled it together in a few hours)

Quiz questions that are in the script are automatically selected and submitted. Quiz questions that are not in the script are not.

At the end of the quiz, where it shows the score, the script will automatically upload the answers to me so I can add them to the script.

When a question cannot be answered automatically, the script will open a google search of the question in a new window. (note: this only works if you allow pop-ups)

# How to install

You'll need the Tampermonkey extension. Then, you need to get the userscript.  
- You can find the latest release in my keybase public folder at https://bobbybobson4888.keybase.pub/freeki.user.js  (this will update when you tell tampermonkey to update scripts)
- You can compile the script yourself, by cloning this repository and running "python3 freeki.py all"

Opening the freeki.user.js file in your browser should open the dialog to install it with tampermonkey.

# Update Information

NOTICE: This system is not working right now, and I don't know when I will be able to fix it. In the meantime, the bookmarks.txt file has a list of 10 quizzes that i've found to work pretty well

Every hour on the hour (that my computer is on, which is pretty much all the time), the questions list is updated with new questions, the userscript is compiled, and the compiled script is stored in my keybase public folder.  
Every day at midnight (that my computer is on, which is pretty much all the time), the updated questions list is committed and pushed to this git repository.  

In the future I might slow these down.

# For Developers

To prune the questions list of duplicates, run "freeki.py prune"  
To build the script, run "freeki.py build"  
To do both, run "freeki.py all"
