import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

function TopBar({
    handleChange,
    amount,
    sortAlgo,
    setSortAlgo,
    searchAlgo,
    setSearchAlgo,
    search,
    setSearch,
}) {
    let array = [];
    for (let x = 1; x <= 100; x++) {
        array.push(x);
    }

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
            }}>
            <div
                style={{
                    background: 'rgb(29,29,29)',

                    paddingTop: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    justifyContent: 'center',
                }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            textAlign: 'center',
                            marginLeft: 25,
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: 15,
                        }}>
                        <span style={{ color: 'rgb(163,163,163)', whiteSpace: 'nowrap' }}>
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
                        <span
                            style={{
                                color: 'rgb(163,163,163)',
                                paddingBottom: 5,
                                whiteSpace: 'nowrap',
                            }}>
                            <b>Search Algo</b>
                        </span>
                        <select style={{ borderRadius: 8, padding: 5 }}>
                            <option>None</option>
                            <option>Linear</option>
                            <option>Binary</option>
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
                        <span
                            style={{
                                color: 'rgb(163,163,163)',
                                paddingBottom: 5,
                                whiteSpace: 'nowrap',
                            }}>
                            <b>Number to Find</b>
                        </span>
                        <select style={{ borderRadius: 8, padding: 5 }}>
                            <option value={-1}>Do No Search</option>
                            {array.map((index) => (
                                <option value={index}>{index}</option>
                            ))}
                        </select>
                    </div>
                    <div
                        style={{
                            alignSelf: 'center',
                            marginLeft: 20,
                            float: 'right',
                            paddingRight: 20,
                        }}>
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
        </div>
    );
}

export default TopBar;
