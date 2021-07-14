import { Mammal } from './mammal';
import { Animal } from './animal-factory';

export class Dog extends Mammal implements Animal {

  sound() {
    return 'bark';
  }

  imitation() {
    return 'woof';
  }
}
