// console.log("Test js page");

// add variables to the top - hoisting
const addWorkoutButton = document.getElementById('add_workout_button');
const workoutFormContainer = document.getElementById('workout_form_container');
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');


// console.log(addWorkoutButton); // checked

// add an event listener to the addWorkoutButton variable to reveal the workout form
addWorkoutButton.addEventListener('click', revealWorkoutForm)

// add an event listener to the workoutForm variable to hide the workoutForm, add elements to the DOM that show the workout Form input value, and then reveal the exercise form
workoutForm.addEventListener('submit', saveWorkoutName)

// add a function to reveal the workout form to the DOM
function revealWorkoutForm() {
    workoutFormContainer.hidden = false;
}

// add a function to add the Workout Name to the DOM, hide the workout form, and reveal the exercise form
function saveWorkoutName() {
    event.preventDefault(); // if event listener is a 'submit' have a preventDefault function on the event
    // create elements to append to the DOM
    const workoutNameDiv = document.createElement('div');
    const workoutNameP = document.createElement('p');
    // console.log(workoutNameDiv, workoutNameP); // testing created elements - checked
    workoutNameP.innerText = workoutNameInput.value;
    // console.log(workoutNameInput.value); // testing input value to console log - checked

    workoutForm.reset(); // resets the form after submission
}