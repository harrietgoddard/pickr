## Supporting comments

### Project brief

Create a tool which randomly picks a 5-a-side football team from a list of 10 names.

### Functionality goals

In addition to the brief, I wanted to provide the user with the option to:
- select the number of players per team
- select whether teams should be picked randomly or be balanced by skill
- select team colours and choose the home team
- get predictions on the favourite team

I also wanted to implement a dynamic user experience, whereby UI elements are displayed at various points along the user journey.

### Technology

Since this functionality would involve the app changing in various ways over time, it would need to keep track of various bits of data within state. As such, I decided to build the app using React and Redux due to their suitability for state management.

To develop the app further, I would consider creating an API to store player/team data and house the business logic of choosing and customising teams. This could also allow user authentication to be implemented.

### Basis of key logic

When a player is added by populating and submitting the form, a player object (containing name and skill properties) is added to a 'players' array in state. In order to randomly pick teams from this array, I decided to use the Fisher-Yates algorithm to randomly 'shuffle' the array. To pick teams from this array, it is then passed in as an argument to a function that splits the array into n arrays (without modifying the original array).

In order to balance teams by skill level, I decided to pass in the players array as an argument to a function that orders the array by skill level. I then revisited the function that splits an array into n arrays, and made it so that each player is allocated to teams in turn (for example, player at index 0 => team 1, player at index 1 => team 2, player at index 2 => team 1 and so forth). When applied to the players array ordered by skill, teams are created which are more balanced in terms of skill than random allocation.

To develop the app, I would revisit the logic used to balance teams by skill, due to the following limitation of this method:
- Team 2 will always have the advantage, in that the lowest skilled player will always be allocated to team 1 and the highest skilled player will always be allocated to team 2

### React components

In order to achieve a smooth and 'guided' user experience, I wanted to display components dynamically. To achieve this, I have stored a number of booleans in state that represent the 'status' of the user journey (eg. playerInputComplete, teamsGenerated, teamsConfirmed, etc). These booleans are then used to toggle the display of components using conditional statements in their parent component. Therefore, the structure of the React components is reflective of the various 'displays'. For example, there is a 'control panel' component and 'team staging area' component (each containing various subcomponents) that disappear once teams have been confirmed.