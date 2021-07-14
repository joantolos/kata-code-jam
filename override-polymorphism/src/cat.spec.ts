import { Cat } from './cat';

describe('Cat', () => {

  let cat: Cat;

  beforeEach(() => {
    cat = new Cat();
  });

  it('should be created', () => {
    expect(cat).not.toBeUndefined();
  });

  it('should create expected summary', () => {
    expect(cat.summary()).toEqual('The Cat is a Mammal that makes a noise called growl and it sounds something like \"meow\"');
  });

});
