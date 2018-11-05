<?php

	header('Access-Control-Allow-Origin: *');
	include 'funciones.php';

	if($_POST['txtUsuario'] != "" && $_POST['signin-password'] != "")
	{
		require_once('conectar.php');
		$usuario = str_replace("'","",$_POST["txtUsuario"]);
		$password = str_replace("'","",$_POST["signin-password"]);
		
		
		$consulta = "SELECT usu_nombre,usu_pass FROM Usuarios WHERE usu_nombre='$usuario'";
		
		//$ejecutarConsulta = mysql_query($consulta,$conectado);
		$ejecutarConsulta = mysqli_query($conectado,$consulta);
		if (!$ejecutarConsulta) {
    		printf("Error: %s\n", mysqli_error($conectado));
    		exit();
		}
		//$datos = mysql_fetch_array( $ejecutarConsulta ); 
		$datos = mysqli_fetch_array($ejecutarConsulta,MYSQLI_ASSOC); 

		if($ejecutarConsulta && @mysqli_num_rows($ejecutarConsulta) > 0)
		{
			if($password == mysqli_result($ejecutarConsulta,0,'usu_pass'))
			{
				// echo '{
				// 	"STATUS" : 0,
				// 	"USUARIO" : "'.mysqli_result($ejecutarConsulta,0,'Usu_id').'",
				// 	"TIPO" : '.mysqli_result($ejecutarConsulta,0,'Usu_id_tipo').',
				// 	"SUCURSAL" : "'.mysqli_result($ejecutarConsulta,0,'Usu_sucursal').'"
				// }';

				$respuesta = array(
					'STATUS' => 0,
					'USUARIO' => mysqli_result($ejecutarConsulta,0,'usu_nombre')
				);
				session_start();
				$_SESSION['usuario']= $datos['usu_nombre'];
				$_SESSION['password']= $datos['usu_pass'];

			}else
			{
				$respuesta = array(
					'STATUS' => 3,
					'MENSAJE' => "CONTRASEÑA INCORRECTA"
				);
			}
		}else
		{
			$respuesta = array(
				'STATUS' => 2,
				'MENSAJE' => "USUARIO INEXISTENTE"
			);
		}
		
		
	}else
	{
		$respuesta = array(
			'STATUS' => 1,
			'MENSAJE' => "PARAMETROS INCOMPLETOS"
		);
	}
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($respuesta, JSON_FORCE_OBJECT);
?>
