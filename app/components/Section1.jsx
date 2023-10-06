import React from "react";
import Image from 'next/image';
import Link from "next/link";
const Section1 = () => {
  return (
    <div className="sectionContainer1">
      <div className="sectionImage1">
        <Image width={500} height={500} src="/images/section1.png" alt="" />
      </div>
        <div className="sectionContent1">
          <h2 className="textStart textColor3 textMediumBold textHighlight">SE RIERON DE MI CUANDO</h2>
          <h2 className="textStart textColor3 textMediumBold textHighlight">DIJE QUE YA ERA BILINGÜE...</h2>
          <h2 className="textStart boxMediumShadow textColor2 textMediumBold textHighlight">
            PERO CUANDO COMENCÉ A HABLAR!...
          </h2>
        <p className="textHighlight textColor3 textCaveat textCenter">Gracias Anglohispana!</p>
       <div className="sectionButtonContainer1 w100 flexCenterRow">
    <div className="landingButtonContainer1">
    <img className='arrowItemSection1' src="./images/arrow.png" alt="" />
        <Link href="/Form" className="sectionButton1 textCenter textMediumHighlight">INFÓRMATE AHORA</Link>
</div>
       </div>
        </div>
    </div>
  );
};

export default Section1;
