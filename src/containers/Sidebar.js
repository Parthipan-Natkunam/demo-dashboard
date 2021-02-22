import { Div, Text, Icon } from "atomize";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../api";
import { resetToken, toggleLoading, selectisLoading } from "../store/appSlice";
import { selectCurrentTab, setCurrentTab } from "../store/dashboardSlice";

const SideBar = styled(Div)`
  flex: 0 0 160px;
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
    &.active {
      border-bottom: 3px solid #fff;
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
        border-bottom: none;
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

function Sidebar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);
  const currentTab = useSelector(selectCurrentTab);

  const handleLogout = () => {
    dispatch(toggleLoading(true));
    auth
      .logout()
      .then(() => {
        dispatch(resetToken());
        dispatch(toggleLoading(false));
        history.push("/");
      })
      .catch(() => {
        dispatch(toggleLoading(false));
      });
  };

  const handleTabChange = (tabId) => {
    dispatch(setCurrentTab(tabId));
  };

  return (
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
        <li
          className={currentTab === 0 ? "active" : ""}
          onClick={() => handleTabChange(0)}
        >
          <Icon name="FolderSolid" color="inherit" size="30px" />
          <Text tag="span" textColor="inherit">
            Data
          </Text>
        </li>
        <li
          className={currentTab === 1 ? "active" : ""}
          onClick={() => handleTabChange(1)}
        >
          <Icon name="UserSolid" color="inherit" size="30px" />
          <Text tag="span" textColor="inherit">
            Profile
          </Text>
        </li>
        <li onClick={handleLogout} role="button">
          <Icon
            name={isLoading ? "Loading" : "Logout"}
            color="inherit"
            size="30px"
          />
          <Text tag="span" textColor="inherit">
            Logout
          </Text>
        </li>
      </NavList>
    </SideBar>
  );
}

export default Sidebar;
