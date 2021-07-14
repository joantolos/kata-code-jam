import { Sorting } from './sorting.provider';

let sorter: Sorting;
let fruits;

describe('Sorter', () => {
  beforeEach(() => {
    sorter = new Sorting();
    fruits = [
      {
        name: 'Apple',
        color: 'Yellow',
        quantity: 2,
        vitamins: [
          { id: 'A', property: 'fat-soluble'},
          { id: 'B', property: 'water-soluble'},
          { id: 'C', property: 'water-soluble'}
        ]
      },
      {
        name: 'Tomato',
        color: 'Red',
        quantity: 5,
        vitamins: [
          { id: 'A', property: 'fat-soluble'},
          { id: 'B', property: 'water-soluble'},
          { id: 'C', property: 'water-soluble'}
        ]
      },
      {
        name: 'Orange',
        color: 'Orange',
        quantity: 3,
        vitamins: [
          { id: 'C', property: 'fat-soluble'},
          { id: 'B', property: 'water-soluble'},
        ]
      },
      {
        name: 'Apple',
        color: 'Red',
        quantity: 3,
        vitamins: [
          { id: 'X', property: 'fat-soluble'},
          { id: 'Y', property: 'water-soluble'},
          { id: 'Z', property: 'water-soluble'}
        ]
      },
      {
        name: 'apple',
        color: 'Red',
        quantity: 7,
        vitamins: [
          { id: 'A', property: 'fat-soluble'},
          { id: 'A', property: 'water-soluble'}
        ]
      }
    ];
  });

  it('should be created', () => {
    expect(sorter).not.toBeUndefined();
  });

  it('by dynamic list of columns ascending and descending with no repeats', () => {
    const fruitsSortedByQuantityAsc = sorter.sort(fruits, 'quantity:asc');
    expect(fruitsSortedByQuantityAsc[0].name).toBe('Apple');
    expect(fruitsSortedByQuantityAsc[1].name).toBe('Orange');
    expect(fruitsSortedByQuantityAsc[2].name).toBe('Apple');
    expect(fruitsSortedByQuantityAsc[3].name).toBe('Tomato');

    const fruitsSortedByQuantity = sorter.sort(fruits, 'quantity:desc');
    expect(fruitsSortedByQuantity[0].name).toBe('apple');
    expect(fruitsSortedByQuantity[1].name).toBe('Tomato');
    expect(fruitsSortedByQuantity[2].name).toBe('Orange');
    expect(fruitsSortedByQuantity[3].name).toBe('Apple');
  });

  it('by dynamic list of columns ascending and descending with repeats', () => {
    const nameWithAscendantQuantityTieBreaker = sorter.sort(fruits, 'name:asc,quantity:asc');
    expect(nameWithAscendantQuantityTieBreaker[0].name).toBe('Apple');
    expect(nameWithAscendantQuantityTieBreaker[0].quantity).toBe(2);
    expect(nameWithAscendantQuantityTieBreaker[1].name).toBe('Apple');
    expect(nameWithAscendantQuantityTieBreaker[1].quantity).toBe(3);

    const nameWithDescendantQuantityTieBreaker = sorter.sort(fruits, 'name:asc,quantity:desc');
    expect(nameWithDescendantQuantityTieBreaker[0].name).toBe('apple');
    expect(nameWithDescendantQuantityTieBreaker[0].quantity).toBe(7);
    expect(nameWithDescendantQuantityTieBreaker[1].name).toBe('Apple');
    expect(nameWithDescendantQuantityTieBreaker[1].quantity).toBe(3);
  });

  it('by dynamic list of columns ascending and descending with repeats, ignoring case', () => {
    const noCaseNameWithAscendantQuantityTieBreaker = sorter.sort(fruits, 'name:asc,quantity:desc,color:asc');
    expect(noCaseNameWithAscendantQuantityTieBreaker[0].name).toBe('apple');
    expect(noCaseNameWithAscendantQuantityTieBreaker[0].quantity).toBe(7);
    expect(noCaseNameWithAscendantQuantityTieBreaker[1].name).toBe('Apple');
    expect(noCaseNameWithAscendantQuantityTieBreaker[1].quantity).toBe(3);
    expect(noCaseNameWithAscendantQuantityTieBreaker[2].name).toBe('Apple');
    expect(noCaseNameWithAscendantQuantityTieBreaker[2].quantity).toBe(2);
  });

  it('by several fields and a subfield from an array', () => {
    const arraySubField = sorter.sort(fruits, 'vitamins.id:asc');
    expect(arraySubField[0].vitamins[0].id).toBe('A');
    expect(arraySubField[1].vitamins[0].id).toBe('A');
    expect(arraySubField[2].vitamins[0].id).toBe('A');
    expect(arraySubField[3].vitamins[0].id).toBe('C');
    expect(arraySubField[4].vitamins[0].id).toBe('X');
  });

});
