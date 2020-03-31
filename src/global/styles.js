import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	outline: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
	min-height: 100%
}

body {
	background: #000;
}
`;
