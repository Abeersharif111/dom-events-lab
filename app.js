/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1=null;
let num2=null;
let number =null
let button = null;
let operator =null;
let value = null;
let result = null;
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display')
//const buttons = document.querySelectorAll('.button')
const numbers = document.querySelectorAll('.number') //querySelectorAll is udes to select all numbers
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equals')
//console.log(buttons)
const calculator = document.querySelector('#calculator');
const row = document.querySelector('.row')
console.log(operators)
/*----------------------------- Event Listeners -----------------------------*/

//buttons.forEach ( button => {
 // button.addEventListener('click', (buttonClickedHandler))} ) // ..working
  //=> {
    // This log is for testing purposes to verify we're getting the correct value
   // console.log(event.target.innerText); ....working
    // Future logic to capture the button's value would go here
       
  numbers.forEach( number =>
   {number.addEventListener('click',buttonClickedHandler)})

operators.forEach( operator =>
   {operator.addEventListener('click',buttonClickedHandler)})

equal.addEventListener('click',buttonClickedHandler)



/*-------------------------------- Functions --------------------------------*/
function buttonClickedHandler( event ) 
{
let value =event.target.textcontent
 // give the content of the clicked button to the value ...not working
console.log(event.target.textcontent)  // to check the function in consle ....working



   if (event.target.classList.contains('number')) // if number is pressed ... not working
    { holdNumber(value) 
       return }


 //if (value >='0' && value<='9')   // if a number is pressed    ..... working
  //{ holdNumber(value) }           // call function holdNumber


 // if (event.target.innerText === '*')  // if operator is pressed ....not working
 //  {
    // Do something with this operator
 // }

if ( value === '+')
    { 
      //operator = value
      //value = null 
      operator1(value)
     }

     

 if ( value ==='C')  // to clear the display content
   { clearAll() 
      
   }

if ( value ==='=') // to show the result
   { 
      calculate()
    console.log(display)
   //result ()
    //return
   }

}


function holdNumber(value) 
{
    if (num1 === null) // if no numbers clicked yet
       { num1= value }   // give the vlaue to num1
    else                   // if have a digit previously
       {  num1 = num1 + value                 // hold the next digit
        }
        display.textContent= num1
    
    
        { if ( num2 === null)
         { num2= value }   // give the vlaue to num2
    else                   // if have a digit previously
       {  num1 = num2 + value                 // hold the next digit
          
        }
        display.innertext= num2
 }
}


function operator1() 
       {
         if (num1===null )    // if still no numbers pressed
         return;

         if ( num2 !== null)
            {calculate()
            }
       }

function calculate( )
     { 
      result = Number(num1.value) + Number(num2.value)
      display.innertext = result
     }



 function clearAll() 
{
    num1= null
    num2= null
  //  operatopr= null
    display.innertext = null
} 