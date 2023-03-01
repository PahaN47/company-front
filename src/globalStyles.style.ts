import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        margin: 0;
    }

    body {
        min-height: 100%;
        margin: 0;
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
