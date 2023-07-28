import { FaEnvelope, FaPencilAlt, FaChurch, FaTshirt, FaBuilding, FaCheck } from 'react-icons/fa';

import "./style.css";

export const Timeline = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen timeline" id='timeline'>
      <div className="max-w-2xl overlap-wrapper">
        <div className="overlap">
          <div className="w-4 group">
            <div className="flex items-center justify-center overlap-group relaqtive">
              <div className="absolute bottom-0 w-4 h-4 bg-black rounded-full" />
              <div className="w-1 h-full bg-black" />
              <div className="absolute top-0 w-4 h-4 bg-black rounded-full" />
            </div>
          </div>
          <div className="frame-3">
            <div className="item" id='1'>
              <FaEnvelope className="icon" />
              <div className="indicator">
                <div className="overlap-group-2">
                  <div className="frame-4">
                    <div className="w-4 h-px mx-auto bg-black line"></div>
                    <div className="div-wrapper">
                      <div className="text-wrapper">01</div>
                    </div>
                  </div>
                  <a className="text-wrapper-2" href='#section-1'>Inicio</a>
                </div>
              </div>
            </div>
            <div className="item" id='2'>
              <div className="indicator">
                <div className="overlap-group-3">
                  <div className="frame-5">
                    <div className="div-wrapper">
                      <div className="text-wrapper">02</div>
                    </div>
                    <img
                      className="line"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/32b8df08a9b359e899c73b29616aad3f/img/line-1-4.svg"
                    />
                  </div>
                  <a className="text-wrapper-3" href='#section-2'>Nuestra Historia</a>
                </div>
              </div>
              <FaPencilAlt className="icon" />
            </div>
            <div className="item" id='3'>
              <FaChurch className="icon" />
              <div className="indicator">
                <div className="overlap-group-2">
                  <div className="frame-4">
                    <div className="w-4 h-px mx-auto bg-black line"></div>
                    <div className="div-wrapper">
                      <div className="text-wrapper">03</div>
                    </div>
                  </div>
                  <a className="text-wrapper-2" href='#section-3'>Misa</a>
                </div>
              </div>
            </div>
            <div className="item" id='4'>
              <div className="indicator">
                <div className="overlap-group-3">
                  <div className="frame-5">
                    <div className="div-wrapper">
                      <div className="text-wrapper">04</div>
                    </div>
                    <div className="w-4 h-px mx-auto bg-black line"></div>
                  </div>
                  <a className="text-wrapper-3" href='#section-4'>Dress code</a>
                </div>
              </div>
              <FaTshirt className="icon" />
            </div>
            <div className="item" id='5'>
              <FaBuilding className="icon" />
              <div className="indicator">
                <div className="overlap-group-2">
                  <div className="frame-4">
                    <div className="w-4 h-px mx-auto bg-black line"></div>
                    <div className="div-wrapper">
                      <div className="text-wrapper">05</div>
                    </div>
                  </div>
                  <a className="text-wrapper-2" href='#section-5'>Salón</a>
                </div>
              </div>
            </div>
            <div className="item" id='6'>
              <div className="indicator">
                <div className="overlap-group-3">
                  <div className="frame-5">
                    <div className="div-wrapper">
                      <div className="text-wrapper">06</div>
                    </div>
                    <img
                      className="line"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/32b8df08a9b359e899c73b29616aad3f/img/line-1-4.svg"
                    />
                  </div>
                  <a className="text-wrapper-3" href='#section-6'>Confirma</a>
                </div>
              </div>
              <FaCheck className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
