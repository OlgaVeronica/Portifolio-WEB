function confirmarEnvio(){
    let form = document.forms['trabalheEnv']
    if(form.emailEnv.value.length > 0 && form.textoEnv.value.length > 0)
    {
        alert("Mensagem enviada com sucesso!");
    }else{
        alert("Preencha os campos!")
    }
}

function trocaImagemEu(imagem){
    imagem.src="../image/mallu.jpg";
}

function trocaImagemIFRO(imagem){
    imagem.src="../image/ifro.png";
}

function aparecerInfo(){
    alert("Alguns me chamam de Velma, não sei o porquê...")
}
