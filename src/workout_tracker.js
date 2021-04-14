class WorkoutTracker {
    static workouts = [];
    static exercises = [];
    workoutURL = `http://localhost:3000/workouts`;
    exerciseURL = `http://localhost:3000/exercises`;

    
    getWorkouts() {
        return fetch(this.workoutURL)
        .then(resp => resp.json())
        .then(workouts => {
            for(let workout of workouts) {
                let newWorkout = new Workout(workout.data.attributes);
                console.log(newWorkout);
            }
        })
        .catch(err=> alert(err))
    }
}

