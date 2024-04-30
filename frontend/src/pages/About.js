import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='intro'>
        <h1>APIE MUS</h1>
        <p>Sveiki atvykę į mūsų svetainę! Esame komanda, kuri jau daugiau nei 10 metų dirbame nekilnojamojo turto nuomos srityje.Mūsų misija yra teikti aukšto lygio nekilnojamojo turto nuomos paslaugas, atsižvelgiant į kliento pageidavimus. Nesvarbu, ar ieškote jaukaus buto, prabangaus penthause'o ar patrauklios komercinės patalpos, mes esame čia, kad jums padėtume.</p>
        <img className='gen' src="about.jpg" alt="img" />
        <h2 className='istorija'>Įmonės istorija</h2>
        <p className='history'>
        „Vilnius Rentals“ įkurtas 2010 metais su misija suteikti unikalias būsto nuomos paslaugas, pradedant Vilniaus regione ir plėtojant veiklą į urbanistines bei priemiesčio teritorijas. Įmonės sėkmę lemia aistringas įsipareigojimas klientų pasitenkinimui ir nuolatinis naujovių diegimas. Iš pradžių sutelkusi dėmesį į Vilniaus regioną, įmonė greitai išsiplėtė, pasiūlydama aukštos kokybės būstus ir išskirtinį aptarnavimą visuose didžiuosiuose Lietuvos miestuose: Kaune, Klaipėdoje, Šiauliuose, Marijampolėje bei Alytuje. „Vilnius Rentals“ tapo sinonimu patikimumui, prabangai ir patogumui, keisdama klientų patirtį laikiname gyvenime. Per visus šiuos veiklos metus įmonė išsaugojo savo pozicijas rinkoje ir išlieka lyderiu nuomojant būstą, kuris keičia požiūrį į trumpalaikį gyvenimą. Šiuo metu įmonė plečia savo veiklą Europoje, bendradarbiaudama su partneriais siekdama užtikrinti klientų poreikių patenkinimą šioje regione. </p>
      </div>
      <h2 className='team'>MŪSŲ ŠAUNIOJI KOMANDA</h2>
      <div className="workers">
        <div className="brokercard">
          <img src="/1.jpg" alt="Broker" />
          <div className="info">
            <p className="name">Greta Gretute</p>
            <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg> greta@gmail.com</p>
            <p className="contact">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Tel: 860558522
            </p>
          </div>
        </div>
        <div className="brokercard">
          <img src="/4.jpg" alt="Broker" />
          <div className="info">
            <p className="name">Jonas Jonaitis</p>
            <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg> jonas@gmail.com</p>
            <p className="contact">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Tel: 860558522
            </p>
          </div>
        </div>
        <div className="brokercard">
          <img src="/2.jpg" alt="Broker" />
          <div className="info">
            <p className="name">Jurga Jurgita</p>
            <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg> jurga@gmail.com</p>
            <p className="contact">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Tel: 860558522
            </p>
          </div>
        </div>
      </div>
      <h2 className='team'>KLIENTŲ ATSILIEPIMAI</h2>
      <div className="atsiliepimai">
        <div className="klientcard">
          <img src="12.jpg" alt="jpg" />
          <p className='myname'>Jonas</p>
          <p>"Esame labai patenkinti nuoma pas Vilnius Rentals. Būstas buvo švarus, jaukus ir puikiai įrengtas. Personalas buvo labai draugiškas ir paslaugus. Tikrai sugrįšime!</p>
        </div>
        <div className="klientcard">
        <img src="8.jpg" alt="jpg" />
          <p className='myname'>Joana</p>
          <p>Puikus aptarnavimas ir nuostabus būstas! Nesitikėjome tokio patogumo ir prabangos. Tikrai rekomenduočiau „Vilnius Rentals“ visiems, kurie ieško laikino gyvenimo vietos Vilniuje!</p>
        </div>
        <div className="klientcard">
         <img src="11.jpg" alt="jpg" />
          <p className='myname'>Vytas</p>
          <p>Tai buvo puikus būsto nuomos patyrimas. Vilnius Rentals suteikė mums puikią galimybę jaustis kaip namuose, net esant tolimai nuo savo tikrų namų. Ačiū už šiltą priėmimą ir aukštą aptarnavimo lygį!</p>
        </div>
        <div className="klientcard">
          <img src="9.jpg" alt="jpg" />
          <p className='myname'>Dalia</p>
          <p>Nuoširdžiai rekomenduoju Vilnius Rentals visiems, kurie ieško patogaus ir kokybiško būsto nuomos Vilniuje. Jų paslaugos yra nepriekaištingos, o būstai - tikras malonumas gyventi. Ačiū už puikų patyrimą!</p>
        </div>
      </div>
     
    </div>
  );
}

export default About;