const compareArr = ["lively", "alive", "harp", "sharp", "armstrong"];


function isSubString(elem, element) {
    return element.match(elem);
};


// Where to work
function inArray(array1,array2){

    // let r = arra1.sort();    Passing a reference to the memory address

    // Create a new copy
    const r =  [...(new Set(array1))].sort();

    const a  = r.filter( (elem) => {
        let isSub = false;
        array2.forEach(element => {
            if (isSubString(elem, element)) {
                isSub = true;
            }
        });

        return isSub;
    });

    return r;
}


// Just for testing
const a1 = ["strong", "arp", "arp", "live"];


/*
            a1                                  r
[  ["strong", "arp", "arp", "live"] |  ["arp", "live"]   |      |       |   ]
*/
console.log(inArray(a1, compareArr))





// exported for testing
module.exports = {
    compareArr, inArray
}