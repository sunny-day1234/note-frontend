import { LeftSideItemWrapper } from "../style/LeftSideItem";
import { ButtonWrapper } from "../style/common/Button";

function LeftSideItem({
  sideItemData,
  changeContentDisplay,
  deleteItem,
  addNewNote,
}) {
  return (
    <LeftSideItemWrapper>
      {Object.values(sideItemData).map((item) => {
        return (
          <div
            key={item.id}
            className="item"
            onClick={() => {
              changeContentDisplay(item.id);
            }}
          >
            <p>{item.title}</p>
            <ButtonWrapper
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item.id);
              }}
            >
              delete
            </ButtonWrapper>
          </div>
        );
      })}
      <p className="add-note" onClick={addNewNote}>
        + Add a note
      </p>
    </LeftSideItemWrapper>
  );
}

export default LeftSideItem;
