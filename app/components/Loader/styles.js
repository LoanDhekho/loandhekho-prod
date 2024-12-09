import styled from "styled-components";

// export const LoaderWrapper = styled.div`
//   position: fixed;
//   top: 0; 
//   left: 0;
//   width: 100vw; /* Full viewport width */
//   height: 100vh; /* Full viewport height */
//   display: flex; /* Flexbox for centering */
//   justify-content: center; /* Horizontally center */
//   align-items: center; /* Vertically center */
//   background-color: rgba(255, 255, 255, 0.9); /* Optional backdrop */
//   z-index: 9999; /* Make sure it stays on top */
// `;

export const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  border: 2px solid red; /* Debugging border */
`;
