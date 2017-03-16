(function(){
  var button=document.getElementById("btn");
  var input=document.getElementById("in");
  var info=document.getElementById("info");

  button.onclick=function(){
    var length=0;
    for(var i=0;i<input.value.length;i++){
      if(input.value.charCodeAt(i)>255){
        length+=2;
      }else{
        length++;
      }
    }
    console.log(length);
    if(length>=4&&length<=16){
      info.innerText="格式正确";
      info.style.color="rgb(35, 227, 66)";
    }else{
      info.innerText="请输入4-16位字符";
      info.style.color="#f00";
    }
  };
})();
