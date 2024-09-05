class studentHogwarts {
    // Private variables
    #privateScore = 0;
    #name = null;
  
    // Private method to change the score
    #changeScoreBy(points) {
      this.#privateScore += points;
    }
  
    // Public methods
    setName(newName) {
      this.#name = newName;
    }
  
    rewardStudent() {
      this.#changeScoreBy(1);
    }
  
    penalizeStudent() {
      this.#changeScoreBy(-1);
    }
  
    getScore() {
      return `${this.#name}: ${this.#privateScore}`;
    }
  }
  
  // Create an instance for Harry
  const harry = new studentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); // Should log: "Harry: 4"
  
  // Create an instance for Draco
  const draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); // Should log: "Draco: -2"
  