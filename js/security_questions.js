
$(document).ready(function(){
				

    document.addEventListener("deviceready",onDeviceReady,false);       
});
		

    function onDeviceReady() {
      var element = document.getElementById('deviceProperties');

         //var device_uuid = '8dc6cf319947e729';
       	 var d = document.getElementById("device_uuid");
		 var device_uuid = device.uuid;

    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
	    navigator.app.exitApp();
        return false;
  }
    else
    {
    	get_security_questions(device_uuid);
    function get_security_questions(device_uuid)
    {
	
	
	
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
		  message: "Retrieving Security questions failed. Please try after sometime.",
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
			})
			}
			});
	
	
	
	
	
	

    }}
		
		}
		
		$(document).ready(function(){
		
    $("#formoid").submit(function(event) {

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
				return false;
			}
			else
			{
      
      
      				var device_uuid = device.uuid;
       				var security_question=$('#security_question').val();
					var security_answer=$('input#security_answer').val();
			event.preventDefault();
	      
		  
		  
		  
		  
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/save_security_questions',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: { device_uuid:device_uuid,question_id:security_question, answer:security_answer},
              dataType: "json",
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			 bootbox.dialog({
  message: "Oops !! Security question and answer saving failed. Please try after sometime.",
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
			  window.location='./log-in.html';
			  }
			  });
			  }
			  });
            
		  
		  
		  
		  
		  
		  
		  

      }
      
      });
});
			