import React from 'react';
import { Link } from 'react-router-dom';


const Start =()=>{
      return <div>
<h1>Start Seite</h1>
<Link to={"/Fragen"}><button>Test Vorbereitung</button></Link>
      </div>
}
export default Start;