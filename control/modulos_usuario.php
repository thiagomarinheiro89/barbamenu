<?php
include('conexao.php');

if($_SESSION['usuario']['admin']==0){
  $admin = "and admin=".$_SESSION['usuario']['admin'];
} else {
  $admin = "";
}

$select = "SELECT titulo_modulo, icone, arquivo_base
           from modulos
           where ativo = 1 $admin
           order by ordem";

get_dados($select);

?>
