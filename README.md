Greetings, 

Our project is meant to be a lighthearted-yet-cathartic way of getting into the Halloween spirit. Through our program, users have a chance to read some of the cringiest jokes ever assembled into one database. Whether the user will laugh, groan, or pretend not to laugh to save face - is up to them.

Overview:
The page elements are broken down into a few "div" sections ("jokes" and "likes", really), each with subsections (setups and punchlines, likes and dislike (or, "kills")). Each subsection has at least one button ('display the punchline','I actually liked that joke','I did not like that joke', 'reset'). 
The like and dislike buttons essentially perform the same feature: add one tally mark to their respective counts, as well as load a new joke. The new jokes are pulled, one at a time, from the API at "www.icanhazdadjoke.com". The tally marks are generated by a function that takes an input, gathers the integer-quotient and the remainder when that input is divided by 5, and generates tally marks for that number. Specifically, the function generates one "|" per count in the remainder, and one block of "||||" for each count in the quotient. The "fifth" tally is added through CSS styling.
For every joke that loads as a setup-and-punchline, the fetch function has an included string parser (using .split()) to generate separate strings for punchlines and setups. We then "un-hide" a button giving the user the chance to display (or not display) the punchline, reminding them that they are complicit in their own "torture." The user is not prevented from loading a new joke if they have not "asked" for the punchline.
If the user has a change of heart ('I was being too hard/easy on those other jokes, earlier') and wants to restart their tally counts, there is a reset button as well. It resets both counts.

Program Limitations:
-Careful users will notice that the page comespre-loaded with the same joke every time. We decided that was bettter than an empty screen, or default html/display text. Plus it gave us the chance to show off (the only) one of our own dad-jokes.
-If we kept track of every joke we received (ie, checked each fetch result against an array containing all previous results), we could theoretically prevent the page from re-loading the same joke twice. Alas, there is no such preventative method.
-If a fetch fails, the error message is (deliberately) displayed where the joke text is usually rendered. This is meant to be helpful, but is probably mostly helpful to other programmers and savvy users than to a general user.
-More advanced string manipulation would be required to further parse strings with a multiple setups and punchlines format (ie: knock knock / banana...ask your kids, if you haven't heard that one yet), or to adjust our formatting to the "edge cases" of very long jokes.

Check out the deployed version [here](https://professionalmaxjs.github.io/DeathToDadJokes/) or the demo video [here](https://youtu.be/i81w1Ufl2RM). For any questions, don't hesitate to reach out to this GitHub repo, or on Slack. Happy Laughing (or Cringing)! And - Happy Halloweeeeeeeeeeeen!