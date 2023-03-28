fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
.then( response => response.json() )
.then( data => {
    renderChart(data)
} )

function renderChart( data ) {
    const chart = d3.select('#chart')
    chart.append('h1')
    .attr('id', 'title')
    .text(data.name)

    chart.append('p')
    .attr('class', 'description')
    .text(data.description)

    const svg = chart.append('svg')
    .attr('height', '500px')
    .attr('width', '100%')

    svg.selectAll('rect')
    .data(data.data)
    .enter()
    .append('rect')
    .attr('fill', 'blue')
    console.log(svg)
}


/**
 * d3.select()
 * d3.selectAll()
 * d3.attr()
 * d3.style(node, name) - returns value of a node's style property
 * selection.each(fn)
 * selection.style(name, value)
 * selection.property(name, value)
 * selection.classed(names, value)
 * selection.html(value)
 * selection.text(value)
 */