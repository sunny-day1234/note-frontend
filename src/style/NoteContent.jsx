import styled from "styled-components";
import { SMALL_DEVICE } from "../constant/device";

const NoteContentWrapper = styled.div`
  width: 70%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  .content-box {
    width: 80%;
    margin: auto;
    text-align: left;
    word-wrap: break-word;
  }

  input {
    height: 25px;
    width: 100%;
  }

  textarea {
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
  }

  .subtitile {
    font-weight: bold;
  }

  @media (max-width: ${SMALL_DEVICE}px) {
    width: 100%;
  }
`;

export { NoteContentWrapper };
