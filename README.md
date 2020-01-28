# React Practice Project #

**As a software engineering educator, I have noticed that many students have difficulty understanding React app structure, passing state as props, implementing reusable components and controlled forms, as well as implementing CRUD functionality in React apps.**

**This project guides React developers-in-training through the process of building an app that requires:**

* Multiple, hierarchically structured components
* GET, POST, and DELETE functionality
* A controlled form / form submission
* Optimistic and pessimistic rendering
* Prop drilling
* Component reusability

**A dog adoption facility wants you to build a Dog Adoption app that allows users to:**

* View all dogs available for adoption

* "Favorite" dogs by clicking them and adding them to a favorites list component at the top of the page
  * A particular dog can only be added to the favorites list one time (no duplicates)

* Remove dogs from favorites list by clicking on the dog card

* Search for dogs by breed

* Add an adoptable dog to the adoptable dogs list by filling out a form

* Delete a dog from the adoptable dogs list by clicking a button

**Dog Adoption Central Component List**

* App.js
* Header.js
* SearchBar.js
* AdoptableDogs.js
* FavoriteDogs.js
* DogCard.js
* AddDogForm.js

**Based on the component list above, draw a component tree to determine the structure of this Dog Adoption app, as well as where state will be held and how props will be passed. Have an instructor or peer approve/correct your hierarchy.**

<details><summary>Show Component Hierarchy</summary>
    <p>
        ![](images/componenthierarchy.png)
    </p>
</details>

<details>
<summary>Where is state typically held?</summary>
<p>

In the highest common component.

In the case of this app, App.js will hold state, as it is the parent to the other components that need access to data in state as props.

Keep in mind: Not all apps need to hold state in App.js. An app's unique component structure dictates where the single source of truth should live.

In larger apps, state management tools such as Redux are used as state containers.

</p>
</details>

## Instructions to Complete Dog Adoption Central ##

*Do not view hidden code / answers to questions until you have attempted to complete the corresponding step(s).*

## PART I ##

1. Refactor App.js from a functional to a class component, then initialize state in the App.js component.

<details>
<summary>Why did we refactor App.js into a class component before initializing state?</summary>
<p>

Stateful components must be class components.

*FYI: React hooks, a new feature offered by Facebook's React team, allow developers to create functional components that hold state. Don't worry about using hooks for now, as they will not be used in this tutorial, nor in future student projects.*

</p>
</details>

2. Fetch data from `https://dogs-backend.herokuapp.com/dogs` and put returned data in state.



<details>
<summary>Why is the GET request inside the ComponentDidMount() lifecycle method? Use React docs and google to answer this question.</summary>
<p>

componentDidMount is called once the component has been rendered in the browser. Fetching data within this lifecycle method ensure that data will not be put into state until after the component has mounted.

</p>
</details>

3. Set up all components as functional, put an h1 tag in each of them that contains the name of the component, then import App.js' child components

4. Put the name of this app in an h1 tag in the Header component. Give it a className of "header". Make sure it renders in the UI.

5. If you haven't already, start your app in the browser and make sure all components render without errors.

## PART II ##

1. Pass state to AdoptableDogs component as props.

2. Iterate through props in AdoptableDogs component to return an array of DogCard components.

3. Give each dog card a key and a dog prop.

4. Render DogCards in the Adoptable Dogs section in the browser.

<details><summary>What is prop drilling?</summary>
<p>

Passing props from App, to AdoptableDogs, to DogCard is called prop drilling:

Data is passed from a component higher in the app hierarchy to a child component further down. It allows access to state at different levels of the component hierarchy.

</p>
</details>

5. Create an HTML card in the DogCard component. It should be wrapped by a div with the className "dog-card". The dog-card div should have two children: (1) An img tag that displays the dog's image and (2) a div with the className "dog-specs". 

6. The dog-specs div has two children: (1) h4 tag that displays the dog's name and (2) a p tag that displays the dog's breed.

## PART III ## 

1. Add the following functionality: Clicking on a DogCard in the AdoptableDogs component adds it to FavoriteDogs component.

<details>
<summary>SHOW DETAILED DIRECTIONS</summary>
<p>

<ol>

<li>Add an empty favoriteDogs array to state in the App component.</li>

<li>Create an addDog function that adds a dog object to state.</li> 

*Remember: Functions that CHANGE state have to live where state lives*

<li>Pass the addDog function as props to the AdoptableDogs component, then to the DogCard component.</li>

<li>Pass the favoriteDogs array in state to the FavoriteDogs component.</li>

<li>Create an array of DogCard components and render them in the FavoriteDogs component.</li>

</ol>

</p>
</details>

2. Ensure that once a dog is added to the FavoriteDogs component, it cannot be added again.

## PART IV ##

1. Add the following functionality: Clicking on a DogCard in the FavoriteDogs removes it from that component.

<details><summary>TRUE / FALSE: Two different functions can be given the same prop name when passed to child components.</summary>
<p>

TRUE: You can give two different props the same name even if they reference different functions. This increases the reusability of components!

</p>
</details>

<ol>

<li>Write a removeDog function that removes the selected dog from the favoriteDogs array in state.</li>

<li>Change the name of AdoptableDogs component's addDog prop to dogAction.</li> 

<li>Pass removeDog function as a prop called dogAction to the FavoriteDogs component.</li> 

<li>Pass dogAction down to DogCard. (Change props names in AdoptableDogs and DogCard components as needed.)</li> 

</ol>

</p>
</details>

## PART V ##

1. Add functionality to SearchBar component: Typing in a form allows user to search by breed.

<details>
<summary>SHOW DETAILED INSTRUCTIONS</summary>
<p>

<ol>

<li>
In the App component, add searchTerm to state and assign it to an empty string. Pass it to the SearchBar component as props.
</li>

<li>
In the App component, write a function called updateSearchTerm that takes in a searchTerm and sets the searchTerm in state.
*Do you remember why this function belongs here and not in another component?*
</li>

<li>Pass the updateSearchTerm function to the SearchBar component as props.</li>

<li>Add a search input to SearchBar component.</li>

<li>Give input a value of the searchTerm previously passed as props.</li>

<li>Give input a placeholder of "Find Adoptable Dog".</li>

<li>Add an onChange event listener to the input that references a function called "updateSearchTerm".</li>

<li>In the SearchBar component, write the updateSearchTerm function that references the updateSearchTerm function written in the App component. It should take in event.target.value as its argument.
</li>

<li>Create a filteredDogs function. (You determine where it should live.) Based on the searchTerm in state, this funciton should filter dogs by breed, name, and age.</li>

 <li>Update adoptableDogs props sent to AdoptableDogs component to reference the filteredDogs function.</li>

</ol>

</p>
</details>

## PART VI ##

1. Create a controlled form in AddDogForm that allows a user to add an adoptable dog to the list. It should have four inputs:
* one for a dog's name,
* one for a dog's breed,
* one for a dog's age,
* and one with a type attribute assigned to "submit".

<details>
<summary>What is a controlled form?</summary>
<p>

Controlled forms: Input values are set to state values, then updated via events. For controlled inputs you will need a corresponding value in state and a function that updates state when inputs change. For more information: <https://medium.com/byte-sized-react/controlled-forms-in-react-68e59362a119>

</p>
</details>

2. Refactor the AddDogForm component to hold a newDog object in state.

3. Add onChange handlers to the AddDogForm component inputs that update local state.

4. Give first three inputs a value that references corresponding information AddDogForm state.

5. In the appropriate component, add an addAdoptableDog function that POSTs form data to the backend.

6. Pass as props to the appropriate component.

7. Add logic to addAdoptableDog function that pessimistically renders the new adoptable dog to the adoptable dog list.

<details>
<summary>What is *pessimistic rendering* ?</summary>
<p>

Pessimistic rendering: The user interface (UI) updates AFTER the database is updated. In this case, we POST the new dog, then setState with the newly added dog so it displays in the UI.

The opposite is *optimistic rendering*, which renders the page with updated information BEFORE you update the database.

</p>
</details>

8. Add an onSubmit handler to the AddDogForm component. The onSubmit should reference a submitHandler function that calls the addAdoptableDog function, then resets state to its original empty values.


<details>
<summary>Why do we need event.preventDefault() in the submitHandler function?</summary>
<p>

This prevents the default submit action of reloading the webpage.
</p>
</details>

## PART VII ##

1. Create a delete button in each DogCard component that calls a delete function in App.js.

2. This function should delete a selected dog from the backend.

3. Optimistically render the new array of adoptable dogs without the deleted dog.

## PART VIII ##

1. Resolve all red and yellow errors in console.

2. Ensure all app functionality is in place.

3. Refactor and destructure.

4. Review code with a peer or coach. If no one is available, compare with solution code.