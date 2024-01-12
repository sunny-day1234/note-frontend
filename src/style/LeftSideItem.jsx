import styled from "styled-components";
import { SMALL_DEVICE } from "../constant/device";

const LeftSideItemWrapper = styled.div`
  width: 30%;
  height: calc(100vh - 70px);
  cursor: pointer;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.04);

  .item {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 7px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  p {
    margin-left: 10px;
    color: black;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .add-note {
    &:hover {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 700;
    }
  }

  @media (max-width: ${SMALL_DEVICE}px) {
    width: 100%;
  }
`;

export { LeftSideItemWrapper };
