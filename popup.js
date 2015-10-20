$(document).ready(function(){
    var url = "http://www.bilalbaraz.com/app/duyuru.php";
	
	$.getJSON(url, function(result){
		var string = '';
		$.each(result, function(key, value){
			string += '<div class="duyuru">\
						<div class="baslik">'+ value.title + ' (' + value.day + ' ' + value.month +')</div>\
						<div class="detay">'+ value.detail + '</div>\
						<div class="yazar"><b>Yayýnlayan:</b> '+ value.author +'</div>\
					  </div>';
		});
		
		$('#wrapper').html(string);
    });
});