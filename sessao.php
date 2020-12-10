<?php

session_start();

$acao = isset($_POST['acao'])?$_POST['acao']:"";

switch ($acao) {
  case 'edita':
    $_SESSION[$_POST['sessao']] = $_POST['valor'];
  break;
  case "consulta":
    if(isset($_SESSION[$_POST['sessao']])){
      $retorno[$_POST['sessao']] = $_SESSION[$_POST['sessao']];
      echo json_encode($retorno);
    } else {
      echo "[]";
    }

  break;
  case "limpa":
    session_destroy();
  break;
  default:
    echo "<pre>";
    echo json_encode($_SESSION);
  break;
}
 ?>
