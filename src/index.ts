import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('xZAlkjY');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);