// @ts-ignore
import { Paginator } from '../src/paginator.provider';

let paginator: Paginator;
let fruits;

describe('Paginator', () => {
  beforeEach(() => {
    paginator = new Paginator();
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
    expect(paginator).not.toBeUndefined();
  });

  it('should retrieve page 2', () => {
    const page2 = paginator.paginate(fruits, 2, 2);
    expect(page2[0].name).toBe('Orange');
    expect(page2[1].name).toBe('Apple');
    expect(page2.length).toBe(2);
  });

  it('should retrieve page 3', () => {
    const page3 = paginator.paginate(fruits, 2, 4);
    expect(page3[0].name).toBe('Mango');
    expect(page3[1].name).toBe('Pear');
    expect(page3.length).toBe(2);
  });

  it('should leave the list alone when no page required', () => {
    const originalFruits = paginator.paginate(fruits, null, null);
    expect(originalFruits.length).toBe(6);
  });

});