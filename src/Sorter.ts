import { NumbersCollection } from "./NumbersCollection";

export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {} // declares the property and initialize it at the same time

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      console.log(`i: ${i}`);
      for (let j = 0; j < length - i - 1; j++) {
        // console.log(`j: ${j}, number: ${this.collection[j]}`);
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1);
        }
      }
    }
  }
}