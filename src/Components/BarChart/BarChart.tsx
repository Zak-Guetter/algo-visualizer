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
import { faker } from '@faker-js/faker';
import { setLabels } from 'react-chartjs-2/dist/utils';
import Slider from '@mui/material/Slider';

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
    let currentAmount = amount;
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
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                }}>
                <div
                    style={{
                        background: 'rgb(29,29,29)',
                        display: 'flex',
                        flexDirection: 'row',
                        paddingTop: 10,
                        width: '40%',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        justifyContent: 'center',
                    }}>
                    <div
                        style={{
                            textAlign: 'center',
                            marginLeft: 25,
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: 15,
                        }}>
                        <span style={{ color: 'rgb(163,163,163)' }}>
                            <b>Amt. of Columns</b>
                        </span>
                        <Slider
                            aria-label='Always visible'
                            defaultValue={amount}
                            onChange={(e) => handleChange(e.target.value)}
                            step={1}
                            min={5}
                            max={1000}
                            style={{ width: '100%', paddingTop: 25 }}
                        />
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            marginLeft: 25,
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: 20,
                        }}>
                        <span style={{ color: 'rgb(163,163,163)', paddingBottom: 5 }}>
                            <b>Sort Algo</b>
                        </span>
                        <select style={{ borderRadius: 8, padding: 5 }}>
                            <option>None</option>
                            <option>Bubble</option>
                            <option>Select</option>
                            <option>Heap</option>
                            <option>Merge</option>
                            <option>Quick</option>
                        </select>
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            marginLeft: 25,
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: 20,
                        }}>
                        <span style={{ color: 'rgb(163,163,163)', paddingBottom: 5 }}>
                            <b>Search Algo</b>
                        </span>
                        <select style={{ borderRadius: 8, padding: 5 }}>
                            <option>None</option>
                            <option>Linear</option>
                            <option>Binary</option>
                        </select>
                    </div>
                    <div style={{ alignSelf: 'center', marginLeft: 20, float: 'right' }}>
                        <button
                            style={{
                                padding: 5,
                                paddingRight: 14,
                                paddingLeft: 14,
                                fontSize: 18,
                                backgroundColor: 'rgb(25,118,210)',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: 8,
                            }}>
                            <b>Start</b>
                        </button>
                    </div>
                </div>
            </div>
            <Bar options={options} data={finishedData} style={{ position: 'fixed', bottom: 5 }} />
        </div>
    );
}

export default BarChart;
