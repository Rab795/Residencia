<?php
	header('Access-Control-Allow-Origin: *');
	
	require_once("conectar.php");	

	$carpetaId = $_GET['carpetaId'];
	$nombreArchivo = $_GET['nombreArchivo'];

	$enlace = "../../archivos/".$carpetaId."/".$nombreArchivo;
	header ("Content-Disposition: attachment; filename=".$nombreArchivo." ");
	header("Content-type: MIME");
	header ("Content-Length: ".filesize($enlace));
	readfile($enlace);
?>