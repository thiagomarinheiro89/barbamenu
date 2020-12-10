<?php
session_start();

class conecta{
  //Definir dados de acesso ao banco de dados
  public $host = "localhost";
  public $user = "root";
  public $password = "";
  public $database = "base_sistema";
}

function get_dados($query, $trata=false){
  $retorno = array();
  $conta = 0;

  $conexao = new conecta;
  $conn = mysqli_connect($conexao->host, $conexao->user, $conexao->password, $conexao->database);
  $conn->set_charset("utf8");

  $bd = mysqli_query($conn, $query) or die(mysqli_error($conn));

  if($bd){
    $retorno['status'] = true;
    while ($row = mysqli_fetch_assoc($bd)) {
      $retorno[$conta] = $row;
      $conta++;
    }
  } else {
    $retorno['status'] = false;
    $retorno['erro'] = mysqli_fetch_error($conn);
  }
  $retorno['registros'] = $conta;

  if($trata){
    return $retorno;
  } else {
    echo json_encode($retorno);
  }
}

function roda_query($query){
  $conexao = new conecta;
  $conn = mysqli_connect($conexao->host, $conexao->user, $conexao->password, $conexao->database);
  $conn->set_charset("utf8");
  $bd = mysqli_query($conn, $query) or die(mysqli_error($conn));;
  return $bd;
}

function gera_log($acao, $descricao){
  $conexao = new conecta;
  $conn = mysqli_connect($conexao->host, $conexao->user, $conexao->password, $conexao->database);
  $conn->set_charset("utf8");

  $insert = "INSERT INTO LOG (id_usuario, data, acao, descricao) VALUES
             (".$_SESSION['usuario']['id'].", now(),'".$acao."','".$descricao."')";
  $bd = mysqli_query($conn, $insert);
  return $bd;

}
 ?>
