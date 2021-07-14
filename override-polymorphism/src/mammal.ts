export abstract class Mammal {

  constructor() {
  }

  summary() {
    return 'The ' + this.constructor.name + ' is a ' + Mammal.name + ' that makes a noise called ' + this.sound() + ' and it sounds something like \"' + this.imitation() + '\"';
  }

  abstract sound();

  abstract imitation();
}
