# Javascript Mental Maths Game

**This repo presents a simple javascript game which dynamically generates random maths questions/equations and which is able to store and clear user scores.**

I was given the task of creating a quiz game, with the principle mechanic being to dynamically hide and render elements on the page. As usual I wanted to put my own
spin on it. 

## How does it work?

* A random number generator produces two sets of numbers for the pair of operands, and another random number to select the operator.
*The observant among you will notice that I have not used division. This is because I wanted the answers to be integers and the process would have become significantly more complex.*

* The answer to the set of operands and operator generated in the previous step is calculated and stored in one of four random buttons.
 
* The three remaining buttons are filled with incorrect answers that are sequential to the correct answer (which makes it sound so much easier than it was to figure out how to code...).

* Selecting a correct or incorrect answer triggers an animation to give visual feedback to the user. This was an immense pain to do and feels fairly janky in its implementation. 

* Once the timer is up, the user may submit their name in order to store their score. A table is dynamically generated to present the scores. Once again this was extremely difficult to implement and I spent a lot of time ironing out bugs.

* The user can view and clear their highscores, which are presented from high to low using some flexbox order goodness.

* Unfortunately I've not exactly followed best practices. The code is an incoherent mess, the site is not accessible and it doesn't display properly on phones! I would have liked to work on these issues but time was against me. 


## What did I learn?

Mainly how to manipulate elements by adding and clearing classes and various ways of dealing with events. Something I could not figure out was preventing default action. When I tried to prevent default behaviour on my text input it produced very odd results, such as triggering the action twice. 
I've realised that writing clean and clear code is itself a skill that I do not yet possess. I *have* realised however that mapping out the behaviour I wanted beforehand was immensely helpful, much like creating the visual wireframes. By this I mean creating a sort of state machine, where clicking on this button takes the user here, or clicking on another button does that function, etc.


## The site

![Image of the game's initial screen](/assets/images/Screen_one.png)

![Image of the game's question screen](/assets/images/Screen_two.png)

![Image of the game's score submit screen](/assets/images/Screen_three.png)

![Image of the game's high score screen](/assets/images/Screen_four.png)

[Link to site](https://bytemybits.github.io/javascript-maths-game/)