// @ts-ignore
import { Pagination } from './pagination.provider';

let pagination: Pagination;
let fruits;

describe('pagination', () => {
  beforeEach(() => {
    pagination = new Pagination();
    fruits = [
      {
        name: 'Apple'
      },
      {
        name: 'Tomato'
      },
      {
        name: 'Orange'
      },
      {
        name: 'Apple'
      },
      {
        name: 'Mango'
      },
      {
        name: 'Pear'
      }
    ];
  });

  it('should be created', () => {
    expect(pagination).not.toBeUndefined();
  });

  it('should retrieve page 2', () => {
    const page2 = pagination.paginate(fruits, 2, 2);
    expect(page2[0].name).toBe('Orange');
    expect(page2[1].name).toBe('Apple');
    expect(page2.length).toBe(2);
  });

  it('should retrieve page 3', () => {
    const page3 = pagination.paginate(fruits, 2, 4);
    expect(page3[0].name).toBe('Mango');
    expect(page3[1].name).toBe('Pear');
    expect(page3.length).toBe(2);
  });

  it('should leave the list alone when no page required', () => {
    const originalFruits = pagination.paginate(fruits, null, null);
    expect(originalFruits.length).toBe(6);
  });

});
