"use client"
import { updateDoc, doc, arrayUnion, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../components/firebase";
import { useRouter } from "next/navigation";
const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const date = Date.now()
    const newPost = {
      Nombre: name,
      Email: email,
      Telefono:phone,
      ZIP:zip
  
    };
    try{
      const docRef = doc(db, "suscripciones", date.toString())
      await setDoc(docRef, newPost)
      console.log("Documento seteado.")
      router.push("/")
    }
    catch(e){
console.log("Error:", e)
    }
  }
  return (
    <div className="formContainer flexWrap flexCenterRow">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Arizonia&family=Bebas+Neue&family=Caveat&family=Cedarville+Cursive&family=Jost&family=Lobster&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="formSection1 formSection flexCenterColumn">
        <h1 className="textBold">Conócenos</h1>
        <div className="p1 formRRSS flexStartColumn">
          <div className="flexCenterRow rrssItem textMediumBold">
            <img src="./images/minilogo.png" alt="" />
            Teléfono <p className="textColor3 pointer textUnderline">+15642127380</p>
          </div>
          <div className="flexCenterRow rrssItem textMediumBold">
            <img src="./images/minilogo2.png" alt="" />
            Oficina Central<p className="textColor3">North Austin
14205 N Mopac Expy, Austin, TX 78728, EE. UU</p>
          </div>
          <div className="flexCenterRow rrssItem textMediumBold">
            <img src="./images/minilogo3.png" alt="" />
            Contacto <p className="textColor3">anglouniversidad@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="formSection">
        <img className="backForm" src="./images/backform.png" alt="" />
      </section>
      <section className="formSection formSection3">
    <h1 className="textMediumBold">Contáctanos</h1>
    <form onSubmit={(e) => handleSubmit(e)} className="inputGroupContainer">
    <div className="inputGroup">
        <label htmlFor="">Nombre Completo</label>
        <input required onChange={(e) => setName(e.target.value)} placeholder="Ingresa tu Nombre" type="text" />
    </div>
    <div className="inputGroup">
        <label htmlFor="">Email</label>
        <input required onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu E-Mail" type="text" />
    </div>
    <div className="inputGroup">
        <label htmlFor="">Teléfono</label>
        <input required onChange={(e) => setPhone(e.target.value)} placeholder="Ingresa tu Teléfono" type="text" />
    </div>
    <div className="inputGroup lastInput">
        <label htmlFor="">ZIP Code</label>
        <input required onChange={(e) => setZip(e.target.value)} placeholder="Ingresa tu ZIP Code" type="text" />
    </div>
    <button type="submit">Enviar</button>
    </form>
      </section>
    </div>
  );
};

export default Form;
