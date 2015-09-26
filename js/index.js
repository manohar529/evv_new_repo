	$(document).ready(function(){
					

    document.addEventListener("deviceready",onDeviceReady,false);     

});
		function onDeviceReady() {
			
 		var element = document.getElementById('deviceProperties');
		var device_uuid = device.uuid;
       
 	var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
     
        
     
                window.location='./first_screen.html';
                return true;
    }
    else
{
    	
    	
    	 
    		is_device_registered(device_uuid);
   
 function is_device_registered(device_uuid)
{
	             $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/is_device_registered',
              type: "post",
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              crossDomain: true,
              
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  var data=JSON.stringify(jqXHR, null, 4);
				  alert("Error ALERT");
				  alert(data);
				  alert("ErroR");
				  alert(jqXHR.status);
				  alert(jqXHR.statusText);
				  alert("One");
				  var data1=JSON.stringify(textStatus, null, 4);
				  alert(data1);
				  alert(textStatus.status);
				  alert("Two");
				  var data2=JSON.stringify(errorThrown, null, 4);
				  alert(data2);
				  alert(errorThrown.statusText);
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
							
							if(data.logindata[0].is_security_question_answered==1 && data.logindata[0].count>=1)
      {
   
      window.location='./log-in.html';
      return false;
      }
      else if(data.logindata[0].is_security_question_answered==0 && data.logindata[0].count>=1)
      {
      window.location='./security_questions.html';
      return false;
      }
      else
      {
      window.location='./registration.html';
      return false;
      }
										  }
            });

  return false;

}
}
			}
					    			
    			