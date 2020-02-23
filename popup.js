document.addEventListener('DOMContentLoaded', function()
{
	var options = {
    tooltips: {
        enabled: false
    },
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
            },
            color: '#fff',
        }
    }
};
// var obj =JSON.parse('{"user": "david", "user_rate": "0.5857142857142856", "products25": "7", "products50": "0", "products75": "0", "products100": "0"}');
var obj =JSON.parse(userData);
    var ctx = document.getElementById("mychart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        	labels: ['Average score'],
            datasets: [{
            	label: ['My data'],
            	data: [obj.user_rate, 100-obj.user_rate],
            	backgroundColor: ["green"],
            	borderColor: [],
            	borderWidth: 1
        	}]
        },
        options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Average score'
      },
      options: options
    }
    });
    var ctx2 = document.getElementById("mychart2").getContext('2d');
    var myChart2 = new Chart(ctx2, {
    	type: 'horizontalBar',
    	data: {
    		labels: ["0 - 25", "25 - 50", "50 - 75", "75 - 100"],
    		datasets: [{
    			label: ['Product scores'],
    			data: [obj.products25, obj.products50, obj.products75, obj.products100],
    			backgroundColor: ["red", "orange", "yellow", "green"],
    			borderColor: [],
    			borderWidth: 1
    		}]
    	},
    	options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Number of products per score'
      }
    }
    });
});