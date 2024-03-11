function MainContent() {
  return (
    <div id="main-content">
      <div className="cards">
        <div className="content-div">
          <h1 className="card-title">Section 1</h1>
        </div>
        <div>
          <p className="card-p">
            This section includes my personal collection of something
          </p>
        </div>
      </div>
      <div className="cards">
        <div>
          <h1 className="card-title">Section 2</h1>
        </div>
        <div className="content-div">
          <p className="card-p">
            This section however includes nothing of something
          </p>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
