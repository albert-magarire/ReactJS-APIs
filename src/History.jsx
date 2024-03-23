import React from 'react';

const History = ({ history }) => {
    return (
        <div className="history">
            <h2>Viewed Items History</h2>
            <div className="history-list">
                {history.map((dog, index) => (
                    <div key={index} className="history-item">
                        <img src={dog.url} alt={`Dog ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
