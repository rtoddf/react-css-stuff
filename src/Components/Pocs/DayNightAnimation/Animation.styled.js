import styled from 'styled-components';

export const StyledAnimation = styled.div`
  &.toggle {
    display: block;
    text-align: center;
    margin: 20px;
    user-select: none;

    .toggle--checkbox {
      display: none;
    }

    .toggle--btn {
      display: block;
      margin: 0 auto;
      font-size: 1.4em;
      transition: all 350ms ease-in;

      &:hover {
        cursor: pointer;
      }
    }

    .toggle--btn,
    .toggle--checkbox,
    .toggle--feature {
      transition: all 250ms ease-in;

      &:before,
      &:after {
        content: '';
        display: block;
        transition: all 250ms ease-in;
      }
    }

    /*-----------------------------------------------------------------------------------*\
      Day/Night and Gender toggle buttons
    \*-----------------------------------------------------------------------------------*/

    &.toggle--daynight {
      .toggle--btn {
        position: relative;
        height: 70px;
        width: 125px;
        border-radius: 70px;
        border: 5px solid #1c1c1c;
        background-color: #3c4145;

        &:before {
          position: absolute;
          top: 2px;
          left: 4px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.grays.white};
          border: 5px solid #e3e3c7;
        }

        &:after {
          position: absolute;
          top: 62%;
          left: 39px;
          z-index: 10;
          width: 11.2px;
          height: 11.2px;
          opacity: 0;
          background-color: ${({ theme }) => theme.grays.white};
          border-radius: 50%;
          box-shadow: ${({ theme }) => theme.grays.white} 0 0,
            ${({ theme }) => theme.grays.white} 3px 0,
            ${({ theme }) => theme.grays.white} 6px 0,
            ${({ theme }) => theme.grays.white} 9px 0,
            ${({ theme }) => theme.grays.white} 11px 0,
            ${({ theme }) => theme.grays.white} 14px 0,
            ${({ theme }) => theme.grays.white} 16px 0,
            ${({ theme }) => theme.grays.white} 21px -1px 0 1px,
            ${({ theme }) => theme.grays.white} 16px -7px 0 -2px,
            ${({ theme }) => theme.grays.white} 7px -7px 0 1px,
            #d3d3d3 0 0 0 4px, #d3d3d3 6px 0 0 4px, #d3d3d3 11px 0 0 4px,
            #d3d3d3 16px 0 0 4px, #d3d3d3 21px -1px 0 5px,
            #d3d3d3 16px -7px 0 1px, #d3d3d3 7px -7px 0 5px;
          transition: opacity 100ms ease-in;
        }
      }

      .toggle--feature {
        display: block;
        position: absolute;
        top: 9px;
        left: 52.5%;
        z-index: 20;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.grays.white};
        box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 0,
          rgba(255, 255, 255, 0.1) 12px 10px 0 -1px,
          ${({ theme }) => theme.grays.white} 38px 18px 0 1px,
          rgba(255, 255, 255, 0.1) 32px 34px 0 0,
          ${({ theme }) => theme.grays.white} 20px 24px 0 -1.5px,
          rgba(255, 255, 255, 0.1) 5px 38px 0 1px;
        animation: starry_star 5s ease-in-out infinite;

        &:before {
          position: absolute;
          top: -2px;
          left: -25px;
          width: 18px;
          height: 18px;
          background-color: ${({ theme }) => theme.grays.white};
          border-radius: 50%;
          border: 5px solid #e3e3c7;
          box-shadow: #e3e3c7 -28px 0 0 -3px, #e3e3c7 -8px 24px 0 -2px;
          transform-origin: -6px 130%;
        }
      }

      .toggle--checkbox {
        &:checked + .toggle--btn {
          background-color: #9ee3fb;
          border: 5px solid #86c3d7;

          &:before {
            left: 55px;
            background-color: #ffdf6d;
            border: 5px solid #e1c348;
          }

          &:after {
            opacity: 100;
            animation-name: bounceIn;
            animation-duration: 0.6s;
            animation-delay: 0.1s;
            animation-fill-mode: backwards;
            animation-timing-function: ease-in-out;
          }

          > .toggle--feature {
            opacity: 0;
            box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 -4px,
              rgba(255, 255, 255, 0.1) 12px 10px 0 -5px,
              ${({ theme }) => theme.grays.white} 38px 18px 0 -3px,
              rgba(255, 255, 255, 0.1) 32px 34px 0 -4px,
              ${({ theme }) => theme.grays.white} 20px 24px 0 -5.5px,
              rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
            animation: none;

            &:before {
              left: 25px;
              transform: rotate(70deg);
            }
          }
        }
      }
    }
  }

  /* animations */
  @keyframes starry_star {
    50% {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: ${({ theme }) => theme.grays.white} 30px -3px 0 0,
        ${({ theme }) => theme.grays.white} 12px 10px 0 -1px,
        rgba(255, 255, 255, 0.1) 38px 18px 0 1px,
        ${({ theme }) => theme.grays.white} 32px 34px 0 0,
        rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px,
        ${({ theme }) => theme.grays.white} 5px 38px 0 1px;
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 100;
      transform: scale(1.1);
    }
    55% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      opacity: 100;
      transform: scale(1);
    }
  }
`;
