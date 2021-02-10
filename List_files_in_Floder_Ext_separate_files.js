var fs = require('fs');
var files = fs.readdirSync('./Images');
var  str=files;

// check type0f file
// console.log(typeof(str)+ "  "+ str.length)

for( x=0;x<str.length;x++){

    // check no.0f elements & names
    // console.log(x + "   "+ str[x])

    // convert filename to  type0f string
    var vstring = JSON.stringify(str[x])

    // verify string
    // console.log(vstring+"  "+typeof(vstring)+"  "+ vstring.length)
 
    //creating extension  
    var ext=".txt"
    // string length starts from 0
    var substring =vstring.substring((vstring.length-5),vstring.length)

    // console.log(substring)
    
    var compar = substring.localeCompare(ext)
    // console.log(compar)

    if(compar==1){
        console.log("hello")
        console.log(vstring)
    }
}

console.log("file checking is completed")