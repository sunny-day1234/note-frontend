import { useEffect, useState, useReducer } from "react";
import Header from "./Header";
import LeftSideItem from "./LeftSideItem";
import NoteContent from "./NoteContent";
import { getNoteApi, deleteNoteApi } from "../api/crud";
import { AppWrapper, FlexWrapper } from "../style/App";
import { reducer } from "../reducer/content";
import { SMALL_DEVICE } from "../constant/device";
import { SECCESS } from "../constant/api_response";

function App() {
  const [isShowSideItem, setIsShowSideItem] = useState(true);
  const [sideItemData, setSideItemData] = useState({});
  const [contentState, dispatch] = useReducer(reducer, {
    titleValue: "",
    contentValue: "",
    id: null,
    isEnableEdit: true,
    isEnableUpdate: false,
  });

  useEffect(() => {
    const reportWindowSize = () => {
      if (window.innerWidth < SMALL_DEVICE) {
        setIsShowSideItem(false);
      } else {
        setIsShowSideItem(true);
      }
    };
    reportWindowSize();
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  const addNewSideItem = (id, title) => {
    setSideItemData({ ...sideItemData, [id]: { id, title } });
  };

  const changeSideItemTitle = (id, title) => {
    const copyData = { ...sideItemData };
    copyData[id] = { id, title };
    setSideItemData(copyData);
  };

  const changeContentDisplay = async (id) => {
    const data = await getNoteApi(id);
    dispatch({
      type: "CHANGE_CONTENT",
      payload: {
        ...contentState,
        titleValue: data.title,
        contentValue: data.content,
        id: data.id,
        isEnableEdit: false,
      },
    });
  };

  const addNewNote = () => {
    dispatch({
      type: "ADD_NEW_CONTENT",
    });
  };

  const deleteItem = async (id) => {
    const data = await deleteNoteApi(id);
    const { status } = data;
    if (status === SECCESS) {
      const copyData = { ...sideItemData };
      delete copyData[id];
      setSideItemData(copyData);
      if (Number(id) === Number(contentState.id)) {
        addNewNote();
      }
    }
  };

  return (
    <AppWrapper>
      <Header
        isShowSideItem={isShowSideItem}
        setIsShowSideItem={setIsShowSideItem}
      />
      <FlexWrapper>
        {isShowSideItem && (
          <LeftSideItem
            sideItemData={sideItemData}
            changeContentDisplay={changeContentDisplay}
            deleteItem={deleteItem}
            addNewNote={addNewNote}
          />
        )}
        <NoteContent
          addNewSideItem={addNewSideItem}
          changeContentDisplay={changeContentDisplay}
          changeSideItemTitle={changeSideItemTitle}
          contentState={contentState}
          dispatch={dispatch}
        />
      </FlexWrapper>
    </AppWrapper>
  );
}

export default App;
