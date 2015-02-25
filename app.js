var MiddleEarth = function() {
    this.inici= true;
    this.contenidor = document.getElementById('dades');
    
    /********* Starter *************/
   this.start();
    
};

MiddleEarth.prototype.start = function() {
    var jumbotron = document.createElement('div');
    jumbotron.setAttribute('class','jumbotron');
    var h1 = document.createElement('h1');
    h1.innerHTML = "Administrador de la terra mitjana";
    var p = document.createElement('p');
    p.innerHTML = "Informació sobre els temes més punyents que han ocorregut en les diferents èpoques a la Terra Mitjana";
    jumbotron.appendChild(h1);
    jumbotron.appendChild(p);
    this.contenidor.innerHTML = "";
    this.inici = true;
    this.contenidor.appendChild(jumbotron);
};
MiddleEarth.prototype.panelScaffolding = function(titol,id,columns) {
    var col = document.createElement('div');
    var panel = document.createElement('div');
    var panelHeading = document.createElement('div');
    var h3 = document.createElement('h3');
    var panelBody = document.createElement('div');
    var grafic = document.createElement('div');
    
    col.setAttribute('class',columns);
    panel.setAttribute('class','panel  panel-primary');
    panelHeading.setAttribute('class','panel-heading');
    h3.setAttribute('class','panel-title');
    h3.innerHTML=titol;
    panelBody.setAttribute('class','panel-body grafic');
    grafic.setAttribute('id',id);
    col.appendChild(panel);
    panel.appendChild(panelHeading);
    panelHeading.appendChild(h3);
    panel.appendChild(panelBody);
    panelBody.appendChild(grafic);
    return col;
};

MiddleEarth.prototype.line = function(id){
    var grafic = c3.generate({
        bindto: "#"+id,
        data: {
            x: 'x',
        columns: [
                ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01']
                
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m'
                }
            }
        }
    });
    return grafic;
    
};

MiddleEarth.prototype.pie = function(id) {
    var grafic = c3.generate({
        bindto: "#"+id,
        data: {
            // iris data from R
            columns: ['',0],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
    return grafic;
};


MiddleEarth.prototype.scaffolding = function() {
    var firstRow = document.createElement('div');
    var secondRow = document.createElement('div');
    firstRow.setAttribute('class','row');
    secondRow.setAttribute('class','row');
    firstRow.appendChild(this.panelScaffolding('Població','grafic1','col-xs-12 col-sm-6'));
    firstRow.appendChild(this.panelScaffolding('Llengües','grafic2','col-xs-12 col-sm-6'));
    secondRow.appendChild(this.panelScaffolding('Massa boscosa','grafic3','col-xs-12'));
    this.contenidor.innerHTML="";
    this.contenidor.appendChild(firstRow);
    this.contenidor.appendChild(secondRow);
    this.inici = false;
    
};
var administrator = new MiddleEarth();
document.getElementById('first').addEventListener('click',function(){
    if (administrator.inici) administrator.scaffolding();
    administrator.line('grafic1').load( {columns: [
                    ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                    ['Hòbbits',30,50,59,49,120,130],
                    ['Elfs',10,40,180,100,150,200],
                    ['Nans',50,80,60,108,150,190]
                ]
        });
    administrator.pie('grafic2').load({columns: [
                ['Adûnaic', 30],
                ['Ilkorin', 10],
                ['Khuzdul', 120],
                ['Oestron', 80],
                ['Quenya', 30],
                ['Sindarin', 20],
                
            ]});
    administrator.line('grafic3').load({columns: [
                ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                ['Bree', 35,10,8,7,4,1],
                ['Bosc Llobregós', 30, 10, 14, 20, 15, 5],
                ['Isen',10,9,15,7,0,10],
                ['Mórdor',300, 350, 330,340, 360, 380]
            ],
            types: {
            'Bree': 'area-spline',
            'Bosc Llobregós': 'area-spline',
            'Isen': 'area-spline',
            'Mórdor': 'area-spline'
        }
    });
    
});
document.getElementById('second').addEventListener('click',function(){
    if (administrator.inici) administrator.scaffolding();
    administrator.line('grafic1').load( {columns: [
                    ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                    ['Hòbbits',100,150,300,390,320,430],
                    ['Elfs',50,110,180,100,50,20],
                    ['Nans',20,50,60,30,150,190]
                ]
        });
    administrator.pie('grafic2').load({columns: [
                ['Adûnaic', 80],
                ['Ilkorin', 120],
                ['Khuzdul', 100],
                ['Oestron', 40],
                ['Quenya', 300],
                ['Sindarin', 220],
                
            ]});
    administrator.line('grafic3').load({columns: [
                ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                ['Bree', 80,100,87,17,64,91],
                ['Bosc Llobregós', 130, 110, 114, 120, 115, 15],
                ['Isen',110,90,150,70,70,140],
                ['Mórdor',250, 150, 310,240, 260, 280]
            ],
            types: {
            'Bree': 'area-spline',
            'Bosc Llobregós': 'area-spline',
            'Isen': 'area-spline',
            'Mórdor': 'area-spline'
        }
    });
});
document.getElementById('third').addEventListener('click',function(){
    if (administrator.inici) administrator.scaffolding();
    administrator.line('grafic1').load( {columns: [
                    ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                    ['Hòbbits',30,50,50,40,50,130],
                    ['Elfs',400,410,380,300,250,200],
                    ['Nans',200,250,260,300,350,290]
                ]
        });
        administrator.pie('grafic2').load({columns: [
                ['Adûnaic', 10],
                ['Ilkorin', 20],
                ['Khuzdul', 160],
                ['Oestron', 140],
                ['Quenya', 200],
                ['Sindarin', 320],
                
            ]});
    administrator.line('grafic3').load({columns: [
                ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                ['Bree', 80,100,87,17,64,91],
                ['Bosc Llobregós', 130, 110, 114, 120, 115, 15],
                ['Isen',110,90,150,70,70,140],
                ['Mórdor',150, 50, 10,40, 60, 80]
            ],
            types: {
            'Bree': 'area-spline',
            'Bosc Llobregós': 'area-spline',
            'Isen': 'area-spline',
            'Mórdor': 'area-spline'
        }
    });
});
document.getElementById('fourth').addEventListener('click',function(){
    if (administrator.inici) administrator.scaffolding();
    administrator.line('grafic1').load( {columns: [
                    ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                    ['Hòbbits',500,550,500,490,520,530],
                    ['Elfs',400,410,380,300,250,200],
                    ['Nans',200,250,260,300,350,290]
                ]
        });
    administrator.pie('grafic2').load({columns: [
                ['Adûnaic', 180],
                ['Ilkorin', 220],
                ['Khuzdul', 300],
                ['Oestron', 640],
                ['Quenya', 320],
                ['Sindarin', 420],
                
            ]});
    administrator.line('grafic3').load({columns: [
                ['x','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01'],
                ['Bree', 180,100,187,117,164,191],
                ['Bosc Llobregós', 130, 210, 214, 220, 215, 215],
                ['Isen',210,290,250,170,270,340],
                ['Mórdor',5, 10, 12,20, 8, 4]
            ],
            types: {
            'Bree': 'area-spline',
            'Bosc Llobregós': 'area-spline',
            'Isen': 'area-spline',
            'Mórdor': 'area-spline'
        }
    });
});


document.getElementById('home').addEventListener('click',function(){
    administrator.start();
});