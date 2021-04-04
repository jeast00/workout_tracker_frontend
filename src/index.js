// console.log("Test js page");

// add variables to the top - hoisting
const addWorkoutButton = document.getElementById('add_workout_button');
const workoutForm = document.getElementById('workout_form_container');

// console.log(addWorkoutButton); // checked

// add an event listener to the addWorkoutButton variable to reveal the workout form
addWorkoutButton.addEventListener('click', revealWorkoutForm)

// add a function to reveal the workout form to the DOM
function revealWorkoutForm() {
    workoutForm.hidden = false;
}