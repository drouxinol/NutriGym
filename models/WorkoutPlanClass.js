class WorkoutPlan {
  constructor(name, exercises = []) {
    this.name = name;
    this.exercises = exercises;
  }

  addExercise(exercise) {
    this.exercises.push(exercise);
  }
}

export default WorkoutPlan;
