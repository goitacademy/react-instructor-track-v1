import { Layout } from './Layout';
import { Counter } from './Counter/Counter';

export const Example1 = () => {
  return (
    <Layout>
      <Counter initialValue={10} />
    </Layout>
  );
};
