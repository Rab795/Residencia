CREATE DATABASE MED;
USE MED;

CREATE TABLE Usuarios(
	usu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	usu_nombre VARCHAR(100) NOT NULL UNIQUE,
	usu_pass VARCHAR(100) NOT NULL 
);

CREATE TABLE Periodos(
	prd_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prd_descripcion VARCHAR(50),
    prd_fechaInicio DATE,
    prd_fechaFin DATE
);

CREATE TABLE Institucion(
	ins_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	ins_nombre VARCHAR(100),
	ins_direccion VARCHAR(100)
);

CREATE TABLE Carreras(
	car_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	car_nombre VARCHAR(100),
	car_idInstitucion INT 
);

ALTER TABLE Carreras ADD CONSTRAINT fk_Carreras_Institucion FOREIGN KEY(car_idInstitucion)
REFERENCES Institucion(ins_id);

CREATE TABLE AsesesorInterno(
	asi_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	asi_nombre VARCHAR(100),
	asi_aPaterno VARCHAR(100),
	asi_aMaterno VARCHAR(100),
	asi_especialidad VARCHAR(100),
	asi_idInstitucion INT,
    asi_IdCarrera INT
);

ALTER TABLE AsesesorInterno ADD CONSTRAINT fk_AsesesorInterno_Institucion FOREIGN KEY(asi_idInstitucion)
REFERENCES Institucion(ins_id);

ALTER TABLE AsesesorInterno ADD CONSTRAINT fk_AsesesorInterno_Carreras FOREIGN KEY(asi_IdCarrera)
REFERENCES Carreras(car_id);

CREATE TABLE Empresa(
	emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	emp_nombre VARCHAR(100),
	emp_RFC VARCHAR(50),
	emp_direccion VARCHAR(200),
	emp_ramo VARCHAR(100),
	emp_tel VARCHAR(50)
);

CREATE TABLE AsesorExterno(
	ase_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	ase_nombre VARCHAR(100),
	ase_aPaterno VARCHAR(100),
	ase_aMaterno VARCHAR(100),
	ase_puesto VARCHAR(100),
    ase_IdEmpresa INT
);

ALTER TABLE AsesorExterno ADD CONSTRAINT fk_AsesorExterno_Empresa FOREIGN KEY(ase_IdEmpresa)
REFERENCES Empresa(emp_id);

CREATE TABLE Proyecto(
	pro_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pro_nombre VARCHAR(100),
	pro_descripcion VARCHAR(2000),
	pro_departamento VARCHAR(100),
	pro_idEmpresa INT,
	pro_idAsesorExterno INT,
    pro_idPeriodo INT
);

ALTER TABLE Proyecto ADD CONSTRAINT fk_Proyecto_Empresa FOREIGN KEY(pro_idEmpresa)
REFERENCES Empresa(emp_id);

ALTER TABLE Proyecto ADD CONSTRAINT fk_Proyecto_AsesorExterno FOREIGN KEY(pro_idAsesorExterno)
REFERENCES AsesorExterno(ase_id);

ALTER TABLE Proyecto ADD CONSTRAINT fk_Proyecto_Periodos FOREIGN KEY(pro_idPeriodo)
REFERENCES Periodos(prd_id);

CREATE TABLE Alumnos(
	alu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	alu_noControl VARCHAR(20),
	alu_nombre VARCHAR(100),
	alu_aPaterno VARCHAR(100),
	alu_aMaterno VARCHAR(100),
    alu_Status VARCHAR (100),
	alu_tel VARCHAR(100),
	alu_idCarrera INT,
	alu_idAsesorInterno INT,
	alu_idProyecto INT,
    alu_idPeriodo INT
);

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_Carreras FOREIGN KEY(alu_idCarrera)
REFERENCES Carreras(car_id);

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_AsesesorInterno FOREIGN KEY(alu_idAsesorInterno)
REFERENCES AsesesorInterno(asi_id);

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_Proyecto FOREIGN KEY(alu_idProyecto)
REFERENCES Proyecto(pro_id);

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_Periodos FOREIGN KEY(alu_idPeriodo)
REFERENCES Periodos(prd_id);

CREATE TABLE Convenio(
	con_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	con_PPIED VARCHAR(200),
	con_noEstudiantes INT,
	con_jornada VARCHAR(100),
	con_horario VARCHAR(100),
	con_duracion VARCHAR(100),
	con_periodo VARCHAR(100),
	con_idProyecto INT
);

ALTER TABLE Convenio ADD CONSTRAINT fk_Convenio_Proyecto FOREIGN KEY(con_idProyecto)
REFERENCES Proyecto(pro_id);

CREATE TABLE MatrizCompetencias(
	mco_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	mco_matriz VARCHAR(100),
	mco_idProyecto INT
);

ALTER TABLE MatrizCompetencias ADD CONSTRAINT fk_MatrizCompetencias_Proyecto FOREIGN KEY(mco_idProyecto)
REFERENCES Proyecto(pro_id);

CREATE TABLE Especialidades( 
	esp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	esp_nombre VARCHAR(100),
    esp_idCarrera INT
);

ALTER TABLE Especialidades ADD CONSTRAINT fk_Especialidades_Carreras FOREIGN KEY(esp_idCarrera)
REFERENCES Carreras(car_id);

CREATE TABLE PerfilAcademico(
	pad_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pad_servicioSocial BOOLEAN,
	pad_creditos BOOLEAN,
    pad_promedio DOUBLE,
	pad_idEspecialidad INT,
	pad_idAlumno INT
);

ALTER TABLE PerfilAcademico ADD CONSTRAINT fk_PerfilAcademico_Especialidades FOREIGN KEY(pad_idEspecialidad)
REFERENCES Especialidades(esp_id);

ALTER TABLE PerfilAcademico ADD CONSTRAINT fk_PerfilAcademico_Alumnos FOREIGN KEY(pad_idAlumno)
REFERENCES Alumnos(alu_id);

CREATE TABLE CurriculumVitae(
	cv_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cv_idAlumno INT
);

ALTER TABLE CurriculumVitae ADD CONSTRAINT fk_CurriculumVitae_Alumnos FOREIGN KEY(cv_idAlumno)
REFERENCES Alumnos(alu_id);

CREATE TABLE Materias(
	mat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mat_nombre VARCHAR(100),
    mat_clave VARCHAR(50),
    mat_idEspecialidad INT
);

ALTER TABLE Materias ADD CONSTRAINT fk_Materias_Especialidades FOREIGN KEY(mat_idEspecialidad)
REFERENCES Especialidades(esp_id);

USE MED;
INSERT INTO Usuarios VALUES (1,"admin","1234");
INSERT INTO Institucion VALUES (1,"Instituto Tecnologico de Tijuana","Calzada tecnologico Tijuana B.C.");
INSERT INTO Carreras VALUES (1,"Ing. en TIC",1);
INSERT INTO AsesesorInterno VALUES (1,"Karla","Lopez","Gomez","Sistemas",1,1);
INSERT INTO Periodos VALUES (1,"Ago-Dic 2018","2018-08-24","2018-12-16");
INSERT INTO Empresa VALUES (1, "Plantronics","PL09232343423","Blvd. Bellas Artes Otay","Electronica","6642347654");
INSERT INTO AsesorExterno VALUES (1,"Jose","Martinez","Rodriguez","Gerente",1);
INSERT INTO Proyecto VALUES (1,"Desarollo de MRP","desc","Sistemas",1,1,1);
INSERT INTO Alumnos VALUES (1,"13211512","Salvador","Rabago","Cruz","Activo","6643678166",1,1,1,1);
INSERT INTO Alumnos VALUES (2,"13211513","Kimberly","Lopez","Gomez","Activo","6642343423",1,1,1,1);
INSERT INTO Alumnos VALUES (3,"13211514","Luis","Rodriguez","Camacho","Activo","664878677",1,1,1,1);
INSERT INTO Alumnos VALUES (4,"13211515","Jorge","Perez","Laredo","Activo","6643456786",1,1,1,1);
INSERT INTO Alumnos VALUES (5,"13211516","Francisco","Dominguez","Cortez","Activo","6642335653",1,1,1,1);
INSERT INTO Alumnos VALUES (6,"13211517","Salvador","Rabago","Cruz","Activo","6643678166",1,1,1,1);
INSERT INTO Alumnos VALUES (7,"13211518","Kimberly","Lopez","Gomez","Activo","6642343423",1,1,1,1);
INSERT INTO Alumnos VALUES (8,"13211519","Luis","Rodriguez","Camacho","Activo","664878677",1,1,1,1);
INSERT INTO Alumnos VALUES (9,"13211520","Jorge","Perez","Laredo","Activo","6643456786",1,1,1,1);
INSERT INTO Alumnos VALUES (10,"13211521","Francisco","Dominguez","Cortez","Activo","6642335653",1,1,1,1);
INSERT INTO Alumnos VALUES (11,"13211522","Salvador","Rabago","Cruz","Activo","6643678166",1,1,1,1);
INSERT INTO Alumnos VALUES (12,"13211523","Kimberly","Lopez","Gomez","Activo","6642343423",1,1,1,1);
INSERT INTO Alumnos VALUES (13,"13211524","Luis","Rodriguez","Camacho","Activo","664878677",1,1,1,1);
INSERT INTO Alumnos VALUES (14,"13211525","Jorge","Perez","Laredo","Activo","6643456786",1,1,1,1);
INSERT INTO Alumnos VALUES (15,"13211526","Francisco","Dominguez","Cortez","Activo","6642335653",1,1,1,1);
SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status FROM Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id;
