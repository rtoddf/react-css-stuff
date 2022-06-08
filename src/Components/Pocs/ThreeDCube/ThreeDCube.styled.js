import styled from 'styled-components';

export const StyledThreeDCube = styled.article`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  margin: 40px auto;
  perspective: 1000px;

  .cube {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.75s;

    &.panels-backface-invisible {
      figure {
        backface-visibility: hidden;
      }
    }

    figure {
      display: block;
      position: absolute;
      width: ${({ size }) => size};
      height: ${({ size }) => size};
      border: 1px solid ${({ theme }) => theme.grays.five};
      color: ${({ theme }) => theme.grays.white};
      text-shadow: 3px 3px 3px #000;
      font-size: 5rem;
      text-align: center;
      line-height: 400px;
      overflow: hidden;

      img {
        box-shadow: none;
        opacity: 0.8;
        transition: opacity 0.5s ease-out;
      }
    }

    .side-front {
      background: rgba(0, 50, 100, 0.7);
      transform: translateZ(200px);
    }

    .side-back {
      background: rgba(102, 0, 74, 0.7);
      transform: rotateX(-180deg) translateZ(200px);
    }

    .side-right {
      background: rgba(174, 0, 0, 0.7);
      transform: rotateY(90deg) translateZ(200px);
    }

    .side-left {
      background: rgba(186, 186, 113, 0.7);
      transform: rotateY(-90deg) translateZ(200px);
    }

    .side-top {
      background: rgba(250, 124, 0, 0.7);
      transform: rotateX(90deg) translateZ(200px);
    }

    .side-bottom {
      background: rgba(0, 125, 125, 0.7);
      transform: rotateX(-90deg) translateZ(200px);
    }

    &[class*=' show-'] {
      transform: translateZ(-98px);
    }

    &.show-front {
      figure.side-front {
        img {
          opacity: 1;
        }
      }
    }

    &.show-back {
      transform: translateZ(-98px) rotateX(-180deg);

      figure.side-back {
        img {
          opacity: 1;
        }
      }
    }

    &.show-right {
      transform: translateZ(-98px) rotateY(-90deg);

      figure.side-right {
        img {
          opacity: 1;
        }
      }
    }

    &.show-left {
      transform: translateZ(-98px) rotateY(90deg);

      figure.side-left {
        img {
          opacity: 1;
        }
      }
    }

    &.show-top {
      transform: translateZ(-98px) rotateX(-90deg);

      figure.side-top {
        img {
          opacity: 1;
        }
      }
    }

    &.show-bottom {
      transform: translateZ(-98px) rotateX(90deg);

      figure.side-bottom {
        img {
          opacity: 1;
        }
      }
    }
  }
`;

export const StyledOptions = styled.article`
  .side-options,
  .display-options,
  .toggle-options {
    display: flex;
    justify-content: center;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.grays.white};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .toggle-switch-label {
    display: inline-block;
    margin: 10px;
  }
`;
