class Workout {

    static allWorkouts = [];
    static workoutURL = `http://localhost:3000/workouts`;

    static workoutForm = document.getElementById('workout_form');
    static workoutNameInput = document.getElementById('workout_name_input');
    static workoutDiv = document.getElementById('workout_div');

    constructor(workout) {
        this.id = workout.id;
        this.name = workout.name;
        this.exercises = workout.exercises;
        Workout.allWorkouts.push(this);
    }


    static showWorkouts() {
        this.allWorkouts.forEach(workout => {
            workout.showWorkout();
        })
    }


    showWorkout() {
    const workoutNameUL = document.createElement('ul');
    workoutNameUL.className = 'workout_name_ul';

    const workoutNameLI = document.createElement('li');
    workoutNameLI.innerText = `Workout Name: ${this.name}`;
    workoutNameLI.dataset.id = this.id;

    const deleteWorkoutButton = document.createElement('button');
    deleteWorkoutButton.className = 'delete_workout_button';
    deleteWorkoutButton.innerText = 'Delete Workout?';
    

    const exerciseForm = document.createElement('form');

    const exerciseNameInput = document.createElement('input');
    exerciseNameInput.setAttribute('type', 'text');
    exerciseNameInput.setAttribute('placeholder', 'exercise name')
    exerciseNameInput.setAttribute('required', true);

    const exerciseSetInput = document.createElement('input');
    exerciseSetInput.setAttribute('type', 'text');
    exerciseSetInput.setAttribute('placeholder', 'sets');
    exerciseSetInput.setAttribute('required', true);

    const exerciseRepetitionInput = document.createElement('input');
    exerciseRepetitionInput.setAttribute('type', 'text');
    exerciseRepetitionInput.setAttribute('placeholder', 'reps');
    exerciseRepetitionInput.setAttribute('required', true);

    const exerciseTimeInput = document.createElement('input');
    exerciseTimeInput.setAttribute('type', 'text');
    exerciseTimeInput.setAttribute('placeholder', 'time completed');
    exerciseTimeInput.setAttribute('required', true);

    const exerciseSubmitted = document.createElement('input');
    exerciseSubmitted.setAttribute('type', 'submit');
    exerciseSubmitted.setAttribute('value', 'Save Exercise');

    exerciseForm.appendChild(exerciseNameInput);
    exerciseForm.appendChild(exerciseSetInput);
    exerciseForm.appendChild(exerciseRepetitionInput);
    exerciseForm.appendChild(exerciseTimeInput);
    exerciseForm.appendChild(exerciseSubmitted);  

    exerciseForm.addEventListener('submit', Exercise.getExerciseInfoInputs)


    const exerciseInfo = document.createElement('div');
    exerciseInfo.setAttribute('id', 'exercise_info_div');


    this.exercises.forEach(exercise => {
        let newExerciseInfo = new Exercise(exercise);
        newExerciseInfo.createExerciseInfo(exerciseInfo);
    });


    exerciseForm.append(exerciseInfo);
    workoutNameLI.appendChild(exerciseForm);
    workoutNameLI.appendChild(deleteWorkoutButton);
    workoutNameUL.appendChild(workoutNameLI);
    Workout.workoutDiv.appendChild(workoutNameUL);


    Workout.workoutForm.reset();

    deleteWorkoutButton.addEventListener('click', Workout.deleteWorkout);
    }

    static saveWorkout(e) {
        e.preventDefault();

        const workoutObject = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: Workout.workoutNameInput.value
            })
        }
    
        return fetch(Workout.workoutURL, workoutObject)
            .then(resp => resp.json())
            .then(workout => {
                let newWorkout = new Workout(workout.data.attributes)
                newWorkout.showWorkout();
            })
    
    }

    static getWorkouts() {
        return fetch(Workout.workoutURL)
        .then(resp => resp.json())
        .then(workouts => {
            workouts.forEach(workout => {
                new Workout(workout.data.attributes);
            });
            this.showWorkouts();
        })
    }

    static deleteWorkout(e) {
        e.preventDefault();
        e.target.parentElement.parentElement.remove();
        const workout_ID = parseInt(e.target.parentElement.dataset.id);

        return fetch(`${Workout.workoutURL}/${workout_ID}`, {
            method: 'DELETE'
        }).then(resp => resp.json());

    }
    

}

Workout.getWorkouts();
