import { createStore } from "redux";

const baslangicVerisi = {
  saveAktivite: []
};

const SAVE = "save";
const DELETE = "dislike";


// initial state
// reducer

const myReducer = (state = baslangicVerisi, eylem) => {
  switch (eylem.type) {
    case SAVE:
      return {
        ...state,
        saveAktivite: [...state.saveAktivite, eylem.payload]
      }
      case DELETE:
        const newLikeds = state.saveAktivite.filter(item => item.id !== eylem.payload);
        return {
          ...state,
          saveAktivite: newLikeds
        }
  
    default:
      return state;
  }
}

export function saveAktivite(aktivite) {
  return {
    type: SAVE,
    payload: {
      ...aktivite,id: Date.now()
      
    }
  }
}
export function deleteAktivite(aktiviteId) {
    return {
      type: DELETE,
      payload: aktiviteId
    }
  }





const depo = createStore(myReducer);

export default depo;