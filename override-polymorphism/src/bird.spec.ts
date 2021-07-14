import { Bird } from './bird';

describe('Bird', () => {

  let bird: Bird;

  beforeEach(() => {
    bird = new Bird();
  });

  it('should be created', () => {
    expect(bird).not.toBeUndefined();
  });

  it('should create expected summary', () => {
    expect(bird.summary()).toEqual('The Bird makes a noise called warble and it sounds something like \"twit\"');
  });
});
