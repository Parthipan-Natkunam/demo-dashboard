import { Row, Div } from "atomize";
import styled from "styled-components";
import SideBar from "../containers/Sidebar";

const BoxedRow = styled(Row)`
  width: 100%;
  height: 100vh;
`;

const MainContent = styled(Div)`
  flex: 1 1 calc(100vw - 265px);
`;

function Dashboard() {
  return (
    <BoxedRow m={0} flexDir={{ xs: "column", sm: "row" }}>
      <SideBar />
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
