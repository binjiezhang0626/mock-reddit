import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/components/App/App';

describe('<App />', () => {
  it('has 2 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
