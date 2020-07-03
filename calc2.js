const inputElement = document.querySelector ('.input');
const outputOperationElement = document.querySelector('.operation .value');
const outputResultElement = document.querySelector('.result .value');


let calcButtons = [
{
    name:'delete',
    symbol:'DEL',
    formula:false,
    type:'key'
},
{
    name:'all-clear',
    symbol:'AC',
    formula:false,
    type:'key'
},
{
    name:'percent',
    symbol:'+/-',
    formula:'*-1',
    type:'operator'
},

{
    name:'division',
    symbol:'÷',
    formula:'/',
    type:'operator'
},
{
    name:'7',
    symbol:'7',
    formula:7,
    type:'number'
},
{
    name:'8',
    symbol:'8',
    formula:8,
    type:'number'
},
{
    name:'9',
    symbol:'9',
    formula:9,
    type:'number'
},
{
    name:'multiplication',
    symbol:'x',
    formula:'*',
    type:'operator'
},
{
    name:'4',
    symbol:'4',
    formula:4,
    type:'number'
},
{
    name:'5',
    symbol:'5',
    formula:5,
    type:'number'
},
{
    name:'6',
    symbol:'6',
    formula:6,
    type:'number'
},
{
    name:'addition',
    symbol:'+',
    formula:'+',
    type:'operator'
},
{
    name:'1',
    symbol:'1',
    formula:1,
    type:'number'
},
{
    name:'2',
    symbol:'2',
    formula:2,
    type:'number'
},
{
    name:'3',
    symbol:'3',
    formula:3,
    type:'number'
},

{
    name:'subtraction',
    symbol:'-',
    formula:'-',
    type:'operator'
},
{
    name:'0',
    symbol:'0',
    formula:0,
    type:'number'
},
{
    name:'period',
    symbol:'.',
    formula:'.',
    type:'number'
},
{
    name:'calculate',
    symbol:'=',
    formula:'=',
    type:'calculate'
}
];
function createButtons (){
const buttonRows = 4;
let addedButtons = 0;

calcButtons.forEach((button,index)=>{
    if (addedButtons % 4 === 0){ 
        inputElement.innerHTML += `<div class="row"></div>`;
    }
    const row = document.querySelector('.row:last-child');
    // console.log(row);
    row.innerHTML += `<button id="${button.name}">
${button.symbol}
    </button>`
   // console.log(row);
    addedButtons++;
});
}
createButtons();
let del = document.querySelector('#delete');
console.log(del);
del.style.background = '#ffb07c'
del.style.color = '#202020'
let eq = document.querySelector('#calculate');
eq.style.background = '#7ccbff'
eq.style.color = '#202020'
eq.style. border = '2px solid #7ccbff';

// an objcect with arrays where we can push the numbers into.
let data = {
    operation :[],
    result: []
}


function calculator(button){
    if(button.type === 'operator'){
data.operation.push(button.symbol);
data.result.push(button.formula);
    }else if (button.type === 'number'){
        if(button.name === 'period' && data.operation.includes('.')) return;
        data.operation.push(button.symbol);
data.result.push(button.formula);

    }else if (button.type === 'key'){
        if(button.name === 'all-clear'){
data.operation = [];
data.result =[];
updateOutputResult(0);
        
        }else if (button.name === 'delete') {
data.operation.pop();
data.result.pop();

        }
        
    }else if (button.type === 'calculate'){
        let joinResult = data.result.join('');
        //console.log(joinResult);
        let result = eval(joinResult);
        
        result = formatResult(result);

        updateOutputResult(result);

      data.operation = [];
      data.result =[];

      data.operation.push(result);
      data.result.push(result);

      return;
    }
    updateOutputOperation(data.operation.join(''));
}

function updateOutputOperation (operation){
    outputOperationElement.innerHTML = operation;
}
function updateOutputResult (result){
    outputResultElement.innerHTML = result;
}


inputElement.addEventListener ('click', event => {
    let targetBtn = event.target;
    calcButtons.forEach( button =>
        {
            if (button.name === targetBtn.id)calculator(button)
        }
   
    )
    })
function formatResult (result){
   const maxNumLength = 10;
   const precision = 5;
if (digitCount(result) > maxNumLength){
    if(isFloat(result)) {
     const resultInt = parseInt(result);
     const resultIntLength = digitCount(resultInt); 

     if (resultIntLength > maxNumLength){
         return result.toPrecision(precision);
     }
     else {
       const digitsAfterPeriod = maxNumLength - resultIntLength;
       return result.toFixed(digitsAfterPeriod);
     }

    }else{
        return result.toPrecision(precision);
    }
}else{
    return result;
}
}
function digitCount (number){
    return number.toString().length;
}
function isFloat(number){
    return number % 1 != 0;
}