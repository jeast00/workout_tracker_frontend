class Exercise {

    static allExercises = [];

    constructor(exercise) {
        this.id = exercise.id 
        this.name = exercise.name
        this.sets = exercise.sets
        this.repetitions = exercise.repetitions
        this.time = exercise.time
        this.workoutID = exercise.workout_id
    }

    static saveExerciseInfo(exerciseName, exerciseSet, exerciseRep, exerciseTime, workout_ID) {
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
               .then(resp => resp.json())
               .then(exercise => {
                   let newExercise = new Exercise(exercise)
                   newExercise.showExerciseInfo();
               }).catch(err => alert(err))
    }


    createExerciseInfo(e) {
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
    
        showExerciseInfo(nameInput, setInput, repInput, timeInput, exerciseUL, workout_ID);
        saveExerciseInfo(nameInput, setInput, repInput, timeInput, workout_ID);
        
        // console.log(nameInput, setInput, repInput, timeInput);
        e.target.reset(); // reset the exercise form after submission
    
    }

    showExerciseInfo(exercise) {
        // create a new unordered list element for each exercise info added to the exerciseInfo target
        const exerciseUL = document.createElement('ul');
        exerciseUL.setAttribute('id', 'exercise_info_list');
        // exerciseUL.dataset.id = Exercise.id;

        // create a list element for the exercise name
        const exerciseNameLI = document.createElement('li');
        exerciseNameLI.innerText = `Exercise Name: ${exercise.name}`;
        exerciseNameLI.dataset.id = exercise.workoutID;
    
        // create a list element for the exercise set
        const exerciseSetLI = document.createElement('li');
        exerciseSetLI.innerText = `Sets: ${exercise.sets}`;
        exerciseSetLI.dataset.id = exercise.workoutID;

        // create a list element for the exercise repetition
        const exerciseRepLI = document.createElement('li')
        exerciseRepLI.innerText = `Reps: ${exercise.repetitions}`;
        exerciseRepLI.dataset.id = exercise.workoutID;

        // create a list element for the exercise time
        const exerciseTimeLI = document.createElement('li');
        exerciseTimeLI.innerText = `Time: ${exercise.time} minute(s)`;
        exerciseTimeLI.dataset.id = exercise.workoutID;
    
        // append the list elements to the UL tag from the event target 
        exerciseUL.append(exerciseNameLI, exerciseSetLI, exerciseRepLI, exerciseTimeLI);
        exerciseDiv.appendChild(exerciseUL)
    }


}

