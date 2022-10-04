const fs = require("fs");
const path = require('path');

const dirPath = path.join(__dirname, 'crud');

const filePath = `${dirPath}/apple.txt`;

fs.writeFileSync(filePath,  "This is the apple file");

fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})

fs.appendFile(filePath, 'and file name is apple.txt ', (err) => {
    if(err){
        console.log('Error in appendFile😐 ' + err)
    }else{
        console.log('file is updated😍');
    }
})


fs.rename(filePath, `${dirPath}/data.txt`, (err) => {
    if(!err){
        console.log('file is renamed😘');
    }
})

fs.unlinkSync(`${dirPath}/data.txt`);

   