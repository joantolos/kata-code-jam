import { Dog } from './dog';
import { Cat } from './cat';
import { Bird } from './bird';

export interface Animal {

  summary();
  imitation();
  sound();

}

export class AnimalFactory {

  constructor() {
  }

  public build(animalName: string): Animal {
    switch (animalName) {
      case 'dog': {
        return new Dog();
      }
      case 'cat': {
        return new Cat();
      }
      case 'bird': {
        return new Bird();
      }
    }
  }
}
