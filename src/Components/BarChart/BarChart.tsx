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

function BarChart({ amount, setAmount, data, setData, labels, setLabels }) {
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

    return (
        <div className='barChart' style={{ width: '100%' }}>
            <Bar options={options} data={finishedData} style={{ position: 'fixed', bottom: 5 }} />
        </div>
    );
}

export default BarChart;
