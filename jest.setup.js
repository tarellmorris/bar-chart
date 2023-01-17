// @flow
// $FlowFixMe - unclear-type
declare var global: any;

const TestRenderer = require('react-test-renderer');
const React = require('react');
const { Provider } = require('styletron-react');
const { StyletronSnapshotEngine } = require('styletron-engine-snapshot');

global.snap = (children) => {
  const snapshotEngine = new StyletronSnapshotEngine();
  return TestRenderer.create(<Provider value={snapshotEngine}>{children}</Provider>);
};

global.window = {
  matchMedia: () => {
    return {
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    };
  },
};

// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
