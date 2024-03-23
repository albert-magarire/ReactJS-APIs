// BanList.jsx
import React from 'react';

function BanList({ banList, setBanList }) {
    const handleRemoveFromBanList = (attribute) => {
        setBanList(banList.filter(item => item !== attribute));
    };

    return (
        <div className="column">
            <h2>Ban List</h2>
            <ul>
                {banList.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleRemoveFromBanList(item)}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BanList;
