import { memo } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = memo((props) => {
  const { children, onClick } = props;
  console.log("2button");
  return <SButton onClick={onClick}>{children}</SButton>;
});

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
