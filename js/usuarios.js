$(document).ready(function(){
  lista_usuarios();
});

function lista_usuarios(){
  var texto = $("#texto").val();

  $.get("control/usuarios.php?texto="+texto, function(data){
      dados = json(data);
      $("#tb").empty();
      if(dados['registros']>0){
        for (var i = 0; i < dados['registros']; i++) {
          var bt_del = "";
          if(dados[i]["admin"]!=1){
            bt_del = "<button class='btn btn-danger' alt='excluir' title='excluir' onclick='excluir("+dados[i]["id_usuario"]+")'><i class='far fa-trash-alt'></i></button>";
          } else {
            bt_del = "<button class='btn btn-danger' disabled><i class='far fa-trash-alt'></i></button>";
          }
          $("#tb").append("<tr>"+
                            "<td>"+dados[i]["id_usuario"]+
                            "<td>"+dados[i]["nome"]+
                            "<td>"+dados[i]["email"]+
                            "<td>"+dados[i]["login"]+
                            "<td align='right'><button class='btn btn-dark' alt='Ver' title='Ver' onclick='ver("+dados[i]["id_usuario"]+")'><i class='far fa-eye'></i></button> "+
                                               bt_del+
                          "</tr>");
        }
      }
      $(".load").hide();
  });
}

function ver(id){
  var foot = '<button class="btn btn-dark" onclick="gravar_dados()"><i class="far fa-save"></i> Gravar</button>'+
             "<button class='btn btn-danger' onclick='limpa_modal()'><i class='fas fa-times'></i> Fechar</button>";
  mostra_modal("Dados do Usuario", "modulos/usuarios/formulario.html", "load", foot);

  setTimeout(function(){
    $.get("control/dados_usuario.php?id="+id, function(data){
      dados = json(data);
      $("#nome").val(dados[0]['nome']);
      $("#email").val(dados[0]['email']);
      $("#login").val(dados[0]['login']);

      if(dados[0]['ativo']==1){
        $("#ativo").attr("checked", true);
      } else {
        $("#ativo").attr("checked", false);
      }

      $("#id_usuario").val(id);

      ativa();
      $("#login").prop("disabled", true);
    });
  }, 1000);

}

function excluir(id){
  var foot = '<button class="btn btn-dark" onclick="deleta_usuario('+id+')"><i class="fas fa-check"></i> Confirmar</button>'+
             "<button class='btn btn-danger' onclick='limpa_modal()'><i class='fas fa-times'></i> Cancelar</button>";
  mostra_modal("Excluir Usuario", "Deseja Realmente excluir esse usuário? (Esse Processo não pode ser desfeito!)", "text", foot)
}

function deleta_usuario(id){
  $.post("control/deleta_usuario.php", {id:id}, function(data){
    alert(data);
    $(".load").show();
    lista_usuarios();
    limpa_modal();
  });
}

function adiciona(){
  var foot = '<button class="btn btn-dark" onclick="gravar_dados()"><i class="far fa-save"></i> Gravar</button>'+
             "<button class='btn btn-danger' onclick='limpa_modal()'><i class='fas fa-times'></i> Fechar</button>";
  mostra_modal("Adicionar Usuario", "modulos/usuarios/formulario.html", "load", foot)
}

function gravar_dados(){
  var nome = $("#nome").val();
  var email = $("#email").val();
  var login = $("#login").val();
  var senha = $("#senha").val();
  var senha1 = $("#repete_senha").val();
  var id = $("#id_usuario").val();
  var erro = 0;

  if(senha!=senha1){
    alert("Senhas não conferem!");
    $("#senha").focus();
    erro++;
  }

  if(nome==""){
    alert("Preencha o nome do Usuário!");
    $("#nome").focus();
    erro++;
  } else if(email==""){
    alert("Preencha o e-mail do Usuário!");
    $("#email").focus();
    erro++;
  } else if(login==""){
    alert("Preencha o login do Usuário!");
    $("#login").focus();
    erro++;
  } else if(senha=="" && id=="" ){
    alert("Preencha a senha do Usuário!");
    $("#senha").focus();
    erro++;
  }

  if(erro==0){
    $(".load").show();
    $.post("control/dados_usuario.php", $("#dados-usuario").serialize(), function(data){
      dados = json(data);
      if(!dados['status']){
        alert(dados['msg']);
        $(".load").hide();
      } else {
        alert(dados['msg']);
        limpa_modal();
        lista_usuarios(nome);
      }
    });
  }
}

function ativa(){
  $("#email").attr('disabled', false);
  $("#login").attr("disabled", false);
  $("#senha").attr("disabled", false);
  $("#repete_senha").attr("disabled", false);
  $("#ativo").attr("disabled", false);
}
