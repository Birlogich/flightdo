import { ReactComponent as MiniLogo } from "../../assets/images/logos/Minilogo.svg";
import { Menu } from "../UI/Menu/Menu";

export const Header = () => {
  return (
    <div className="pt-[30px] flex justify-between items-center mb-[40px]">
      <MiniLogo />
      <Menu />
    </div>
  );
};
