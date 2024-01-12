const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CONTENT":
      return {
        ...state,
        titleValue: action.payload.titleValue,
        contentValue: action.payload.contentValue,
        id: action.payload.id,
        isEnableEdit: action.payload.isEnableEdit,
        isEnableUpdate: action.payload.isEnableUpdate,
      };
    case "ADD_NEW_CONTENT":
      return {
        ...state,
        titleValue: "",
        contentValue: "",
        id: null,
        isEnableEdit: true,
        isEnableUpdate: false,
      };
    default:
      throw new Error(`不存在的 action type: ${action.type}`);
  }
};

export { reducer };
