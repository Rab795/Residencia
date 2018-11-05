<?php

	//$conectado = @mysql_connect("localhost","root","root");
	$conectado = new mysqli('127.0.0.1', 'root', 'root');
	if($conectado)
	{
		$db ="MED";
		//$conectarBD = @mysql_select_db($db,$conectado);
		$conectarBD = mysqli_select_db($conectado, $db);
		if($conectarBD)
		{
			//echo "Conectado";
		}
		else
		{
			echo "No se pudo conectar a la base de datos";
			//echo "<br>error".mysql_errno()." descripcion: ".mysql_error();
			die('Connect Error: ' . mysqli_connect_error());
		}
	}
	else
	{
		die("No se pudo conectar al servidor de mysql.");
	}
	
?>