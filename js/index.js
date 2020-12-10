$(document).ready(function(){
  sessao("limpa");

  setTimeout(function(){
    $("#l_1").removeAttr('disabled');
    $("#l_2").removeAttr('disabled');
   }, 1000);
});

function sessao(atributo){
  $.post("sessao.php", {acao:atributo});
}

function valida_login(){
  var log = $("#l_1").val();
  var pass = $("#l_2").val();

  $(".alert").fadeOut(100);

  if(log == ""){
    $("#l_1").focus();
    $(".msg").text("Por favor digite sue login");
    $(".alert").fadeIn(100);
  } else if(pass == ""){
    $("#l_2").focus();
    $(".msg").text("Por favor digite a sua senha");
    $(".alert").fadeIn(100);
  } else {
    $("#l_1").attr("disabled", true);
    $("#l_2").attr("disabled", true);
    $(".btn").attr("disabled", true);
    $(".btn").text("Logando ...");
    $.post("control/acesso.php",{log:log, pass:pass}, function(data){
      retorno = JSON.parse(data);

      if(retorno['situacao']){
        window.location.assign("principal.html");
      } else {
        $(".msg").text(retorno['msg']);
        $(".alert").fadeIn(100);
        $("#l_1").attr("disabled", false);
        $("#l_2").attr("disabled", false);
        $(".btn").attr("disabled", false);
        $(".btn").text("Logar");
      }
    });
  }

}
