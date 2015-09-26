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
              url: 'http://192.168.0.119:8091/m_service/m_resources/is_device_registered',
              type: "post",
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              crossDomain: true,
              
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  var data=JSON.stringify(jqXHR, null, 4);
				  alert("Error ALERT");
				  
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
					    			
    			
