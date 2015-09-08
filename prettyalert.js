function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
function insertHtml(title , content){
    var svg='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path id="svgico" fill="#FFFFFF" stroke="#8CC63F" stroke-miterlimit="10" d="M46.6,64.3l33.7-40L47.4,75.4L24.7,56L46.6,64.3z" /></svg>';
  var htmlStr ='<div id="overlay"><div id="modalcontainer">'+svg+'<h2>'+title+'</h2><p>'+content+'</p><a id="closeModal" href="#">OK</a></div></div>';
var fragment = create(htmlStr);
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);
}

insertHtml('Standart' , 'Content');

function insertCss(){
    
var cssStr='<style></style>';
var fragment = create(cssStr);
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);
}

function animateSvg(elem ,dir) {
    var path = document.getElementById(elem);
    var length = path.getTotalLength();
     
    path.style.strokeDashoffset = (dir)?0:170;
}

function openModal(){
   el = document.getElementById("overlay");
     mod = document.getElementById("modalcontainer");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    el.style.opacity = 1;
    mod.style.width = '450px';
    mod.style.height = '300px';
    setTimeout('closeModal.style.opacity = 1; ', 500);
    setTimeout(function() {animateSvg('svgico', true) ;} , 400);
   // animateSvg('svgico' , true);
}

function closeModal(){
  var el = document.getElementById("overlay");
    var  mod = document.getElementById("modalcontainer");
    mod.style.width = '400px';
    mod.style.height = '250px';
    el.style.opacity = 0;
    document.getElementById("closeModal").style.opacity = 0;
    setTimeout('el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";', 500);
     animateSvg('svgico' , false);
}