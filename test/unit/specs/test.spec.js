import { createTest, destroyVM } from '../util';
import Test from 'packages/test';

describe('Test', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Test, true);
    expect(vm.$el).to.exist;
  });
});

