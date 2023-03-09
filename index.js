const textvalue= document.querySelector('.text');

function plus(){

    let value = parseInt(textvalue.innerText);
      value += 1;
      textvalue.innerText = value;
};

function minus(){

    let value = parseInt(textvalue.innerText);
    value -= 1;
    textvalue.innerText = value;
};

// textvalue.addEventListener("click", function(value){
//     let value = parseInt(textvalue.innerText);
//     value = value + 1;
//     textvalue.innerText = value;
// })
