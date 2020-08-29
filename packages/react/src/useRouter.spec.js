import React from "react";
import expect, { mount, unmount } from "./expect";

import { Routes, Route, MemoryRouter, useRouter } from "./index";

const routes = new Routes(new Route("posts", "/posts"));

const Location = () => {
  const router = useRouter();

  return <div data-test-id="location">{router.location.pathname}</div>;
};

const App = () => (
  <div>
    <MemoryRouter routes={routes} initialPath="/posts">
      <Location />
    </MemoryRouter>
  </div>
);

describe("useRouter", () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  afterEach(() => {
    unmount(component);
  });

  it("returns the router from the context", () => {
    expect(
      component,
      "queried for test id",
      "location",
      "to have text",
      "/posts"
    );
  });
});
