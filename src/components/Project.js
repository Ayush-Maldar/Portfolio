
import React,{useState} from "react";
/*import { Document, Page} from 'react-pdf'
import { docjs } from 'react-doc';
docjs.GlobalWorkerOptions.workerSrc=`/pdf.worker.min.js`*/
const PortfolioPage = () => {

/*const [numPages,setNumPages]=useState(null)
    const [error,setError]=useState(null)

    const onDocumentLoadSuccess=({numPages})=>{
        console.log("PDF Loaded Total Pages :",numPages)
        setNumPages(numPages)
    }

    const onError=(error)=>{
        console.log("error loading pdf",error)
        setError(error.message)
    }

*/
  return (
    <div>
    <h2><center>My Projects</center></h2>
    <section className="portfolio">
        <div className="proj">
          <h3 className="project">1.School Bus Tracking And Attendance System</h3>
          <p>App was made using Android Studio with Language as Java</p>
          <p>Server using Node.js</p>
          <p>Database using PostgreSQL</p>
          <a href="https://github.com/Ayush-Maldar/School-Bus-Tracking-and-Attendance-System.git">Github Link</a>
        </div>
    </section>
    </div>
  );
};

export default PortfolioPage;