
function openSlideMenu(){
	document.getElementById('side-menu').style.width ='250px';

	document.getElementById('main').style.marginLeft ='250px';


}

function closeSlideMenu(){
	document.getElementById('side-menu').style.width ='0px';

	document.getElementById('main').style.marginLeft ='0px';
}

function mostrarAtivo(tag){
   var tag_li = document.getElementById('lista_menu');
   var tag_a = tag_li.getElementsByTagName('a');
   for (i=0; i<tag_a.length; i++ )
   {
      tag_a[i].style.backgroundColor = "";
   }
      tag.style.backgroundColor = "#ff0000";
      tag.style.padding = "15px 5px"
      tag.style.display = "block"
   }
