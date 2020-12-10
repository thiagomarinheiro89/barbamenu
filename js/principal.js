var larg = $(window).width();

$(document).ready(function(){
  dados_logado();
  monta_menu();
  $(".titulo-modulo").text("Dashboard");
  $(".conteudo").load("modulos/dash.html");
});


function ver_logado(){
  $.post("sessao.php", {acao:"consulta", sessao:"logado"}, function(data){
    retorno = json(data);
    if(retorno['logado']==undefined || retorno['logado']==false){
      window.location.assign("index.html");
    }
  });
}

function menu(){

  var pos = $(".menu").offset();
  var posperfil = $(".perfil").offset();

  if(posperfil.top>0){
    logado();
  }

  if(larg>600){
    if(pos.left<0){
      $(".bt_menu").animate({left:"15vw"});
      $(".menu").animate({left:"0vw"});
      $(".conteudo").animate({width:'calc(100%-15vw)', left:'15vw'});
      $(".titulo-modulo").animate({width:'calc(100%-15vw)', left:'15vw'});
    } else {
      $(".bt_menu").animate({left:"0vw"});
      $(".menu").animate({left:"-15vw"});
      $(".conteudo").animate({width:'100%', left:'0px'});
      $(".titulo-modulo").animate({width:'100%', left:'0px'});
    }
  } else {
    if(pos.left<0){
      $(".menu").animate({left:"0vw"});
      $(".bt_menu").animate({left:"80vw"});
    } else {
      $(".bt_menu").animate({left:"0vw"});
      $(".menu").animate({left:"-80vw"});
    }
  }
}

function logado(){
  var larg = $(window).width();
  var pos = $(".perfil").offset();
  var posmenu = $(".menu").offset();

  if(posmenu.left>=0 && larg < 600){
    menu();
  }

  if(pos.top>0){
    $(".perfil").animate({top:'-300px'});
  } else {
    $(".perfil").animate({top:'50px'});
  }
}

function agenda(){
    mostra_modal("Agenda", "modulos/agenda.html","load");
    logado();
}

function notificacao(){
  alert("Notificações");
}

function mensagens(){
  alert("mensagens");
}

function mostra_modal(titulo = "Notificação", corpo="carregando...", tipo="text", footer=''){
  $(".modal-title").text(titulo);
  if(tipo=="text"){
    $(".modal-body").text(corpo);
  } else {
    $(".modal-body").load(corpo);
  }

  if(footer!=""){
    $(".modal-footer").empty();
    $(".modal-footer").append(footer);
  }

  $("#modal").modal("show");

}

function limpa_modal(){
  $(".modal-title").empty();
  $(".modal-body").empty();
  $(".modal-footer").empty();
  $(".modal-footer").append('<button type="button" class="btn btn-danger" onclick="limpa_modal()"> <i class="fas fa-times"></i> Fechar</button>');
  $("#modal").modal("hide");
}

function json(data){
  return JSON.parse(data);
}

function dados_logado(){
  ver_logado();
  $.get('control/dados_logado.php', function(data){
    dados = json(data);
    $(".foto_logado").attr("src", dados['foto']);
    $(".nome_logado").text(dados['nome']);
    $(".email_logado").text(dados['email']);
  });
}

function sessao(sessao, valor){
  $.post("sessao.php", {acao:"edita", sessao:sessao, valor:valor}, function(){
    console.log("{"+sessao+":"+valor+"}");
  });
}

function sair(){
  var foot = "<a href='index.html' class='btn btn-primary'><i class='fas fa-check'></i> Sim</a> <button class='btn btn-danger' onclick='limpa_modal()'><i class='fas fa-times'></i> Não</button>";
  mostra_modal("Sair", "Deseja Realmente Sair?", "text", foot)
}

function formata_texto(texto, tipo){
  switch (tipo) {
    case "hora":
      return texto.substr(0,2)+":"+texto.substr(3,2);
    break;
    default:
        return texto.replace(/(\r\n|\n\r|\r|\n)/g, "<br>");
    break;
  }
}

function monta_menu(){
  $.get('control/modulos_usuario.php', function(data){
    retorno = json(data);
    if(retorno['registros']>0){
        for (var i = 0; i < retorno['registros']; i++) {
          $(".menu").append("<div class='op_menu' onclick='modulo(\""+retorno[i]['titulo_modulo']+"\",\""+retorno[i]['arquivo_base']+"\")'>"+retorno[i]['icone']+" "+retorno[i]['titulo_modulo']+"</div>");
        }
    } else {
      alert("Não foi possível montar o menu, por favor refaça o login!");
      window.location.assign('index.html');
    }

  });
}

function modulo(titulo, arquivo){
  $(".load").show();
  $(".titulo-modulo").text(titulo);
  $(".conteudo").load('modulos/'+arquivo);
  if(larg<600){
    menu();
  }

}
