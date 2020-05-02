// @ts-ignore
import {Sorter} from '../src/sorter.provider';

let sorter: Sorter;
let fruits;

describe('Sorter', () => {
  beforeEach(() => {
    sorter = new Sorter();
    fruits = [
      {
        name: 'Apple',
        color: 'Yellow',
        quantity: 2
      },
      {
        name: 'Tomato',
        color: 'Red',
        quantity: 5
      },
      {
        name: 'Orange',
        color: 'Orange',
        quantity: 3
      },
      {
        name: 'Apple',
        color: 'Red',
        quantity: 3
      },
      {
        name: 'apple',
        color: 'Red',
        quantity: 7
      }
    ];
  });

  it('should be created', () => {
    expect(sorter).not.toBeUndefined();
  });

  it('by dynamic list of columns ascending and descending with no repeats', () => {
    const fruitsSortedByQuantityAsc = sorter.applyOrder(fruits, 'quantity:asc');
    expect(fruitsSortedByQuantityAsc[0].name).toBe('Apple');
    expect(fruitsSortedByQuantityAsc[1].name).toBe('Orange');
    expect(fruitsSortedByQuantityAsc[2].name).toBe('Apple');
    expect(fruitsSortedByQuantityAsc[3].name).toBe('Tomato');

    const fruitsSortedByQuantity = sorter.applyOrder(fruits, 'quantity:desc');
    expect(fruitsSortedByQuantity[0].name).toBe('apple');
    expect(fruitsSortedByQuantity[1].name).toBe('Tomato');
    expect(fruitsSortedByQuantity[2].name).toBe('Orange');
    expect(fruitsSortedByQuantity[3].name).toBe('Apple');
  });

  it('by dynamic list of columns ascending and descending with repeats', () => {
    const nameWithAscendantQuantityTieBreaker = sorter.applyOrder(fruits, 'name:asc,quantity:asc');
    expect(nameWithAscendantQuantityTieBreaker[0].name).toBe('Apple');
    expect(nameWithAscendantQuantityTieBreaker[0].quantity).toBe(2);
    expect(nameWithAscendantQuantityTieBreaker[1].name).toBe('Apple');
    expect(nameWithAscendantQuantityTieBreaker[1].quantity).toBe(3);

    const nameWithDescendantQuantityTieBreaker = sorter.applyOrder(fruits, 'name:asc,quantity:desc');
    expect(nameWithDescendantQuantityTieBreaker[0].name).toBe('apple');
    expect(nameWithDescendantQuantityTieBreaker[0].quantity).toBe(7);
    expect(nameWithDescendantQuantityTieBreaker[1].name).toBe('Apple');
    expect(nameWithDescendantQuantityTieBreaker[1].quantity).toBe(3);
  });

  it('by dynamic list of columns ascending and descending with repeats, ignoring case', () => {
    const noCaseNameWithAscendantQuantityTieBreaker = sorter.applyOrder(fruits, 'name:asc,quantity:desc,color:asc');
    expect(noCaseNameWithAscendantQuantityTieBreaker[0].name).toBe('apple');
    expect(noCaseNameWithAscendantQuantityTieBreaker[0].quantity).toBe(7);
    expect(noCaseNameWithAscendantQuantityTieBreaker[1].name).toBe('Apple');
    expect(noCaseNameWithAscendantQuantityTieBreaker[1].quantity).toBe(3);
    expect(noCaseNameWithAscendantQuantityTieBreaker[2].name).toBe('Apple');
    expect(noCaseNameWithAscendantQuantityTieBreaker[2].quantity).toBe(2);
  });

  it('by dynamic list of columns by default sorting', () => {
    const defaultSorting = sorter.applyOrder(fruits, null);
    expect(defaultSorting[0].name).toBe('apple');
    expect(defaultSorting[0].quantity).toBe(7);
    expect(defaultSorting[1].name).toBe('Apple');
    expect(defaultSorting[1].quantity).toBe(3);
    expect(defaultSorting[2].name).toBe('Apple');
    expect(defaultSorting[2].quantity).toBe(2);
  });

});