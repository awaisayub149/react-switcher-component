import React, { useState, Fragment } from 'react';
import { heartIcon } from './heartIcon';
import Switcher from '../src';

function WithIcon() {
    const [switcherState, setSwitcherState] = useState(false);
    const onHandleChange = e => {
        setSwitcherState(e.target.checked);
    }
    return (
        <Fragment>
            <h1> Switcher component with Custom Icons</h1>
            <p>Custom styling required to handle custom icons</p>
            <Switcher 
                name="my-switcher"
                onChange={onHandleChange}
                checked={switcherState}
                checkedIcon={heartIcon}
                unCheckedIcon="Off"
            />
            <pre className="pre">
                {`
import React, {useState} from 'react';
import Switch from 'react-switcher-rc';

function Switcher() {
  const [switcherState, setSwitcherState] = useState(false);
  const onHandleChange = e => setSwitcherState(e.target.checked);
  <Switcher
   name="my-switcher"
   onChange={onHandleChange}
   checked={switcherState}
   checkedIcon={<svg 
    height="100%"
    width="100%"
    style={{ position: "absolute", top: 2, left: 32 }}
    >
      <path 
        d="M19.789,16.578c0,3.75-2.926,7.422-7.739,7.422c-5.246,0-7.839-3.708-7.839-8.285 c0-5.207,3.89-12.946,7.995-15.639c0.277-0.182,0.643,0.041,0.611,0.371c-0.03,0.313-0.046,0.631-0.046,0.951 c0,2.067,0.641,3.985,1.738,5.563c0.522,0.795,1.092,1.477,1.763,2.351c0.94,1.226,1.636,1.905,2.642,3.84 c0.005,0.01,0.01,0.018,0.015,0.028C19.48,14.197,19.789,15.352,19.789,16.578z"
        fill="#ff3980"
        fillRule="evenodd"
      />
    </svg>}
   unCheckedIcon="Off"
  />
}`} 
        </pre>
    </Fragment>
    )
}

export default WithIcon;