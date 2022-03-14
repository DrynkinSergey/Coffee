import React from 'react';

const Filter = (props) => (
    <div className='d-flex filter'>
        <div><span>Lookiing for</span><input placeholder='start typing here...' type="text"/></div>
        <div className="btnGroup">
            <span>Or filter</span>
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
        </div>
    </div>
);

export default Filter;