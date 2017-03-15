(function(){
  var contentB=document.getElementById("in");
  var content=document.getElementById("info");
  var q=document.getElementById("voc");
  var qSubmit=document.getElementById("vocSub");
  var list=document.getElementById("list");

  contentB.onclick=function(){
    if(content.value===""||content.value===null){
      alert("请输入");
    }else{
      var arr=content.value.split(/[,，、\r\n\t\v\s]/g);
      for(var i=0;i<arr.length;i++){
        var span=document.createElement("span");
        var text=document.createTextNode(arr[i]);
        span.appendChild(text);
        list.appendChild(span).onclick=function(){
          alert(this.innerText);
          list.removeChild(this);
        };
      }
    }
  }


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

    content.onchange=function(){
      return content.value;
    };
    document.getElementById("rightIn").onclick=function(){
      var v=content.onchange();
      if (v!==null&&v!==""){
      var node=document.createElement("span");
      var text=document.createTextNode(v);
      node.appendChild(text);
      list.appendChild(node).onclick=function(){//新增元素并添加事件
        alert(this.innerText);
        list.removeChild(this);
      };
      }
    }
    document.getElementById("leftIn").onclick=function(){
      var v=content.onchange();
      if (v!==null&&v!==""){
      var node=document.createElement("span");
      var text=document.createTextNode(v);
      node.appendChild(text);
      //判断list内有无元素
      var span=document.getElementById("list").getElementsByTagName("span");
      var hasElement=span.length;
      if(hasElement>0){
        list.insertBefore(node,span[0]).onclick=function(){//新增元素并添加事件
            alert(this.innerText);
            list.removeChild(this);
          };
      }else{
        list.appendChild(node).onclick=function(){
          alert(this.innerText);
          list.removeChild(this);
        };
      }
    }
    };
    document.getElementById("leftOut").onclick=function(){
      var span=document.getElementById("list").getElementsByTagName("span");
      var leng=span.length;
      if(leng>0){
        alert(span[0].innerText);
        list.removeChild(span[0]);
      }
    };
    document.getElementById("rightOut").onclick=function(){
      var span=document.getElementById("list").getElementsByTagName("span");
      var leng=span.length;
      if(leng>0){
        alert(span[leng-1].innerText);
        list.removeChild(span[leng-1]);
      }
    };

})()
