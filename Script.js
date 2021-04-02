//Defines starting figure as 100 and no buttons clicked as 0

const max = 100;
let x = 0;

// Subtracts 1 from Max on button press and displays it to top left box

function screen(val)
        {
        document.getElementById("box").value=max-x;
        }
      

//Assigns value of 1 to button when pressed 
        
function increment()

{
	
	x=x+1;

} 

function decrement()

{
	x=x-1;
}



function onclickaction(val)
{
	if (document.getElementById(val).style.background == 'green')
	
{
	decrement();
	screen();

   document.getElementById(val).style.background = 'transparent';

}

else 
{
	
	increment();
	screen();
	
	document.getElementById(val).style.background = 'green';
}

}


     