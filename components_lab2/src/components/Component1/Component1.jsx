import React, { useState } from "react";

const Component1 = () => {


    const [news, setNews] = useState(["Tech giant releases new smartphone with advanced features.",
    "Global economy shows signs of recovery after recent downturn.",
    "Scientists make a breakthrough in renewable energy research.",
    "Upcoming conference to address key issues in environmental conservation.",]);

    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    const nextNewsItem = () => {
        if(currentNewsIndex === news.length - 1) {
            setCurrentNewsIndex(0)
        } else {
            setCurrentNewsIndex(currentNewsIndex + 1)
        }
    }

    return (
        <div>
            <p>Current news {news[currentNewsIndex]}</p>
            <button onClick={nextNewsItem}>Next news</button>
        </div>

    )
};

export default Component1;
