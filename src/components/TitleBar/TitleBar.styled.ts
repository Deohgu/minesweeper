import styled from "styled-components";

export const TitleBarWrapper = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 3px;
  background: linear-gradient(
    90deg,
    rgba(2, 21, 167, 1) 56%,
    rgba(67, 157, 241, 1) 97%
  );
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MineIcon = styled.img`
  width: 18px;
  margin-right: 5px;
`;

export const WindowsIcons = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
  border: 2px outset hsl(0deg 0% 92%);
  background-color: hsl(0deg 0% 74%);
  image-rendering: unset;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &:active {
    border: 2px inset hsl(0deg 0% 92%);
  }
`;

export const Title = styled.p``;
