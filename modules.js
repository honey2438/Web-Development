const fs= require('fs');
const text=fs.readFile('text.txt','utf-8',()=>{
    console.log("This is another statement");
});
console.log(text);
console.log("This Statement is Executed");
text=text.replace("Devansh","honey");
fs.writeFileSync("honey.txt",text);