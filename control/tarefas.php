<?php
include('conexao.php');

$data = isset($_POST['data'])?$_POST['data']:date("Y-m-d");

$_SESSION['data_agenda'] = $data;

$retorno['data_formatada'] = date('d/m/Y', strtotime($data));

$sel = "SELECT * FROM tarefas where id_usuario=".$_SESSION['usuario']['id']." and data ='".$data."' order by hora";

$retorno['tarefas'] = get_dados($sel, true);

echo json_encode($retorno)
 ?>
