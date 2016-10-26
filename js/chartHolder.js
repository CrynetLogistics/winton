var ctx = $("#myChart");

var GRAPH_WIDTH = 40;

var labels = [0];
for(var i=0; i<GRAPH_WIDTH; i++){
    labels[i] = i;
}
var pooData = [0];
pooData[GRAPH_WIDTH-1] = 0;

var priceRepresentation = [0];

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '',
            data: pooData,
            backgroundColor: [
                'rgba(255, 0, 0, 0.1)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 2
        }]
    },
    /*options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 60,
                    suggestedMax: 90
                }
            }]
        }
    }*/
});

function addBuyData(buyValue) {
    priceRepresentation[GRAPH_WIDTH-1] = buyValue;
    for(var loopVarI=0; loopVarI<GRAPH_WIDTH; loopVarI++){
        priceRepresentation[loopVarI] = priceRepresentation[loopVarI+1];
    }

    for(loopVarI=0; loopVarI<GRAPH_WIDTH; loopVarI++){
        myChart.data.datasets[0].data[loopVarI] = priceRepresentation[loopVarI];
    }

    myChart.update();
}