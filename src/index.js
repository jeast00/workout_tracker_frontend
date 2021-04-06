// console.log("Test js page");

// add variables to the top - hoisting
const addWorkoutButton = document.getElementById('add_workout_button');
const workoutFormContainer = document.getElementById('workout_form_container');
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');
// const exerciseFormContainer = document.getElementById('exercise_form_container');
const workoutExerciseContainer = document.getElementById('workout_exercise_container');
const workoutListContainer = document.getElementById('workout_list_container');
const workoutListDiv = document.getElementById('workout_list_div');
const workoutList = document.getElementById('workout');

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
    workoutNameP.innerText = `Workout Name: ${workoutNameInput.value}`;

    // create form for exercise 
    const exerciseForm = document.createElement('form');
    // console.log(exerciseForm); tested and checked 

    // *** create input tags for exercise name ***
    // console.log(exerciseNameLabel.innerText); tested and checked
    const exerciseNameInput = document.createElement('input');
    // console.log(exerciseNameInput); //tested and checked
    exerciseNameInput.setAttribute('type', 'text');
    exerciseNameInput.setAttribute('placeholder', 'name')

    // *** create input tags for exercise sets ***
    const exerciseSetInput = document.createElement('input');
    exerciseSetInput.setAttribute('type', 'text');
    exerciseSetInput.setAttribute('placeholder', 'sets');

    // *** create input tags for exercise repetitions ***
    const exerciseRepetitionInput = document.createElement('input');
    exerciseRepetitionInput.setAttribute('type', 'text');
    exerciseRepetitionInput.setAttribute('placeholder', 'reps');

    // *** create input tags for exercise time ***
    const exerciseTimeInput = document.createElement('input');
    exerciseTimeInput.setAttribute('type', 'text');
    exerciseTimeInput.setAttribute('placeholder', 'time completed');

    // *** create submit input button to submit the exercise ***
    const exerciseSubmitted = document.createElement('input');
    exerciseSubmitted.setAttribute('type', 'submit');
    exerciseSubmitted.setAttribute('value', 'Save Exercise');

    // console.log(exerciseSetLabel, exerciseRepetitionLabel, exerciseTimeLabel, exerciseCompletedLabel);
    exerciseForm.appendChild(exerciseNameInput);
    exerciseForm.appendChild(exerciseSetInput);
    exerciseForm.appendChild(exerciseRepetitionInput);
    exerciseForm.appendChild(exerciseTimeInput);
    exerciseForm.appendChild(exerciseSubmitted);  
    // console.log(exerciseForm);
    
    exerciseForm.addEventListener('submit', saveExerciseInfo)

    // append workout name to the DOM
    workoutNameDiv.append(workoutNameP, exerciseForm);
    workoutExerciseContainer.appendChild(workoutNameDiv);

    

    // hide the workout form from the DOM
    workoutFormContainer.hidden = true;

    workoutForm.reset(); // resets the form after submission

}

// add a function to save the exercise values and append them to the DOM
function saveExerciseInfo(e) {
    e.preventDefault();
    const nameInput = e.target.children[0].value
    // console.log(nameInput);
    const setInput = e.target.children[1].value
    const repInput = e.target.children[2].value
    const timeInput = e.target.children[3].value
    
    
    // console.log(nameInput, setInput, repInput, timeInput);



}