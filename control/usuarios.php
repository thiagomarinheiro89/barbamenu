<?php
include 'conexao.php';

$texto = isset($_REQUEST['texto'])?$_REQUEST['texto']:"";

$where = "";
if($texto!=""){
  $where = "and (nome like '%".$texto."%'";
  $where .= "or email like '%".$texto."%'";
  $where .= "or login like '%".$texto."%')";

}

$sel = "SELECT * FROM Usuarios where login not like 'suporte' and excluido = 0 $where order by nome";
get_dados($sel);

 ?>
