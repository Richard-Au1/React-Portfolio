const resumeeUrl = 'https://docs.google.com/document/d/1aBA3oCYzD6pOGNvlbQRw9HaLJejEIj4zwyphUDb_Rpk/edit';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { pdfjs } from 'react-pdf-viewer';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import 'react-pdf-viewer/dist/esm/entry.webpack'
// import 'react-pdf-viewer/dist/esm/worker.entry';

export default function Resume() {
    return (
        <div style={{minWidth: '100vh', background: "lightblue"}} >
            {/* unfortunately I am not able to figure out how to display my resume on the page rather than a link. will be done a future time. */}
            {/* <div style={{ width: '100%', height: '500px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={resumee} />
      </Worker>
    </div> */}
    <a style={{display: 'flex', justifyContent: 'center', minHeight: '50vh',}} href={resumeeUrl}>Link to my resume</a>
            {/* <a href= {resumeUrl}> Resume </a> */}
            <div >
            <h1 style={{display: 'flex', justifyContent: 'center', minWidth: '50vh'}}>Proficiencies:</h1>
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>SQL</li>
            </ul>
            </div>
        </div>
    )
}