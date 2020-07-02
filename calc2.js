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
    symbol:'%',
    formula:false,
    type:'key'
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
        data.operation.push(button.symbol);
data.result.push(button.formula);

    }else if (button.type === 'key'){
        if(button.name === 'all-clear'){
data.operation = [];
data.result =[];
        
        }else if (button.name === 'delete') {
data,operation.pop();
data.result.pop();
updateOutputResult(0);
        }
        
    }else if (button.type === 'calculate'){
        
    }
    updateOutputResult(data.operation.join(''));
}

function UpdateOutputOperation (){
    outputOperationElement.innerHTML = operation;
}
function UpdateOutputResult (){
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
