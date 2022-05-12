import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

// locks all scrolling
export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

// release body from lock, allow scrolling again
export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;
export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  background-color: black;
  z-index: 999;

  :after {
    content: "";
    position: absolute;
    top: 50vh;
    left: 50vw;
    background-image: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -150px;
    margin-left: -75px;
    width: 150px;
    height: 150px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  margin-top: -100px;
  margin-left: -22px;
`;
