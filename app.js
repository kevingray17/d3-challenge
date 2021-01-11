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

d3.csv("assets/data/data.csv").then(function(data) {
  data.forEach(d => {
    d.obesity = +d.obesity;
    d.smokes = +d.smokes;
  })

  






//create scatterplot between two data variables


// include state abbreviations in the circles 


// create and situate axes and labels to the bottom left of the charset



