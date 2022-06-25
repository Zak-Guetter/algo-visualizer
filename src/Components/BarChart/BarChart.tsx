import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TopBar from '../TopBar/TopBar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
};

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

function BarChart() {
    const [amount, setAmount] = useState(200);
    const [data, setData] = useState(getData(amount));
    const [labels, setLabels] = useState(getLabels(amount));
    const finishedData = {
        labels: labels,
        responsive: true,
        datasets: [
            {
                maxBarThickness: 150,
                minBarLength: 2,
                data: data,
                title: 'blue',
                backgroundColor: 'rgba( 173, 216, 230, 0.9)',
            },
        ],
    };

    function handleChange(value) {
        if (amount != value) {
            setAmount(value);
            setData(getData(amount));
            setLabels(getLabels(amount));
        }
    }

    return (
        <div className='barChart' style={{ width: '100%' }}>
            <TopBar handleChange={handleChange} amount={amount} />
            <Bar options={options} data={finishedData} style={{ position: 'fixed', bottom: 5 }} />
        </div>
    );
}

export default BarChart;
