import { Div, Icon, Text } from "atomize";
import styled from "styled-components";

const ToastContainer = styled(Div)`
  border-radius: 12px;
`;

function ToastElement({ iconName, iconColor, message }) {
  return (
    <ToastContainer
      bg="dark"
      p={{ x: "1rem", y: "0.5rem" }}
      pos="fixed"
      d="flex"
      bottom="10px"
      left="0.5rem"
      align="center"
      justify="center"
    >
      <Icon name={iconName} color={iconColor} size="20px" m={{ r: "0.5rem" }} />
      <Text tag="span" textSize="body" textColor="white">
        {message}
      </Text>
    </ToastContainer>
  );
}

function Toast({ type, message }) {
  switch (type.toUpperCase()) {
    case "INFO":
      return (
        <ToastElement
          iconName="InfoSolid"
          iconColor="info400"
          message={message}
        />
      );
    case "SUCCESS":
      return (
        <ToastElement
          iconName="Success"
          iconColor="success800"
          message={message}
        />
      );
    case "ERROR":
      return (
        <ToastElement
          iconName="AlertSolid"
          iconColor="danger800"
          message={message}
        />
      );
    default:
      return null;
  }
}

export default Toast;
