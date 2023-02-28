import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        margin: 0;
        height: 100%;
    }

    body {
        margin: 0;
        min-height: 100%;
        overflow-x: hidden;
    }

    div, 
    form,
    input,
    th,
    td,
    textarea,
    ul {
        margin: 0;
    }

    ul {
       padding-left: 0; 
    }

    li {
        list-style-type: none;
    }

    a, 
    button {
        outline: none;
        cursor: pointer;
    }

    input,
    textarea {
        outline: none;
    }
`;
