import { HeaderWrapper } from "../style/Header";
import menu from "../icon/menu.svg";

function Header({ isShowSideItem, setIsShowSideItem }) {
  return (
    <HeaderWrapper>
      <img
        src={menu}
        onClick={() => {
          setIsShowSideItem(!isShowSideItem);
        }}
      ></img>
      <p>Make a note</p>
    </HeaderWrapper>
  );
}

export default Header;
