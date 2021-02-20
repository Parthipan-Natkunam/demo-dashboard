import { Row, Col, Div } from "atomize";
import styled from "styled-components";

const BoxedRow = styled(Row)`
  width: 100%;
  height: 100vh;
`;

const SideBar = styled(Div)`
  flex: 0 0 265px;
`;

const MainContent = styled(Div)`
  flex: 1 1 calc(100vw - 265px);
`;

function Dashboard() {
  return (
    <BoxedRow m={0} flexDir={{ xs: "column", sm: "row" }}>
      <SideBar bg="success900" maxH={{ xs: "60px", sm: "100%" }} p="0.5rem">
        <Div>Sidebar</Div>
      </SideBar>
      <MainContent
        bg="gray400"
        maxH={{ xs: "calc(100% - 60px)", sm: "100%" }}
        p="0.5rem"
      >
        <Div>main content</Div>
      </MainContent>
    </BoxedRow>
  );
}

export default Dashboard;
