import { formControlLabelClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
    const [sortAlgo, setSortAlgo] = useState('0');
    const [searchAlgo, setSearchAlgo] = useState('0');
    const [search, setSearch] = useState('0');

    function handleChange(newAmount, newSortAlgo, newSearchAlgo, newSearch) {
        if (amount !== newAmount) {
            setAmount(newAmount);
            setData(getData(amount));
            setLabels(getLabels(amount));
        }

        if (sortAlgo !== newSortAlgo) {
            setSortAlgo(newSortAlgo);
        }

        if (searchAlgo !== newSearchAlgo) {
            setSearchAlgo(newSearchAlgo);
        }

        if (search !== newSearch) {
            setSearch(newSearch);
        }
    }

    /**
     * useEffect(() => {
        console.log('amount: ' + amount);
        console.log('sortAlgo: ' + sortAlgo);
        console.log('searchAlgo: ' + searchAlgo);
        console.log('search: ' + search);
    });
     */

    return (
        <div className='barChart'>
            <TopBar
                handleChange={handleChange}
                amount={amount}
                sortAlgo={sortAlgo}
                searchAlgo={searchAlgo}
                search={search}
            />
            <BarChart
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
