import styled from "styled-components"

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffc928;
  position: absolute;
  top: 300px;
  left: -100px;
  z-index: 2;
  animation: circle 15s linear alternate infinite;

  @keyframes circle {
      to{
          transform: translate(200vw, -15vh);
      }
  }
`;

export const Circle1 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ffc928;
  position: absolute;
  top: 300px;
  left: -100px;
  z-index: 2;
  opacity: 0.5;
  animation: circle 20s linear alternate infinite;

  @keyframes circle {
      to{
          transform: translate(150vw, -50vh);
      }
  }

`;

export const Circle2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffc928;
  position: absolute;
  top: 300px;
  left: -100px;
  z-index: 2;
  opacity: 0.7;
  animation: circle 10s linear alternate infinite;

  @keyframes circle {
      to{
          transform: translate(110vw, -80vh);
      }
  }
`;









