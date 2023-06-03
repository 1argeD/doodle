import React from "react";
import styled from "styled-components";

const GlobalLayout = ({ children }) => {
  return <StGlobalLayoutWrap>{children}</StGlobalLayoutWrap>;
};

export default GlobalLayout;

const StGlobalLayoutWrap = styled.div`
  width: 1760px;
  margin: 0 auto;
  @media (max-width: 767px) {
    /* Mobile */
    width: calc(100% - 2.8rem);
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    /* Tablet */
    width: calc(100% - 26rem);
  }

  @media (min-width: 1280px) {
    /* Desktop */
    width: calc(100% - 16rem);
  }
`;