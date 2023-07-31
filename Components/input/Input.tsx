import Image, { StaticImageData } from "next/image";
import { InputIconWrapper, InputStyled, InputBaseStyled } from "./InputStyled";

type Props = {
  icon: StaticImageData;
  placeholder?: string;
  width: string;
  height: string;
  type?: string;
};

export const Input: React.FC<Props> = (props) => {
  return (
    <InputStyled>
      <InputIconWrapper>
        <Image src={props.icon} alt="" className="search_icon" />
      </InputIconWrapper>
      <InputBaseStyled
        type={props.type}
        sx={{ maxWidth: props.width, width: props.width, height: props.height }}
        placeholder={props.placeholder}
      />
    </InputStyled>
  );
};
