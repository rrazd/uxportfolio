
  // Load the Visualization API and the piechart package.
  google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);


  // Callback that creates and populates a data table, 
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Software Skills');
  data.addColumn('number', 'Proficiency');
  data.addRows([
    ['FPGAs & Microcontrollers', 60],
    ['C & C++', 80],
    ['JAVA & C#', 65], 
    ['VHDL', 60],
    ['Assembly 68K & Coldfire',75]
  ]);

  // Set chart options
  var options = {
                 'width':600,
                 'height':300,
			   	'backgroundColor':'#F6F5F1'};
 
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}