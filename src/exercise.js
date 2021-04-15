class Exercise {

    static allExercises = [];

    constructor(exercise) {
        this.id = exercise.id 
        this.name = exercise.name
        this.sets = exercise.sets
        this.repetitions = exercise.repetitions
        this.time = exercise.time
        this.workoutID = exercise.workout_id
        Exercise.allExercises.push(this)
        console.log(this);
    }


}

