import { Div, Icon, Input } from "atomize";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components";
import { auth } from "../api";
import {
  setToken,
  resetToken,
  setToast,
  resetToast,
  toggleLoading,
  selectisLoading,
} from "../store/appSlice";

const Container = styled(Div)`
  flex-direction: column;
  border-radius: 12px;
`;

function LogInForm() {
  const isLoading = useSelector(selectisLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogIn = (ev) => {
    ev.preventDefault();
    if (!ev.target.username.value || !ev.target.password.value || isLoading)
      return;
    dispatch(toggleLoading(true));
    const credentials = {
      username: ev.target.username.value,
      password: ev.target.password.value,
    };
    auth
      .login(credentials)
      .then(({ token }) => {
        dispatch(setToken(token));
        dispatch(resetToast());
        dispatch(toggleLoading(false));
        history.push("/dashboard");
      })
      .catch((error) => {
        dispatch(resetToken());
        dispatch(setToast({ type: "error", message: error }));
        dispatch(toggleLoading(false));
      });
  };

  return (
    <Container d="flex" justify="space-between" bg="white" p="1rem" shadow="3">
      <form onSubmit={handleLogIn}>
        <Input
          placeholder="User Name"
          name="username"
          p={{ x: "2.5rem" }}
          m={{ y: "1.5rem" }}
          prefix={
            <Icon
              name="UserSolid"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          p={{ x: "2.5rem" }}
          m={{ t: 0, b: "2.5rem" }}
          prefix={
            <Icon
              name="EyeSolid"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Button
          buttonText="LogIn"
          iconName="LongRight"
          type="submit"
          margin={{ l: "auto" }}
          disabled={isLoading}
        >
          <Icon
            name={isLoading ? "Loading" : "LongRight"}
            size="16px"
            color="white"
            m={{ l: "1rem" }}
          />
        </Button>
      </form>
    </Container>
  );
}

export default LogInForm;
