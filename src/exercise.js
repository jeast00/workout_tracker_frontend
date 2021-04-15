class Exercise {

    static allExercises = [];

    constructor(exercise) {
        this.id = exercise.id; 
        this.name = exercise.name;
        this.sets = exercise.sets;
        this.repetitions = exercise.repetitions;
        this.time = exercise.time;
        this.workoutID = exercise.workout_id;
    }

    static showExerciseInfo(e) {
        e.preventDefault();
        const nameInput = e.target.children[0].value; 
        const setInput = e.target.children[1].value; 
        const repInput = e.target.children[2].value; 
        const timeInput = e.target.children[3].value;
        const exerciseUL = e.target.children[5];
        const workout_ID = e.target.parentElement.dataset.id;

        Exercise.saveExerciseInfo(nameInput, setInput, repInput, timeInput, exerciseUL, workout_ID);
        
        e.target.reset(); 
    
    }

    static saveExerciseInfo(exerciseName, exerciseSet, exerciseRep, exerciseTime, exerciseDiv, workout_ID) {
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
                   console.log(newExercise);
                   newExercise.createExerciseInfo(exerciseDiv);
               })
    }


    createExerciseInfo(exerciseDiv) {
        const exerciseUL = document.createElement('ul');
        exerciseUL.setAttribute('id', 'exercise_info_list');
        exerciseUL.dataset.id = this.id;

        // create a list element for the exercise name
        const exerciseNameLI = document.createElement('li');
        exerciseNameLI.innerText = `Exercise Name: ${this.name}`;
        exerciseNameLI.dataset.id = this.workoutID;
    
        // create a list element for the exercise set
        const exerciseSetLI = document.createElement('li');
        exerciseSetLI.innerText = `Sets: ${this.sets}`;
        exerciseSetLI.dataset.id = this.workoutID;

        // create a list element for the exercise repetition
        const exerciseRepLI = document.createElement('li')
        exerciseRepLI.innerText = `Reps: ${this.repetitions}`;
        exerciseRepLI.dataset.id = this.workoutID;

        // create a list element for the exercise time
        const exerciseTimeLI = document.createElement('li');
        exerciseTimeLI.innerText = `Time: ${this.time} minute(s)`;
        exerciseTimeLI.dataset.id = this.workoutID;
    
        // append the list elements to the UL tag from the event target 
        exerciseUL.append(exerciseNameLI, exerciseSetLI, exerciseRepLI, exerciseTimeLI);
        exerciseDiv.appendChild(exerciseUL)
    }


}

