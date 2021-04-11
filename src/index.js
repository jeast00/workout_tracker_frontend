// console.log("Test js page");

// add variables to the top - hoisting
const addWorkoutButton = document.getElementById('add_workout_button');
const workoutFormContainer = document.getElementById('workout_form_container');
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');
const workoutNameList = document.getElementById('workout_name_list');
const workoutURL = `http://localhost:3000/workouts`;
const exerciseURL = `http://localhost:3000/exercises`;


// console.log(addWorkoutButton); // checked ********

// add an event listener to the workoutForm variable to hide the workoutForm, add elements to the DOM that show the workout Form input value, and then reveal the exercise form
workoutForm.addEventListener('submit', saveWorkout)

// add a function to add the Workout Name to the DOM, hide the workout form, and reveal the exercise form
function saveWorkout(e) {
    e.preventDefault(); // if event listener is a 'submit' have a preventDefault function on the event

    // create a configuration object to pass through the fetch 'POST' request
    const workoutObject = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: workoutNameInput.value
        })
    }

    return fetch(workoutURL, workoutObject)
        .then(resp => resp.json())
        .then(workout => showWorkout(workout.data.attributes))
}

// create a function to show the workout name on the DOM
function showWorkout(workout) {
    // console.log(workout);
    // add elements and DOM manipulation here
    // create elements to append to the DOM
    // const workoutNameDiv = document.createElement('div');
    const workoutNameLI = document.createElement('li');
    workoutNameLI.innerText = `Workout Name: ${workout.name}`;

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
    const exerciseInfo = document.createElement('ul');

    // create a serializer for workouts and pass in the data for exercises *********
    // show the exercise info saved from the seed data / submitted data from backend - Hint - Exercise.create def create method ****
    // workoutName.data.attributes.exercises.forEach(exercise => { // COME BACK TO THIS AFTER CREATING THE SERIALIZER
    //     console.log(exercise);
    // });

    workout.exercises.forEach(exercise => {
        const exerciseName = document.createElement('li');
        exerciseName.innerText = `Exercise Name: ${exercise.name}`;

        const exerciseSet = document.createElement('li');
        exerciseSet.innerText = `Sets: ${exercise.sets}`;

        const exerciseRep = document.createElement('li');
        exerciseRep.innerText = `Reps: ${exercise.repetitions}`;

        const exerciseTime = document.createElement('li');
        exerciseTime.innerText = `Time: ${exercise.time} minute(s)`;

        exerciseInfo.append(exerciseName, exerciseSet, exerciseRep, exerciseTime);

    });

    // append workout name to the DOM
    // workoutNameDiv.append(workoutNameP, exerciseForm);
    exerciseForm.appendChild(exerciseInfo);
    workoutNameLI.appendChild(exerciseForm);
    workoutNameList.appendChild(workoutNameLI);


    workoutForm.reset(); // resets the form after submission
}



// add a function to save the exercise values and append them to the DOM
function saveExerciseInfo(e) {
    e.preventDefault();
    const nameInput = e.target.children[0].value // validate the input for the exercise name from the event target value
    // console.log(nameInput);
    const setInput = e.target.children[1].value // set variable to grab the input value of sets
    const repInput = e.target.children[2].value // set variable to grab the input value of repetitions
    const timeInput = e.target.children[3].value // set variable to grab the input value of time
    const exerciseUL = e.target.children[5] // get the target element of the exercise unordered list tag

    createExerciseInfo(nameInput, setInput, repInput, timeInput, exerciseUL)
    
    // console.log(nameInput, setInput, repInput, timeInput);
    e.target.reset(); // reset the exercise form after submission

}

// create a function to create the exercise elements and append them to the DOM
function createExerciseInfo(nameInput, setInput, repInput, timeInput, exerciseUL) {
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
}


// create a function to fetch the workouts
function fetchWorkouts() {
    return fetch(workoutURL)
    .then(resp => resp.json())
    .then(workouts => workouts.forEach(workout => showWorkout(workout.data.attributes))) // passing in the parameter of the workout serializer for data and attributes
    .catch(err=> alert(err)) // alert errors under a catch
}

fetchWorkouts(); // call the fetch request for workouts

