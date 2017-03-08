window.onload = function(){
  document.getElementById('chapitre').addEventListener('click', function(e){
	 str = e.target.name;
   num="";
   for(i=1; i<str.length; i++){
     num = num + str[i];
   }
   chap = "chapitre"+num+".json";
   readTextFile(chap,  function(text){
       var data = JSON.parse(text);
       document.getElementById("chapitre").innerHTML = data.txt + "<br><br><ul>";
       for(i = 0; i<data.links.length; i++){
         document.getElementById("chapitre").innerHTML += "<li><label>"+data.links[i].txt+"</label><input name='"+ data.links[i].link +"'type='button' id='lienChap' value='"+data.links[i].link+"'></input></li>";
       }
       document.getElementById("chapitre").innerHTML += "</ul>";
       //console.log(data);
   });
}, true);

}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readTextFile("chapitre1.json", function(text){
    var data = JSON.parse(text);
    document.getElementById("chapitre").innerHTML = data.txt + "<br><br><ul>";
    for(i = 0; i<data.links.length; i++){
      document.getElementById("chapitre").innerHTML += "<li><label>"+data.links[i].txt+"</label><input name='"+ data.links[i].link +"'type='button' id='lienChap' value='"+data.links[i].link+"'></input></li>";
    }
    document.getElementById("chapitre").innerHTML += "</ul>";
    //console.log(data);
});
