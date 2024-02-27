# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sri Tarun Gulumuru

Time spent: 8 hours spent in total

Link to project: https://glitch.com/edit/#!/code-path-prework?path=README.md%3A82%3A0 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![img]([https://i.imgur.com/9Dnx7iO.gif](https://imgur.com/G4aCJsO))
![img](https://i.imgur.com/dAphzBU.gif)
![img](https://i.imgur.com/lHfUjSU.gif)
![img](https://i.imgur.com/2eriC5B.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used the help of code grepper’s 5s countdown timer example and codepen to design the 10s timer onto the game. 

W3schools was another useful resource that gave a brief explanation about code snippets, rules and formatting of the various css and html functions. It also provided various available color options for css button coloring.

In addition, Stackoverflow provided useful information about similar implementations of functions in javascript like show image and remove image. It gave me deeper insights into the application and functionality of these functions. It also pointed out a few mistakes that could occur in these function implementations. 

Mozilla gave help in the implementation of the random function.

Finally, the youtube videos about set interval and close interval gave better understanding about their functionalities.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

There were many bugs and uphills I encountered while doing the project. One of them is the fifth optional feature. The fifth optional feature was to add images or sounds to spruce up the buttons. Figuring out the css part was easy by making display as none initially but show when pressed. However, the java script part of making the pressing work was frustrating. For this, I had to write a show image and remove image functions. When a clue is played, the function shows the image and after a while closes the image. From the knowledge of light button and clear button logic, I did the same coding. It worked; nevertheless, it was not showing the image when the user was clicking. After a lot of research, I figured out that I had to add event listeners and remembered that the start tone worked on mouse down. After adding show image and remove image functions to the event listeners in html for buttons, the fifth optional feature was finished.

Another feature that stood as an uphill for this project was the sixth optional feature. After some research, I figured out about making a division and a span that is initially written 10. Css was just changing width, height and color. The additional help from w3schools made me write padding, margin and text align. This puts the timer at a more user friendly/ attractive position. It was easy but a tedious task positioning the timer. The most frustrating part of implementing this feature was figuring out a way to decrease the timer to 0 when it stops the game. After a lot of researching and watching youtube videos on setInterval and closeInterval, a snippet of code online helped me figure out the algorithm to make the timer go from 10 to 0.  I positioned the setInterval timer going from ten to zero in the start game that calls clearInterval after reaching less than zero. The innerhtml and getelement helped me reflect these decrements from 10 to 0 onto the screen. In addition, added a clear interval function to stop the game so stopping the game stops the timer. Also, guessing the right pattern will reset the timer to 10 as I made the variable equal to ten in the guess function if the guess is correct.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

From the understanding of this coding assignment, I have a lot of questions about the front end application of a website. I have queries about what all are the various properties that are required to position and implement a block aesthetically. I have gained knowledge about some properties about margin, aligning and padding, but I want to gain more knowledge about this user interface field to make more pleasing websites. The ability to attract an audience and make the website user friendly with easy access is a skill I want to endeavor for.  Backend is the most important feature in this project. Even though it is not explicitly visible, its application gives meaning to a program. I want to acknowledge more of its implementation. I want to explore the more complex functionalities developed in JavaScript. This will be my way into the exploration of the field of web development and making it a prospective career path in the future.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

The audio is one of the features that I really would like to venture on. I tweaked snippets of frequency but that was not enough to fulfill my thirst for better audio. I would like to try the idea of giving each anime character on the buttons to say their respective dialogues/music videos when pressed rather than a random frequency tone. Additionally, I want to blend the images better into buttons, so it would be more appealing. A high score and hint block are some other features that could complement the functionality of the game. High score would store the highest score based on the time taken for the user to complete the game. On the other hand, hint would play the previously played clue sequence once again. These would make the game more interactive. Finally, adding a difficulty feature from easy to hard by decreasing the cluehold time respectively would make the user more competitive. Competition and interactiveness are two important things in a game’s implementation.




## Interview Recording URL Link

https://youtu.be/n5vYTOkbygg 


## License

    Copyright Sri Tarun Gulumuru

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
