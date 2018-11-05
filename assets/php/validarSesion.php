<?php
session_start();

if (isset($_SESSION['usuario']))
{
	
	echo '{
				"STATUS" : 0,
				"MENSAJE" : "OK",
				"USUARIO" : "'.$_SESSION['usuario'].'"
			}';
}
else
{
	echo '{
					"STATUS" : 1,
					"MENSAJE" : "DEBE INICIAR SESION "
				}';
}
?>