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
REFERENCES Empresa(emp_id) ON DELETE CASCADE;

CREATE TABLE Proyecto(
	pro_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pro_nombre VARCHAR(100),
	pro_descripcion VARCHAR(2000),
	pro_departamento VARCHAR(100),
	pro_status VARCHAR(50),
	pro_idEmpresa INT,
	pro_idAsesorExterno INT,
    pro_idPeriodo INT
);

ALTER TABLE Proyecto ADD CONSTRAINT fk_Proyecto_Empresa FOREIGN KEY(pro_idEmpresa)
REFERENCES Empresa(emp_id) ON DELETE CASCADE;

ALTER TABLE Proyecto ADD CONSTRAINT fk_Proyecto_AsesorExterno FOREIGN KEY(pro_idAsesorExterno)
REFERENCES AsesorExterno(ase_id) ON DELETE SET NULL;

ALTER TABLE Proyecto ADD CONSTRAINT fk_Proyecto_Periodos FOREIGN KEY(pro_idPeriodo)
REFERENCES Periodos(prd_id) ON DELETE SET NULL;

CREATE TABLE Alumnos(
	alu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	alu_noControl VARCHAR(20),
	alu_nombre VARCHAR(100),
	alu_aPaterno VARCHAR(100),
	alu_aMaterno VARCHAR(100),
    alu_Status VARCHAR (100),
	alu_tel VARCHAR(100),
	alu_correo VARCHAR(100),
	alu_direccion VARCHAR(100),
	alu_genero CHAR,
	alu_fechaNacimeinto DATE,
	alu_nacionalidad VARCHAR(50),
	alu_edad INT,
	alu_idCarrera INT,
	alu_idAsesorInterno INT,
    alu_idAsesorExterno INT,
	alu_idProyecto INT,
    alu_idPeriodo INT
);

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_Carreras FOREIGN KEY(alu_idCarrera)
REFERENCES Carreras(car_id) ON DELETE SET NULL;

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_AsesesorInterno FOREIGN KEY(alu_idAsesorInterno)
REFERENCES AsesesorInterno(asi_id) ON DELETE SET NULL;

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_AsesesorExterno FOREIGN KEY(alu_idAsesorExterno)
REFERENCES AsesorExterno(ase_id) ON DELETE SET NULL;

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_Proyecto FOREIGN KEY(alu_idProyecto)
REFERENCES Proyecto(pro_id) ON DELETE SET NULL;

ALTER TABLE Alumnos ADD CONSTRAINT fk_Alumnos_Periodos FOREIGN KEY(alu_idPeriodo)
REFERENCES Periodos(prd_id) ON DELETE SET NULL;

CREATE TABLE Convenio(
	con_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	con_PPIED VARCHAR(200),
	con_noEstudiantes INT,
	con_jornada VARCHAR(100),
	con_horario VARCHAR(100),
	con_duracion VARCHAR(100),
	con_idProyecto INT
);

ALTER TABLE Convenio ADD CONSTRAINT fk_Convenio_Proyecto FOREIGN KEY(con_idProyecto)
REFERENCES Proyecto(pro_id) ON DELETE CASCADE;

CREATE TABLE MatrizCompetencias(
	mco_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	mco_matriz VARCHAR(100),
	mco_idProyecto INT
);

ALTER TABLE MatrizCompetencias ADD CONSTRAINT fk_MatrizCompetencias_Proyecto FOREIGN KEY(mco_idProyecto)
REFERENCES Proyecto(pro_id) ON DELETE CASCADE;

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
	pad_semestre INT,
	pad_idEspecialidad INT,
	pad_idAlumno INT
);

ALTER TABLE PerfilAcademico ADD CONSTRAINT fk_PerfilAcademico_Especialidades FOREIGN KEY(pad_idEspecialidad)
REFERENCES Especialidades(esp_id);

ALTER TABLE PerfilAcademico ADD CONSTRAINT fk_PerfilAcademico_Alumnos FOREIGN KEY(pad_idAlumno)
REFERENCES Alumnos(alu_id) ON DELETE CASCADE;

CREATE TABLE CurriculumVitae(
	cv_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cv_idAlumno INT
);

ALTER TABLE CurriculumVitae ADD CONSTRAINT fk_CurriculumVitae_Alumnos FOREIGN KEY(cv_idAlumno)
REFERENCES Alumnos(alu_id) ON DELETE CASCADE;

CREATE TABLE Materias(
	mat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mat_nombre VARCHAR(100),
    mat_clave VARCHAR(50),
    mat_idEspecialidad INT
);

ALTER TABLE Materias ADD CONSTRAINT fk_Materias_Especialidades FOREIGN KEY(mat_idEspecialidad)
REFERENCES Especialidades(esp_id);

CREATE TABLE Idiomas(
	idm_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idm_nombre VARCHAR(100)
);

CREATE TABLE CV_Idiomas(
	cvi_idCV INT NOT NULL,
    cvi_idIdioma INT NOT NULL,
    cvi_porcentaje FLOAT,
    PRIMARY KEY (cvi_idCV, cvi_idIdioma)
);

ALTER TABLE CV_Idiomas ADD CONSTRAINT fk_IdCV FOREIGN KEY(cvi_idCV)
REFERENCES CurriculumVitae(cv_id) ON DELETE CASCADE;

ALTER TABLE CV_Idiomas ADD CONSTRAINT fk_IdIdioma FOREIGN KEY(cvi_idIdioma)
REFERENCES Idiomas(idm_id);

CREATE TABLE Habilidades(
	hab_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hab_nombre VARCHAR(100)
);

CREATE TABLE CV_Habilidades(
	cvh_idCV INT NOT NULL,
    cvh_idHab INT NOT NULL,
    cvh_porcentaje FLOAT,
    PRIMARY KEY (cvh_idCV, cvh_idHab)
);

ALTER TABLE CV_Habilidades ADD CONSTRAINT fk_IdCV2 FOREIGN KEY(cvh_idCV)
REFERENCES CurriculumVitae(cv_id) ON DELETE CASCADE;

ALTER TABLE CV_Habilidades ADD CONSTRAINT fk_IdHab FOREIGN KEY(cvh_idHab)
REFERENCES Habilidades(hab_id);