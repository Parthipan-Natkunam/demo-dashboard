import { Row, Div, Text, Icon } from "atomize";
import styled from "styled-components";

const BoxedRow = styled(Row)`
  width: 100%;
  height: 100vh;
`;

const SideBar = styled(Div)`
  flex: 0 0 160px;
`;

const MainContent = styled(Div)`
  flex: 1 1 calc(100vw - 265px);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  & li {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    & > span {
      color: #fff;
    }
    & > svg {
      fill: #fff;
    }
    &:not(:first-child):not(:last-child) {
      margin: 0 1rem;
    }
    @media (min-width: 576px) {
      flex-direction: row;
      color: #000;
      padding: 0.5rem;
      &.active {
        border-radius: 9px 0 0 9px;
        background: rgb(225, 228, 232);
        & > span {
          color: #000;
        }
        & > svg {
          fill: #000;
        }
      }
      & > * {
        margin: 0 8px;
      }
      &:not(:first-child):not(:last-child) {
        margin: 0;
      }
      &:last-child {
        position: fixed;
        bottom: 1rem;
      }
    }
  }
  @media (min-width: 576px) {
    display: block;
    padding: 0;
    width: 100%;
    justify-content: end;
    margin-left: -0.25rem;
    margin-left: 0.5rem;
  }
`;

function Dashboard() {
  return (
    <BoxedRow m={0} flexDir={{ xs: "column", sm: "row" }}>
      <SideBar
        bg="success900"
        maxH={{ xs: "60px", sm: "100%" }}
        p="0.5rem"
        d="flex"
        align={{ xs: "center", sm: "flex-start" }}
        flexDir={{ xs: "row", sm: "column" }}
        justify={{ xs: "space-between", sm: "flex-start" }}
      >
        <Div d="inline-block" m={{ sm: "0 auto 1rem auto", xs: 0 }}>
          <Text tag="span" textSize="title" textColor="white">
            Demo Board
          </Text>
        </Div>
        <NavList>
          <li className={"active"}>
            <Icon name="FolderSolid" color="inherit" size="30px" />
            <Text tag="span" textColor="inherit">
              Data
            </Text>
          </li>
          <li>
            <Icon name="UserSolid" color="inherit" size="30px" />
            <Text tag="span" textColor="inherit">
              Profile
            </Text>
          </li>
          <li>
            <Icon name="Logout" color="inherit" size="30px" />
            <Text tag="span" textColor="inherit">
              Logout
            </Text>
          </li>
        </NavList>
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
