// JavaScript Document
function showHide(id){
	for (var i = 1; i <= 3; i++){
		document.getElementById("skill"+i).style.display = "none"; //默认不显示所有的块	 
	}
	document.getElementById("skill"+id).style.display = "block"; //显示当前块
}