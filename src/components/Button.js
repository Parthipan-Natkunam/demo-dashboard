import { Button as AtomicBtn } from "atomize";

const Button = ({ buttonText, clickHandler, children, margin }) => {
  return (
    <AtomicBtn
      suffix={children ?? null}
      shadow="2"
      hoverShadow="3"
      rounded="circle"
      p={"1.5rem"}
      m={margin}
      onClick={clickHandler}
    >
      {buttonText}
    </AtomicBtn>
  );
};

export default Button;
