import { useState } from 'react';

function App() {
  const [toolTip, setToolTip] = useState('');
  const [btnLeftColor, setBtnLeftColor] = useState();
  const [btnRightColor, setBtnRightColor] = useState();
  const [btnTopColor, setBtnTopColor] = useState();
  const [btnDownColor, setBtnDownColor] = useState();
  const [mouse, setMouse] = useState(false);

  function toolTipLeftSetter(msg) {
    setToolTip(msg);
    setBtnLeftColor('red');
    setBtnRightColor('');
    setBtnTopColor('');
    setBtnDownColor('');
  }

  function toolTipRightSetter(msg) {
    setToolTip(msg);
    setBtnLeftColor('');
    setBtnRightColor('red');
    setBtnTopColor('');
    setBtnDownColor('');
  }

  function toolTipTopSetter(msg) {
    setToolTip(msg);
    setBtnLeftColor('');
    setBtnRightColor('');
    setBtnTopColor('red');
    setBtnDownColor('');
  }

  function toolTipDownSetter(msg) {
    setToolTip(msg);
    setBtnLeftColor('');
    setBtnRightColor('');
    setBtnTopColor('');
    setBtnDownColor('red');
  }

  
  function check() {
    setMouse(true);
  }

  function recheck() {
    setTimeout(() => setMouse(false), 200); 
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', height: '300px' }}>
      <h3>Select the Position Below !!! </h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
        <button style={{ backgroundColor: btnLeftColor }} onClick={() => toolTipLeftSetter('Left')}>
          Left
        </button>
        <button style={{ backgroundColor: btnRightColor }} onClick={() => toolTipRightSetter('Right')}>
          Right
        </button>
        <button style={{ backgroundColor: btnTopColor }} onClick={() => toolTipTopSetter('Top')}>
          Top
        </button>
        <button style={{ backgroundColor: btnDownColor }} onClick={() => toolTipDownSetter('Down')}>
          Down
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative' }}>
        <div
          onMouseOver={check}
          onMouseOut={recheck}
          style={{ backgroundColor: 'pink', padding: '5px 10px', borderRadius: '4px' }}
          className="hoverme"
        >
          Hover Over me
        </div>
        
        {mouse && (
          <div
            style={{
              width: 'fit-content',
              position: 'absolute',
              pointerEvents: 'none', 
              textAlign: 'center',
              backgroundColor:'black',
             color: 'white',
             padding:'2px',
             
              ...(toolTip === 'Left' && { left: '15%', top: '0' }),
              ...(toolTip === 'Right' && { right: '14%', top: '0' }),
              ...(toolTip === 'Top' && { bottom: '50px',  }),
              ...(toolTip === 'Down' && { top: '50px',   }),
              ...(toolTip === '' && { bottom: '40px' , right: '15%',  }),
            }}
          >
            {toolTip ? `Thanks for hovering ${toolTip} Position` : 'Thanks for hovering! I am a ToolTip'}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
