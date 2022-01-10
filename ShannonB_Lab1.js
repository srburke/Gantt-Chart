<html>
<head>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
     <div id="chart_div">
google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['P1', 'Initiate', new Date(2022, 0, 10), new Date(2022, 0, 31), null,  0,  null],
        ['P2', 'Plan', new Date(2022, 0, 31),new Date(2022, 1, 14), null, 0, 'P1'],
        ['P3', 'Execute', new Date(2022, 1, 14), new Date(2022, 2, 10),null, 0, 'P2'],
        ['P4', 'Close', new Date(2022, 2, 10), new Date(2022, 2, 24),null, 0, 'P3'],
        ['P5', 'Evaluate', new Date(2022, 2, 24), new Date(2022, 3, 10),null, 0, 'P4']
      ]);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
    </script>
   </head>
   <body>
        <div id="chart_div"></div>
   </body>
   </html>
            
