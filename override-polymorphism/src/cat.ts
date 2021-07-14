import { Mammal } from './mammal';
import { Animal } from './animal-factory';

export class Cat extends Mammal implements Animal {

  sound() {
    return 'growl';
  }

  imitation() {
    return 'meow';
  }

}
