var input=document.getElementById('find');   //输入框
function take() {
    if(input.value==" 请输入你要搜索的内容...")
    {
        input.value="";
        input.style.color="black";
    }

}
   function move(){
       if(input.value==""){
           input.value=" 请输入你要搜索的内容...";
           input.style.color="#999"
       }
   }


