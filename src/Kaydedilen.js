import { useDispatch,useSelector } from 'react-redux';
import { deleteAktivite } from "./reduxStuff";
import React from 'react';



export default function Saved() {
  const saveAktivite = useSelector(store => store.saveAktivite);
 
  const dispatch = useDispatch();
  
console.log(saveAktivite)

  return (
   
        <ul className="liked-list">
      {saveAktivite.map((item) => (
        <li key={item.id}>
          {item.activity}
          <button onClick={() => dispatch(deleteAktivite(item.id))}>Delete</button>
        </li>
      ))}

      
        
      </ul>
   
  )
}