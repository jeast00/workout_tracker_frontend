// console.log("Test js page");


// add variables to the top - hoisting
const workoutForm = document.getElementById('workout_form');
const workoutNameInput = document.getElementById('workout_name_input');
const workoutDiv = document.getElementById('workout_div');
const workoutURL = `http://localhost:3000/workouts`;
const exerciseURL = `http://localhost:3000/exercises`;


// add an event listener to the workoutForm variable to hide the workoutForm, add elements to the DOM that show the workout Form input value, and then reveal the exercise form
workoutForm.addEventListener('submit', Workout.saveWorkout)


Workout.getWorkouts();

