import React from "react";
import Link from "next/link";
const Section5 = () => {
  return (
    <div className="sectionContainer5">
      <div className="sectionContent5 flexCenterColumn">
        <div className="flexCenterColumn">
<h2 className="textMediumBold textMediumHighlight textCenter">Método Natural <span className="textColor3 textMediumBold">Progresivo...</span></h2>
<h2 className="textMediumBold textMediumHighlight textCenter">Especial para <span className="textColor3 textMediumBold">Hispanos...</span></h2>
<h2 className="textMediumBold textMediumHighlight textCenter textColor3">Sin reglas gramaticales...</h2>
<h2 className="textBold textHighlight textCenter textColor3">¡EN TIEMPO RECORD!</h2>
        <div className="textSmall flexCenterColumn"><h2 className="textMediumBold">¡Queremos que <span className="textColor3 textMediumBold">hables inglés!</span></h2>
        </div>
        <h2 className="textMediumBold textMediumHighlight">Curso Completo <span className="textMediumBold textColor3">Garantizado</span></h2>
        <h2 className="textCenter flexCenterColumn textMediumBold textMediumHighlight">Cuando usted siendo hispano, pide beca, <span className="textCenter textBold textHighlight textColor3">LE OFRECEMOS SUBSIDIOS DEL 50% EN EL CURSO</span>gracias al fondo de ayudas educativas a hispanos en USA.</h2>
        <div className="landingButtonContainer">
        <Link href="/Form" className='textCenter textBold'>APLICA AHORA</Link>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Section5;
