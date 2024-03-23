import React, { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import BanList from './BanList';
import History from './History';

function App() {
    const [dogData, setDogData] = useState(null);
    const [banList, setBanList] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchRandomDogData();
    }, []);

    const fetchRandomDogData = async () => {
        try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?api_key=${import.meta.env.VITE_API_FLASH_KEY}`);
            const data = await response.json();
            setHistory([...history, data[0]]);
            setDogData(data[0]);
        } catch (error) {
            console.error('Error fetching random dog data:', error);
        }
    };

    const handleNextClick = () => {
        fetchRandomDogData();
    };

    const handleBanAttribute = (attribute) => {
        setBanList([...banList, attribute]);
    };

    return (
        <div className="app">
            <h1>Discover Dogs!</h1>
            <button onClick={handleNextClick}>Next Dog</button>
            <Content dogData={dogData} banList={banList} onBanAttribute={handleBanAttribute} />
            <BanList banList={banList} onBanAttribute={handleBanAttribute} />
            <History history={history} />
        </div>
    );
}

export default App;
