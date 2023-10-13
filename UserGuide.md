# NodeBB Search Functionality User Guide

## Introduction
Welcome to Team SLAM’s NodeBB forum user guide. This guide will help you run NodeBB and how to effectively use the search bar feature to help find posts you are looking for in the class Q&A system. 

## Running NodeBB
Make sure you have NodeBB running. You can do this by opening up a terminal and installing Redis with homebrew: % brew install redis. After, you should start running the Redis server by typing the following command: % redis-server. In another terminal (while redis-server is running), enter the directory where you have cloned our repository. Then, run the interactive installation command: % ./nodebb setup. Then, you can run % ./nodebb build. After, to fully set up your NodeBB, run: % ./nodebb start. You can now visit the NodeBB page by typing the following URL into your browser: http://localhost:4567/

## Accessing Search Bar
Once you have successfully set up your NodeBB environment, make sure you log into the NodeBB forum. Create an account in the top right corner and use those credentials to log into your NodeBB platform. Once you are logged in, you should click on a class page to enter that class’s Q&A page. After you are in your class Q&A page, you should see a search bar towards the top right (next to the ‘show all posts’ and ‘sort by’ buttons).  There is where you should access the search bar, and follow the steps below to use it.

## Using Search Bar
To perform the search, you can click on the search bar towards the top right with your cursor and start typing out some of the words related to your question. You can either type out your full question or specific words for the search. After you are done typing out your words, press the ‘enter’ on your keyboard or click the search icon next to the search bar to display the list of related posts. Now, you can see a list of posts and related comments that could potentially help answer your questions. You can scroll down to see all related posts, and if you would like to see all topics, you can select the “show all topics” button to reset your search.

NOTE: If you are unable to get the posts you are looking for, or if you run into some trouble using the search bar, make sure you [1] check your spelling, and [2] try to use more broader words, since your original search may be too narrow.

## Tests
The tests for this search functionality can be found in test/categories.js and in src/categories/topics.js. The first file contains tests for [1] checking for if the search keyword is in the title of the post, and [2] checking for if the search keyword is in the description of the post. The second file contains adding type checks for all the strings and arrays in the newly added search functionality code. Type checks are done through console.assert() statements. These tests are thorough for our search bar because it makes sure that the search bar functionality is producing the correct results based on keywords (or will show as nothing if there are no related posts based on your search), and we have accounted for types and edge cases with our tests.

## Need Help?
If you need help navigating the search bar functionality, please don’t hesitate to contact Team SLAM. You can find our contact information by reaching out to the professors first (for privacy reasons). Additionally, you can reach out to NodeBB support if you require additional support. 
