import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

// decorators
// make gray bg a decorator
// https://storybook.js.org/addons/@react-theming/storybook-addon/
// https://storybook.js.org/docs/react/writing-stories/decorators

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color|lightColor1|lightColor2)$/i,
      date: /Date$/,
    },
  },
};
