import { Dog } from './dog';

describe('Dog', () => {

  let dog: Dog;

  beforeEach(() => {
    dog = new Dog();
  });

  it('should be created', () => {
    expect(dog).not.toBeUndefined();
  });

  it('should create expected summary', () => {
    expect(dog.summary()).toEqual('The Dog is a Mammal that makes a noise called bark and it sounds something like \"woof\"');
  });

});
