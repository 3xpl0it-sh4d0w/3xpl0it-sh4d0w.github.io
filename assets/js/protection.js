$(document).keydown(function (event) 
{
    // Empecher le F12 :
    if (event.keyCode == 123)
	{        
        return false;
    }

	else 
			
    // Empecher le Ctrl+Shift+I :
	if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
	{    	    
        return false;
    }

    else

    // Empecher le Ctrl+U :
    if (event.ctrlKey && event.keyCode == 85)
    {        
        return false;
    }
    
    if(event.ctrlKey && event.key == 83)
    {        
        return false;
    }
	
    // Empecher le PrintScreen	
    if(event.keyCode == 44)
    {
    	return false;
    }
});

$(document).on("contextmenu",function(e)
{        
    e.preventDefault();
});

$(document).bind('keydown', function(e)
{
    // Empecher le CTRL + S :
  	if(e.ctrlKey && (e.which == 83))
    {
        e.preventDefault();
        
    	return false;
  	}
});

function disableselect(e)
{ 
    return false 
} 

function reEnable()
{ 
    return true             
} 

document.onselectstart=new Function ("return false") 
document.oncontextmenu=new Function ("return false") 

if (window.sidebar)
{ 
    document.onmousedown=disableselect 
    document.onclick=reEnable 
}
