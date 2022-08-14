import { someFn } from '../utils';

const TestComponent = () => {
  const val = someFn(3);

  return <div>TestComponent val: {val}</div>;
};

export default TestComponent;
