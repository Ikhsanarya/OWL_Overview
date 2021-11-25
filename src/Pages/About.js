import React, {useState, useEffect} from "react";
import axios from "axios";
import "./About.css"

function About(){
   // const [data, setData] = useState('')

   // useEffect(() => {
   //    async function fetchData() {
   //      const request = await axios
   //        .get(`https://api.github.com/users/ilhamdaffa21`)
   //        .then((res) => setData(res.data))
   //        .catch((e) => Alert.alert('Gagal!', e))
   //      return
   //      request
   //    }
   //    fetchData()
   //  }, [])
  
   return(
   <div className = "card" >
       <p> Overview Overwatch League </p>
       <p> An app for OWL fans</p>
       <p> Made by: Muhamad Ikhsan Arya Wibowo</p>

    </div>
   );
}

export default About;