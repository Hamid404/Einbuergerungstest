import './TestSeite.css'

import Logo from './Logo';
//import ZumTest from "./ZumTest"
import Punkte from "./Punktezaehler";
import Containerfragen from "./Containerfragen";
import {  useState } from "react";
import { useHistory } from 'react-router-dom'
//import axios from 'axios';

const elitest = () => {

    const [data, setData] = useState([]);
    const [zeit, setZeit] = useState(60);
    const [timeabgelaufen, setTimeabgelaufen] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    

    const Vergangenheit = useHistory()
    
  
    const teststarten = () => {
        const land = document.querySelector("#stats").value;

        Promise.all([
            fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
            fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            console.log("urlOneData=", urlOneData)
            console.log("urlTwoData=", urlTwoData)
            console.log("mergedData=", [...urlOneData, ...urlTwoData])
            setData([...urlOneData, ...urlTwoData]);

            
            const delay = 3000;
            const AktualiesiereTimer = () => {
                console.log("timer=", zeit)
                const neuezeit=zeit -1 ;
                console.log("neuezeit=",neuezeit)
                setZeit(neuezeit)
                if (zeit <= 0) {
                    setTimeabgelaufen(true)
        
                }
            }
            
            window.setInterval(AktualiesiereTimer, delay)



        })

    }

    /*
     useEffect(() => {
       
         Promise.all([
             fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
             fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
         ]).then(([urlOneData, urlTwoData]) => {
             console.log("urlOneData=", urlOneData)
             console.log("urlTwoData=", urlTwoData)
             console.log("mergedData=", [...urlOneData, ...urlTwoData])
 
             setData([...urlOneData, ...urlTwoData]);
 
         })
     }, [])
 
 */
    const VorherigeAufgabe = () => {
   
        if (questionIndex !== 0)
            setQuestionIndex(questionIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (questionIndex < data.length - 1)
            setQuestionIndex(questionIndex + 1)


    }

    const zurInfo = () => {   
        Vergangenheit.push(
            "/Info"
        )
    }


    return (
        

            <div className="body-testSeite">
              
            <Logo />
                <p id="zeit" className="uhr">Sie haben noch {zeit} zeit! </p>
              
                <label id="stats">Stats:</label>
                <select id="stats" name="stats">

                    <option value="Baden-Württemberg">Baden-Württemberg </option>
                    <option value="Bayern">Bayern </option>
                    <option value="Berlin">Berlin</option>
                    <option value="Brandenburg">Brandenburg </option>
                    <option value="Bremen">Bremen</option>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Hessen">Hessen</option>
                    <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                    <option value="Niedersachsen">Niedersachsen</option>
                    <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                    <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                    <option value="Saarland">Saarland</option>
                    <option value="Sachsen">Sachsen</option>
                    <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                    <option value="Schleswig-Holstein">Schleswig-Holstein </option>
                    <option value="Thüringen">Thüringen</option>

                </select>
                <button id="teststarten" onClick={teststarten}>Start zum Test</button>
               
                {!timeabgelaufen ?
                    <div className="container-testSeite">
                        {data.length > 0 && <Containerfragen propsQuestion={data[questionIndex]}
                            propsQuestionLänge={data.length}
                            propsQuestionIndex={questionIndex + 1}>
                        </Containerfragen>}

                        <div className="containerButtonUnten">

                            <button id="btn"  onClick={zurInfo}>Info</button>
                            <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                            <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>

                        </div>


                    </div>

                    : <p>zeit ist um</p>}
                       <Punkte />

            </div>
         
       

    )

}

export default elitest;


import './TestSeite.css'

import Logo from './Logo';
import ZumBundesländer from "./ZumBundesländer"
import Punkte from "./Punktezaehler";
import Containerfragen from "./Containerfragen";
import {  useState } from "react";
import { useHistory } from 'react-router-dom'
//import axios from 'axios';

const Test = () => {

    const [data, setData] = useState([]);
    const [zeit, setZeit] = useState(60);
    const [timeabgelaufen, setTimeabgelaufen] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    

    const Vergangenheit = useHistory()
    
  
    const teststarten = () => {
        const land = document.querySelector("#stats").value;

        Promise.all([
            fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
            fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            console.log("urlOneData=", urlOneData)
            console.log("urlTwoData=", urlTwoData)
            console.log("mergedData=", [...urlOneData, ...urlTwoData])
            setData([...urlOneData, ...urlTwoData]);

            
            const delay = 2000;
            const AktualiesiereTimer = () => {
                console.log("timer=", zeit)
                const neuezeit=zeit -1 ;
                console.log("neuezeit=",neuezeit)
                setZeit(neuezeit)
                if (zeit <= 0) {
                    setTimeabgelaufen(true)
        
                }
            }
            
            window.setInterval(AktualiesiereTimer, delay)



        })

    }

    /*
     useEffect(() => {
       
         Promise.all([
             fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
             fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
         ]).then(([urlOneData, urlTwoData]) => {
             console.log("urlOneData=", urlOneData)
             console.log("urlTwoData=", urlTwoData)
             console.log("mergedData=", [...urlOneData, ...urlTwoData])
 
             setData([...urlOneData, ...urlTwoData]);
 
         })
     }, [])
 
 */
    const VorherigeAufgabe = () => {
   
        if (questionIndex !== 0)
            setQuestionIndex(questionIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (questionIndex < data.length - 1)
            setQuestionIndex(questionIndex + 1)


    }

    const zurInfo = () => {   
        Vergangenheit.push(
            "/Info"
        )
    }


    return (
        

            <div className="body-testSeite">
              
            <Logo />
            <ZumBundesländer/>
             
             
                <button id="teststarten" onClick={teststarten}>Test starten</button>
               
                {!timeabgelaufen ?
                
                    <div className="container-testSeite">
                           <p id="zeit" className="uhr">Sie haben  {zeit} zeit! </p>
                        {data.length > 0 && <Containerfragen propsQuestion={data[questionIndex]}
                            propsQuestionLänge={data.length}
                            propsQuestionIndex={questionIndex + 1}>
                        </Containerfragen>}

                        <div className="containerButtonUnten">

                            <button id="btn"  onClick={zurInfo}>Info</button>
                            <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                            <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>

                        </div>


                    </div>

                    : <p>zeit ist um</p>}
                       <Punkte />

            </div>
         
       

    )

}

export default Test;