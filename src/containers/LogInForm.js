import { Div, Icon, Input } from "atomize";
import styled from "styled-components";
import { Button } from "../components";

const Container = styled(Div)`
  flex-direction: column;
  border-radius: 12px;
`;

function LogInForm() {
  const handleLogIn = (ev) => {
    ev.preventDefault();
    const payload = {
      username: ev.target.username.value,
      password: ev.target.password.value,
    };
    console.log(payload);
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
        >
          <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }} />
        </Button>
      </form>
    </Container>
  );
}

export default LogInForm;
