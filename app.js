// set up chart 

var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50 
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an svg wrapper, append and svg group that will hold the chart
// and shift the latter by the left and top margins

var svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//**************************************************************

// import csv data set 

d3.csv("data.csv").then(function(data) {
  data.forEach(d => {
    d.obesity = +d.obesity;
    d.smokes = +d.smokes;
  });

// create x axis 

var x = d3.scaleLinear()
  .domain(d3.extent(data.map(d => d.obesity)))
  .range([0,width]);

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// x label

svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x", width / 2)
  .attr("y", height + 40)
  .text("Obesity (%)");

// y axis

var y = d3.scaleLinear()
  .domain(d3.extent(data, d => d.smokes))
  .range([0,height]);
svg.append("g")
  .call(d3.axisLeft(y));

// y label

svg.append("text")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .attr("x", (height / 2) * -1)
  .attr("dy", (-40))
  .text("Smokes (%)");

// create dots variables

var gdots = svg.selectAll("g.dot")
  .data(data)
  .enter()
  .append('g');

// add dots to gdots
gdots.append("circle")
.attr("cx", d => x(d.obesity))
.attr("cy", d => y(d.smokes))
.attr("r", 8)
.style("fill", "#69b3a2");

// add text to gdots
gdots.append("text")
  .text(d => d.abbr)
  .attr("x", d => x(d.obesity))
  .attr("y", d => y(d.smokes))
  .attr("dx", -5)
  .attr("dy", 2)
  .style("font-size", "7px");

//Catch error
}).catch(e => {
  console.log(e);
});










//create scatterplot between two data variables


// include state abbreviations in the circles 


// create and situate axes and labels to the bottom left of the charset



