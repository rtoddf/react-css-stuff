import styled from 'styled-components';

export const StyledSwitch = styled.div`
  .time-circle {
    position: relative;
    background: linear-gradient(to bottom, #be4405, #f6c60c);
    width: 400px;
    height: 400px;
    margin: 0 auto;
    border-radius: 0;
    border: 4.5px solid #555;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    text-align: center;

    -webkit-transition: all 1.1s ease-in-out;
    transition: all 1.1s ease-in-out;

    &.nite {
      background: linear-gradient(to bottom, #111936, #285a7b);
      border-color: #e9e5d5;
    }
  }

  /* sun */
  .sun {
    margin-top: 20px;
    background: #f2ef88;
    box-shadow: 0 0 20px rgba(242, 239, 136, 0.4);
    width: 30%;
    height: 30%;
    border-radius: 50%;
    position: relative;
    left: 35%;
    top: 48%;

    -webkit-animation: pulse 5s ease infinite alternate;
    animation: pulse 5s ease infinite alternate;
    -webkit-transition: all 1.1s 0.4s ease;
    transition: all 1.1s 0.4s ease;

    &.nite {
      top: 70%;
      left: 35%;

      -webkit-transition: all 1.1s 0s ease;
      transition: all 1.1s 0s ease;
    }
  }

  /* animations */
  @keyframes pulse {
    0% {
      box-shadow: 0 0 20px rgba(242, 239, 136, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(242, 239, 136, 1);
    }
    100% {
      box-shadow: 0 0 20px rgba(242, 239, 136, 0.4);
    }
  }
  @-webkit-keyframes pulse {
    0% {
      box-shadow: 0 0 20px rgba(242, 239, 136, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(242, 239, 136, 1);
    }
    100% {
      box-shadow: 0 0 20px rgba(242, 239, 136, 0.4);
    }
  }

  /* moon */
  .moon {
    position: absolute;
    margin-top: 20px;
    background: #d9d8d0;
    box-shadow: inset -10px 2px 0 0px #899098;
    width: 22.5%;
    height: 22.5%;
    border-radius: 100%;
    position: relative;
    left: 50%;
    margin-left: -50px;
    top: -65%;
    overflow: hidden;

    -webkit-transition: all 1.1s 0s ease;
    transition: all 1.1s 0s ease;

    &.nite {
      left: 50%;
      top: -10%;

      -webkit-transition: all 1.1s 0.4s ease;
      transition: all 1.1s 0.4s ease;
    }

    div {
      &:nth-child(n) {
        position: relative;
        background: #b9b8b0;
        border-radius: 50%;
        box-shadow: inset 4px -2px 0 0px #535457;
      }

      &:nth-child(1) {
        top: 25%;
        left: 12%;
        width: 27%;
        height: 27%;
      }

      &:nth-child(2) {
        top: -11%;
        left: 60%;
        width: 16%;
        height: 16%;
      }

      &:nth-child(3) {
        top: 25%;
        left: 44%;
        width: 16%;
        height: 16%;
      }
    }
  }

  /* stars */
  .stars {
    opacity: 0;
    margin-left: 100px;
    top: 0;
    left: 0;
    -webkit-transition: all 0.8s 0s ease;
    transition: all 0.8s 0s ease;
    z-index: 1000;

    &.nite {
      opacity: 1;

      -webkit-transition: all 3s 0.4s ease;
      transition: all 3s 0.4s ease;
    }

    div {
      &:nth-child(n) {
        position: absolute;
        background: radial-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        );
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(255, 255, 255, 1);
        overflow: hidden;
        width: 0.7%;
        height: 0.7%;

        margin-left: 20%;
        margin-top: -20%;

        -webkit-transition: all 1s 0s ease;
        transition: all 1s 0s ease;
      }

      &:nth-child(1) {
        left: 25%;
        top: 30%;
      }

      &:nth-child(2) {
        left: 55%;
        top: 20%;
      }

      &:nth-child(3) {
        left: 60%;
        top: 60%;
      }

      &:nth-child(4) {
        left: 40%;
        top: 45%;
      }

      &:nth-child(5) {
        left: 15%;
        top: 55%;
      }

      &:nth-child(6) {
        left: 40%;
        top: 10%;
      }

      &:nth-child(7) {
        left: 80%;
        top: 55%;
      }
    }
  }

  /* water */
  .water {
    position: absolute;
    background: repeating-radial-gradient(
        ellipse farthest-corner at center -400%,
        #f5c30e 30%,
        #518eac 90%
      )
      repeat scroll 0 0 #518eac;
    width: 120%;
    height: 200px;
    top: 68%;
    left: -10%;

    -webkit-transition: all 1.1s ease;
    transition: all 1.1s ease;

    &.nite {
      background: repeating-radial-gradient(
          ellipse farthest-corner at center -400%,
          #7fa1bb 30%,
          #1d425a 90%
        )
        repeat scroll 0 0 #1d425a;
    }
  }

  /* day */
  .day,
  .circle {
    height: 30px;
    -webkit-transition: all 0.4s cubic-bezier(0.54, 1.6, 0.5, 1);
    transition: all 0.4s cubic-bezier(0.54, 1.6, 0.5, 1);
  }

  .day {
    width: 60px;
    margin: 20px auto;
    border: 2px solid #da8508;
    border-radius: 27px;
    background: #da8508;
    position: relative;

    &.nite {
      border-color: #1c3958 !important;
      background: #1c3958 !important;

      .circle {
        margin-left: 55%;
        background: #e9e5d5;
      }
    }
  }

  .circle {
    margin-top: 5%;
    margin-left: 5%;
    width: 40%;
    height: 80%;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25),
      0 0 0 1px rgba(26, 53, 71, 0.07);
    background: #e9e5d5;
  }
`;
