import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
  // properties and methods
  totalCapacityKg: number;
  name: string;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number,) {
    this.totalCapacityKg = totalCapacityKg;
    this.name = name;
  }

  sumMass(items: Payload[]): number {
    let sum: number = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].massKg;
    }
    return sum;
  }

  currentMassKg(): number {
    let cargoItemsSumMass = this.sumMass(this.cargoItems);
    let astronautsSumMass = this.sumMass(this.astronauts);
    return cargoItemsSumMass + astronautsSumMass;

    //   let sum: number = 0
    //   for (let cargoItem of this.cargoItems) {
    //       sum += cargoItem.massKg
    //   }
    //   for (let astronaut of this.astronauts) {
    //       sum += astronaut.massKg
    //   }
    //   return sum
  }
  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true
    } else {
      return false
    }
  }
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo) === true) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut) === true) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
