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
    }

    saveExerciseInfo(exerciseName, exerciseSet, exerciseRep, exerciseTime, workout_ID) {
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
    }


    


}

