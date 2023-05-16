import React from "react"; 
import{useEffect, useState} from "react";
export default function MyReceipts() {
	const [records, setRecords] = useState([]);
	
	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

    return (
        <section >
          <div className="container px-6 py-10 mx-auto">
            <h1 style={{marginButtom:"30px"}}>My receipts</h1>
      
            <div>
              {records.map(record => (
                <div style={{marginTop:"20px"}}
                  key={record._id}
                  
                >
                  <h5 style={{color:"lightblue"}}>{record.nume}</h5>
      
                  <p>
                    Ingrediente: {record.ingrediente.join(", ")}
                  </p>

                  <p>
                    Instructiuni: {record.instructiuni}
                  </p>
                </div>
              ))}
            </div>

            <button type= "submit"    onClick={() => window.location.href = "https://main--marvelous-tulumba-b5b8db.netlify.app//new"} style={{ backgroundColor:  "darkblue", color: 'white', fontWeight: 'bold', marginTop:"40px" }}>Scrie o noua reteta </button>
            <button type= "submit"    onClick={() => window.location.href = "https://main--marvelous-tulumba-b5b8db.netlify.app/"} style={{ backgroundColor:  "brown", color: 'white', fontWeight: 'bold', marginTop:"40px", marginLeft:"40px" }}>Inapoi la pagina principala </button>
          </div>
        </section>
      );
      
}