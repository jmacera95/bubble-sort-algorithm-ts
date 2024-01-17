import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('xZAlkjY');
const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-19);
linkedList.add(10);
linkedList.add(134);
numbersCollection.sort();
console.log(numbersCollection);
charactersCollection.sort();
console.log(charactersCollection);
linkedList.sort();
linkedList.print();