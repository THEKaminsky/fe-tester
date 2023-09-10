# Employee Status Table POC

Worth noting - I used this opportunity to show a PoC of a project. Something like this can be fiddled with for a long time. As a PoC, this showing the requested functionality by application owners with some expectations, by me, that the project may want to put in some input for changes, but it can still see it working with the functionality that was requested.

I'd also like to say - I did use the fetch api to pull in the employees originally. I repeatedly encountered the 429 error of too many calls too fast. Since I didnt have control over the api environment, I did the call once and just hardcoded the data. I'll leave the fetch in the code commented out so that its clear I know how to make an API call. I hope this is okay, it allowed for faster development with no api error slowing things down.

## Requirements:

[x] Show Table of Employees
[x] Sortable Columns
[x] Filterable Values
[x] Separate display for detailed view of employee
[x] Enter ID and see if employee exists and if their name starts with a vowel

## Known Bugs or Future Improvements

Known Bugs:

- API bugging with the 429 error. Got around this buy hardcoding the employees based off a successful API call. Commented out the API call so that its still in the code to view, but it isnt doing anything currently.

Future Improvement:

- column sort functionality would be a single button for both.
  - this being a PoC - quickest development cycle is separate buttons for each sort option. If I were to do this again - a single button would be used for both and would just cycle off of a `default`, `asc`, or `desc` state and know what do based off when it was clicked. It is nearly there now by using one function for the sorting despite which is clicked.
- I'd certainly continue to work with over all design. Its pretty plain right now and would like to make it sparkle. But - function over style first.
- Style the modal more and give it more character. Right now that is really basic. But I personally felt a modal would definitely better UX over navigating to a new page to see the same details as in the table. I wish some of these actaully had a profile image on them so i could use them.
- I feel the vowel display could be reworked into an alert instead of a display? This is somewhere I would chat with an application ownwer and see their preferences. If the way I did it works, I would work the stlyles a bit more to prevent the table from jumping down when the text appears, and I would bring in the ability to clear that search as well. For now - that text will change with a new search or a reload.
- With more time I would make each component dumber. Let them work no matter that data that was passed to them. Currently - they are pretty coupled to the employee model, it wouldnt be hard to do them an agnostic way.

## Starting the App

### 1. Clone from github

### 2. Navigate to the project folder

### `npm start` in your console

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
