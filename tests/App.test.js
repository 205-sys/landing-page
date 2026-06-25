import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App", () => {
  it("renders landing page title", () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain("Vue Landing CI/CD App");
  });

  it("renders features section", () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain("Fast");
    expect(wrapper.text()).toContain("Tested");
    expect(wrapper.text()).toContain("Deployable");
  });
});
