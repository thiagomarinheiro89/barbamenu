<?php
include('conexao.php');

$texto = isset($_REQUEST['texto'])?$_REQUEST['texto']:"";

$sel = "SELECT * FROM lojas where nome_loja like '%$texto%' and excluido=0";
get_dados($sel);


 ?>
