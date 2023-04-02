function insert(num){
    document.form.result.value = document.form.result.value + num;
}

function del(){
    document.form.result.value ="";
}

function backSpace(){
    let bs = document.form.result.value;
    document.form.result.value = bs.substring(0,bs.length-1);
}

function equal(){
    let result = document.form.result.value;
    if (result === "") {
        document.form.result.value ="";
    }
    else{
        document.form.result.value = eval(result);
    }
}
