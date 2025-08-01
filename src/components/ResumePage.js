import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onError = (error) => {
    setError(error.message);
  };

  return (
    <div>
      <h1>Resume</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Document
        file={`${process.env.PUBLIC_URL}/pdf/AyushCV.pdf`}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default ResumePage;
