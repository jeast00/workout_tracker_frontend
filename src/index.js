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

    // *** create label and input tags for exercise name ***
    const exerciseNameLabel = document.createElement('label');
    // console.log(exerciseNameLabel); tested and checked
    exerciseNameLabel.innerText = 'Exercise Name: ';
    // console.log(exerciseNameLabel.innerText); tested and checked
    const exerciseNameInput = document.createElement('input');
    // console.log(exerciseNameInput); //tested and checked
    exerciseNameInput.setAttribute('type', 'text');

    // *** create label and input tags for exercise sets ***
    const exerciseSetLabel = document.createElement('label');
    exerciseSetLabel.innerText = 'Sets: ';
    const exerciseSetInput = document.createElement('input');
    exerciseSetInput.setAttribute('type', 'text');

    // *** create label and input tags for exercise repetitions ***
    const exerciseRepetitionLabel = document.createElement('label');
    exerciseRepetitionLabel.innerText = 'Repetitions: ';
    const exerciseRepetitionInput = document.createElement('input');
    exerciseRepetitionInput.setAttribute('type', 'text');

    // *** create label and input tags for exercise time ***
    const exerciseTimeLabel = document.createElement('label');
    exerciseTimeLabel.innerText = 'Time: ';
    const exerciseTimeInput = document.createElement('input');
    exerciseTimeInput.setAttribute('type', 'text');

    // *** create label and input tags for exercise completed ***
    const exerciseCompletedLabel = document.createElement('label');
    exerciseCompletedLabel.innerText = 'Exercise Completed? ';
    const exerciseCompletedInput = document.createElement('input');
    exerciseCompletedInput.setAttribute('type', 'checkbox');

    // *** create submit input button to submit the exercise ***
    const exerciseSubmitted = document.createElement('input');
    exerciseSubmitted.setAttribute('type', 'submit');
    exerciseSubmitted.setAttribute('value', 'Save Exercise');

    // Append the form, labels and input tags to the DOM
    exerciseCompletedLabel.appendChild(exerciseCompletedInput);
    exerciseTimeLabel.appendChild(exerciseTimeInput);
    exerciseRepetitionLabel.appendChild(exerciseRepetitionInput);
    exerciseSetLabel.appendChild(exerciseSetInput);
    // console.log(exerciseSetLabel, exerciseRepetitionLabel, exerciseTimeLabel, exerciseCompletedLabel);
    exerciseNameLabel.appendChild(exerciseNameInput);
    exerciseForm.appendChild(exerciseNameLabel);
    exerciseForm.appendChild(exerciseSetLabel);
    exerciseForm.appendChild(exerciseSetLabel);
    exerciseForm.appendChild(exerciseRepetitionLabel);
    exerciseForm.appendChild(exerciseTimeLabel);
    exerciseForm.appendChild(exerciseCompletedLabel);
    exerciseForm.appendChild(exerciseSubmitted);   

    // append workout name to the DOM
    workoutNameDiv.append(workoutNameP, exerciseForm);
    workoutExerciseContainer.appendChild(workoutNameDiv);

    

    // hide the workout form from the DOM
    workoutFormContainer.hidden = true;

    workoutForm.reset(); // resets the form after submission

}
