import axios from "axios";

const addNoteApi = async (title = "", content = "") => {
  try {
    const response = await axios.post("/api/note", { title, content });
    return response.data;
  } catch (e) {
    console.log("backend fail");
  }
};

const updateNoteApi = async (id, title = "", content = "") => {
  try {
    const response = await axios.put(`/api/note/${id}`, { title, content });
    return response.data;
  } catch (e) {
    console.log("backend fail");
  }
};

const deleteNoteApi = async (id) => {
  try {
    const response = await axios.delete(`/api/note/${id}`);
    return response.data;
  } catch (e) {
    console.log("backend fail");
  }
};

const getNoteApi = async (id) => {
  try {
    const response = await axios.get(`/api/note/${id}`);
    return response.data;
  } catch (e) {
    console.log("backend fail");
  }
};

export { addNoteApi, getNoteApi, updateNoteApi, deleteNoteApi };
