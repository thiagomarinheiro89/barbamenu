<?php
  include("conexao.php");

  $retorno = array();

  $log = isset($_POST['log'])?$_POST['log']:"";
  $pass = isset($_POST['pass'])?$_POST['pass']:"";

  if($log==""||$pass==""){
    $retorno['situacao'] = false;
    $retorno['msg'] = "Não foi possível realizar o login";
  } else {
    $sql = "SELECT id_usuario, email, nome, admin FROM usuarios u
            WHERE u.login = '$log' AND u.senha = MD5('$pass') AND u.ativo=1";

    $dados = get_dados($sql, true);

    if($dados['registros'] == 0){
      $retorno['situacao'] = false;
      $retorno['msg'] = "Não foi possível realizar o login";
    } else {
      $_SESSION['logado'] = true;
      $_SESSION['usuario']['nome'] = $dados[0]['nome'];
      $_SESSION['usuario']['id'] = $dados[0]['id_usuario'];
      $_SESSION['usuario']['email'] = $dados[0]['email'];
      $_SESSION['usuario']['admin'] = $dados[0]['admin'];
      $retorno['situacao'] = true;
      $retorno['msg'] = "Login ok";

      $update = "UPDATE usuarios set ultimo_login = now() where id_usuario = ".$_SESSION['usuario']['id'];
      roda_query($update);

      gera_log("Login", "Realizou Login");
    }
  }

  echo json_encode($retorno);
?>
