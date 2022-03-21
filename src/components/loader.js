import React from 'react';
import '../assets/css/loader.css';

const Loader = () => {
    return (
        <div>
            <h2>Loading</h2>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loader;
