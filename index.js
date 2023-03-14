
$(document).ready(()=>{
    
$('form button').click((e)=>{
   e.preventDefault();

   onAdicionaCampo('form input[type=text]', $('section ol').children().length);
})

$('section ol').children().click((e)=>{
    //Metodo 1
    //console.log(e.target.id)
    //adicionaEstiloCss(e.target.id);

    //Metodo 2
    adicionaClasse(e.target.id)
})

});

function onAdicionaCampo(campo, next_id){
    let sInput=$(campo).val();
    let id=next_id+1;
    if(sInput!=''){        
        let oli=`<li id='${id}'>${sInput}</li>`
        $('section ol').append(oli);       
        $(`#${id}`).click(()=>{adicionaClasse(id)});
        $(campo).val('');
    }else{
        alert(`Nome Tarefa: Não pôde ficar Vazio`);
    }
}
//Metodo 1
function adicionaEstiloCss(targetId){
    $(`#${targetId}`).css('text-decoration','line-through');
}

//Metodo 2
function adicionaClasse(targetId){    
    $(`#${targetId}`).addClass("pronta");
}

