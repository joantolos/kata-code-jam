// @ts-ignore
import {TableManager} from '../src/table-manager.provider';

let tableArrangement: TableManager;
let fruits: any[];

describe('Table manager', () => {
  beforeEach(() => {
    tableArrangement = new TableManager();
    fruits = [
      {
        name: 'Apple',
      },
      {
        name: 'Tomato',
      },
      {
        name: 'Orange',
      },
      {
        name: 'Pear',
      },
      {
        name: 'Pineapple',
      },
      {
        name: 'Mango',
      },
      {
        name: 'apple',
      }
    ];
  });

  it('should be created', () => {
    expect(tableArrangement).not.toBeUndefined();
  });

  it('should sort and paginate: first page of two hits', () => {
    const sortedAndPaginated = tableArrangement.arrange(fruits, 2, 0, 'name:asc');
    expect(sortedAndPaginated[0].name).toBe('Apple');
    expect(sortedAndPaginated[1].name).toBe('apple');
    expect(sortedAndPaginated.length).toBe(2);
  });

  it('should sort and paginate: second page of two hits', () => {
    const sortedAndPaginated = tableArrangement.arrange(fruits, 2, 2, 'name:asc');
    expect(sortedAndPaginated[0].name).toBe('Mango');
    expect(sortedAndPaginated[1].name).toBe('Orange');
    expect(sortedAndPaginated.length).toBe(2);
  });
});