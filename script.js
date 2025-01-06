let toastbox = document.getElementById("toastbox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Failed to submit!!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input!!';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");

    if(msg == "success"){
        toast.innerHTML = successMsg;
        toast.classList.add('success');
    }
    else if(msg == "failed"){
        toast.innerHTML = errorMsg
        toast.classList.add('error');
    }
    else{
        toast.innerHTML = invalidMsg
        toast.classList.add('invalid');
    }
    toastbox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    }, 5000);

}
