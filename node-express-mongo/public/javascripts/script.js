// $(document).ready(function(){
//     $("button").click(function(e){
// 		e.preventDefault();
		
// 		var name = $("#name").val();
//         var email = $("#email").val();
//         var contactNumber=$("#contactnumber").val();
//         var password1=$("#password").val();
        

// 		if(name == "" || name == null){
// 			$(".nameInput").removeClass("has-success");
// 			$(".nameInput .glyphicon-ok").remove();
// 			$(".nameInput").addClass("has-error").append(" <span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
// 			var flag1 = ("false");
// 		}
// 		else{
// 			$(".nameInput").removeClass("has-error");
// 			$(".nameInput .glyphicon-remove").remove();
// 			$(".nameInput").addClass("has-success").append(" <span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
// 			var flag1 = ("true");
// 		};
// 		if(email == "" || email == null){
// 			$(".emailInput").removeClass("has-success");
// 			$(".emailInput .glyphicon-ok").remove();
// 			$(".emailInput").addClass("has-error").append(" <span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
// 			var flag2 = ("false");
// 		}
// 		else{
//             var isEmail=validateEmail(email); 
//             if(isEmail){
//                 $(".emailInput").removeClass("has-error");
//                 $(".emailInput .glyphicon-remove").remove();
//                 $(".emailInput").addClass("has-success").append(" <span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
//                 var flag2 = ("true");
//             }
//             else{
//                 $(".emailInput").removeClass("has-success");
//                 $(".emailInput .glyphicon-ok").remove();
//                 $(".emailInput").addClass("has-error").append(" <span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
//                 var flag2 = ("false");
//             }
//         };
//         if(password1 == "" || password1 == null){
// 			$(".passwordInput").removeClass("has-success");
// 			$(".passwordInput .glyphicon-ok").remove();
// 			$(".passwordInput").addClass("has-error").append(" <span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
// 			var flag1 = ("false");
// 		}
// 		else{
// 			$(".passwordInput").removeClass("has-error");
// 			$(".passwordInput .glyphicon-remove").remove();
// 			$(".passwordInput").addClass("has-success").append(" <span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
// 			var flag1 = ("true");
//         };
        
// 		if(flag1 == "true"){
// 			if(flag2 == "true"){
// 				//location.href = '/login';
// 			}
// 			else{
			
// 			};
// 		}
// 		else{
			
// 		};
// 	});
// });


// function phonenumber(inputtxt) {  
// 	if(typeof inputtxt == "undefined")
// 		return;
// 	var phoneno = /^\d{10}$/;  
// 	if((inputtxt.match(phoneno))) {  
// 		return true;  
// 	}  
// 	else {  
// 		return false;  
// 	}  
// }  

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

//Check The items in the local storage
$(document).ready(function(){
	 
	 if(localStorage.length > 0)
	 {
		for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			var trackId=localStorage.getItem( localStorage.key( i ) );
			$("#"+trackId).addClass('hide');
			$("#favStar"+trackId).removeClass('hide');
			$("#favStar"+trackId).addClass('show');
		  }
	 }
})


// Add Item into the Local Storage
function AddItem()
{
$(".badge-success").click(function(e){	
	var trackId=$(this).attr('title');	
	$("#"+trackId).addClass('hide');
	localStorage.setItem("trackId"+trackId, trackId);
	$("#favStar"+trackId).removeClass('hide');
	$("#favStar"+trackId).addClass('show');
	
});
}

function RemoveItem()
{
$(".badge-remove").click(function(e){	
	var trackId=$(".fevRemove").attr('title');	
	alert("trackId"+trackId);
	localStorage.removeItem("trackId"+trackId);
	$("#"+trackId).addClass('show');
	$("#"+trackId).removeClass('hide');
	$("#favStar"+trackId).removeClass('hide');
});
}