const resumeeUrl = 'https://docs.google.com/document/d/1aBA3oCYzD6pOGNvlbQRw9HaLJejEIj4zwyphUDb_Rpk/edit';

export default function Resume() {
    return (
        <div>
            <h3 className="container-fluid2">
                Resume
            </h3>
            <a className="container-fluid2" href={resumeeUrl}> Resume </a>
            <h4 className="container-fluid2">
                Proficiencies:
            </h4>
            <ul style={{display: "flex", justifyContent: "center", flexWrap: "wrap", flexDirection: "column",  alignContent: "center"}}>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>APIs</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Express</li>
                <li>NoSql</li>
                <li>Mongo DB</li>
                <li>SQL</li>
                <li>PWA</li>
                <li>CS</li>
            </ul>
        </div>
    )
}