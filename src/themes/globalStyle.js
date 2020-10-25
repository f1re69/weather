import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/moutains-landscape.jpg';
import latoRegular from '../fonts/Lato/Lato-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${latoRegular});
    font-weight: normal;
  }
  * { margin: 0; padding: 0; }
  html, body { width: 100%; height: 100%; }  
  body {
    font-family: Lato;
    &:before {
      content: "";
      position: fixed;
      height: 100%;
      width: 100%;
      background-image: url(${backgroundImage});
      background-position: 50%;
      background-size: cover;
    }
  }
  div#root {
    height: 100%;
    width: 100%;
  }
`;
 
export default GlobalStyle;



