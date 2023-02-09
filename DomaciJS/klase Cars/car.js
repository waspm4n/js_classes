class Car {
    constructor(model, horsepower, maxSpeed) {
      this.model = model;
      this.horsepower = horsepower;
      this.engineOn = false;
      this.speed = 0;
      this.maxSpeed = maxSpeed;
    }
  
    startEngine() {
      this.engineOn = true;
    }
  
    stopEngine() {
      this.engineOn = false;
    }
  
    isMoving() {
      return this.speed > 0;
    }
  
    checkSpeed() {
      if (this.speed > this.maxSpeed) {
        console.warn("Warning: You have exceeded the maximum speed limit.");
      }
    }
  
    setSpeed(speed) {
      this.speed = speed;
      this.checkSpeed();
    }
  
    accelerate(amount) {
      this.speed += amount;
      this.checkSpeed();
    }
  
    brake(amount) {
      this.speed -= amount;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  
    status() {
      if (this.engineOn = false) {
        console.log("The car is not running.");
      } else if (this.speed === 0) {
        console.log("The car is idle.");
      } else if (this.speed > 0) {
        if (this.speed < this.speed) {
          console.log("The car is braking.");
        } else {
          console.log("The car is accelerating.");
        }
      }
    }
  }
  
  const car = new Car("Mustang", 450, 120);
  console.log(car.speed);
  car.startEngine();
  car.accelerate(30);
  car.status(); 
  car.brake(50);
  car.status(); 
  