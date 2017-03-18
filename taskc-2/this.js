(function(){
  var tr=document.getElementsByTagName("tr");
  var input1=document.getElementById("input1")
  var input2=document.getElementById("input2");
  var input3=document.getElementById("input3");
  var input4=document.getElementById("input4");
  var input5=document.getElementById("input5");

  window.onload=function(){
    for(var i=1;i<6;i++){
      var temp1="label"+i;
      var node=document.getElementById(temp1);
      node.style.display="none";
    }
  };
  for(var i=1;i<6;i++){
    (function(){
      var temp1="label"+i;
      var temp2="input"+i;
      document.getElementById(temp2).onfocus=function(){
      document.getElementById(temp1).style.display="inline";
    };
  })();

    }

    input1.onblur=function(){
      var info=document.getElementById("label1");
      var length=0;
      for(var i=0;i<this.value.length;i++){
        if(this.value.charCodeAt(i)>255){
          length+=2;
        }else{
          length++;
        }
      }
      console.log(length);
      if(length>=4&&length<=16){
        info.innerText="格式正确";
        info.style.color="rgb(35, 227, 66)";
        return true;
      }else{
        info.innerText="请输入4-16位字符";
        info.style.color="#f00";
      }
      };

      input2.onblur=function(){
        var info=document.getElementById("label2");
        var length=0;
        for(var i=0;i<this.value.length;i++){
          if(this.value.charCodeAt(i)>255){
            length+=2;
          }else{
            length++;
          }
        }
        console.log(length);
        if(length>=4&&length<=16){
          info.innerText="密码可用";
          info.style.color="rgb(35, 227, 66)";
          return true;
        }else{
          info.innerText="请输入4-16位字符";
          info.style.color="#f00";
        }
        };

      input3.onblur=function(){
        if(this.value!==null&&this.value!==""){
        if(this.value===input2.value){
          document.getElementById("label3").innerText="密码输入一致";
          document.getElementById("label3").style.color="rgb(35, 227, 66)";
          return true;
        }else{
          document.getElementById("label3").innerText="密码输入不一致";
          document.getElementById("label3").style.color="rgb(255, 0, 0)";
        }
      }else{
        document.getElementById("label3").innerText="未输入密码";
        document.getElementById("label3").style.color="rgb(255, 0, 0)";
      }
}
      input4.onblur=function(){
        var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        if (regex.test(this.value))
        {
          document.getElementById("label4").innerText="邮箱格式正确";
          document.getElementById("label4").style.color="rgb(35, 227, 66)";
          return true;
        }else{
          document.getElementById("label4").innerText="邮箱格式不正确";
          document.getElementById("label4").style.color="rgb(255, 0, 0)";
        }
  };

      input5.onblur=function(){
        if((/^1(3|4|5|7|8)\d{9}$/.test(this.value))){
          document.getElementById("label5").innerText="格式正确";
          document.getElementById("label5").style.color="rgb(35, 227, 66)";
          return true;
    }else{
      document.getElementById("label5").innerText="格式不正确";
      document.getElementById("label5").style.color="rgb(255, 0, 0)";
    }
}

    document.getElementById("validate").onclick=function(){
      input1.onfocus();input1.onblur();
      input2.onfocus();input2.onblur();
      input3.onfocus();input3.onblur();
      input4.onfocus();input4.onblur();
      input5.onfocus();input5.onblur();
      if(input2.onblur()&&input1.onblur()&&input3.onblur()&&input4.onblur()&&input5.onblur()){
        alert("通过");
      }else{
        alert("存在错误");
      }
    };
})();
