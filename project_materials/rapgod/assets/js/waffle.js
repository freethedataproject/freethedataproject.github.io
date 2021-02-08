const waffle1 = d3.select('.rape');

// Create an array with numbers 0 - 99
const numbers1 = d3.range(230);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle1
	.selectAll('.block1')
	.data(numbers1)
	.enter()
	.append('div')
	.attr('class', 'block1')
	.style('background-color', d => (d < 23 ? '#F55676' : '#CCCCCC'));




const waffle2 = d3.select('.kill');

// Create an array with numbers 0 - 99
const numbers2 = d3.range(100);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle2
	.selectAll('.block2')
	.data(numbers2)
	.enter()
	.append('div')
	.attr('class', 'block2')
	.style('background-color', d => (d < 51 ? '#F55676' : '#CCCCCC'));


	
const waffle3 = d3.select('.sexvi');

// Create an array with numbers 0 - 99
const numbers3 = d3.range(100);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle3
	.selectAll('.block3')
	.data(numbers3)
	.enter()
	.append('div')
	.attr('class', 'block3')
	.style('background-color', d => (d < 52 ? '#F55676' : '#CCCCCC'));







	const waffle4 = d3.select('.example4');

// Create an array with numbers 0 - 99
const numbers4 = d3.range(100);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle4
	.selectAll('.block4')
	.data(numbers4)
	.enter()
	.append('div')
	.attr('class', 'block4')
	.style('background-color', d => (d < 71 ? '#F55676' : '#CCCCCC'));











	const waffle5 = d3.select('.example5');

// Create an array with numbers 0 - 99
const numbers5 = d3.range(100);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle5
	.selectAll('.block5')
	.data(numbers5)
	.enter()
	.append('div')
	.attr('class', 'block5')
	.style('background-color', d => (d < 67 ? '#F55676' : '#CCCCCC'));












	const waffle6 = d3.select('.example6');

// Create an array with numbers 0 - 99
const numbers6 = d3.range(100);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle6
	.selectAll('.block6')
	.data(numbers6)
	.enter()
	.append('div')
	.attr('class', 'block6')
	.style('background-color', d => (d < 99 ? '#F55676' : '#CCCCCC'));

