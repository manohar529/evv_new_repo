
$(document).ready(function(){
				

    document.addEventListener("deviceready",onDeviceReady,false);       
});


    function onDeviceReady() {
	 
		var element = document.getElementById('deviceProperties');
		var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
 			window.location='./first_screen.html';
                return false;
    }
    else
    {
    							
    }

   
	var device_uuid = device.uuid;
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
			
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_registered_emails',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
				  bootbox.dialog({
					  message: "Retrieving registered emails failed. Please try after sometime ",
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
			
var dropdown = document.getElementById("registered_emails");

for (var i = 0; i < data.emails.length; ++i) {
   
    email=data.emails[i].email;
    dropdown[dropdown.length] = new Option(email, email);
}
	return false;
 
}
            
       });
}
});

        var device_uuid = device.uuid;
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
				
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_security_questions',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  bootbox.dialog({
					  message: "Retrieving security questions failed. Please try after sometime ",
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
            	  
    	var dropdown = document.getElementById("security_question");
    	for (var i = 0; i < data.questions.length; ++i) {
        question=data.questions[i].question;
        question_id=data.questions[i].question_id;
        dropdown[dropdown.length] = new Option(question, question_id);
        
    	}
    				
    	  
    }
     
});
}
});
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$(document).ready(function(){
	
		
		$('#send_email').click(function(event) {
		
		event.preventDefault();
		var email_validation = document.getElementById('registered_emails').value;
		var security_question_validation = document.getElementById('security_question').value;
				
			if(email_validation==-1)
			{
			
			bootbox.dialog({
				  message: "Please select email",
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
			if(security_question_validation==-1)
			{
				bootbox.dialog({
					  message: "Please select security question",
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
			else{
			if(document.getElementById("security_answer").value == "")
			{
			
			bootbox.dialog({
				  message: "Please enter security answer",
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
			
			var email=$('select#registered_emails').val();
			var device_uuid=device.uuid;
			var security_question = $('select#security_question').val();
			var security_answer = $('input#security_answer').val();


			
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
			
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/send_email',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {device_uuid:device_uuid,email_id:email,question_id:security_question,answer:security_answer},
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			 
			 bootbox.dialog({
		  message: "Retrieving PIN failed. Please try after sometime.",
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
               
              },
              success: function (data) {
						
						if(data.response=='0')
    	  			    	
      				  	{
    						bootbox.dialog({
    	      					  message: data.response_message,
    	      					  title: "Message",
    	      					  buttons: {
    	      					    success: {
    	      					      label: "OK",
    	      					      className: "btn-success",
    	      					      callback: function() {
    	      					  
    	      					    	 window.location="log-in.html";   
    	      					    
    	      					      }
    	      					    
    	      					    }
    	      					    
    	      					    
    	      					  }
    	      					});
    						
      					}
      				  else
      					
      				  	{
      					
      					bootbox.dialog({
      					  message: data.response_message,
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


	
});
			
		}
		});
			}
			}
			
		
 }
});
	});
		
		
				
			function send_pin(event)
			{
			
			
			
	
				var email_validation = document.getElementById('registered_emails').value;
				var security_question_validation = document.getElementById('security_question').value;
				
			if(email_validation==-1)
			{
			
			document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please select email</div>";
			return false;
			}
			else
			{
			if(security_question_validation==-1)
			{
				document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please select security question</div>";
				return false;
			}
			else{
			if(document.getElementById("security_answer").value == "")
			{
			document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please enter security answer</div>";
			
    				
    				return false;
			}
			else
			{
			var email=$('select#registered_emails').val();
			var device_uuid=device.uuid;
			var security_question = $('select#security_question').val();
			var security_answer = $('input#security_answer').val();



		$.post( "http://183.82.96.212:8080/m_service/m_resources/send_email" , {device_uuid:device_uuid,email_id:email,question_id:security_question,answer:security_answer}, function( data ) {


			 bootbox.dialog({
  message: data.response_message,
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
 
    window.location="log-in.html";
    
      }
    
    }
    
    
  }
});
 	
 	
	      return false;
      
}, "json").fail(function() {

		
		return false;
});
			
			}
			}
			}
			
			}
			
			
			
			
			
			
			function alert_admin()
			{
			var device_uuid = device.uuid;
			
			
			
			
			
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

   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/alert_admin',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
               bootbox.dialog({
		  message: "Sending an alert to admin failed. Please try after sometime.",
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
  message: data.response_message,
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
 
    window.location="log-in.html";
    
      }
    
    }
    
    
  }
});
 	
 	
	      return false;
    
            }
			});
			}
			});
			
		return false;
			}

















function check(username) 
{

if (username == "") 
{

bootbox.dialog({
	  message: "Please enter your Username",
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
	
return true;
}
}



  
function checkpassword(password1) 
{


if (password1) 
{

			var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
           window.location='./first_screen.html';
                return false;
    }
    else
    {
		return true;
        
       
     }
  
}
else
{


bootbox.dialog({
	  message: "Please enter your Password",
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



function formValidation()  
{ 


var username = document.getElementById("username1").value;

var password = document.getElementById("password1").value;

var device_uuid = device.uuid;
	

    
    
   
    	if(check(username))
    	{
    		
    			if(checkpassword(password))
    			{
				
				  $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
			
          },
          success: function (token) {   
				
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/check_user_valid',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {username:username,password:password,device_uuid:device_uuid},
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
			 
			 bootbox.dialog({
        					  message: "Invalid Username or Password",
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
				if(data.response=='0')
    	  			    	
      				  	{
    						
    						window.location='./create_pin.html';	   
    					}
      				  else
      					
      				  	{
      					
      					bootbox.dialog({
      					  message: data.response_message,
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
    					
    					
    					
    				
    			});
    				
    	
    			
			}
			});
    
	
	}
		else
    			{
    				return false;
    			}
	}
	return false;
	}
	
		
	
   

	
    