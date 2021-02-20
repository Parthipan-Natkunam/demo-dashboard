import { Button as AtomicBtn } from "atomize";

const Button = ({ buttonText, clickHandler, children }) => {
  return (
    <AtomicBtn
      suffix={children ?? null}
      shadow="2"
      hoverShadow="3"
      p={"1.5rem"}
      onClick={clickHandler}
    >
      {buttonText}
    </AtomicBtn>
  );
};

export default Button;
