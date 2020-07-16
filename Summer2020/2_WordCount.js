var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var str = "";		
 
rl.on('line', function (data) {    		    
    str = data;  
});


function WordCount(str) { 
    if (str.length > 1001) {
        return err = "I can't handle with more than 1000 symbols";
    
    } else {
        str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        return str.trim().split(" ").filter( function(str) {return str != "";} ).length;
    }
}

process.stdin.on('end', () => { 
    
    console.log(WordCount(str));
    process.exit(0); 
});
