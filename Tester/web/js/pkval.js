/**
 * 
 */


$(document).ready(function(){ 
	    $("input[name$='isCoreupgraded']").click(function() {
	        var test = $(this).val();
	        $("div.desc").hide();
	        $("#"+test).show();
	    }); 
	});


$(document).ready(function(){ 
    $("input[name$='isPKconfigChange']").click(function() {
        var test = $(this).val();
        $("div.config").hide();
        $("#"+test).show();
    }); 
});

$(document).ready(function(){ 
    $("input[name$='isTomcatssl']").click(function() {
        var test = $(this).val();
        $("div.cert").hide();
        $("#"+test).show();
    }); 
});

$(document).ready(function(){ 
    $("input[name$='isPlatformComp']").click(function() {
        var test = $(this).val();
        $("div.pcomp").hide();
        $("#"+test).show();
    }); 
});


$(document).ready(function() { 
    $("#form1").validate({ 
      rules: { 
        client: "required",// simple rule, converted to {required:true} 
        mobVersion: {
            	required:true
            },
    dbBackupLoc: {
    			required:true
    			
    },
    cVersion: {
				required:true
},

isPlatformComp: {
	required:true
},
	pkConfigtext: {
		required:true
}
    }
        
      }); 
  }); 

$(document).ready(function() {
	var myArr = [];

	$.ajax({
		type: "GET",
		url: "client.xml", // change to full path of file on server
		dataType: "xml",
		success: parseXml,
		complete: setupAC,
		failure: function(data) {
			alert("XML File could not be found");
			}
	});

	function parseXml(xml)
	{
		//find every query value
		$(xml).find("client").each(function()
		{
			myArr.push($(this).attr("label"));
		});	
	}
	
	function setupAC() {
		$("input#searchBox").autocomplete({
				source: myArr,
				minLength: 1,
				maxLength: 6,
				select: function(event, ui) {
					$("input#searchBox").val(ui.item.value);
				
				}
		});
	}
});
//input prompt jquery begins
$(document).ready(function(){
	  $('input[type=text][title],input[type=password][title],textarea[title]').each(function(i){
	    $(this).addClass('input-prompt-' + i);
	    var promptSpan = $('<span class="input-prompt"/>');
	    $(promptSpan).attr('id', 'input-prompt-' + i);
	    $(promptSpan).append($(this).attr('title'));
	    $(promptSpan).click(function(){
	      $(this).hide();
	      $('.' + $(this).attr('id')).focus();
	    });
	    if($(this).val() != ''){
	      $(promptSpan).hide();
	    }
	    $(this).before(promptSpan);
	    $(this).focus(function(){
	      $('#input-prompt-' + i).hide();
	    });
	    $(this).blur(function(){
	      if($(this).val() == ''){
	        $('#input-prompt-' + i).show();
	      }
	    });
	  });
	});



//platform component dynamic add row functionality
function addRow(tableID) {
	 
    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var counter = 2;	
    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.value="";
    if(rowCount<20){
    	
    //for(var i=rowCount;i<20;i++){	
    cell1.appendChild(element1);
    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.size="50";
    element2.maxlength="50";
    //element2.value="/n";
    element2.id="text"+counter;
    element2.name="p1";
    cell2.appendChild(element2);
    counter++;
   // }
}
    else{
    	alert("Limit exceeded");
    }

}

function getRowValues(tableID) {
	
	var inputs = document.getElementById(tableID).getElementsByTagName("input");
	//var inputs1 = document.getElementById(tableID);
	//var cells=inputs.getElementsByTagName("td");
	//var cells=inputs.getElementsByName("pc");
	//var size = inputs.rows.cells;
	
	//alert(inputs.rows[1].cells[1].innerHTML);
	

	var input = [];
	
	//rows[0].cells[0].innerHTML
	//alert(inputs.length);
	for (var i = 0;i<inputs.length;i++) {
		//alert(inputs.rows.length);
		j=i+1;
		
		//alert(inputs(i).value);
		

		 if (inputs(i).value.length) {
	            input.push(inputs[i].value);
	            
	        }
		 
	    }	
	
	//alert(input);
	//document.writeln(input);
	document.getElementById("hidden1").value=input.toString();
	//alert(msg);
	//return input.toString();
}
//platform component dynamic delete row functionality
function deleteRow(tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    if(rowCount!=null){
    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(chkbox != null && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }

    }}
    }catch(e) {
        alert(e);
    }
}


 
