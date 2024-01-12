import styled from "styled-components";
import { SMALL_DEVICE } from "../constant/device";

const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: rgba(26, 26, 18, 0.9);
  color: #fff;
  line-height: 70px;
  padding-left: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;

  img {
    display: none;
    width: 40px;
    margin-right: 10px;
    background-color: white;

    @media (max-width: ${SMALL_DEVICE}px) {
      display: block;
    }
  }
`;

export { HeaderWrapper };
