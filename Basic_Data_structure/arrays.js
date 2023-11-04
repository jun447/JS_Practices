// arrays

// const colors = ['red', 'blue', 'green'];
// console.log(colors[0]);
// colors.unshift('yellow');
// console.log(colors);
// colors.shift()
// console.log(colors);
// const newAR = colors.join(',');
// console.log(newAR);
// console.log(typeof newAR);

// slice and splice
const colors2 = ['red', 'blue', 'green'];
// const newAR2 = colors2.slice(0, 2);
// console.log(colors2);
// console.log(newAR2);
// console.log('------------------');
console.log("old A",colors2);
const newAR3 = colors2.splice(1, 2);
console.log(newAR3);
console.log("old B",colors2);

{
// // List all  Arrays methods with description
// colors.push('yellow'); // add to the end
// colors.pop(); // remove from the end
// colors.unshift('yellow'); // add to the beginning not optimized
// colors.shift(); // remove from the beginning
// colors.splice(0, 1); // remove from the beginning
// colors.splice(1, 0, 'yellow'); // add to the beginning
// colors.splice(1, 1, 'yellow'); // replace at the beginning
// colors.slice(1, 2); // copy from the beginning
// colors.concat(['yellow']); // copy from the beginning
// colors.indexOf('yellow'); // find index
// colors.lastIndexOf('yellow'); // find index
// colors.join(','); // convert to string
// colors.reverse(); // reverse
// colors.sort(); // sort
// colors.includes('yellow'); // check if includes
// colors.forEach((color) => console.log(color)); // iterate
// colors.map((color) => color.toUpperCase()); // iterate
// colors.filter((color) => color.length > 3); // iterate
// colors.reduce((acc, color) => acc + color.length, 0); // iterate
// colors.every((color) => color.length > 3); // iterate
// colors.some((color) => color.length > 3); // iterate
// colors.find((color) => color.length > 3); // iterate
// colors.findIndex((color) => color.length > 3); // iterate
// colors.fill('yellow'); // iterate
// colors.flat(); // iterate
// colors.flatMap((color) => color.split('')); // iterate
// colors.keys(); // iterate
// colors.values(); // iterate
// colors.entries(); // iterate
// colors.copyWithin(0, 1, 2); // iterate
// colors.toString(); // convert to string
// colors.toLocaleString(); // convert to string
// colors.length; // get length
// colors[0]; // get element
// colors[0] = 'yellow'; // set element
// colors; // get all elements

}