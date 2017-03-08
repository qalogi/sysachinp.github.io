$(document).ready(function(){  
$("#submit").click(function(){
	var name = $("#inputName").val();
	var email = $("#inputEmail").val();
	var subject = $("#inputSubject").val();
	var comment = $("#comment").val();

	$("#returnmessage").empty(); //To empty previous error/success message.
//checking for blank fields	
if(name==''||email==''||subject=='')
{
   alert("Please Fill Required Fields"); 
}
else{
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php",{ name1: name, email1: email, subject1:subject, comment1: comment},
   function(data) {
                $("#returnmessage").append(data);//Append returned message to message paragraph
					if(data=="Your Query has been received, We will contact you soon."){
						$("#form")[0].reset();//To reset form fields on success
					}
			});
         }
 
});
});
