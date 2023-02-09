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
        console.warn("Upozorenje prekoracili ste maximalnu brzinu");
      }
    }
  
    setSpeed(speed) {
      this.speed = speed;
      this.checkSpeed();
    }
  
    ubrzanje(gas) {
      this.speed += gas;
      this.checkSpeed();
    }
  
    usporenje(gas) {
      this.speed -= gas;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  
    provera() {
      if (this.engineOn = false) {
        console.log("Motor je iskljucen");
      } else if (this.speed === 0) {
        console.log("Auto je u neutralnom stanju");
      } else if (this.speed > 0) {
        if (this.speed < this.speed) {
          console.log("Auto koci");
        } else {
          console.log("Auto ubrzava");
        }
      }
    }
  }
  
const car = new Car("Mustang", 450, 120);
console.log(car);
  console.log(car.speed);
  car.startEngine();
  car.ubrzanje(10);
  car.provera(); 
  car.usporenje();
car.provera(); 


const newCar = new Car("Hennessey Venom F5", "V8", 485);
console.log(newCar);
newCar.ubrzanje(50);
newCar.stopEngine();
newCar.provera();
newCar.usporenje(50);
newCar.provera();
