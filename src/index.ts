import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([10, -1, 8, 5]);
numberCollection.sort();
console.log(numberCollection.data);

// const characterCollection = new CharacterCollection('bcad');

// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(sorter.sortable);

// const charSorter = new Sorter(characterCollection);
// charSorter.sort();
// console.log(charSorter.sortable);
