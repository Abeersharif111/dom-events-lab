/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1=null;
let num2=null;
let operator =null;
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display')
const buttons = document.querySelector('.button')
/*----------------------------- Event Listeners -----------------------------*/
for ( i=0;i<buttons.length; i++)
{ buttons[i].addvEentLister("click",console.log('clicked')) }
//buttons[2].addEventListener('click', console.log('3 clicked'))
/*-------------------------------- Functions --------------------------------*/
//function buttonClicked( b ) 
//{
//let value = b.target.textContent ; // give the content of the clicked button to the value
//console.log(value.textContenet)
//}

/* if (value >='0' && value<='9')
  { holdNumber(value)
    return
  }
*/

/* if ( value ==='C')  // to clear the display content
   { clearAll() 
      return 
   }

if ( value ==='=') // to show the result
{ 
    result ()
    return
}
*/
/*function holdNumber(value) 
{
    if (num1 === null) // if no numbers clicked yet
       { num1= value }   // give the vlaue to num1
    else                   // if have a digit previously
       {  num1 = num1 + value                 // hold the next digit
        }
        display.textcontent= num1
    
    
        { if ( num2 === null)
         { num2= value }   // give the vlaue to num2
    else                   // if have a digit previously
       {  num1 = num2 + value                 // hold the next digit
          
        }
        display.textcontent= num2
 }
}

function clearAll() 
{
    num1= null
    num2= null
    operatopr= null
    display.textContent = null
} */