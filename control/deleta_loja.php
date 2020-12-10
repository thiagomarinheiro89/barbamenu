<?Php
include("conexao.php");

$del = "UPDATE lojas set excluido = 1 where id_loja=".$_POST['id'];
roda_query($del);

echo "Loja excluida com sucesso!";

?>
