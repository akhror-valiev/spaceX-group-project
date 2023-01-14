import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionList from '../../pages/MissionList';

describe('snapshot testing', () => {
  test('snapshot for Mission component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <MissionList />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
