import { AnimalFactory } from './animal-factory';
import { Dog } from './dog';
import { Cat } from './cat';
import { Bird } from './bird';

describe('Animal factory', () => {

  let animalFactory: AnimalFactory;

  beforeEach(() => {
    animalFactory = new AnimalFactory();
  });

  it('should be created', () => {
    expect(animalFactory).not.toBeUndefined();
  });

  it('should create instance for dog', () => {
    expect(animalFactory.build('dog') instanceof Dog).toBeTruthy();
  });

  it('should create instance for cat', () => {
    expect(animalFactory.build('cat') instanceof Cat).toBeTruthy();
  });

  it('should create instance for bird', () => {
    expect(animalFactory.build('bird') instanceof Bird).toBeTruthy();
  });

});
