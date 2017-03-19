(function(){
  var city=["北京","上海","广州"];
  var school1=["北京大学","清华大学"];
  var school2=["交大","复旦"];
  var school3=["中山"];
  window.onload=function(){
    document.getElementById("stu").onchange();
  };

  document.getElementById("stu").onchange=function(){
    document.getElementById("select").style.display="inline";
    document.getElementById("place").style.display="none";
    var f = document.getElementById("select1");
    var childs = f.getElementsByTagName("option");
    for(var i = childs.length - 1; i >= 0; i--) {
      console.log(childs[i])
      f.removeChild(childs[i]);
      }
      for(var i=0;i<city.length;i++){
        var node=document.createElement("option");
        var text=document.createTextNode(city[i]);
        node.appendChild(text);
        document.getElementById("select1").appendChild(node);
      }
      document.getElementById("select1").onchange();
  };

  document.getElementById("notStu").onchange=function(){
    document.getElementById("select").style.display="none";
    document.getElementById("place").style.display="inline";
  };

  document.getElementById("select1").onchange=function(){
    var f = document.getElementById("select2");
    var childs = f.getElementsByTagName("option");
    for(var i = childs.length - 1; i >= 0; i--) {
      console.log(childs[i])
      f.removeChild(childs[i]);
      }
    if(this.value=="北京"){
      for(var i=0;i<school1.length;i++){
      var node=document.createElement("option");
      var text=document.createTextNode(school1[i]);
      node.appendChild(text);
      document.getElementById("select2").appendChild(node);
    }
    }
    if(this.value=="上海"){
      for(var i=0;i<school2.length;i++){
      var node=document.createElement("option");
      var text=document.createTextNode(school2[i]);
      node.appendChild(text);
      document.getElementById("select2").appendChild(node);
      }
    }
    if(this.value=="广州"){
      for(var i=0;i<school3.length;i++){
      var node=document.createElement("option");
      var text=document.createTextNode(school3[i]);
      node.appendChild(text);
      document.getElementById("select2").appendChild(node);
      }
    }
    }
})();
