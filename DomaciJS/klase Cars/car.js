class Car {
  constructor(model, horsepower, maxSpeed) {
    this.model = model;
    this.horsepower = horsepower;
    this.engineOn = true;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
  }

  startEngine() {
    this.engineOn = false;
  }

  stopEngine() {
    this.engineOn = true;
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
    if ((this.engineOn != true)) {
      console.log("Motor je iskljucen");
    } else if (this.speed === 0) {
      console.log("Auto je u neutralnom stanju");
    } else if (this.speed > 0) {
      if (this.speed <= 10) {
        console.log("Auto koci");
      } else {
        console.log("Auto ubrzava");
      }
    }
  }
}

const car = new Car("Mustang", "450", 120);
console.log(car);
car.setSpeed(50)
car.ubrzanje(10);
car.provera();
car.usporenje(30);
car.provera();

const newCar = new Car("Hennessey Venom F5", "V8", 485);
console.log(newCar);
car.setSpeed();
newCar.ubrzanje(50);
newCar.provera();
newCar.usporenje(40);
newCar.provera();
const audi = new Car("audi", "A3", 220);
console.log(audi)
audi.setSpeed(100);
audi.ubrzanje(500);
audi.provera();
audi.usporenje();
audi.provera();
