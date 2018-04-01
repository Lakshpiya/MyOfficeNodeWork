
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


	
function findLocalItems () {	
	var query=document.getElementById("track").value;
	
	var i, results = [];
		for (i in localStorage) {
	  	if (localStorage.hasOwnProperty(i)) {
		var item=localStorage.getItem(i);
		if (item.toLowerCase().indexOf(query) >= 0)
			{
				value = item;
				results.push({key:i,val:value});
			}
			// if (i.match(query) || (!query && typeof i === 'string')) {			 
			// 	value = localStorage.getItem(i);				
			//     results.push({key:i,val:value});					
			// }
	  }
	}		
	$("#hdnFTI").val(JSON.stringify(results));	
}
