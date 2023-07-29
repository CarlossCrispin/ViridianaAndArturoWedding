
import './Ceremony.css';

export const Ceremony = () => {
  return (
    <div className="ceremony">
      <div className="div">
        <header className="header">
          <div className="group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="frame">
                  <div className="text-wrapper">03</div>
                </div>
                <img className="arrow" alt="Arrow" src="arrow-1.svg" />
              </div>
            </div>
          </div>
          <div className="text">
            <h1 className="h-1">Cuando y donde</h1>
          </div>
        </header>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Como llegar</div>
        </div>
        <div className="container">
          <div className="item">
            <div className="icon">
              <div className="icon-container">
                <img className="img" alt="Cheers" src="cheers-4521027-1.png" />
              </div>
            </div>
            <div className="frame-2">
              <div className="frame-3">
                <div className="text-wrapper-3">La ceremonia</div>
                <img className="line" alt="Line" src="line-2.svg" />
              </div>
              <div className="text-wrapper-4">viernes 16 de diciembre</div>
              <p className="p">3:00 PM - 4:00 PM</p>
              <p className="norte-col">
                Norte 72&nbsp;&nbsp;#8910 <br />
                Col Salvador Diaz
                <br />
                Mirón
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <div className="icon-container">
                <img className="img" alt="Balloons" src="balloons-3074306-1-1.png" />
              </div>
            </div>
            <div className="frame-2">
              <div className="frame-3">
                <div className="text-wrapper-3">La recepción</div>
                <img className="line" alt="Line" src="image.svg" />
              </div>
              <div className="text-wrapper-4">viernes 16 de diciembre</div>
              <p className="p">2:40 PM - 3:00 PM</p>
              <p className="norte-col">
                Norte 72&nbsp;&nbsp;#8910 <br />
                Col Salvador Diaz
                <br />
                Mirón
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
