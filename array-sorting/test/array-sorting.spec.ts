// @ts-ignore
import { Sorter } from '../src/array-sorting';

let sorter: Sorter;

describe('Sorter', () => {
  beforeEach(() => {
    sorter = new Sorter();
  });

  it('should be created', () => {
    expect(sorter).not.toBeUndefined();
  });

  it('by dynamic list of columns ascending and descending with no repeats', () => {
    const fruits = [
      {
        name: 'Apple',
        color: 'Red',
        quantity: 3
      },
      {
        name: 'Banana',
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
        quantity: 6
      }
    ];

    const fruitsSortedByQuantityAsc = sorter.applyOrder(fruits, 'quantity:asc');
    expect(fruitsSortedByQuantityAsc[0].name).toBe('Banana');
    expect(fruitsSortedByQuantityAsc[1].name).toBe('Apple');
    expect(fruitsSortedByQuantityAsc[2].name).toBe('Tomato');
    expect(fruitsSortedByQuantityAsc[3].name).toBe('Orange');

    const fruitsSortedByQuantity = sorter.applyOrder(fruits, 'quantity:desc');
    expect(fruitsSortedByQuantity[0].name).toBe('Orange');
    expect(fruitsSortedByQuantity[1].name).toBe('Tomato');
    expect(fruitsSortedByQuantity[2].name).toBe('Apple');
    expect(fruitsSortedByQuantity[3].name).toBe('Banana');
  });

  it('by dynamic list of columns ascending and descending with repeats', () => {
    const fruits = [
      {
        name: 'Apple',
        color: 'Red',
        quantity: 3
      },
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
      }
    ];

    const fruitsSortedByNameWithQuantityTieBreaker = sorter.applyOrder(fruits, 'mame:asc,quantity:asc,color:asc');
    expect(fruitsSortedByNameWithQuantityTieBreaker[0].name).toBe('Apple');
    expect(fruitsSortedByNameWithQuantityTieBreaker[0].quantity).toBe(2);
    expect(fruitsSortedByNameWithQuantityTieBreaker[1].name).toBe('Orange');
    expect(fruitsSortedByNameWithQuantityTieBreaker[1].quantity).toBe(3);
    expect(fruitsSortedByNameWithQuantityTieBreaker[2].name).toBe('Apple');
    expect(fruitsSortedByNameWithQuantityTieBreaker[3].name).toBe('Tomato');
  });

});
