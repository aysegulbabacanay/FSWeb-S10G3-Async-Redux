import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { saveAktivite } from "./reduxStuff";




export default function Main() {
  const [aktivite, setAktivite] = useState("");

  const [participants, setParticipants] = useState("")


  const url = `https://www.boredapi.com/api/activity?participants=`;

  function aktiviteGetir(kisi) {
    axios
      .get(url+kisi)
      .then(res => {
        console.log(res.data)
        setAktivite(res.data.activity)

      })
  }

  const myDispatch = useDispatch();

  function handleKaydet() {
    myDispatch(saveAktivite(aktivite));
  }

  useEffect(() => {
    aktiviteGetir(1);
  }, []);

  const handleChange = (e) => {

    setParticipants(e.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    aktiviteGetir(participants);

  }
  return (
    <div>
      <form onSubmit={handleSubmit} >


        <p>Aktivite kaç kişilik olsun?</p>

        <input name="kisi" type='text' value={participants} onChange={handleChange}
        />

        <button>Bul</button>

      </form>




      <button onClick={handleKaydet}>Bunu kaydet</button>
    </div>
  )
}