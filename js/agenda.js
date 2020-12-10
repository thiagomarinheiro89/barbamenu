$(document).ready(function(){
  $.post("control/tarefas.php",{},function(data){
    retorno = json(data);
    $("#data_agenda").text(retorno['data_formatada']);
    if(retorno['tarefas']['registros']==0){
      $(".tb").empty();
      $(".tb").append("<tr>"+
                        "<td colspan=3><center>Não existem tarefas cadastras para a data</center>"+
                       "</tr>");
    } else {
      $(".tb").empty();
      $(".tb").append("<tr>"+
                        "<th>Tarefa"+
                        "<th>Horário"+
                        "<th>Situação"+
                       "</tr>");
      for (var i = 0; i < retorno['tarefas']['registros']; i++) {
        desc = "<b>"+retorno['tarefas'][i]['titulo_tarefa']+"<\/b><br>";
        desc +="<p align='right'>";
        desc += formata_texto(retorno['tarefas'][i]['hora'], "hora");
        desc += "<\/p>";
        desc += formata_texto(retorno['tarefas'][i]['descricao'], "paragrafo");

        $(".tb").append("<tr>"+
                            "<td colspan=2>"+desc+
                        "</tr>");
      }
    }
  });
});
