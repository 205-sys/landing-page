import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App", () => {
  it("renders landing page", () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toBeTruthy();
  });
});
