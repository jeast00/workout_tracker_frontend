// console.log("Test js page");

// add variables to the top - hoisting
const addWorkoutButton = document.getElementById('add_workout_button');
const workoutFormContainer = document.getElementById('workout_form_container');
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');
const exerciseFormContainer = document.getElementById('exercise_form_container');
const workoutExerciseContainer = document.getElementById('workout_exercise_container');
const workoutListContainer = document.getElementById('workout_list_container');
const workoutListDiv = document.getElementById('workout_list_div');

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
    workoutNameP.innerText = workoutNameInput.value;

    // create form for exercise 
    const exerciseForm = document.createElement('form');
    // console.log(exerciseForm); tested and checked 
    const exerciseNameLabel = document.createElement('label');
    // console.log(exerciseNameLabel); tested and checked
    exerciseNameLabel.innerText = 'Exercise Name:';
    // console.log(exerciseNameLabel.innerText); tested and checked
    const exerciseNameInput = document.createElement('input');
    // console.log(exerciseNameInput); //tested and checked
    exerciseNameInput.setAttribute("type", "text");

    

    // append elements to the DOM
    workoutNameDiv.appendChild(workoutNameP);
    workoutExerciseContainer.appendChild(workoutNameDiv);

    

    // hide the workout form from the DOM
    workoutFormContainer.hidden = true;

    workoutForm.reset(); // resets the form after submission

}
