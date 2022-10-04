console.log('Satring');

setTimeout(() => {
    console.log('1s log');
}, 1000);

setTimeout(() => {
    console.log('0s log');
}, 0);

console.log('Finishing');


// OutPut 
                    /*
                    Satring
                    Finishing
                    0s log
                    1s log
                    */

