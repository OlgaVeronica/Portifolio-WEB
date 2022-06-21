function confirmarEnvio(){
    let form = document.forms['trabalheEnv']
    if(form.emailEnv.value.length > 0 && form.textoEnv.value.length > 0)
    {
        alert("Mensagem enviada com sucesso!");
    }else{
        alert("Preencha os campos!")
    }
}

