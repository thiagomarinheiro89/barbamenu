$(document).ready(function(){
    lista_lojas();
});

function lista_lojas(){
  texto = $("#texto").val();
  $.get("control/lojas.php?texto="+texto, function(data){
    dados = json(data);

    $("#tb").empty();

    if(dados['registros']>0){
      for (var i = 0; i < dados['registros']; i++) {
        $("#tb").append("<tr>"+
                      "<td>"+dados[i]["id_loja"]+
                      "<td>"+dados[i]["nome_loja"]+
                      "<td>"+dados[i]["telefone"]+
                      "<td align='right'><button class='btn btn-dark' alt='Ver' title='Ver' onclick='ver("+dados[i]["id_loja"]+")'><i class='far fa-eye'></i></button> "+
                      "<button class='btn btn-danger' alt='excluir' title='excluir' onclick='excluir("+dados[i]["id_loja"]+")'><i class='far fa-trash-alt'></i></button>"+
                    "</tr>");
      }
      $(".load").hide();
    } else {
      $(".load").hide();
    }
  });
}

function excluir(id){
  var foot = '<button class="btn btn-dark" onclick="deleta_loja('+id+')"><i class="fas fa-check"></i> Confirmar</button>'+
             "<button class='btn btn-danger' onclick='limpa_modal()'><i class='fas fa-times'></i> Cancelar</button>";
  mostra_modal("Excluir Loja", "Deseja Realmente excluir essa loja? (Esse Processo não pode ser desfeito!)", "text", foot)
}

function deleta_loja(id){
  $.post("control/deleta_loja.php", {id:id}, function(data){
    alert(data);
    limpa_modal();
    lista_lojas();
  })

}

function ver(id){
  sessao("loja", id);
  $(".conteudo").load("modulos/lojas/perfil.html");
}

function seleciona_logo(){
  if($("#file").val()==""){
    $("#file").click();
    $("#btn_logo").text("Gravar Logotipo");
  } else {
    grava_logo();
  }
}

function grava_logo(){
      $("#logotipo").submit();
}

$("#logotipo").submit(function() {
  var formData = new FormData(this);

  $.ajax({
      url: window.location.pathname,
      type: 'POST',
      data: formData,
      success: function(data) {
          alert(data)
      },
      cache: false,
      contentType: false,
      processData: false,
      xhr: function() { // Custom XMLHttpRequest
          var myXhr = $.ajaxSettings.xhr();
          if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
              myXhr.upload.addEventListener('progress', function() {
                  /* faz alguma coisa durante o progresso do upload */
              }, false);
          }
          return myXhr;
      }
  });
});
