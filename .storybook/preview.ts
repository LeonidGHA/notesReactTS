import "../src/index.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import type { Preview } from "@storybook/react";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <Provider store={store}>
//       <Story />
//     </Provider>
//   ),
// ]

// export default preview;
