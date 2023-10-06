import React from "react";
import Button from "./Button";

const Section3 = () => {
  return (
    <div className="sectionContainer3">
      <div className="sectionContent3 flexCenterColumn">
        <div className="sectionContentBox3 flexCenterRow">
        <img src="./images/section3.png" alt="" />
        <div className="flexCenterColumn">
      <p className="textCenter textLittleBold textSmall textColor3">¿Cansado de no entender a los americanos?</p>
      <p className="textCenter textLittleBold textSmall textColor3">¿Pierdes oportunidades por no saber inglés?</p>
      <p className="textCenter textLittleBold textSmall textColor3">¿Ya intentaste aprender y sin resultados?</p>
      <p className="textCenter textLittleBold textSmall textColor3">¿Piensas que nunca lo lograrás?</p>
      <h1 className="textColor textMediumHighlight textMediumBold">NO PASES MÁS VERGUENZA!</h1>
      <h1 className="textColor textMediumHighlight textMediumBold">HABLA INGLÉS COMO UN NATIVO!</h1>
      
      <video poster="./images/poster.png" className="landingCardSelected" controls width="640" height="360">
        <source src="./images/video.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
        </div>
        </div>
      <div className="flexCenterColumn">
      <h1 className="textBold textMediumHighlight textColor">CURSO PRESENCIAL EN SALA + ONLINE EN VIVO</h1>
      <h1 className="textBold textMediumHighlight textColor">AVALADO POR UNIVERSIDADES!</h1>
      <Button/>
      </div>
      </div>

    </div>
  );
};

export default Section3;
