import React from "react";
import renderer from "react-test-renderer";
import IndexPage from "../index";

it(`works`, () => {
  expect(true).toBe(true);
});

it(`renders correctly`, () => {
  const tree = renderer.create(<IndexPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
