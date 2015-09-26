    
function internet_handling()
{
	
var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
        window.location='./first_screen.html';
       
    }
    else
    {
    	
    	return true;
	}
}