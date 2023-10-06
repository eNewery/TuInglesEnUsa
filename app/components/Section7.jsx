import { useRouter } from "next/navigation";
import React from "react";

const Section7 = () => {
    const router = useRouter()
  return (
    <div className="sectionContainer7 flexCenterColumn">
      <div className="sectionContent7 flexCenterColumn">
        <h2 className="textColor3 textMediumBold textMediumHighlight">
          TENEMOS FILIALES Y OFICINAS EN TODO EL PAÍS
        </h2>
        <h1 className="textBold textColor3 textHighlight">DANOS TU ZIP CODE!</h1>
      <img src="./images/mapa.png" alt="" />
      <div className="flexCenterColumn">
        <p className="textLittleBold textSmall textColor3">No pedimos papeles ni burocracias!</p>
        <p className="textLittleBold textSmall textColor3">Ganamos 15 premios internacionales!</p>
        <p className="textLittleBold textSmall textColor3">27.000 graduados ya son bilingües!</p>
        <p className="textLittleBold textSmall textColor3">16 años enseñando inglés y español!</p>
        <p className="textLittleBold textSmall textColor3">Elegidos por empresas top de USA!</p>
      </div>
      <h1 onClick={() => router.push("#Inicio")} className="pointer textColor3 textHighlight textBold textCenter">CONSULTANOS HOY MISMO!</h1>
<div  className="flexCenterRow rrss">
      <img src="./images/wsp.png" alt="" />
<h1 className="textColor3 textHighlight textBold">713 384 3980</h1>
      <img src="./images/wsp.png" alt="" />
</div>


      </div>
    </div>
  );
};

export default Section7;
