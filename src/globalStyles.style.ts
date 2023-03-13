import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-weight: 400;
        font-family: 'Golos Text', sans-serif;
        src: url('./assets/fonts/GolosText-Regular.ttf') format('ttf');
    }

    @font-face {
        font-weight: 500;
        font-family: 'Golos Text', sans-serif;
        src: url('./assets/fonts/GolosText-Medium.ttf') format('ttf');
    }

    @font-face {
        font-weight: 600;
        font-family: 'Golos Text', sans-serif;
        src: url('./assets/fonts/GolosText-SemiBold.ttf') format('ttf');
    }

    @font-face {
        font-weight: 700;
        font-family: 'Golos Text', sans-serif;
        src: url('./assets/fonts/GolosText-Bold.ttf') format('ttf');
    }

    @font-face {
        font-weight: 800;
        font-family: 'Golos Text', sans-serif;
        src: url('./assets/fonts/GolosText-ExtraBold.ttf') format('ttf');
    }

    @font-face {
        font-weight: 900;
        font-family: 'Golos Text', sans-serif;
        src: url('./assets/fonts/GolosText-Black.ttf') format('ttf');
    }

    * {
        font-family: 'Golos Text', sans-serif;
    }

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
