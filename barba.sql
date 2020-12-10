-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.13-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.6037
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para base_sistema
CREATE DATABASE IF NOT EXISTS `base_sistema` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `base_sistema`;

-- Copiando estrutura para tabela base_sistema.agenda
CREATE TABLE IF NOT EXISTS `agenda` (
  `id_agenda` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `data` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `status` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id_agenda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.agenda: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;

-- Copiando estrutura para tabela base_sistema.log
CREATE TABLE IF NOT EXISTS `log` (
  `id_log` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `acao` varchar(50) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  PRIMARY KEY (`id_log`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.log: ~16 rows (aproximadamente)
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` (`id_log`, `id_usuario`, `data`, `acao`, `descricao`) VALUES
	(1, 1, '2020-12-02 13:17:04', 'Login', 'Realizou Login'),
	(2, 1, '2020-12-02 13:23:41', 'Login', 'Realizou Login'),
	(3, 1, '2020-12-02 13:24:24', 'Login', 'Realizou Login'),
	(4, 2, '2020-12-06 21:46:21', 'Login', 'Realizou Login'),
	(5, 2, '2020-12-06 22:52:03', 'Login', 'Realizou Login'),
	(6, 2, '2020-12-06 23:32:36', 'Login', 'Realizou Login'),
	(7, 2, '2020-12-07 00:05:39', 'Login', 'Realizou Login'),
	(8, 2, '2020-12-07 09:48:38', 'Login', 'Realizou Login'),
	(9, 2, '2020-12-07 11:21:50', 'Login', 'Realizou Login'),
	(10, 2, '2020-12-07 19:15:14', 'Login', 'Realizou Login'),
	(11, 2, '2020-12-08 11:03:59', 'Login', 'Realizou Login'),
	(12, 6, '2020-12-08 14:56:07', 'Login', 'Realizou Login'),
	(13, 2, '2020-12-08 14:58:42', 'Login', 'Realizou Login'),
	(14, 6, '2020-12-08 16:16:56', 'Login', 'Realizou Login'),
	(15, 2, '2020-12-08 16:17:10', 'Login', 'Realizou Login'),
	(16, 6, '2020-12-08 16:17:46', 'Login', 'Realizou Login'),
	(17, 2, '2020-12-08 16:18:09', 'Login', 'Realizou Login');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;

-- Copiando estrutura para tabela base_sistema.lojas
CREATE TABLE IF NOT EXISTS `lojas` (
  `id_loja` int(11) NOT NULL AUTO_INCREMENT,
  `nome_loja` varchar(50) DEFAULT NULL,
  `Ativo` tinyint(4) DEFAULT 1,
  `telefone` varchar(50) DEFAULT NULL,
  `excluido` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id_loja`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.lojas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `lojas` DISABLE KEYS */;
INSERT INTO `lojas` (`id_loja`, `nome_loja`, `Ativo`, `telefone`, `excluido`) VALUES
	(1, 'BarbaBeer', 1, '+5511981670050', 0);
/*!40000 ALTER TABLE `lojas` ENABLE KEYS */;

-- Copiando estrutura para tabela base_sistema.mensagem
CREATE TABLE IF NOT EXISTS `mensagem` (
  `id_mensagem` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario_origem` int(11) DEFAULT NULL,
  `id_usuario_destino` int(11) DEFAULT NULL,
  `mensagem` text DEFAULT NULL,
  `lido` tinyint(4) NOT NULL DEFAULT 0,
  `data` datetime DEFAULT NULL,
  PRIMARY KEY (`id_mensagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.mensagem: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `mensagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensagem` ENABLE KEYS */;

-- Copiando estrutura para tabela base_sistema.modulos
CREATE TABLE IF NOT EXISTS `modulos` (
  `id_modulo` int(11) NOT NULL AUTO_INCREMENT,
  `modulo` varchar(50) DEFAULT NULL,
  `titulo_modulo` varchar(50) DEFAULT NULL,
  `icone` varchar(50) DEFAULT NULL,
  `arquivo_base` varchar(50) DEFAULT NULL,
  `ativo` tinyint(4) DEFAULT 0,
  `admin` tinyint(4) DEFAULT 0,
  `ordem` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_modulo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.modulos: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
INSERT INTO `modulos` (`id_modulo`, `modulo`, `titulo_modulo`, `icone`, `arquivo_base`, `ativo`, `admin`, `ordem`) VALUES
	(1, 'dashboard', 'Dashboard', '<i class="fas fa-tachometer-alt"></i>', 'dash.html', 1, 0, 1),
	(2, 'lojas', 'Lojas', '<i class="fas fa-store-alt"></i>', 'lojas/index.html', 1, 1, 2),
	(3, 'produtos', 'Produtos', '<i class="fas fa-shopping-cart"></i>', 'produtos/index.html', 1, 0, 4),
	(4, 'usuarios', 'Usuarios', '<i class="fas fa-users"></i>', 'usuarios/index.html', 1, 1, 5),
	(5, 'relatorios', 'Relatórios', '<i class="fas fa-users"></i>', 'relatorios/index.html', 1, 1, 6),
	(6, 'dados_loja', 'Dados da Loja', '<i class="far fa-address-card"></i>', 'lojas/perfil.html', 1, 0, 3);
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;

-- Copiando estrutura para tabela base_sistema.tarefas
CREATE TABLE IF NOT EXISTS `tarefas` (
  `id_tarefas` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_tarefa` varchar(50) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `id_criacao` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `status` int(11) DEFAULT 0 COMMENT '0 = pendente, 1=iniciado, 2=finalizado, 3=pausado, 4=interrompido',
  PRIMARY KEY (`id_tarefas`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.tarefas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tarefas` DISABLE KEYS */;
INSERT INTO `tarefas` (`id_tarefas`, `titulo_tarefa`, `descricao`, `id_criacao`, `id_usuario`, `data`, `hora`, `status`) VALUES
	(1, 'Desenvolver módulo de Tarefa', 'Desenvolver\r\n o \r\nmódulo \r\nde \r\ntarefas', 1, 1, '2020-12-02', '15:00:00', 0);
/*!40000 ALTER TABLE `tarefas` ENABLE KEYS */;

-- Copiando estrutura para tabela base_sistema.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `ultimo_login` datetime DEFAULT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `ativo` tinyint(4) DEFAULT 1,
  `admin` tinyint(4) DEFAULT 0,
  `excluido` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela base_sistema.usuarios: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id_usuario`, `login`, `senha`, `email`, `ultimo_login`, `nome`, `ativo`, `admin`, `excluido`) VALUES
	(2, 'Barba', 'e10adc3949ba59abbe56e057f20f883e', 'containerpubstop@gmai.om', '2020-12-08 16:18:09', 'Barba', 1, 1, 0),
	(6, 'Thiago', 'e99a18c428cb38d5f260853678922e03', 'marinheirocriacoes@gmail.com', '2020-12-08 16:17:46', 'Thiago Izidorio', 1, 0, 0),
	(7, 'teste', 'd41d8cd98f00b204e9800998ecf8427e', 'teste@teste.com.br', NULL, 'teste', 1, 0, 0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
