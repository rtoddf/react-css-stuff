import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        height: 100%;
        font-family: 'Open Sans', sans-serif;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
    
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    
    body {
        /* background-color: $site-bg-color; */
        background-color: ${({ theme }) => theme.colors.bodyBgColor};
        /* color: $site-text-color; */
        color: ${({ theme }) => theme.colors.bodyTextColor};
        font-size: 1rem;
    }

    h3 {
        font-size: 1rem;
        margin: .625rem 0;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    a {
        color: ${({ theme }) => theme.colors.linkColor};

        &:hover,
        &.active {
            /* color: $site-link-hover-color; */
            color: #003264;
        }

        &:visited {
            /* color: $site-link-hover-color; */
            color: #c07f2c;
        }
    }

    ul {
        margin-bottom: 20px;
        list-style: none;
    }

    li {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    pre {
        margin: 10px 0;
        padding: 10px;
        background: #dedede;
        border-radius: 6px;
    }

    .description {
        margin-bottom:40px;
    }

    /* images */
    img {
        width: 100%;
    }
`;

export default GlobalStyles;
