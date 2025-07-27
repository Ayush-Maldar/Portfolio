import React,{useState} from "react";
import { Document, Page} from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc=`/pdf.worker.min.js`

const ResumePage=()=>{
    const [numPages,setNumPages]=useState(null)
    const [error,setError]=useState(null)

    const onDocumentLoadSuccess=({numPages})=>{
        console.log("PDF Loaded Total Pages :",numPages)
        setNumPages(numPages)
    }

    const onError=(error)=>{
        console.log("error loading pdf",error)
        setError(error.message)
    }

    return(
        <div className="resume-page">
            <h1>Resume</h1>
            <div style={{width:'100%',height:'80vh',overflow:'auto'}}>
                {error? (
                    <p>Error:{error}</p>
                ):(
                <Document file="pdf/AyushCV.pdf"  onLoadSuccess={onDocumentLoadSuccess} onError={onError}>
                {Array.from(new Array(numPages),(_,index)=>(
                    <Page key={`page_${index+1}`} pageNumber={index+1} renderTextLayer={false} renderAnnotationLayer={false} scale={1.5}/>
                ))}
                </Document>
                )}
            </div>
        </div>
    )
}

export default ResumePage