




const submit=document.getElementById("submit");

submit.addEventListener("click",function (e){
    e.preventDefault();
    const inputs=document.querySelectorAll("input");
    const errors=document.getElementsByClassName("errorMessage")
    Array.from(inputs).map((e,index)=>{
        if(e.hasAttribute("required") && e.value==""){
            errors[index].innerText="入力が完了していません"
            return false;

        }
    });

    submit.click();
});

