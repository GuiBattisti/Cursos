var groups=document.isc.example.options.length
var group=new Array(groups)
for (i=0; i<groups; i++)
group[i]=new Array()
  
group[0][0]=new Option("Selecione a Formação"," ");
  
group[1][0]=new Option("Selecione a Formação"," ");
group[1][1]=new Option("Técnico Concomitante"," ");
group[1][2]=new Option("Tecnico Integrado"," ");
group[1][3]=new Option("Graduação - Licenciatura"," ");
  
group[2][0]=new Option("Selecione a Formação"," ");
group[2][1]=new Option("Técnico Concomitante"," ");
  
group[3][0]=new Option("Selecione a Formação"," ");	
group[3][1]=new Option("Técnico Concomitante"," ");

group[4][0]=new Option("Selecione a Formação"," ");
group[4][1]=new Option("Técnico Integrado"," ");
group[4][2]=new Option("Técnico Subsequente"," ");
group[4][3]=new Option("Graduação - Bacharelado"," ");

group[5][0]=new Option("Selecione a Formação"," ");
group[5][1]=new Option("Técnico Subsequente"," ");
group[5][2]=new Option("Técnico Integrado"," ");

group[6][0]=new Option("Selecione a Formação"," ");
group[6][1]=new Option("Técnico Subsequente"," ");
group[6][2]=new Option("Graduação - Tecnologia"," ");

group[7][0]=new Option("Selecione a Formação"," ");
group[7][1]=new Option("Técnico Integrado"," ");
group[7][2]=new Option("Técnico Subsequente"," ");
group[7][3]=new Option("Graduação - Tecnologia"," ");
group[7][4]=new Option("Graduação - Bacharelado"," ");
group[7][5]=new Option("Especialização (Lato Sensu)"," ");
group[7][6]=new Option("Mestrado (Stricto Sensu)"," ");

group[8][0]=new Option("Selecione a Formação"," ");
group[8][1]=new Option("Técnico Concomitante"," ");
group[8][2]=new Option("Técnico Integrado"," ");

group[9][0]=new Option("Selecione a Formação"," ");
group[9][1]=new Option("Técnico Concomitante"," ");
group[9][2]=new Option("Técnico Subsequente"," ");

group[10][0]=new Option("Selecione a Formação"," ");
group[10][1]=new Option("Técnico Integrado"," ");
group[10][2]=new Option("Técnico Subsequente"," ");
group[10][3]=new Option("Graduação - Licenciatura"," ");

group[11][0]=new Option("Selecione a Formação"," ");
group[11][1]=new Option("Técnico Subsequente"," ");
group[11][2]=new Option("Graduação - Tecnologia"," ");

group[12][0]=new Option("Selecione a Formação"," ");
group[12][1]=new Option("Técnico Integrado"," ");
group[12][2]=new Option("Técnico Concomitante"," ");
group[12][3]=new Option("Técnico Subsequente"," ");
group[12][4]=new Option("Graduação - Tecnologia"," ");

group[13][0]=new Option("Selecione a Formação"," ");
group[13][1]=new Option("Técnico Concomitante"," ");
group[13][2]=new Option("Técnico Subsequente"," ");

group[14][0]=new Option("Selecione a Formação"," ");
group[14][1]=new Option("Técnico Subsequente"," ");

group[15][0]=new Option("Selecione a Formação"," ");
group[15][1]=new Option("Técnico Integrado"," ");
group[15][2]=new Option("Técnico Concomitante"," ");
group[15][3]=new Option("Técnico Subsequente"," ");
group[15][4]=new Option("Graduação - Tecnologia"," ");
group[15][5]=new Option("Graduação - Licenciatura"," ");
group[15][6]=new Option("Graduação - Bacharelado"," ");

group[16][0]=new Option("Selecione a Formação"," ");
group[16][1]=new Option("Técnico Integrado"," ");
group[16][2]=new Option("Técnico Concomitante"," ");

group[17][0]=new Option("Selecione a Formação"," ");
group[17][1]=new Option("Técnico Concomitante"," ");
group[17][2]=new Option("Técnico Subsequente"," ");

group[18][0]=new Option("Selecione a Formação"," ");
group[18][1]=new Option("Técnico Concomitante"," ");

group[19][0]=new Option("Selecione a Formação"," ");
group[19][1]=new Option("Técnico Subsequente"," ");
group[19][2]=new Option("Graduação - Tecnologia"," ");
group[19][3]=new Option("Especialização"," ");

group[20][0]=new Option("Selecione a Formação"," ");
group[20][1]=new Option("Técnico Subsequente"," ");

var temp=document.isc.stage2
  
function redirect(x){
for (m=temp.options.length-1;m>0;m--)
temp.options[m]=null
for (i=0;i<group[x].length;i++){
temp.options[i]=new Option(group[x][i].text,group[x][i].value)
}
temp.options[0].selected=true
redirect1(0)
}
  
var secondGroups=document.isc.stage2.options.length
var secondGroup=new Array(groups)
for (i=0; i<groups; i++) {
secondGroup[i]=new Array(group[i].length)
for (j=0; j<group[i].length; j++) {
secondGroup[i][j]=new Array() }}
  
secondGroup[0][0][0]=new Option("Selecione o Curso","");

secondGroup[1][0][0]=new Option("Selecione o Curso","");

secondGroup[1][1][0]=new Option("Selecione o Curso"," ");
secondGroup[1][1][1]=new Option("Eletromecânica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=1"); // id=1
secondGroup[1][1][2]=new Option("Produção de Moda","http://curso.ifsc.edu.br/pagina1a.php?idcurso=2"); // id=2
secondGroup[1][1][3]=new Option("Têxtil: Malharia e Confecção","http://curso.ifsc.edu.br/pagina1a.php?idcurso=3"); // id=3
  
secondGroup[1][2][0]=new Option("Selecione o Curso"," ");
secondGroup[1][2][1]=new Option("Eletromecânica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=95"); // id=95
secondGroup[1][2][2]=new Option("Vestuário","http://curso.ifsc.edu.br/pagina1a.php?idcurso=96"); // id=96

secondGroup[1][3][0]=new Option("Selecione o Curso"," ");
secondGroup[1][3][1]=new Option("Física","http://curso.ifsc.edu.br/pagina2a.php?idcurso=4"); // id=4
  
secondGroup[2][0][0]=new Option("Selecione o Curso"," ");
secondGroup[2][0][0]=new Option("Selecione o Curso"," ");

secondGroup[2][1][0]=new Option("Selecione o Curso"," ");
secondGroup[2][1][1]=new Option("Vestuário","http://curso.ifsc.edu.br/pagina1a.php?idcurso=5"); // id=5
secondGroup[2][1][2]=new Option("Plástico","http://curso.ifsc.edu.br/pagina1a.php?idcurso=6"); // id=6

secondGroup[3][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[3][1][0]=new Option("Selecione o Curso"," ");
secondGroup[3][1][1]=new Option("Agroecologia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=7"); // id=7
secondGroup[3][1][2]=new Option("Agroindústria","http://curso.ifsc.edu.br/pagina1a.php?idcurso=8"); // id=8
secondGroup[3][1][3]=new Option("Edificações","http://curso.ifsc.edu.br/pagina1a.php?idcurso=9"); // id=9
secondGroup[3][1][3]=new Option("Informática","http://curso.ifsc.edu.br/pagina1a.php?idcurso=115"); // id=122

secondGroup[4][0][0]=new Option("Selecione o Curso"," ");

secondGroup[4][1][0]=new Option("Selecione o Curso"," ");
secondGroup[4][1][1]=new Option("Eletromecânica (PROEJA)","http://curso.ifsc.edu.br/pagina1a.php?idcurso=10"); // id=10
secondGroup[4][1][2]=new Option("Informática","http://curso.ifsc.edu.br/pagina1a.php?idcurso=11"); // id=11
  
secondGroup[4][2][0]=new Option("Selecione o Curso"," ");
secondGroup[4][2][1]=new Option("Eletroeletrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=12"); // id=12
secondGroup[4][2][2]=new Option("Mecânica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=13"); //id=13
  
secondGroup[4][3][0]=new Option("Selecione o Curso"," ");
secondGroup[4][3][1]=new Option("Engenharia de Controle e Automação","http://curso.ifsc.edu.br/pagina2a.php?idcurso=14"); // id=14

secondGroup[5][0][0]=new Option("Selecione o Curso"," ");

secondGroup[5][1][0]=new Option("Selecione o Curso"," ");
secondGroup[5][1][1]=new Option("Edificações","http://curso.ifsc.edu.br/pagina1a.php?idcurso=16"); // id=16
secondGroup[5][1][2]=new Option("Eletrotécnica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=89"); // id=89

secondGroup[5][2][0]=new Option("Selecione o Curso"," ");
secondGroup[5][2][1]=new Option("Edificações","http://curso.ifsc.edu.br/pagina1a.php?idcurso=90"); // id=90
secondGroup[5][2][2]=new Option("Mecatrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=91"); // id=91

secondGroup[6][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[6][1][0]=new Option("Selecione o Curso"," ");
secondGroup[6][1][1]=new Option("Guia de Turismo","http://curso.ifsc.edu.br/pagina1a.php?idcurso=18"); // id=18
secondGroup[6][1][2]=new Option("Eventos","http://curso.ifsc.edu.br/pagina1a.php?idcurso=105"); // id=105
secondGroup[6][1][3]=new Option("Gastronomia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=17"); // id=96
secondGroup[6][1][4]=new Option("Panificação e Confeitaria","http://curso.ifsc.edu.br/pagina1a.php?idcurso=20"); // id=20

secondGroup[6][2][0]=new Option("Selecione o Curso"," ");
secondGroup[6][2][1]=new Option("Gastronomia","http://curso.ifsc.edu.br/pagina2a.php?idcurso=109"); // id=119
secondGroup[6][2][2]=new Option("Hotelaria","http://curso.ifsc.edu.br/pagina2a.php?idcurso=108"); // id=114

secondGroup[7][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[7][1][0]=new Option("Selecione o Curso"," ");
secondGroup[7][1][1]=new Option("Edificações","http://curso.ifsc.edu.br/pagina1a.php?idcurso=22"); // id=121
secondGroup[7][1][2]=new Option("Eletrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=23"); // id=23
secondGroup[7][1][3]=new Option("Eletrotécnica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=24"); // id=24
secondGroup[7][1][4]=new Option("Química","http://curso.ifsc.edu.br/pagina1a.php?idcurso=25"); // id=25
secondGroup[7][1][5]=new Option("Saneamento","http://curso.ifsc.edu.br/pagina1a.php?idcurso=26"); // id=26
secondGroup[7][1][6]=new Option("Enfermagem","http://curso.ifsc.edu.br/pagina1a.php?idcurso=94"); // id=94
  
secondGroup[7][2][0]=new Option("Selecione o Curso"," ");
secondGroup[7][2][1]=new Option("Agrimensura","http://curso.ifsc.edu.br/pagina1a.php?idcurso=27"); // id=27
secondGroup[7][2][2]=new Option("Edificações","http://curso.ifsc.edu.br/pagina1a.php?idcurso=28"); // id=40
secondGroup[7][2][3]=new Option("Eletrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=29"); // id=29
secondGroup[7][2][4]=new Option("Eletrotécnica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=30"); // id=30
secondGroup[7][2][5]=new Option("Informática","http://curso.ifsc.edu.br/pagina1a.php?idcurso=31"); // id=31
secondGroup[7][2][6]=new Option("Manutenção Automotiva","http://curso.ifsc.edu.br/pagina1a.php?idcurso=33"); // id=33
secondGroup[7][2][7]=new Option("Mecânica Industrial","http://curso.ifsc.edu.br/pagina1a.php?idcurso=34"); // id=34
secondGroup[7][2][8]=new Option("Meio Ambiente","http://curso.ifsc.edu.br/pagina1a.php?idcurso=35"); // id=35
secondGroup[7][2][9]=new Option("Meteorologia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=36"); // id=36
secondGroup[7][2][10]=new Option("Saneamento","http://curso.ifsc.edu.br/pagina1a.php?idcurso=37"); // id=37
secondGroup[7][2][11]=new Option("Segurança do Trabalho","http://curso.ifsc.edu.br/pagina1a.php?idcurso=38"); // id=38

secondGroup[7][3][0]=new Option("Selecione o Curso"," ");
secondGroup[7][3][1]=new Option("Construção de Edifícios","http://curso.ifsc.edu.br/pagina2a.php?idcurso=39"); // id=39
secondGroup[7][3][2]=new Option("Design de Produto","http://curso.ifsc.edu.br/pagina2a.php?idcurso=40"); // id=40
secondGroup[7][3][3]=new Option("Gestão da Tecnologia da Informação","http://curso.ifsc.edu.br/pagina2a.php?idcurso=41"); // id=41
secondGroup[7][3][4]=new Option("Mecatrônica Industrial","http://curso.ifsc.edu.br/pagina2a.php?idcurso=43"); // id=43
secondGroup[7][3][5]=new Option("Radiologia","http://curso.ifsc.edu.br/pagina2a.php?idcurso=44"); // id=44
secondGroup[7][3][6]=new Option("Sistema Eletrônicos","http://curso.ifsc.edu.br/pagina2a.php?idcurso=45"); // id=45
secondGroup[7][3][7]=new Option("Sistemas de Energia","http://curso.ifsc.edu.br/pagina2a.php?idcurso=46"); // id=46

secondGroup[7][4][0]=new Option("Selecione o Curso"," ");
secondGroup[7][4][1]=new Option("Engenharia Civil","http://curso.ifsc.edu.br/pagina2a.php?idcurso=113"); // id=118
secondGroup[7][4][2]=new Option("Engenharia Elétrica","http://curso.ifsc.edu.br/pagina2a.php?idcurso=110"); // id=115
secondGroup[7][4][3]=new Option("Engenharia Eletrônica","http://curso.ifsc.edu.br/pagina2a.php?idcurso=112"); // id=117
secondGroup[7][4][4]=new Option("Engenharia Mecatrônica","http://curso.ifsc.edu.br/pagina2a.php?idcurso=111"); // id=116

secondGroup[7][5][0]=new Option("Selecione o Curso"," ");
secondGroup[7][5][1]=new Option("Desenvolvimento de Produtos Eletrônicos","http://curso.ifsc.edu.br/pagina3a.php?idcurso=47"); // id=47

secondGroup[7][6][0]=new Option("Selecione o Curso"," ");
secondGroup[7][6][1]=new Option("Mecatrônica","http://curso.ifsc.edu.br/pagina3a.php?idcurso=52"); // id=52

secondGroup[8][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[8][1][0]=new Option("Selecione o Curso"," ");
secondGroup[8][1][1]=new Option("Administração","http://curso.ifsc.edu.br/pagina1a.php?idcurso=53"); // id=53
secondGroup[8][1][2]=new Option("Informática","http://curso.ifsc.edu.br/pagina1a.php?idcurso=54"); // id=54
secondGroup[8][1][3]=new Option("Vestuário","http://curso.ifsc.edu.br/pagina1a.php?idcurso=55"); // id=55
secondGroup[8][1][3]=new Option("Modelagem","http://curso.ifsc.edu.br/pagina1a.php?idcurso=100"); // id=100

secondGroup[8][2][0]=new Option("Selecione o Curso"," ");
secondGroup[8][2][1]=new Option("Química","http://curso.ifsc.edu.br/pagina1a.php?idcurso=101"); // id=101
secondGroup[8][2][2]=new Option("Vestuário","http://curso.ifsc.edu.br/pagina1a.php?idcurso=102"); // id=102

secondGroup[9][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[9][1][0]=new Option("Selecione o Curso"," ");
secondGroup[9][1][1]=new Option("Aquicultura","http://curso.ifsc.edu.br/pagina1a.php?idcurso=56"); // id=56
secondGroup[9][1][2]=new Option("Eletroeletrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=114"); // id=120
  
secondGroup[9][2][0]=new Option("Selecione o Curso"," ");
secondGroup[9][2][1]=new Option("Pesca","http://curso.ifsc.edu.br/pagina1a.php?idcurso=57"); // id=57

secondGroup[10][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[10][1][0]=new Option("Selecione o Curso"," ");
secondGroup[10][1][1]=new Option("Química","http://curso.ifsc.edu.br/pagina1a.php?idcurso=58"); // id=58
secondGroup[10][1][2]=new Option("Vestuário (EJA)","http://curso.ifsc.edu.br/pagina1a.php?idcurso=97"); // id=97
  
secondGroup[10][2][0]=new Option("Selecione o Curso"," ");
secondGroup[10][2][1]=new Option("Malharia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=99"); // id=99
secondGroup[10][2][2]=new Option("Produção e Design de Moda","http://curso.ifsc.edu.br/pagina1a.php?idcurso=60"); // id=60
secondGroup[10][2][3]=new Option("Vestuário","http://curso.ifsc.edu.br/pagina1a.php?idcurso=98"); // id=98

secondGroup[10][3][0]=new Option("Selecione o Curso"," ");
secondGroup[10][3][1]=new Option("Física","http://curso.ifsc.edu.br/pagina2a.php?idcurso=61"); // id=61

secondGroup[11][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[11][1][0]=new Option("Selecione o Curso"," ");
secondGroup[11][1][1]=new Option("Eletrotécnica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=62"); // id=62
secondGroup[11][1][2]=new Option("Mecânica Industrial","http://curso.ifsc.edu.br/pagina1a.php?idcurso=63"); // id=63
  
secondGroup[11][2][0]=new Option("Selecione o Curso"," ");
secondGroup[11][2][1]=new Option("Fabricação Mecânica","http://curso.ifsc.edu.br/pagina2a.php?idcurso=64"); // id=64

secondGroup[12][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[12][1][0]=new Option("Selecione o Curso"," ");
secondGroup[12][1][1]=new Option("Eletroeletrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=67"); // id=67
secondGroup[12][1][2]=new Option("Mecânica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=68"); // id=68
  
secondGroup[12][2][0]=new Option("Selecione o Curso"," ");
secondGroup[12][2][1]=new Option("Eletroeletrônica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=65"); // id=65
secondGroup[12][2][2]=new Option("Mecânica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=66"); // id=66
  
secondGroup[12][3][0]=new Option("Selecione o Curso"," ");
secondGroup[12][3][1]=new Option("Enfermagem","http://curso.ifsc.edu.br/pagina1a.php?idcurso=69"); // id=69
  
secondGroup[12][4][0]=new Option("Selecione o Curso"," ");
secondGroup[12][4][1]=new Option("Mecatrônica Industrial","http://curso.ifsc.edu.br/pagina2a.php?idcurso=70"); // id=70
secondGroup[12][4][2]=new Option("Gestão Hospitalar","http://curso.ifsc.edu.br/pagina2a.php?idcurso=71"); // id=71

secondGroup[13][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[13][1][0]=new Option("Selecione o Curso"," ");
secondGroup[13][1][1]=new Option("Agroecologia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=72"); // id=72
secondGroup[13][1][2]=new Option("Informática","http://curso.ifsc.edu.br/pagina1a.php?idcurso=73"); // id=73
  
secondGroup[13][2][0]=new Option("Selecione o Curso"," ");
secondGroup[13][2][1]=new Option("Biotecnologia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=74"); // id=74

secondGroup[14][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[14][1][0]=new Option("Selecione o Curso"," ");
secondGroup[14][1][1]=new Option("Material Didático Bilíngue","http://curso.ifsc.edu.br/pagina1a.php?idcurso=75"); // id=75


secondGroup[15][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[15][1][0]=new Option("Selecione o Curso"," ");
secondGroup[15][1][1]=new Option("Refrigeração e Climatização","http://curso.ifsc.edu.br/pagina1a.php?idcurso=77"); // id=77
secondGroup[15][1][2]=new Option("Telecomunicações","http://curso.ifsc.edu.br/pagina1a.php?idcurso=78"); // id=78
  
secondGroup[15][2][0]=new Option("Selecione o Curso"," ");
secondGroup[15][2][1]=new Option("Refrigeração e Climatização","http://curso.ifsc.edu.br/pagina1a.php?idcurso=76"); // id=76

secondGroup[15][3][0]=new Option("Selecione o Curso"," ");
secondGroup[15][3][1]=new Option("Refrigeração e Climatização","http://curso.ifsc.edu.br/pagina1a.php?idcurso=79"); // id=79
secondGroup[15][3][2]=new Option("Telecomunicações (Redes de Computadores)","http://curso.ifsc.edu.br/pagina1a.php?idcurso=81"); // id=81

secondGroup[15][4][0]=new Option("Selecione o Curso"," ");
secondGroup[15][4][1]=new Option("Sistemas de Telecomunicações","http://curso.ifsc.edu.br/pagina2a.php?idcurso=83"); // id=83

secondGroup[15][5][0]=new Option("Selecione o Curso"," ");
secondGroup[15][5][1]=new Option("Química","http://curso.ifsc.edu.br/pagina2a.php?idcurso=82"); // id=82

secondGroup[15][6][0]=new Option("Selecione o Curso"," ");
secondGroup[15][6][1]=new Option("Engenharia de Telecomunicações","http://curso.ifsc.edu.br/pagina2a.php?idcurso=104"); // id=104

secondGroup[16][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[16][1][0]=new Option("Selecione o Curso"," ");
secondGroup[16][1][1]=new Option("Agroindústria","http://curso.ifsc.edu.br/pagina1a.php?idcurso=86"); // id=86
  
secondGroup[16][2][0]=new Option("Selecione o Curso"," ");
secondGroup[16][2][1]=new Option("Agroecologia","http://curso.ifsc.edu.br/pagina1a.php?idcurso=84"); // id=84
secondGroup[16][2][2]=new Option("Agroindústria","http://curso.ifsc.edu.br/pagina1a.php?idcurso=85"); // id=85

secondGroup[17][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[17][1][0]=new Option("Selecione o Curso"," ");
secondGroup[17][1][1]=new Option("Agroindústria","http://curso.ifsc.edu.br/pagina1a.php?idcurso=87"); // id=87
  
secondGroup[17][2][0]=new Option("Selecione o Curso"," ");
secondGroup[17][2][1]=new Option("Fabricação Mecânica","http://curso.ifsc.edu.br/pagina1a.php?idcurso=88"); // id=88

secondGroup[18][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[18][1][0]=new Option("Selecione o Curso"," ");
secondGroup[18][1][1]=new Option("Agroindústria","http://curso.ifsc.edu.br/pagina1a.php?idcurso=92"); // id=92
secondGroup[18][1][2]=new Option("Fruticultura","http://curso.ifsc.edu.br/pagina1a.php?idcurso=93"); // id=93

secondGroup[19][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[19][1][0]=new Option("Selecione o Curso"," ");
secondGroup[19][1][1]=new Option("Informática para Internet","http://curso.ifsc.edu.br/pagina1a.php?idcurso=32"); // id=32

secondGroup[19][2][0]=new Option("Selecione o Curso"," ");
secondGroup[19][2][1]=new Option("Gestão Pública","http://curso.ifsc.edu.br/pagina2a.php?idcurso=42"); // id=42

secondGroup[19][3][0]=new Option("Selecione o Curso"," ");
secondGroup[19][3][1]=new Option("Gestão Pública","http://curso.ifsc.edu.br/pagina3a.php?idcurso=48"); // id=48
secondGroup[19][3][2]=new Option("Ensino de Ciências","http://curso.ifsc.edu.br/pagina3a.php?idcurso=49"); // id=49
secondGroup[19][3][3]=new Option("Gestão em Saúde","http://curso.ifsc.edu.br/pagina3a.php?idcurso=50"); // id=50
secondGroup[19][3][4]=new Option("Educação para a Diversidade, EJA","http://curso.ifsc.edu.br/pagina3a.php?idcurso=103"); // id=103
secondGroup[19][3][5]=new Option("Mídias na Educação","http://curso.ifsc.edu.br/pagina3a.php?idcurso=106"); // id=106

secondGroup[20][0][0]=new Option("Selecione o Curso"," ");
  
secondGroup[20][1][0]=new Option("Selecione o Curso"," ");
secondGroup[20][1][1]=new Option("Hospedagem","http://curso.ifsc.edu.br/pagina1a.php?idcurso=107"); // id=107

var temp1=document.isc.stage3
function redirect1(y){
for (m=temp1.options.length-1;m>0;m--)
temp1.options[m]=null
for (i=0;i<secondGroup[document.isc.example.options.selectedIndex][y].length;i++){
temp1.options[i]=new Option(secondGroup[document.isc.example.options.selectedIndex][y][i].text,secondGroup[document.isc.example.options.selectedIndex][y][i].value)
}
temp1.options[0].selected=true
}
//--------------------------------CORTAR AQUI--------------------  
function redirect2(z){
window.location=temp1[z].value //(parte original)
// window.open(temp1[z].value) // nova janela
}