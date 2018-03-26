
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
	$("#"+trackId).removeClass('show');	
	$("#"+trackId).addClass('hide');
	localStorage.setItem("trackId"+trackId, trackId);
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