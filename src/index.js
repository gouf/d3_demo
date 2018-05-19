import css from './style.css'
import * as d3 from 'd3'
import $ from 'jquery'

$(function () {
  console.log('Hello, Hello.')

  var data = [10, 15, 20, 30, 40, 250, 320]
  d3.select('.d3')
    .selectAll('div')
    .data(data)
      .enter()
      .append('div')
      .style('width', function(d) { return ''.concat(d, 'px') })
      .text(function(d) { return d });
})
