import React from "react";
import Button from "./Button";

const Section2 = () => {
  return (
    <div className="sectionContainer2 flexCenterColumn">
      <div className="sectionContent2 flexCenterColumn">
        <div className="flexCenterColumn">
          <p className="textMediumBold textCenter textMediumHighlight">
            <span className="textColor3 textMediumBold">Aprende inglés</span> en
            sala de 12!
          </p>
          <p className="textMediumBold textCenter textMediumHighlight">
            <span className="textColor3 textMediumBold">Presencial!</span> y
            gratis clases en línea 24/7
          </p>
          <p className="textMediumBold textCenter textMediumHighlight">
            Aprenderás en sala y{" "}
            <span className="textColor3 textMediumBold">también online.</span>
          </p>
          <p className="textMediumBold textCenter textMediumHighlight">
            Practicarás dónde y cuándo quieras.
          </p>
          <p className="textMediumBold textCenter textHighlight">
Sin límite de horas!
          </p>
          <p className="textMediumBold textCenter textMediumHighlight textColor3">
            Resultados increíbles desde la primera semana.
          </p>
          <p className="textColor3 textMediumBold textCenter textMediumHighlight">
            Hablarás inglés con fluidez y agilidad.
          </p>
          <p className="textMediumBold textCenter textMediumHighlight">
            Pronunciarás <span className="textColor3 textMediumBold">
            como un nativo.</span> 
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Section2;
