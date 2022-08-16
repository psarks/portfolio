
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const CV = () => {
  const [numPages, SetNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    SetNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <center>
       <Document file="/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="600" pageNumber={pageNumber} />
      </Document>
      
      {pageNumber > 1 && <button onClick={changePageBack}>Previous Page</button>}
      {pageNumber < numPages && (
        <button onClick={changePageNext}>Next Page</button>
      )} 
      </center>
  )}

      export default CV;