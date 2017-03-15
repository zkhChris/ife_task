(function(){
  var inputB=document.getElementById("in");
  var content=document.getElementById("info");
  var q=document.getElementById("voc");
  var qSubmit=document.getElementById("vocSub");
  var list=document.getElementById("list");

  inputB.onclick=function(){
    if(content.value===""||content.value===null){
      alert("请输入");
    }else{
    if(content.value.indexOf(",")<0){
      var span=document.createElement("span");
      var text=document.createTextNode(content.value);
      span.appendChild(text);
      list.appendChild(span);
    }else{
      var arr=content.value.split(",");
      for(var i=0;i<arr.length;i++){
        var span=document.createElement("span");
        var text=document.createTextNode(arr[i]);
        span.appendChild(text);
        list.appendChild(span);
      }
    }
  }
  };

    qSubmit.onclick=function(){
      var text=q.value;
      var items=list.getElementsByTagName("span");
      for(var i=0;i<items.length;i++){
        if(items[i].innerText.indexOf(text)>=0){
          items[i].style.color="white";
          items[i].style.backgroundColor="red";
        }else{
          items[i].style.color="black";
          items[i].style.backgroundColor="white";
        }
      }

    }

})()
