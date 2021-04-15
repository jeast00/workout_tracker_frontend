class Workout {

    static allWorkouts = [];

    constructor(workout) {
        this.id = workout.id
        this.name = workout.name
        this.exercises = workout.exercises
        Workout.allWorkouts.push(this)
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
    

    // create form for exercise 
    const exerciseForm = document.createElement('form');
    // console.log(exerciseForm); tested and checked 

    // *** create input tags for exercise name ***
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

    exerciseForm.appendChild(exerciseNameInput);
    exerciseForm.appendChild(exerciseSetInput);
    exerciseForm.appendChild(exerciseRepetitionInput);
    exerciseForm.appendChild(exerciseTimeInput);
    exerciseForm.appendChild(exerciseSubmitted);  

    exerciseForm.addEventListener('submit', Exercise.showExerciseInfo)


    const exerciseInfo = document.createElement('div');


    this.exercises.forEach(exercise => {
        let newExerciseInfo = new Exercise(exercise);
        newExerciseInfo.createExerciseInfo(exerciseInfo);
    });


    exerciseForm.append(exerciseInfo);
    workoutNameLI.appendChild(exerciseForm);
    workoutNameLI.append(deleteWorkoutButton)
    workoutNameUL.appendChild(workoutNameLI);
    workoutDiv.appendChild(workoutNameUL);


    workoutForm.reset();

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
                name: workoutNameInput.value
            })
        }
    
        return fetch(workoutURL, workoutObject)
            .then(resp => resp.json())
            .then(workout => {
                let newWorkout = new Workout(workout.data.attributes)
                newWorkout.showWorkout();
            }).catch(err => alert(err))
    
    }

    static getWorkouts() {
        return fetch(workoutURL)
        .then(resp => resp.json())
        .then(workouts => {
            workouts.forEach(workout => {
                new Workout(workout.data.attributes);
            });
            this.showWorkouts();
        }).catch(err => alert(err))
    }

    // create a delete function to delete entire workout
    static deleteWorkout(e) {
        // set up a fetch delete request with url and the specific workout delete button being clicked ** assign a class to the button created ** Button Created **
        e.preventDefault();
        e.target.parentElement.remove(); // remove the workout from the html
        const workout_ID = parseInt(e.target.parentElement.dataset.id);
        // console.log(workout_ID); Tested and checked - worked
        return fetch(`${workoutURL}/${workout_ID}`, {
            method: 'DELETE'
        }).then(resp => resp.json());

    }

}
