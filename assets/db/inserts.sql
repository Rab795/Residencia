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
INSERT INTO Proyecto VALUES (1,"Desarollo de MRP","desc","Sistemas",1,1,1);

INSERT INTO Alumnos VALUES (1,"13211512","Salvador","Rabago","Cruz","Activo","6643678166","src@gmail.com","23355 col cacho","M","1995-04-07","Mexicana",23,1,1,1,1);
INSERT INTO Alumnos VALUES (2,"13211513","Kimberly","Lopez","Gomez","Activo","6642343423","klp@gmail.com","23355 col vilas","F","1995-04-07","Mexicana",22,2,1,1,1);
INSERT INTO Alumnos VALUES (3,"13211514","Luis","Rodriguez","Camacho","Activo","664878677","lrc@gmail.com","23355 col lomas","M","1995-04-07","Mexicana",22,2,1,1,1);
INSERT INTO Alumnos VALUES (4,"13211515","Jorge","Perez","Laredo","Activo","6643456786","jpc@gmail.com","23355 col playas","M","1995-04-07","Mexicana",22,3,1,1,1);
INSERT INTO Alumnos VALUES (5,"13211516","Francisco","Dominguez","Cortez","Activo","6642335653","fgd@gmail.com","23355 col vilas","M","1995-04-07","Mexicana",22,2,1,1,1);
INSERT INTO Alumnos VALUES (6,"13211517","Salvador","Rabago","Cruz","Activo","6643678166","lor@gmail.com","23355 col vilas","M","1995-04-07","Mexicana",22,4,1,1,1);
INSERT INTO Alumnos VALUES (7,"13211518","Kimberly","Lopez","Gomez","Activo","6642343423","gg@gmail.com","23355 col lomas","F","1995-04-07","Mexicana",22,2,1,1,1);
INSERT INTO Alumnos VALUES (8,"13211519","Luis","Rodriguez","Camacho","Activo","664878677","wp@gmail.com","23355 col pipila","M","1995-04-07","Mexicana",22,1,1,1,1);
INSERT INTO Alumnos VALUES (9,"13211520","Jorge","Perez","Laredo","Activo","6643456786","gld@gmail.com","23355 col centro","M","1995-04-07","Mexicana",22,3,1,1,1);
INSERT INTO Alumnos VALUES (10,"13211521","Francisco","Dominguez","Cortez","Activo","6642335653","hola@gmail.com","23355 col rio","M","1995-04-07","Hondureña",22,1,1,1,1);
INSERT INTO Alumnos VALUES (11,"13211522","Salvador","Rabago","Cruz","Activo","6643678166","test1@gmail.com","23355 col centro","M","1995-04-07","Mexicana",22,1,1,1,1);
INSERT INTO Alumnos VALUES (12,"13211523","Kimberly","Lopez","Gomez","Activo","6642343423","test2@gmail.com","23355 col vilas","F","1995-04-07","Mexicana",22,1,1,1,1);
INSERT INTO Alumnos VALUES (13,"13211524","Luis","Rodriguez","Camacho","Activo","664878677","test3@gmail.com","23355 col rio","M","1995-04-07","Mexicana",22,2,1,1,1);
INSERT INTO Alumnos VALUES (14,"13211525","Jorge","Perez","Laredo","Activo","6643456786","test5@gmail.com","23355 col murua","M","1995-04-07","Mexicana",22,4,1,1,1);
INSERT INTO Alumnos VALUES (15,"13211526","Francisco","Dominguez","Cortez","Activo","6642335653","tesst6@gmail.com","23355 col guaycura","M","1995-04-07","Mexicana",22,4,1,1,1);

INSERT INTO PerfilAcademico VALUES (1,1,0,87.7,11,1,1);

INSERT INTO Idiomas VALUES (1,"Ingles"),(2,"Aleman"),(3,"Japones"),(4,"Portuges"),(5,"Frances");
INSERT INTO Habilidades VALUES (1,"C#"),(2,"Phyton"),(3,"PHP"),(4,"Java"),(5,"HTML"),(6,"Javascript");

INSERT INTO CurriculumVitae VALUES(1,1);
INSERT INTO CV_Idiomas VALUES (1,1,90); 
INSERT INTO CV_Idiomas VALUES (1,2,50);
INSERT INTO CV_Habilidades VALUES (1,1,92.6); 
INSERT INTO CV_Habilidades VALUES (1,3,55); 
INSERT INTO CV_Habilidades VALUES (1,4,100); 
