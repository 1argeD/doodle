import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function LoginButton({
  content,
  icon,
  size,
  onClick,
  mobileWidth,
  width,
  mobileHeight,
  height,
  fontWeight,
  fontSize,
  mobileFontSize,
  color,
  padding = "1rem",
}) {
  return (
    <Wrapper onClick={onClick}>
      {icon && <Icon icon={icon} size={size} />}
      {content && (
        <Btn
          size={size}
          fontWeight={fontWeight}
          width={width}
          mobileWidth={mobileWidth}
          height={height}
          mobileHeight={mobileHeight}
          fontSize={fontSize}
          mobileFontSize={mobileFontSize}
          color={color}
          padding={padding}
        >
          {content}
        </Btn>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => props.width};
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.mainColor};
  padding: 1rem 2rem;
`;

const Btn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) =>
    props.color === "subColor" ? props.theme.mainColor : props.theme.white};
  border-radius: 0.5rem;
  transition: ${(props) => props.theme.transition};
  border: ${(props) =>
    props.color === "subColor" ? `1px solid ${props.theme.mainColor}` : "none"};
  background-color: ${(props) =>
    props.color === "subColor"
      ? props.theme.white
      : props.color === "gray"
      ? props.theme.gray
      : props.theme.mainColor};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  @media (max-width: 767px) {
    /* Mobile */
    width: ${(props) => props.mobileWidth};
    height: ${(props) => props.mobileHeight};
    border-radius: 0.5rem;
    font-size: ${(props) => props.mobileFontSize};
  }
`;

export default LoginButton;
