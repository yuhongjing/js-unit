import BaiduLink from '../BaiduLink';
import renderer from 'react-test-renderer';
import React from 'react';

test('baiduLink 正常渲染', () => {
  const tree = renderer.create(<BaiduLink />).toJSON();
  expect(tree).toMatchSnapshot();
});