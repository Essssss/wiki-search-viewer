var url1 ="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
var url2="&origin=*";

var inbox = document.getElementsByClassName("inputbox");
var btn = document.getElementById("btn");
var divv = document.getElementById("divv");

btn.addEventListener("click",function(){
  btn.outerHTML='<input id="inputt" type="text" ></input>';

  var inputterm= document.getElementById("inputt");
  inputterm.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
     divv.innerHTML="";
     var myRequest = new XMLHttpRequest();
     var url=url1+'*'+inputterm.value+url2;

     myRequest.open('GET',url,true);
     myRequest.onload =function(){
     var wikidata = JSON.parse(myRequest.responseText);
     console.log(wikidata);

     var newdiv = document.createElement('div');
     divv.appendChild(newdiv);

     newdiv.innerHTML='<a href='+wikidata[3][0]+' target="_blanck" style="text-decoration:none"><div class="result1"><p><b>'+wikidata[1][0]+"</b></br>"+wikidata[2][0]+'</p></div></a>';


     for(var i=1; i<wikidata[1].length;i++){
       var newdiv2 = document.createElement('div');
       newdiv2.innerHTML='<a href='+wikidata[3][i]+' target="_blanck" style="text-decoration:none"><div class="result1"><p><b>'+wikidata[1][i]+"</b></br>"+wikidata[2][i]+'</p></div></a>';
       newdiv.parentNode.insertBefore(newdiv2,newdiv.nextSibling);
}
}

     myRequest.send();

      }
  });

});
