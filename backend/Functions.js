import {
  addDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

export const DeleteAllDocuments = async (col) => {
  const res = await getDocs(col);
  res.docs.map((doc) => {
    deleteDoc(doc.ref);
  });
};
export const AddDocumentToCollection = async (col, data) => {
  await addDoc(col, data);
};
export const getAllDocuments = async (col) => {
  const res = await getDocs(col);
  var data = [];
  res.docs.map((doc) => {
    data.push(doc.data());
  });

  return data;
};
