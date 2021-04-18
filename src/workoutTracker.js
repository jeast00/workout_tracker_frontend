class WorkoutTracker {
    

    getEventListeners() {
        Workout.workoutForm.addEventListener('submit', Workout.saveWorkout);
    }
}