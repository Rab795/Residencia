<?php include('assets/php/paginadoAlumnos.php'); ?>
<!doctype html>
<html lang="en">

<head>
	<title>Alumnos | MED</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<!-- VENDOR CSS -->
	<link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/vendor/fontawesome-free-5.5.0-web/css/all.css">
	<link rel="stylesheet" href="assets/vendor/linearicons/style.css">
	<link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css">
	<link rel="stylesheet" href="assets/vendor/toastr/toastr.min.css">
	<!-- MAIN CSS -->
	<link rel="stylesheet" href="assets/css/main.css">
	<!-- MIS ESTILOS -->
	<link rel="stylesheet" href="assets/css/styles.css">
	<!-- GOOGLE FONTS -->
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<!-- ICONS -->
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/aprendizaje.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/aprendizaje.png">
</head>

<body>
	<!-- WRAPPER -->
	<div id="wrapper">
		<!-- NAVBAR -->
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="brand">
				<a href="index.html"><img id="logoMED" src="assets/img/MED.png" alt="MED Logo" class="img-responsive logo"></a>
			</div>
			<div class="container-fluid">
				<div class="navbar-btn">
					<button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
				</div>
				<!-- <form class="navbar-form navbar-left">
					<div class="input-group">
						<input type="text" value="" class="form-control" placeholder="Search dashboard...">
						<span class="input-group-btn"><button type="button" class="btn btn-primary">Go</button></span>
					</div>
				</form> -->
				<div id="navbar-menu">
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/user.png" class="img-circle" alt="Avatar"> <span id="TxtUser"></span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul class="dropdown-menu">
								<li><a href="#"><i class="lnr lnr-user"></i> <span>Mi Perfil</span></a></li>
								<li><a href="#" onclick="cerrarsesion();"><i class="lnr lnr-exit"></i> <span>Cerrar Sesion</span></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<!-- END NAVBAR -->
		<!-- LEFT SIDEBAR -->
		<div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
					<ul class="nav">
						<li><a href="index.html" class=""><i class="lnr lnr-home"></i> <span>Inicio</span></a></li>
						<li>
							<a href="#subPages3" data-toggle="collapse" class="active"><i class="lnr lnr-graduation-hat"></i> <span>Alumnos</span><i class="icon-submenu lnr lnr-chevron-left"></i></a>
							<div id="subPages3" class="collapse in">
								<ul class="nav">
									<li><a href="alumnos.php" class="active">Buscar</a></li>
									<li><a href="nuevoAlumno.html" class="">Agregar</a></li>
								</ul>
							</div>
						</li>
						<li><a href="#" class=""><i class="lnr lnr-apartment"></i> <span>Empresas</span></a></li>
						<li><a href="#" class=""><i class="lnr lnr-book"></i> <span>Proyectos</span></a></li>
						<li>
							<a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-users"></i> <span>Asesores</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
							<div id="subPages" class="collapse ">
								<ul class="nav">
									<li><a href="#" class="">Interno</a></li>
									<li><a href="#" class="">Externo</a></li>
								</ul>
							</div>
						</li>
						<li><a href="#" class=""><i class="lnr lnr-chart-bars"></i> <span>Reportes</span></a></li>
						<li><a href="#" class=""><i class="lnr lnr-dice"></i> <span>Herramientas</span></a></li>
						<li>
							<a href="#subPages2" data-toggle="collapse" class="collapsed"><i class="far fa-building"></i> <span>Institucion</span><i class="icon-submenu lnr lnr-chevron-left"></i></a>
							<div id="subPages2" class="collapse ">
								<ul class="nav">
									<li><a href="#" class="">Informacion</a></li>
									<li><a href="#" class="">Periodos</a></li>
									<li><a href="#" class="">Carreras</a></li>
								</ul>
							</div>
						</li>
						<li><a href="typography.html" class=""><i class="lnr lnr-cog"></i> <span>Configuracion</span></a></li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- END LEFT SIDEBAR -->
		<!-- MAIN -->
		<div class="main">
			<!-- MAIN CONTENT -->
			<div class="main-content">
				<div class="container-fluid">
					<!-- OVERVIEW -->
					<h3 class="page-title">Alumnos</h3>
					<div class="panel panel-headline">
						<div class="panel-heading">
							<div class="row">
								<div class="col-md-3">					
									<div class="input-group">
										<span class="input-group-addon">No. Control</span>
										<input class="form-control" type="text">
									</div>
								</div>
								<div class="col-md-3">					
									<div class="input-group">
										<span class="input-group-addon">Nombre</span>
										<input class="form-control" type="text">
									</div>
								</div>
								<div class="col-md-3">					
									<div class="input-group">
										<span class="input-group-addon">Carrera</span>
										<select class="form-control">
											<option value="cheese">Todas</option>
											<option value="cheese">Ing. en TIC</option>
											<option value="tomatoes">Ing. en Sistemas</option>
											<option value="mozarella">Ing. Informatica</option>
										</select>
									</div>
								</div>
								<div class="col-md-3">					
									<div class="input-group">
										<span class="input-group-addon">Status</span>
										<select class="form-control">
											<option value="cheese">Todos</option>
											<option value="cheese">Aspirante</option>
											<option value="tomatoes">Activo</option>
											<option value="mozarella">Inactivo</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div class="panel-body">
							<table class="table table-hover" id="tblAlumnos">
								<thead>
									<tr>
										<th>No. Control</th>
										<th>Nombre</th>
										<th>A. Paterno</th>
										<th>A. Materno</th>
										<th>Telefono</th>
										<th>Carrera</th>
										<th>Status</th>
										<th>Editar</th>
										<th>Eliminar</th>
									</tr>
								</thead>
								<tbody>
									<?php
										while($row = mysqli_fetch_array($_pagi_result)){
										?>
											<tr>
												<td><a href="infoAlumno.html" onclick="cargaAlumno(<?php echo $row['alu_id']; ?>)"><?php echo $row['alu_noControl']; ?></a></td>
												<td><?php echo $row['alu_nombre']; ?></td>
												<td><?php echo $row['alu_aPaterno']; ?></td>
												<td><?php echo $row['alu_aMaterno']; ?></td>
												<td><?php echo $row['alu_tel']; ?></td>
												<td><?php echo $row['car_nombre']; ?></td>
												<td><?php echo $row['alu_Status']; ?></td>
												<td><button class="btn btn-info"><i class="fa fa-edit"></i></button></td>
												<td><button class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
											</tr>
										<?php
										}		
									?>
								</tbody>
							</table>
							<div id="pagination_controls"><?php echo"<p>".$_pagi_navegacion."</p>"; ?></div>
							</div>
						</div>
					</div>
					<!-- END OVERVIEW -->
				</div>
			</div>
			<!-- END MAIN CONTENT -->
		</div>
		<!-- END MAIN -->
		<div class="clearfix"></div>
		<footer>
			<div class="container-fluid">
				<p class="copyright">&copy; 2018 <a href="#" target="_blank">Theme I Need</a>. All Rights Reserved.</p>
			</div>
		</footer>
	</div>
	<!-- END WRAPPER -->
	<!-- Javascript -->
	<script src="assets/vendor/jquery/jquery.min.js"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
	<script src="assets/vendor/chartist/js/chartist.min.js"></script>
	<script src="assets/scripts/klorofil-common.js"></script>
	<script src="assets/vendor/toastr/toastr.min.js"></script>
	<script src="assets/scripts/funciones.js"></script>
	<script type="text/javascript">
		validarSesion();
	</script>>
</body>

</html>
