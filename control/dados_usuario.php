<?php
include('conexao.php');

if(isset($_REQUEST['id'])){
  $sel = "SELECT * FROM usuarios u where id_usuario=".$_REQUEST['id'];
  $verifica = get_dados($sel);
  die();
}

$id = isset($_POST['id_usuario'])?$_POST['id_usuario']:"";

if($id ==""){

  $sel = "SELECT * FROM usuarios u where login like '".$_POST['login']."' and ativo=1";
  $verifica = get_dados($sel, true);

  if($verifica['registros']>=1){
    $retorno['status']=false;
    $retorno['msg'] = "Já existe um usuário ativo com esse login";
  } else {


    $nome = str_replace("'", "", $_POST['nome']);
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $login = $_POST['login'];
    $ativo = isset($_POST['ativo'])?$_POST['ativo']:0;


    $insert = "INSERT INTO usuarios (login, senha, nome, email, ativo, admin) values ('$login', md5('$senha'), '$nome', '$email',$ativo, 0)";
    roda_query($insert);

    $retorno['status']=true;
    $retorno['msg'] = "Usuário Cadastrado com sucesso!";

  }
} else {
  $senha=isset($_POST['senha'])?", senha=md5('".$_POST['senha']."') ":"";
  $ativo=isset($_POST['ativo'])?", ativo= 1 ":", ativo= 0 ";
  $update = "UPDATE usuarios set nome='".$_POST['nome']."', email = '".$_POST['email']."'$senha $ativo where id_usuario=$id";
  roda_query($update);
  $retorno['status']=true;
  $retorno['msg'] = "Dados alterados com sucesso!";
}
echo json_encode($retorno);

 ?>
