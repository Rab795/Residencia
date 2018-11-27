<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idEmpresa = intval($_POST["idEmpresa"]);

	$campos="pro_id,pro_nombre,pro_descripcion,pro_departamento,pro_status,pro_idEmpresa,pro_idAsesorExterno,ase_nombre,pro_idPeriodo,prd_descripcion";
	$tables="Proyecto INNER JOIN Periodos ON pro_idPeriodo = prd_id INNER JOIN AsesorExterno ON pro_idAsesorExterno = ase_id";
	$sWhere=" pro_idEmpresa = ".$idEmpresa;
	
	include 'pagination.php'; //include pagination file
	//pagination variables
	$page = (isset($_POST['page']) && !empty($_POST['page']))?$_POST['page']:1;
	$per_page = intval($_POST['per_page']); //how much records you want to show
	$funcion = $_POST['funcion'];
	$adjacents  = 4; //gap between pages after number of adjacents
	$offset = ($page - 1) * $per_page;
	//Count the total number of row in your table*/
	$count_query   = mysqli_query($conectado,"SELECT count(*) AS numrows FROM $tables where $sWhere ");
	if ($row= mysqli_fetch_array($count_query)){$numrows = $row['numrows'];}
	else {echo mysqli_error($conectado);}
	$total_pages = ceil($numrows/$per_page);
	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT $campos FROM  $tables where $sWhere LIMIT $offset,$per_page");
	//loop through fetched data

	if ($numrows>0){	
	?>
		<table class="table table-hover" id="tblProyectos">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Departamento</th>
					<th>Asesor</th>
					<th>Periodo</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				<?php
					$finales=0;
					while($row = mysqli_fetch_array($query)){
					?>
						<tr>
							<td><a href="infoProyecto.html?id=<?php echo $row['pro_id']; ?>"><?php echo $row['pro_nombre']; ?></a></td>
							<td><?php echo $row['pro_departamento']; ?></td>
							<td><a href="infoAsesorExterno.html?id=<?php echo $row['pro_idAsesorExterno']; ?>"><?php echo $row['ase_nombre']; ?></a></td>
							<td><?php echo $row['prd_descripcion']; ?></td>
							<?php
							 if ($row['pro_status'] == "Activo") { ?><td><span class="label label-success">ACTIVO</span></td> <?php }
							 if ($row['pro_status'] == "Cerrado") { ?><td><span class="label label-default">CERRADO</span></td> <?php }
							?>
						</tr>
					<?php
						$finales++;
					}		
				?>
				<tr>
					<td colspan='9'> 
						<?php 
							$inicios=$offset+1;
							$finales+=$inicios -1;
							echo "Mostrando $inicios al $finales de $numrows registros";
							echo paginate( $page, $total_pages, $adjacents, $funcion);
						?>
					</td>
				</tr>
			</tbody>
		</table>
	<?php	
	}
	

?>