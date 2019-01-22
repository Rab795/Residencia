USE MED;

INSERT INTO Usuarios VALUES (1,"admin","1234");
INSERT INTO Institucion VALUES (1,"Instituto Tecnologico de Tijuana","Calzada tecnologico Tijuana B.C.");

INSERT INTO Carreras VALUES (1,"Ing. en TIC",1);
INSERT INTO Carreras VALUES (2,"Ing. en Sistemas",1);
INSERT INTO Carreras VALUES (3,"Ing. en informatica",1);
INSERT INTO Carreras VALUES (4,"Ing. en Industrial",1);

INSERT INTO Especialidades VALUES (1,"Base de datos",1);
INSERT INTO Especialidades VALUES (2,"Desarrollo de software",1);
INSERT INTO Especialidades VALUES (3,"Inteligencia Artificial",2);
INSERT INTO Especialidades VALUES (4,"Administracion",2);
INSERT INTO Especialidades VALUES (5,"Gestion en las empresas",3);
INSERT INTO Especialidades VALUES (6,"Higiene",4);
INSERT INTO Especialidades VALUES (7,"Automatizacion",4);

INSERT INTO AsesesorInterno VALUES (1,"Karla","Lopez","Gomez","Sistemas",1,1);

INSERT INTO Periodos VALUES (1,"Ago-Dic 2018","2018-08-24","2018-12-16");
INSERT INTO Periodos VALUEs (2,"Ene-Jun 2018","2018-01-24","2018-06-16");

INSERT INTO Empresa VALUES (1, "Plantronics","PL09232343423","Blvd. Bellas Artes Otay","Electronica","6642347654");
INSERT INTO AsesorExterno VALUES (1,"Jose","Martinez","Rodriguez","Gerente",1);
INSERT INTO Proyecto VALUES (1,"Desarollo de MRP","desc","Sistemas","Activo",1,1,1,1);
INSERT INTO Convenio VALUES (1,"",4,"Diurna","8am-5pm","6 meses",1);

INSERT INTO Alumnos VALUES (1,"13211512","Salvador","Rabago","Cruz","Activo","6643678166","src@gmail.com","23355 col cacho","M","1995-04-07","Mexicana",23,1,1,1,1,1);

INSERT INTO PerfilAcademico VALUES (1,1,0,87.7,11,1,1);

INSERT INTO Idiomas VALUES (1,"Ingles"),(2,"Aleman"),(3,"Japones"),(4,"Portuges"),(5,"Frances");
INSERT INTO Habilidades VALUES (1,"C#"),(2,"Phyton"),(3,"PHP"),(4,"Java"),(5,"HTML"),(6,"Javascript");

INSERT INTO CurriculumVitae VALUES(1,1);
INSERT INTO CV_Idiomas VALUES (1,1,90); 
INSERT INTO CV_Idiomas VALUES (1,2,50);
INSERT INTO CV_Habilidades VALUES (1,1,92.6); 
INSERT INTO CV_Habilidades VALUES (1,3,55); 
INSERT INTO CV_Habilidades VALUES (1,4,100); 
