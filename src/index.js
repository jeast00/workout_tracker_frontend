

const workoutNameInput = document.getElementById('workout_name_input');
const workoutDiv = document.getElementById('workout_div');
// const exerciseURL = `http://localhost:3000/exercises`;


Workout.workoutForm.addEventListener('submit', Workout.saveWorkout);


Workout.getWorkouts();

