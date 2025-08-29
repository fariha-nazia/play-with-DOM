// console.log('counter js is connected');

// 3: taking a global variable, which we will use inside the function
let sum = 0;

// 1: create a function for making the click happen
function clickMe(){
    console.log('clicked');

    // 2: catching the id
    const countID = document.getElementById("count-ID");

    // 4: every time there is click the sum will increase by one


    // countID.innerText = sum++;
    // or we can write 4:
    sum += 1;
    countID.innerText = sum;
    console.log(countID);
}


const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function(){
    // console.log('- btn working');
    const countID = document.getElementById("count-ID");
    sum -= 1;
    countID.innerText = sum;
    console.log(countID);

});