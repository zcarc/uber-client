import reset from "styled-reset";
import { createGlobalStyle } from "./typed.components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input,
    botton {
        &:focus,
        &:active{outline:none}
    }
`;

export default GlobalStyle;
