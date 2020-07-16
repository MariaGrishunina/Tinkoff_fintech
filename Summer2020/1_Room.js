var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
var input=[];		
 
rl.on('line', function (data) {   
    		    
  input.push(data); 
});

function areaCompare(a, b, c, d) {
    if ((a * b) > (c * d)) {
        console.log("M");

    } else if ((a * b) < (c * d)) {
        console.log("P");
    
    } else {
        console.log("E");
    }
} 

process.stdin.on('end', () => { 

	var a = parseInt(input[0].split(' ')[0]);
	var b = parseInt(input[0].split(' ')[1]);
	var c = parseInt(input[0].split(' ')[2]);
	var d = parseInt(input[0].split(' ')[3]);

	var res = areaCompare(a, b, c, d);
 
	process.exit(0);
});
