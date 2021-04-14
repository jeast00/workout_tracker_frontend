class Workout {

    constructor(workout) {
        this.id = workout.id
        this.name = workout.name
    }



    static showWorkouts(workouts) {
        for(let workout of workouts) {
            showWorkout(workout);
        };
    }
   

    static fetchWorkouts() {
        return fetch(workoutURL)
        .then(resp => resp.json())
        .then(workouts => {
            for(let workout of workouts) {
                let newWorkout = new Workout(workout.data.attributes);
                newWorkout.showWorkout();
            }
        })
        .catch(err=> alert(err))
    }




    showWorkout(workout) {
    const workoutNameUL = document.createElement('ul');
    workoutNameUL.className = 'workout_name_ul';

    const workoutNameLI = document.createElement('li');
    workoutNameLI.innerText = `Workout Name: ${workout.name}`;
    workoutNameLI.dataset.id = workout.id;

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
    // exerciseForm.addEventListener('submit', showExerciseInfo)

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
    // deleteWorkoutButton.addEventListener('click', deleteWorkout);
}



}
