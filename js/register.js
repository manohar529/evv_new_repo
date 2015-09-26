
$(document).ready(function(){
				

    document.addEventListener("deviceready",onDeviceReady,false);       
});
 

   
    function onDeviceReady() 
    {
   
		var element = document.getElementById('deviceProperties');
		var device_uuid = device.uuid;
       	var device_name  = device.name;
       	var device_model  = device.model;
       	var device_platform =  device.platform;                        
       	var device_version =  device.version;  
       
       	document.getElementById('device_uuid').value=device_uuid;
		document.getElementById('device_model').value=device_model;
		document.getElementById('device_platform').value=device_platform;
		document.getElementById('device_version').value=device_version;

   
			}


function makeCorsRequest_register(username,password,pin) {

 var username=username;
 var password=password;

var device_uuid = document.getElementById("device_uuid");
var device_name = document.getElementById("device_name");
var device_model = document.getElementById("device_model");
var device_platform = document.getElementById("device_platform");
var device_version = document.getElementById("device_version");



$.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    
		  
		   
        $.ajax({
          url:"http://192.168.0.119:8091/services/session/token",
          type:"get",
          dataType:"text",
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
			
          },
          success: function (token) {   
 
  
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://192.168.0.119:8091/?q=m_service/m_resources/register_device',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: { username:encodeURIComponent(username),password:encodeURIComponent(password),pin:encodeURIComponent(pin),device_uuid:encodeURIComponent(device_uuid.value), device_name:encodeURIComponent(device_name.value),device_model:encodeURIComponent(device_model.value),device_platform:encodeURIComponent(device_platform.value), device_version:encodeURIComponent(device_version.value), device_already_registered:encodeURIComponent("0")}, 
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			 bootbox.dialog({
  message: "Invalid username or password",
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
               
              },
              success: function (data) {
			    window.location='./security_questions.html';
            }
			});
			}
			});
	return false;
}


function formValidation()  
{ 


    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
        
        
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please Check Internet Connection Settings</div>";
        
               
                window.location='./first_screen.html';
                return true;
    }


var username = document.getElementById("username1");

var password = document.getElementById("password1");
var pin = document.getElementById("pin1");


    
    
   
    	if(check(username.value))
    	{
    		
    			if(checkpassword(password.value))
    			{

    				if(checkloginpin(pin.value))
    					{
    				var login_verify=makeCorsRequest_register(username.value,password.value,pin.value);
    				if(login_verify)
    					{return true;}
    					else{ return false;}
    				}
    				
    				else
    				{
    					return false;
    				}
    			}
    			else
    			{
    				return false;
    			}
    	}
    			else
				{
					return false;
				}
			
    			
    		
    		
    	
    
    
    
















function check(username) 
{

if (username == "") 
{





 bootbox.dialog({
  message: "Please enter your Username.",
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
else
{
return true;
}
}
function checkpassword(password1) 
{
if (password1) 
{

return true;
}
else
{

 bootbox.dialog({
  message: "Please enter your Password.",
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
}

function checkloginpin(loginpin1) 
{

var loginpin = /^\d{4}$/; 

if (loginpin.test(loginpin1)) 
{

return true;
}
else
{

 bootbox.dialog({
  message: "Device Log-In PIN must contain 4-digits.",
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
}
}









