
//Check The items in the local storage
$(document).ready(function(){
	 var favItemList="";
	 if(localStorage.length > 0)
	 {		
		for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			var trackId=localStorage.getItem( localStorage.key( i ) );
            var favItems=trackId.split("#");
			var id=trackId.split("#")[1];
			favItemList=favItemList+"$"+trackId;	
			$("#"+id).addClass('hide');
			$("#favStar"+id).removeClass('hide');
			$("#favStar"+id).addClass('show');
		  }
		  $("#hdnFI").val(favItemList);		
	 }
	 
})


// Add Item into the Local Storage
function AddItem()
{
$(".badge-success").click(function(e){	
	var trackId=$(this).attr('title');	
	var favItem=$(this).attr('fevItem');
	$("#"+trackId).removeClass('show');	
	$("#"+trackId).addClass('hide');
	localStorage.setItem("trackId"+trackId, favItem);
	$("#favStar"+trackId).removeClass('hide');
	$("#favStar"+trackId).addClass('show');
	
	
});
}

function RemoveItem()
{
$(".badge-remove").click(function(e){	
	var trackId=$(this).attr('title');
	$("#"+trackId).removeClass('hide');	
	$("#"+trackId).addClass('show');	
	$("#favStar"+trackId).removeClass('show');
	$("#favStar"+trackId).addClass('hide');
	localStorage.removeItem("trackId"+trackId);	
});
}


