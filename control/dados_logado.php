<?php
session_start();

$retorno=array();

$retorno['id_usuario'] = $_SESSION['usuario']['id'];
$retorno['nome'] = $_SESSION['usuario']['nome'];
$retorno['email'] = $_SESSION['usuario']['email'];

if(file_exists("../img/fotos/users/".$retorno['id_usuario'].".jpg")){
  $retorno['foto'] = "img/fotos/users/".$retorno['id_usuario'].".jpg";
} else {
  $retorno['foto'] = "img/fotos/users/no-foto.jpg";
}

echo json_encode($retorno);

?>
