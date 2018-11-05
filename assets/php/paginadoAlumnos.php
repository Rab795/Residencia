<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	$json = "";
		
	$_pagi_sql = "SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status FROM Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id";
	
	$_pagi_cuantos = 2; 

	include("paginator.inc.php"); 
	

?>