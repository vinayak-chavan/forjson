var ctx = document.getElementById("myChart").getContext('2d');
    
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 , 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        datasets: [
            {
                data: [2530, 580, 4000, 1225, 250, 1200, 0, 0, 0, 0, 0, 0, 0, 1800, 0, 0, 0, 0, 890, 210, 2200, 2500, 800, 750, 3600, 0, 4800, 0, 0, 2800, 0],
                backgroundColor: "#172B9F",
                borderWidth: 1,
            },
            {
                data: [3525, 1420, 3250, 110, 890, 3680, 0, 0, 560, 0, 0, 0, 0, 1878, 0, 0, 0, 0, 1872, 520, 2874, 2054, 1025, 3341, 3548, 0, 0, 0, 0, 4210, 420],
                backgroundColor: "#F42879",
                borderWidth: 1,
            },
            {
                data: [0, 0, 0, 0, 0, 0, 5000, 5000, 0, 5000, 5000, 5000, 5000, 0, 5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 5000, 0, 5000, 5000, 0, 0],
                backgroundColor: "#E2E3F0",
                borderWidth: 1,
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    }
                }
            ]
        }
    }
});