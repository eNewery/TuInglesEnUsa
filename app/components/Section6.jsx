import React from "react";
import Accordion from "./Accordion";
import Link from "next/link";

const Section6 = () => {
    const accordion = [

        { accordionTitle:"¿Quién te informa del curso?", accordionDescription: "Las personas que son responsables de informar a los interesados sobre los cursos son radicadas en la central de Miami, Florida y en Kansas City. Cuando un interesado se comunica pidiendo info, toda esa orientación es dada por el asesor en línea que es experto y tiene años de experiencia asesorando. Una vez que el interesado ya entendió todo y evacuó todas sus dudas pide la cita para ir a conocer el edificio, oficinas, parking, salas de curso, llenar formularios, pagar y recibir su matrícula y recibos. La cita en el edificio NO es para informes sino para conocer el lugar, completar aplicación y pagar. " },
        { accordionTitle:"¿Para qué es la cita?", accordionDescription:"La Cita es para conocer el edificio, el área de parking, ver oficinas, salón y además ser ayudado a completar formularios de beca del 50% sin cometer errores y hacer tu pago. En la cita NO se dan informes ya que se supone que las únicas personas autorizadas y capacitadas para dar toda la info son los asesores. La cita es solamente el último paso destinado a conocer el lugar y hacer la matrícula. Nuestras secretarias de oficinas no son asesoras y su tarea es limitada a ayudar a los teachers durante las clases, cobrar cuotas mensuales, brindar coffee breaks, mantener suministros, abrir y cerrar oficinas, preparas salas de cursos y atender pagos y tours de nuevos alumnos en las citas."},
        { accordionTitle:"¿Cuánto dura el curso?", accordionDescription:"El curso está planeado para 12 meses o 18 meses divididos en niveles. Normalmente el alumno al empezar paga 1 mes, 3 meses o un año entero y luego paga el extra de 6 meses en caso de necesitarlo. Hay un porcentaje de alumnos que demora hasta 6 meses más de un año para llegar a graduarse. Este programa no continúa automáticamente al siguiente nivel. Y no hacemos ningún tipo de cobro automático en tarjetas de crédito o débito."},
        { accordionTitle:"¿Cuántas horas presenciales de curso tengo?", accordionDescription:"Lo mínimo son 3 horas de clase a la semana y le puedes sumar el doble o triple de horas con $50 adicionales al mes. Con el básico de 3 horas a la semana se han graduado 23.000 estudiantes."},
        { accordionTitle:"¿Cómo se paga el curso?", accordionDescription:"Nosotros te guiamos al carrito de compras para adquirirlo por pago con tarjeta, Paypal o transferencia ZELLE si estas en USA. Una vez hecho el pago te mandaremos la carta de bienvenida y te daremos el número de matrícula dentro de las 24 horas de tu pago. Hecho tu pago te llamaremos para hacer test de nivel y hacer una clase individual de inducción e integrarte al cursillo online nivelador obligatorio antes de entrar a clases presenciales."},
        { accordionTitle:"¿Por qué te obsequiamos un curso previo?", accordionDescription:"Este curso es 100% presencial, pero para que nadie tenga situaciones de sentirse abochornado, perdido, confuso, vulnerable en el salón de clase presencial, los primeros días creamos este pre-curso. Queremos que te sientas más confiado y seguro al iniciar en el salón de clase.  No queremos que por no saber cosas básicas del inglés y de la gramática española tengas una experiencia que no sea la mejor. Por eso damos gratis un cursillo previo para ponerte en forma antes de empezar en el salón de clases. Esto no se cobra. Este cursillo no tiene costo y no consume ni siquiera un centavo de lo que pagas al inscribirte al curso presencial. Dura lo que sea necesario para que tu te sientas tranquilo, que ya sabes lo mínimo necesario para entrar a una clase básica pero bien conversacional."},
        { accordionTitle:"¿Qué es el cursillo preparatorio?", accordionDescription:"A través de los años se vio que, a pesar de dividir a los nuevos estudiantes por niveles, siempre había diferencias claras desde el primer día de curso presencial. Algunos alumnos hispanos en USA son básicos en inglés pero tienen hábitos de estudio, recuerdan la gramática del español y están acostumbrados a escuchar inglés. Otros son básicos pero ni recuerdan las reglas del español, no estudian hacen mucho tiempo, no diferencian pronombres de verbos, o adjetivos y de adverbios. Tampoco conocen el alfabeto. Esto hace que el teacher tenga que atender a unos o a otros. Y cuando se pone a nivel de unos los otros se frustan, se desmotivan y reclaman. Para evitar pérdidas de tiempo y malas experiencias es que creamos el curso nivelatorio previo online en vivo. Totalmente gratuito."},
        { accordionTitle:"¿Cuánto dura el cursillo preparatorio?", accordionDescription:"En este programa de inglés debes “quitarte de la cabeza” la forma estructurada de la educación formal donde las duraciones son fijas y para todos iguales. Este curso tiene alto grado de personalización por lo que el cursillo durará lo que precise durar para ti en tu caso particular. Todos somos diferentes. Lo que dura es lo que te lleve a ti estar preparado."},
        { accordionTitle:"¿Cuál es el precio del curso presencial standard pagando 3 meses anticipados?", accordionDescription:"El precio es de $599 en oferta especial por pago anticipado en agosto hasta el 15 de noviembre de 2023, con una matrícula por única vez de $80. Esto implica que el ahorro en las cuotas es de $148 dólares. Porque $249 x 3 tendría un costo real de $747. En el trimestral tiene 4 clases individuales que el mes a mes no posee.	"},
        { accordionTitle:"¿Cuál es el precio del curso presencial standard pagando año completo?", accordionDescription:"Es de $1799 y lo cual significa que se ahorra $1052, al pagarlo anticipado, lo que implica que cada mes le cuesta $100 dólares menos de lo que cuesta normalmente, por el hecho de pagar anticipado. Cada mes le estaría costando unos $149 dólares solamente, al pagar el año anticipado. Además tiene 8 clases individuales y campus virtual de por vida."},
        { accordionTitle:"¿En qué horarios es este curso?", accordionDescription:"Existen 9 horarios en todas las filiales, son los 9 típicos horarios del Programa de Inglés. Son 3 horas semanales con el teacher, 3 horas de trabajos prácticos y clases individuales y grupales online de refuerzo por semana. A eso se suman clases individuales y por $50 al mes pueden duplicar, triplicar o cuatriplicar la cantidad de horas a la semana."},
        { accordionTitle:"¿Cuándo comienzan las clases?", accordionDescription:"Las clases comienzan todo el año, todos los meses, sin embargo en enero, febrero y septiembre son los inicios más masivos. Siempre antes de iniciar el presencial existe la obligatoriedad de un cursillo previo nivelador y 100% gratis para que al momento de entrar a clases en sala no existan malas experiencias de tener que estar demorando clases por desniveles de alumnos."},
        { accordionTitle:"¿Cuánto cuesta el curso presencial de inglés?", accordionDescription:"Normalmente y sin BECA este curso cuesta 498 dólares mensuales o $125 a la semana. Con BECA del Fondo de Ayuda puedes pagar apenas $249 al mes. Y puedes reducir el costo de cada mes según la forma de pago. Pagando el año entero el mes acaba costando $149."},
      ];

  return (
    <div className="sectionContainer6 flexCenterColumn">
      <div className="sectionContent6 flexCenterColumn">
        <div className="sectionArrows">
            <img className="arrowSectionItem" src="./images/arrow.png" alt="" />
        <ul className="flexCenterColumn sectionList6">
            <li className="textSmall textColor3 textLittleBold"><img className="arrowLeft" src="./images/smallarrow.png" alt="" />Clases en salón VIP climatizado.</li>
            <li className="textCenter textSmall textColor3 textLittleBold"><img className="arrowLeft" src="./images/smallarrow.png" alt="" />Apuntes, libros y campus digital.</li>
            <li className="textCenter textSmall textColor3 textLittleBold"><img className="arrowLeft" src="./images/smallarrow.png" alt="" />Clases individuales incluídas.</li>
            <li className="textCenter textSmall textColor3 textLittleBold"><img className="arrowLeft" src="./images/smallarrow.png" alt="" />Coaching online gratis agregado.</li>
            <li className="textCenter textSmall textColor3 textLittleBold"><img className="arrowLeft" src="./images/smallarrow.png" alt="" />Diplomas y certificados oficiales.</li>
        </ul>
        <div className="flexCenterColumn">
        <p className="textMediumHighlight textMediumBold textColor3 textCenter textNoUnderline">Total Trimestral: $1499</p>
<p className="textHighlight textColor2 textBold">Con Beca: $599</p>
        </div>
        <img className="arrowSectionItem" src="./images/arrow.png" alt="" />
        </div>
        <div className="landingButtonContainer">
        <Link href="/Form" className='textCenter textBold'>INFÓRMATE AHORA</Link>
    </div>
    <div className="flexCenterColumn m1">
    <h2 className="textColor textMediumHighlight textMediumBold">¿QUIERES MÁS INFORMACIÓN SOBRE LOS CURSOS?</h2>
      <h2 className="textColor textBold textHighlight">¡AQUÍ TIENES LAS RESPUESTAS!</h2>
    {accordion.map(item => (
            <Accordion accordionTitle={item.accordionTitle} accordionContent={item.accordionDescription}/>
          ))}
    </div>
    
      </div>
    </div>
  );
};

export default Section6;
