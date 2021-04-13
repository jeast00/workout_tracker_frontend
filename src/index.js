// console.log("Test js page");

// add variables to the top - hoisting
// const addWorkoutButton = document.getElementById('add_workout_button'); Not being used
// const workoutContainer = document.getElementById('workout_container'); Not being Used
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');
const workoutDiv = document.getElementById('workout_div');
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
    const workoutNameUL = document.createElement('ul');
    workoutNameUL.className = 'workout_name_ul';
    const workoutNameLI = document.createElement('li');
    workoutNameLI.innerText = `Workout Name: ${workout.name}`;
    workoutNameLI.dataset.id = workout.id; // set the id of the workout to the dataset
    // console.log(workoutNameLI.dataset.id);
    const deleteWorkoutButton = document.createElement('button');
    deleteWorkoutButton.className = 'delete_workout_button';
    deleteWorkoutButton.innerText = 'Delete Workout?';
    

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
    exerciseForm.addEventListener('submit', showExerciseInfo)

    // create a div element for exercise info and append it with with workout
    const exerciseInfo = document.createElement('div');

    // create a serializer for workouts and pass in the data for exercises *********
    // show the exercise info saved from the seed data / submitted data from backend - Hint - Exercise.create def create method ****
    // workoutName.data.attributes.exercises.forEach(exercise => { // COME BACK TO THIS AFTER CREATING THE SERIALIZER
    //     console.log(exercise);
    // });

    workout.exercises.forEach(exercise => {
        const exerciseUL = document.createElement('ul');
        exerciseUL.setAttribute('id', 'exercise_info_list');
        exerciseUL.dataset.id = exercise.id;

        const exerciseName = document.createElement('li');
        exerciseName.innerText = `Exercise Name: ${exercise.name}`;

        const exerciseSet = document.createElement('li');
        exerciseSet.innerText = `Sets: ${exercise.sets}`;

        const exerciseRep = document.createElement('li');
        exerciseRep.innerText = `Reps: ${exercise.repetitions}`;

        const exerciseTime = document.createElement('li');
        exerciseTime.innerText = `Time: ${exercise.time} minute(s)`;

        exerciseUL.append(exerciseName, exerciseSet, exerciseRep, exerciseTime);
        exerciseInfo.appendChild(exerciseUL);

    });

    // append workout name to the DOM
    // workoutNameDiv.append(workoutNameP, exerciseForm);
    exerciseForm.append(exerciseInfo);
    workoutNameLI.appendChild(exerciseForm);
    workoutNameLI.append(deleteWorkoutButton)
    workoutNameUL.appendChild(workoutNameLI);
    workoutDiv.appendChild(workoutNameUL);


    workoutForm.reset(); // resets the form after submission

    // add the event listener for the delete workout button here with the deleteWorkout function called
    deleteWorkoutButton.addEventListener('click', deleteWorkout);
}



// add a function to save the exercise values and append them to the DOM
function showExerciseInfo(e) {
    e.preventDefault();
    const nameInput = e.target.children[0].value // validate the input for the exercise name from the event target value
    // console.log(nameInput);
    const setInput = e.target.children[1].value // set variable to grab the input value of sets
    const repInput = e.target.children[2].value // set variable to grab the input value of repetitions
    const timeInput = e.target.children[3].value // set variable to grab the input value of time
    const exerciseUL = e.target.children[5] // get the target element of the exercise unordered list tag
    const workout_ID = e.target.parentElement.dataset.id;
    // const editExerciseInfoButton = document.createElement('button');
    // editExerciseInfoButton.innerText = 'edit info';
    // exerciseUL.append(editExerciseInfoButton);
    // console.log(workout_ID);

    createExerciseInfo(nameInput, setInput, repInput, timeInput, exerciseUL, workout_ID);
    saveExerciseInfo(nameInput, setInput, repInput, timeInput, workout_ID);
    
    // console.log(nameInput, setInput, repInput, timeInput);
    e.target.reset(); // reset the exercise form after submission

}

// create a function to create the exercise elements and append them to the DOM
function createExerciseInfo(nameInput, setInput, repInput, timeInput, exerciseDiv, workout_ID) {
        // create a new unordered list element for each exercise info added to the exerciseInfo target
        const exerciseUL = document.createElement('ul');
        exerciseUL.setAttribute('id', 'exercise_info_list');
        // exerciseUL.dataset.id = Exercise.id;

        // create a list element for the exercise name
        const exerciseNameLI = document.createElement('li');
        exerciseNameLI.innerText = `Exercise Name: ${nameInput}`;
        exerciseNameLI.dataset.id = workout_ID;
    
        // create a list element for the exercise set
        const exerciseSetLI = document.createElement('li');
        exerciseSetLI.innerText = `Sets: ${setInput}`;
        exerciseSetLI.dataset.id = workout_ID;

        // create a list element for the exercise repetition
        const exerciseRepLI = document.createElement('li')
        exerciseRepLI.innerText = `Reps: ${repInput}`;
        exerciseRepLI.dataset.id = workout_ID;

        // create a list element for the exercise time
        const exerciseTimeLI = document.createElement('li');
        exerciseTimeLI.innerText = `Time: ${timeInput} minute(s)`;
        exerciseTimeLI.dataset.id = workout_ID;

        // create a edit button element to update the exercise info
        const editExerciseInfoButton = document.createElement('button');
        editExerciseInfoButton.value = 'edit info';
        console.log(editExerciseInfoButton);
    
        // append the list elements to the UL tag from the event target 
        exerciseUL.append(exerciseNameLI, exerciseSetLI, exerciseRepLI, exerciseTimeLI);
        console.log(exerciseUL);
        exerciseDiv.appendChild(exerciseUL)
}

// create a function to fetch post request the exercise info being submitted to the backend database ****
function saveExerciseInfo(exerciseName, exerciseSet, exerciseRep, exerciseTime, workout_ID) {
    const exerciseInfoObject = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: exerciseName,
            sets: exerciseSet,
            repetitions: exerciseRep,
            time: exerciseTime,
            workout_id: workout_ID
        })
    }
    return fetch(exerciseURL, exerciseInfoObject)
}


// create a function to fetch the workouts
function fetchWorkouts() {
    return fetch(workoutURL)
    .then(resp => resp.json())
    .then(workouts => workouts.forEach(workout => showWorkout(workout.data.attributes))) // passing in the parameter of the workout serializer for data and attributes
    .catch(err=> alert(err)) // alert errors under a catch
}

// create a function to edit / update exercise info *** fetch patch request ***
// function fetchUpdateExerciseInfo() {

// }

fetchWorkouts(); // call the fetch request for workouts

// create a delete function to delete entire workout
function deleteWorkout(e) {
    // set up a fetch delete request with url and the specific workout delete button being clicked ** assign a class to the button created ** Button Created **
    e.preventDefault();
    e.target.parentElement.remove(); // remove the workout from the html
    const workout_ID = parseInt(e.target.parentElement.dataset.id);
    // console.log(workout_ID); Tested and checked - worked
    return fetch(`${workoutURL}/${workout_ID}`, {
        method: 'DELETE'
    }).then(resp => resp.json());

}

