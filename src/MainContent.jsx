export default function MainContent() {
  return (
    <>
      <div className="maincontent">
        <h1 className="main-title">Reasons I am excited about React</h1>
        <ol className="ordered-list">
          <li className="list">makes code more readable</li>
          <li className="list">makes project collaboration easier</li>
          <li className="list">makes code more efficient</li>
          <li className="list">takes care of complex processes itself</li>
        </ol>
      </div>
    </>
  );
}

//export MainContent........use wen multiple functions dat return jsx elements are in d file and u want to export specifically MainContent function from d pae
//export default MainContent......use wen only d Maincontent function exists in d file

//export default overwrites d odas so do nt borda in dis case.
