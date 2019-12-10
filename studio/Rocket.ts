import { Payload } from './Payload'
import { Cargo } from './Cargo'
import { Astronaut } from './Astronaut'

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name:string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        //Returns the sum of all items using each item's massKg property
        let summedMass = 0;
        for (let i = 0; i < items.length; i++) {
            summedMass += items[i].massKg;
        }
        return summedMass;
    }

    currentMassKg(): number {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    }

    canAdd(item: Payload): boolean {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo) {
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut) {
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false.
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}