import { Animal } from './animal-factory';

export class Bird implements Animal {

  summary() {
    return 'The ' + this.constructor.name + ' makes a noise called ' + this.sound() + ' and it sounds something like \"' + this.imitation() + '\"';
  }

  sound() {
    return 'warble';
  }

  imitation() {
    return 'twit';
  }

}
