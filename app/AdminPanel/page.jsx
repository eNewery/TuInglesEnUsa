"use client"
import React, { useState, useEffect } from "react";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminPanel = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("")
    const handleLogin = () => {
      // Verificar las credenciales (hardcodeadas en este ejemplo)
      if (username === 'Admin' && password === 'anglohispana') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setError("Contraseña Erronea")
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername('');
      setPassword('');
    };
    async function obtenerUsuarios() {
        const usuariosRef = collection(db, 'suscripciones');
        
        try {
          const querySnapshot = await getDocs(usuariosRef);
          const datos = []
          querySnapshot.forEach((doc) => {
            
            // Acceder a los datos de cada documento
            const data = doc.data();
            datos.push(data)
        });
        setData(datos);
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
      }
      useEffect(() => {
        
         obtenerUsuarios()   
        
      }, [])
      
  return (
    isLoggedIn ? (
  <div className="adminPanelContainer flexCenterColumn">
        <button className="buttonLogOut" onClick={handleLogout}>Cerrar sesión</button>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Arizonia&family=Bebas+Neue&family=Caveat&family=Cedarville+Cursive&family=Jost&family=Lobster&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Oswald:wght@200;300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <div className="adminPanel">
    <h1 className="textHighlight textColor2">Suscripciones recientes:</h1>
    <ul className="adminPanelList">
      <li className="adminPanelListGroup">
        <p className="textColor3 textCenter textMediumBold">Nombre y apellido</p>
        <p className="textColor3 textCenter textMediumBold">Email</p>
        <p className="textColor3 textCenter textMediumBold">Teléfono</p>
        <p className="textColor3 textCenter textMediumBold">ZIP Code</p>
      </li>
      {data?.map(item => (
<li className="adminPanelListGroup">
<p className="textColor3 textCenter">{item.Nombre}</p>
<p className="textColor3 textCenter">{item.Email}</p>
<p className="textColor3 textCenter">{item.Telefono}</p>
<p className="textColor3 textCenter">{item.ZIP}</p>
</li>
      ))}
     
    </ul>
  </div>
</div>

    ) : (
      <div className="adminPanelLogin">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Arizonia&family=Bebas+Neue&family=Caveat&family=Cedarville+Cursive&family=Jost&family=Lobster&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Oswald:wght@200;300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
        <h1 className="textMediumHighlight">Iniciar Sesión</h1>
        <input
        className="inputFormLogin"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        className="inputFormLogin"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="buttonLogIn" onClick={handleLogin}>Iniciar sesión</button>
  <p className="textColor4 textSmall textMediumBold">{error}</p>
      </div>
    )
);
}


export default AdminPanel;
