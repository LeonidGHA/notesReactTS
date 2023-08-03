import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  previewBody: () => `<div id="modal"></div>`,
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },
};
export default config;