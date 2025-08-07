import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const windowWidth = useWindowWidth();

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);
  const onError = (error) => setError(error.message);
  const pageWidth = Math.min(800, windowWidth - 40);

  return (
    <div
      className='resume'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0',
        margin: '0',
        backgroundColor: 'var(--bg)',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Resume</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Document
        file={`${process.env.PUBLIC_URL}/pdf/Ayushcv.pdf`}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onError}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={pageWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
};

export default ResumePage;
