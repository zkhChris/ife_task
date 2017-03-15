(function(){
    var input=document.getElementById("input");
    var tar=document.getElementById("list");

    input.onchange=function(){
      return input.value;
    };

    document.getElementById("rightIn").onclick=function(){
      var size=list.getElementsByTagName("div").length;
      if(size>60){
        alert("条目大于60！");
        return;
      }
      var v=input.onchange();
      if (v>=10&&v<=100){
      var node=document.createElement("div");
      var text=document.createTextNode(v);
      node.appendChild(text);
      var thisNode=tar.appendChild(node);
      thisNode.style.height=v*5+"px";
      thisNode.onclick=function(){//新增元素并添加事件
        alert(this.innerText);
        tar.removeChild(this);
      };
    }else{
      alert("请输入0-100的数");
    }
    }

    document.getElementById("leftIn").onclick=function(){
      var size=list.getElementsByTagName("div").length;
      if(size>60){
        alert("条目大于60！");
        return;
      }
      var v=input.onchange();
      if (v>=10&&v<=100){
      var node=document.createElement("div");
      var text=document.createTextNode(v);
      node.appendChild(text);
      //判断list内有无元素
      var div=document.getElementById("list").getElementsByTagName("div");
      var hasElement=div.length;
      if(hasElement>0){
        var thisInsert= tar.insertBefore(node,div[0]);
        thisInsert.style.height=v*5+"px";
        thisInsert.onclick=function(){//新增元素并添加事件
            alert(this.innerText);
            tar.removeChild(this);
          };
      }else{
        var thisNode=tar.appendChild(node);
        thisNode.style.height=v*5+"px";
        thisNode.onclick=function(){
          alert(this.innerText);
          tar.removeChild(this);
        };
      }
    }else{
      alert("请输入0-100的数");
    }
    };

    document.getElementById("leftOut").onclick=function(){
      var div=document.getElementById("list").getElementsByTagName("div");
      var leng=div.length;
      if(leng>0){
        alert(div[0].innerText);
        tar.removeChild(div[0]);
      }
    };

    document.getElementById("rightOut").onclick=function(){
      var div=document.getElementById("list").getElementsByTagName("div");
      var leng=div.length;
      if(leng>0){
        alert(div[leng-1].innerText);
        tar.removeChild(div[leng-1]);
      }
    };

    var sort=document.getElementById("sort");
    sort.onclick=function(){
      var items=list.getElementsByTagName("div");
      console.log(items);
      var i,j;
      for(i=0;i<items.length;i++){
        for(j=items.length-1;j>i;j--){
          if(items[j].style.height>items[j-1].style.height){
            console.log(items[j].style.height+" "+items[j-1].style.height);
            var temp,temp2;
            temp=items[j].style.height;
            temp2=items[j].innerText;
            items[j].style.height=items[j-1].style.height;
            items[j].innerText=items[j-1].innerText;
            items[j-1].style.height=temp;
            items[j-1].innerText=temp2;
          }
        }
      }
    }


  })();
