import { Row, Div } from "atomize";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCurrentTab } from "../store/dashboardSlice";
import SideBar from "../containers/Sidebar";
import DataTab from "../containers/DataDisplay";
import ProfileTab from "../containers/Profile";

const BoxedRow = styled(Row)`
  width: 100%;
  height: 100vh;
`;

const MainContent = styled(Div)`
  flex: 1 1 calc(100vw - 265px);
`;

const TabContent = ({ tabId }) => {
  switch (tabId) {
    case 0:
      return <DataTab />;
    case 1:
      return <ProfileTab />;
    default:
      return null;
  }
};

function Dashboard() {
  const currentTab = useSelector(selectCurrentTab);

  return (
    <BoxedRow m={0} flexDir={{ xs: "column", sm: "row" }}>
      <SideBar />
      <MainContent
        bg="gray400"
        maxH={{ xs: "calc(100% - 60px)", sm: "100%" }}
        p="0.5rem"
      >
        <TabContent tabId={currentTab} />
      </MainContent>
    </BoxedRow>
  );
}

export default Dashboard;
