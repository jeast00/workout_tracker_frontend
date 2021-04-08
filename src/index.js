// console.log("Test js page");

// add variables to the top - hoisting
const addWorkoutButton = document.getElementById('add_workout_button');
const workoutFormContainer = document.getElementById('workout_form_container');
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');
const workoutNameList = document.getElementById('workout_name_list');
const workoutURL = `http://localhost:3000/workouts`;
// const exerciseFormContainer = document.getElementById('exercise_form_container');
// const workoutExerciseContainer = document.getElementById('workout_exercise_container');
// const workoutListContainer = document.getElementById('workout_list_container');
// const workoutListDiv = document.getElementById('workout_list_div');
// const workoutList = document.getElementById('workout');

// console.log(addWorkoutButton); // checked

// add an event listener to the workoutForm variable to hide the workoutForm, add elements to the DOM that show the workout Form input value, and then reveal the exercise form
workoutForm.addEventListener('submit', saveWorkoutName)

// add a function to add the Workout Name to the DOM, hide the workout form, and reveal the exercise form
function saveWorkoutName() {
    event.preventDefault(); // if event listener is a 'submit' have a preventDefault function on the event
    // create elements to append to the DOM
    // const workoutNameDiv = document.createElement('div');
    const workoutNameLI = document.createElement('li');
    workoutNameLI.innerText = `Workout Name: ${workoutNameInput.value}`;

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

    // add an event listener for the exercise form on submit, and call the function to save the exercise info
    exerciseForm.addEventListener('submit', saveExerciseInfo)

    // create a unordered list element and append it with with workout
    const exerciseList = document.createElement('ul');

    // append workout name to the DOM
    // workoutNameDiv.append(workoutNameP, exerciseForm);
    exerciseForm.appendChild(exerciseList);
    workoutNameLI.appendChild(exerciseForm);
    workoutNameList.appendChild(workoutNameLI);


    workoutForm.reset(); // resets the form after submission

}

// add a function to save the exercise values and append them to the DOM
function saveExerciseInfo(e) {
    e.preventDefault();
    const nameInput = e.target.children[0].value // validate the input for the exercise name from the event target value
    // console.log(nameInput);
    const setInput = e.target.children[1].value
    const repInput = e.target.children[2].value
    const timeInput = e.target.children[3].value
    const exerciseUL = e.target.children[5]
    
    // create a list element for the exercise name
    const exerciseNameLI = document.createElement('li');
    exerciseNameLI.innerText = `Exercise Name: ${nameInput}`;

    // create a list element for the exercise set
    const exerciseSetLI = document.createElement('li');
    exerciseSetLI.innerText = `Sets: ${setInput}`;

    // create a list element for the exercise repetition
    const exerciseRepLI = document.createElement('li')
    exerciseRepLI.innerText = `Reps: ${repInput}`;

    // create a list element for the exercise time
    const exerciseTimeLI = document.createElement('li')
    exerciseTimeLI.innerText = `Time: ${timeInput} minute(s)`;


    // append the list elements to the UL tag from the event target 
    exerciseUL.append(exerciseNameLI, exerciseSetLI, exerciseRepLI, exerciseTimeLI)

    
    // console.log(nameInput, setInput, repInput, timeInput);
    e.target.reset(); // reset the exercise form after submission

}

function fetchWorkouts() {
    fetch(workoutURL)
    .then(resp => console.log(resp))
}

fetchWorkouts();