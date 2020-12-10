<?php
  include("conexao.php");
  if($_SESSION['usuario']['admin']==1){
    $del = "UPDATE usuarios set ativo = 0, excluido=1 where id_usuario=".$_POST['id'];
    roda_query($del);
    echo "Usuário excluído com sucesso!";
  } else {
    echo "Usuário não tem permissão para realizar a ação!";
  }
?>
