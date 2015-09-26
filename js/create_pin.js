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
       
        
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please Check Internet Connection Settings</div>"; 
  	
 	var json ='{"result":"E-10003 :","message": "Please Check Internet Connection Settings"}';

	obj = JSON.parse(json);

	           window.location='./first_screen.html';
                return false;
  }
    else
    {
	}
	}
	function device_pin_validation()
			{
			if(document.getElementById("new_device_pin").value == "")
			{
			bootbox.dialog({
				  message: "Enter new Device Log-In PIN",
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
			
			else
			{
			
				if(document.getElementById("confirm_device_pin").value == "")
			{
			bootbox.dialog({
				  message: "Confirm Device Log-In PIN",
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
			else
			{
    			confirmPass();
       			return false;
        	}
    
       			return true;
        	}
		}   	
			   	function confirmPass() {
        var pass = document.getElementById("new_device_pin").value
        var confPass = document.getElementById("confirm_device_pin").value
        if(pass != confPass) {
        
        	bootbox.dialog({
				  message: "PIN doesn't match",
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
		
		var new_device_pin=$('input#new_device_pin').val();
		var confirm_device_pin=$('input#confirm_device_pin').val();
		var device_uuid = device.uuid;
	
       			
		var pin = document.getElementById("new_device_pin").value;
		
		
		
		 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    
		  
		   
        $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/create_new_pin',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {device_uuid:device_uuid,pin:pin},
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			 
	 bootbox.dialog({
			  message: "Problem with connecting to server. Please try after sometime.",
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
			  
			   bootbox.dialog({
      					  message: "New pin created successfully, and you can use this PIN from now to log-in",
      					  title: "Message",
      					  buttons: {
      					    success: {
      					      label: "OK",
      					      className: "btn-success",
      					      callback: function() {
      					   window.location='./log-in.html';
      					   }
      					    
      					    }
      					    
      					    
      					  }
      					});
            }
			});
			}
			});
		
		
		
		
		

        }
    }