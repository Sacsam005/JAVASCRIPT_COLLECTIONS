//create a function which will remove a value from an array

var a=['bus', 'car', 'bike', 'plane'];  //this is my array
console.log(a);

function removeVal(val) {    //I ve taken a single param which is val aka value that I will remove 
    var index=a.indexOf(val);   //I have taken the indexOf value that I have taken  

    if(index >-1) {         //if there is index, and if less than 1
        a.splice(index, 1);     //it will take off the value from the index thats taken
    }
    return a;

}
console.log(removeVal('car'));    //m trying ot remove 'car' from my array