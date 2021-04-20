class Exercise {

    static exerciseURL = `http://localhost:3000/exercises`;

    constructor(exercise) {
        this.id = exercise.id; 
        this.name = exercise.name;
        this.sets = exercise.sets;
        this.repetitions = exercise.repetitions;
        this.time = exercise.time;
        this.workoutID = exercise.workout_id;
    }

    static getExerciseInfoInputs(e) {
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
        return fetch(Exercise.exerciseURL, exerciseInfoObject)
               .then(resp => resp.json())
               .then(exercise => {
                   let newExercise = new Exercise(exercise)
                   newExercise.createExerciseInfo(exerciseDiv);
               })
    }


    createExerciseInfo(exerciseDiv) {
        const exerciseUL = document.createElement('ul');
        exerciseUL.setAttribute('id', 'exercise_info_list');
        exerciseUL.dataset.id = this.id;

        const exerciseNameLI = document.createElement('li');
        exerciseNameLI.innerText = `Exercise Name: ${this.name}`;
        exerciseNameLI.dataset.id = this.workoutID;
    
        const exerciseSetLI = document.createElement('li');
        exerciseSetLI.innerText = `Sets: ${this.sets}`;
        exerciseSetLI.dataset.id = this.workoutID;

        const exerciseRepLI = document.createElement('li')
        exerciseRepLI.innerText = `Reps: ${this.repetitions}`;
        exerciseRepLI.dataset.id = this.workoutID;

        const exerciseTimeLI = document.createElement('li');
        exerciseTimeLI.innerText = `Time: ${this.time} minute(s)`;
        exerciseTimeLI.dataset.id = this.workoutID;

        const deleteExerciseButton = document.createElement('button');
        deleteExerciseButton.className = 'delete_exercise_button';
        deleteExerciseButton.innerText = 'Delete Execise?';

    
        exerciseUL.append(exerciseNameLI, exerciseSetLI, exerciseRepLI, exerciseTimeLI, deleteExerciseButton);
        exerciseDiv.appendChild(exerciseUL)

        deleteExerciseButton.addEventListener('click', this.deleteExercise)
    }

     deleteExercise = (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.remove();
        const exercise_ID = this.id;

        return fetch(`${Exercise.exerciseURL}/${exercise_ID}`, {
            method: 'DELETE'
        }).then(resp => resp.json());

    }


}

