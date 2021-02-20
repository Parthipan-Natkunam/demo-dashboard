import { Row, Col, Text } from "atomize";
import styled from "styled-components";
import LogInForm from "../containers/LogInForm";

const BoxedRow = styled(Row)`
  width: 100vw;
  box-sizing: border-box;
  background: url("./img/bgImg.jpg") no-repeat top left/cover;
`;

const FullPageColumn = styled(Col)`
  height: 100vh;
  box-sizing: border-box;
  flex-direction: column;
  background: rgb(0 187 152 / 45%);
`;

const BrandText = styled(Text)`
  border-radius: 12px;
`;

export function LogIn() {
  return (
    <BoxedRow m={0}>
      <FullPageColumn d="flex" align="center" justify="center">
        <BrandText
          tag="h1"
          textSize="display1"
          m={{ b: "2rem" }}
          p="0.5rem"
          textColor="white"
        >
          Demo Board
        </BrandText>
        <LogInForm />
      </FullPageColumn>
    </BoxedRow>
  );
}
