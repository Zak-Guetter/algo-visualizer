import React, { useState, useEffect } from 'react';
import BarChart from '../../Components/BarChart';
import TopBar from '../../Components/TopBar/TopBar';

function getData(amount: number) {
    let min = 1;
    let max = amount;
    let array: Array<Object> = [];
    for (let i = 0; i < amount; i++) {
        array.push({ x: i, y: Math.floor(Math.random() * (max - min + 1) + min) });
    }
    return array;
}

function getLabels(amount: number) {
    let label: Array<String> = [];
    for (let i = 0; i < amount; i++) {
        label.push(`Item: ${i}`);
    }
    return label;
}

function Home() {
    const [amount, setAmount] = useState(200);
    const [data, setData] = useState(getData(amount));
    const [labels, setLabels] = useState(getLabels(amount));
    const [sortAlgo, setSortAlgo] = useState();
    const [searchAlgo, setSearchAlgo] = useState();
    const [search, setSearch] = useState();

    function handleBarChange(value) {
        if (amount != value) {
            setAmount(value);
            setData(getData(amount));
            setLabels(getLabels(amount));
        }
    }

    function handleTopBarChange(sortAlgoValue, searchAlgoValue, searchValue) {
        if (sortAlgoValue !== sortAlgo) {
            setSortAlgo(sortAlgoValue);
        }

        if (searchAlgoValue !== searchAlgo) {
            setSearchAlgo(searchAlgoValue);
        }

        if (searchValue !== search) {
            setSearch(searchValue);
        }
    }

    return (
        <div className='barChart'>
            <TopBar
                handleChange={handleTopBarChange}
                amount={amount}
                sortAlgo={sortAlgo}
                setSortAlgo={setSortAlgo}
                searchAlgo={searchAlgo}
                setSearchAlgo={setSearchAlgo}
                search={search}
                setSearch={setSearch}
            />
            <BarChart
                handleChange={handleBarChange}
                amount={amount}
                setAmount={setAmount}
                data={data}
                setData={setData}
                labels={labels}
                setLabels={setLabels}
            />
        </div>
    );
}

export default Home;
