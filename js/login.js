
$(document).ready(function(){
					

    document.addEventListener("deviceready",onDeviceReady,false);       
});


    
    
   

    function onDeviceReady() {

    
        var element = document.getElementById('deviceProperties');
 

 
       var device_uuid = device.uuid;
       document.getElementById('device_uuid').value=device_uuid;
       
       
          
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
      window.location='./first_screen.html';
      return true;
               
    }
 }
			
	function add_new_user()
	{
			var networkState = navigator.connection.type;
    			if (networkState == Connection.NONE)
    				{
  
  						window.location='./first_screen.html';
    return false;
    }
    else
    {
    	}
		location.href="register_new_user.html";
			}
	
	function forgot_pin()
		{
		
			var networkState = navigator.connection.type;
    		if (networkState == Connection.NONE)
    			{
  					window.location='./first_screen.html';
               		return false;
    			}
    		else
    		{
    		}
			location.href="forgot_pin.html";
			}
			


function checkloginpassword()
    {
	
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       			window.location='./first_screen.html';
                return true;
               
    }
   
    var c = document.getElementById("registrationcode1");
    return checkloginpin(c.value)
   


}


    function checkloginpin(loginpin1) 
{
var d = document.getElementById("device_uuid");

var loginpin = /^\d{4}$/; 

	if (loginpin.test(loginpin1)) 
		{
		
	$.ajax({
		 url:"http://192.168.0.119:8091/m_service/user/login",
		 data:"username="+d.value+"&password="+loginpin1,
		 type:"POST",
		 dataType:"json",	
		 success:function(data)
		 {
		
		 	
		 	window.location='./patient_selection.html';
		 	
		 },
		 error:function(jqXHR,textStatus,errorThrown)
		 {
		 
		 	
		 	bootbox.dialog({
        	message: "Invalid Device Log-In PIN",
        	title: "Message",
        	buttons: {
        	success: {
        	label: "OK",
        	className: "btn-danger",
        	callback: function() {
        					  
        	}
        }
        					    
    }
});
		 }
		});
		
		return false;
		}
else
{
		bootbox.dialog({
        	message: "Device Log-In Pin must contain 4-digits",
        	title: "Message",
        	buttons: {
        	success: {
        	label: "OK",
        	className: "btn-danger",
        	callback: function() {
        					  
        	}
        }
        					    
    }
});
				return false;

}
}

