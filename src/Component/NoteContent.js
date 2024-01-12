import { NoteContentWrapper } from "../style/NoteContent";
import { ButtonWrapper } from "../style/common/Button";
import { addNoteApi, updateNoteApi } from "../api/crud";
import { SECCESS } from "../constant/api_response";

function NoteContent({
  addNewSideItem,
  changeContentDisplay,
  changeSideItemTitle,
  contentState,
  dispatch,
}) {
  const handleInputChange = (e) => {
    dispatch({
      type: "CHANGE_CONTENT",
      payload: { ...contentState, titleValue: e.target.value },
    });
  };

  const handleTextAreaChange = (e) => {
    dispatch({
      type: "CHANGE_CONTENT",
      payload: { ...contentState, contentValue: e.target.value },
    });
  };

  const handleAdd = async () => {
    const { status, id } = await addNoteApi(
      contentState.titleValue,
      contentState.contentValue
    );
    if (status === SECCESS) {
      addNewSideItem(id, contentState.titleValue);
      changeContentDisplay(id);
    }
  };

  const handleUpdate = async () => {
    const { status } = await updateNoteApi(
      contentState.id,
      contentState.titleValue,
      contentState.contentValue
    );
    if (status === SECCESS) {
      dispatch({
        type: "CHANGE_CONTENT",
        payload: {
          ...contentState,
          isEnableEdit: false,
        },
      });
      changeSideItemTitle(contentState.id, contentState.titleValue);
    }
  };

  const handleEdit = () => {
    dispatch({
      type: "CHANGE_CONTENT",
      payload: {
        ...contentState,
        isEnableEdit: true,
        isEnableUpdate: true,
      },
    });
  };

  return (
    <NoteContentWrapper>
      {contentState.isEnableEdit ? (
        <div className="content-box">
          <p className="subtitile">Title : </p>
          <input
            type="text"
            value={contentState.titleValue}
            onChange={handleInputChange}
          />
          <p className="subtitile">Content : </p>
          <textarea
            type="text"
            value={contentState.contentValue}
            onChange={handleTextAreaChange}
          />
          {contentState.isEnableUpdate ? (
            <ButtonWrapper onClick={handleUpdate}>Update</ButtonWrapper>
          ) : (
            <ButtonWrapper onClick={handleAdd}>Add</ButtonWrapper>
          )}
        </div>
      ) : (
        <div className="content-box">
          <p className="subtitile">Title : </p>
          <p>{contentState.titleValue}</p>
          <p className="subtitile">Content : </p>
          <p>{contentState.contentValue}</p>
          <ButtonWrapper onClick={handleEdit}>Edit</ButtonWrapper>
        </div>
      )}
    </NoteContentWrapper>
  );
}

export default NoteContent;
