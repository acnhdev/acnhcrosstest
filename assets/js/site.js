var roses = [
//white
{'r':'00','y':'00','w':'00','s':'00','color':'white','label':'w02'},
{'r':'00','y':'00','w':'00','s':'01','color':'white','label':'w03'},
{'r':'00','y':'00','w':'00','s':'11','color':'white','label':'w04'},
{'r':'00','y':'00','w':'01','s':'01','color':'white','label':'w05'},
{'r':'00','y':'00','w':'01','s':'11','color':'white','label':'w06'},
{'r':'00','y':'01','w':'01','s':'00','color':'white','label':'w07'},
{'r':'00','y':'01','w':'01','s':'01','color':'white','label':'w08'},
{'r':'00','y':'01','w':'01','s':'11','color':'white','label':'w09'},
{'r':'00','y':'11','w':'11','s':'00','color':'white','label':'w10'},
{'r':'00','y':'11','w':'11','s':'01','color':'white','label':'w11'},
{'r':'00','y':'11','w':'11','s':'11','color':'white','label':'w12'},
{'r':'01','y':'00','w':'00','s':'11','color':'white','label':'w13'},
{'r':'01','y':'00','w':'01','s':'11','color':'white','label':'w14'},
{'r':'01','y':'01','w':'01','s':'11','color':'white','label':'w15'},
{'r':'01','y':'11','w':'11','s':'11','color':'white','label':'w16'},
{'r':'11','y':'01','w':'01','s':'11','color':'white','label':'w17'},
{'r':'11','y':'11','w':'11','s':'11','color':'white','label':'w18'},
{'r':'00','y':'00','w':'01','s':'00','color':'white','label':'w01'},
//yellow
{'r':'00','y':'01','w':'00','s':'00','color':'yellow','label':'y02'},
{'r':'00','y':'01','w':'00','s':'01','color':'yellow','label':'y03'},
{'r':'00','y':'01','w':'00','s':'11','color':'yellow','label':'y04'},
{'r':'00','y':'11','w':'00','s':'01','color':'yellow','label':'y05'},
{'r':'00','y':'11','w':'00','s':'11','color':'yellow','label':'y06'},
{'r':'00','y':'11','w':'01','s':'00','color':'yellow','label':'y07'},
{'r':'00','y':'11','w':'01','s':'01','color':'yellow','label':'y08'},
{'r':'00','y':'11','w':'01','s':'11','color':'yellow','label':'y09'},
{'r':'01','y':'01','w':'00','s':'01','color':'yellow','label':'y10'},
{'r':'01','y':'01','w':'00','s':'11','color':'yellow','label':'y11'},
{'r':'01','y':'11','w':'00','s':'01','color':'yellow','label':'y12'},
{'r':'01','y':'11','w':'00','s':'11','color':'yellow','label':'y13'},
{'r':'01','y':'11','w':'01','s':'01','color':'yellow','label':'y14'},
{'r':'01','y':'11','w':'01','s':'11','color':'yellow','label':'y15'},
{'r':'11','y':'01','w':'00','s':'11','color':'yellow','label':'y16'},
{'r':'11','y':'11','w':'00','s':'11','color':'yellow','label':'y17'},
{'r':'11','y':'11','w':'01','s':'11','color':'yellow','label':'y18'},
{'r':'00','y':'11','w':'00','s':'00','color':'yellow','label':'y01'},
//red
{'r':'01','y':'00','w':'00','s':'00','color':'red','label':'r02'},
{'r':'01','y':'00','w':'01','s':'00','color':'red','label':'r03'},
{'r':'01','y':'00','w':'11','s':'00','color':'red','label':'r04'},
{'r':'01','y':'01','w':'01','s':'00','color':'red','label':'r05'},
{'r':'01','y':'01','w':'11','s':'00','color':'red','label':'r06'},
{'r':'01','y':'11','w':'11','s':'00','color':'red','label':'r07'},
{'r':'11','y':'00','w':'01','s':'01','color':'red','label':'r08'},
{'r':'11','y':'00','w':'11','s':'01','color':'red','label':'r09'},
{'r':'11','y':'01','w':'01','s':'00','color':'red','label':'r10'},
{'r':'11','y':'01','w':'01','s':'01','color':'red','label':'r11'},
{'r':'11','y':'01','w':'11','s':'01','color':'red','label':'r12'},
{'r':'11','y':'11','w':'11','s':'01','color':'red','label':'r13'},
{'r':'11','y':'00','w':'00','s':'01','color':'red','label':'r01'},
//purple
{'r':'00','y':'00','w':'11','s':'00','color':'purple','label':'u01'},
{'r':'00','y':'00','w':'11','s':'01','color':'purple','label':'u02'},
{'r':'00','y':'00','w':'11','s':'11','color':'purple','label':'u03'},
{'r':'00','y':'01','w':'11','s':'00','color':'purple','label':'u04'},
{'r':'00','y':'01','w':'11','s':'01','color':'purple','label':'u05'},
{'r':'00','y':'01','w':'11','s':'11','color':'purple','label':'u06'},
{'r':'01','y':'00','w':'11','s':'11','color':'purple','label':'u07'},
{'r':'01','y':'01','w':'11','s':'11','color':'purple','label':'u08'},
{'r':'11','y':'01','w':'11','s':'11','color':'purple','label':'u09'},
//pink
{'r':'01','y':'00','w':'00','s':'01','color':'pink','label':'p01'},
{'r':'01','y':'00','w':'01','s':'01','color':'pink','label':'p02'},
{'r':'01','y':'00','w':'11','s':'01','color':'pink','label':'p03'},
{'r':'01','y':'01','w':'01','s':'01','color':'pink','label':'p04'},
{'r':'01','y':'01','w':'11','s':'01','color':'pink','label':'p05'},
{'r':'01','y':'11','w':'11','s':'01','color':'pink','label':'p06'},
{'r':'11','y':'00','w':'00','s':'11','color':'pink','label':'p07'},
{'r':'11','y':'00','w':'01','s':'11','color':'pink','label':'p08'},
{'r':'11','y':'00','w':'11','s':'11','color':'pink','label':'p09'},
//orange
{'r':'01','y':'01','w':'00','s':'00','color':'orange','label':'o01'},
{'r':'01','y':'11','w':'00','s':'00','color':'orange','label':'o02'},
{'r':'01','y':'11','w':'01','s':'00','color':'orange','label':'o03'},
{'r':'11','y':'01','w':'00','s':'00','color':'orange','label':'o04'},
{'r':'11','y':'01','w':'00','s':'01','color':'orange','label':'o05'},
{'r':'11','y':'11','w':'00','s':'00','color':'orange','label':'o06'},
{'r':'11','y':'11','w':'00','s':'01','color':'orange','label':'o07'},
{'r':'11','y':'11','w':'01','s':'00','color':'orange','label':'o08'},
{'r':'11','y':'11','w':'01','s':'01','color':'orange','label':'o09'},
//black
{'r':'11','y':'00','w':'00','s':'00','color':'black','label':'h01'},
{'r':'11','y':'00','w':'01','s':'00','color':'black','label':'h02'},
{'r':'11','y':'00','w':'11','s':'00','color':'black','label':'h03'},
{'r':'11','y':'01','w':'11','s':'00','color':'black','label':'h04'},
//blue
{'r':'11','y':'11','w':'11','s':'00','color':'blue','label':'b01'}
];

var pansies = [
//blue
{'r':'00','y':'00','w':'11','color':'blue','label':'b01'},
{'r':'00','y':'01','w':'11','color':'blue','label':'b02'},
{'r':'01','y':'00','w':'11','color':'blue','label':'b03'},
//orange
{'r':'01','y':'01','w':'00','color':'orange','label':'o01'},
{'r':'01','y':'01','w':'01','color':'orange','label':'o02'},
{'r':'01','y':'01','w':'11','color':'orange','label':'o03'},
{'r':'11','y':'11','w':'00','color':'orange','label':'o04'},
{'r':'11','y':'11','w':'01','color':'orange','label':'o05'},
//purple
{'r':'11','y':'00','w':'11','color':'purple','label':'u01'},
{'r':'11','y':'01','w':'11','color':'purple','label':'u02'},
{'r':'11','y':'11','w':'11','color':'purple','label':'u03'},
//red
{'r':'01','y':'00','w':'00','color':'red','label':'r02'},
{'r':'01','y':'00','w':'01','color':'red','label':'r03'},
{'r':'11','y':'00','w':'01','color':'red','label':'r04'},
{'r':'11','y':'01','w':'00','color':'red','label':'r05'},
{'r':'11','y':'01','w':'01','color':'red','label':'r06'},
{'r':'11','y':'00','w':'00','color':'red','label':'r01'},
//white
{'r':'00','y':'00','w':'00','color':'white','label':'w02'},
{'r':'00','y':'00','w':'01','color':'white','label':'w01'},
//yellow
{'r':'00','y':'01','w':'00','color':'yellow','label':'y02'},
{'r':'00','y':'01','w':'01','color':'yellow','label':'y03'},
{'r':'00','y':'11','w':'01','color':'yellow','label':'y04'},
{'r':'00','y':'11','w':'11','color':'yellow','label':'y05'},
{'r':'01','y':'11','w':'00','color':'yellow','label':'y06'},
{'r':'01','y':'11','w':'01','color':'yellow','label':'y07'},
{'r':'01','y':'11','w':'11','color':'yellow','label':'y08'},
{'r':'00','y':'11','w':'00','color':'yellow','label':'y01'}
]

var cosmos = [
//black
{'r':'11','y':'11','s':'00','color':'black','label':'h01'},
{'r':'11','y':'11','s':'01','color':'black','label':'h02'},
//orange
{'r':'01','y':'01','s':'00','color':'orange','label':'o01'},
{'r':'01','y':'01','s':'01','color':'orange','label':'o02'},
{'r':'01','y':'11','s':'00','color':'orange','label':'o03'},
{'r':'01','y':'11','s':'01','color':'orange','label':'o04'},
{'r':'01','y':'11','s':'11','color':'orange','label':'o05'},
{'r':'11','y':'01','s':'00','color':'orange','label':'o06'},
{'r':'11','y':'01','s':'01','color':'orange','label':'o07'},
//pink
{'r':'01','y':'00','s':'00','color':'pink','label':'p01'},
{'r':'01','y':'00','s':'01','color':'pink','label':'p02'},
{'r':'01','y':'00','s':'11','color':'pink','label':'p03'},
{'r':'01','y':'01','s':'11','color':'pink','label':'p04'},
//red
{'r':'11','y':'00','s':'01','color':'red','label':'r02'},
{'r':'11','y':'00','s':'11','color':'red','label':'r03'},
{'r':'11','y':'01','s':'11','color':'red','label':'r04'},
{'r':'11','y':'11','s':'11','color':'red','label':'r05'},
{'r':'11','y':'00','s':'00','color':'red','label':'r01'},
//white
{'r':'00','y':'00','s':'00','color':'white','label':'w02'},
{'r':'00','y':'00','s':'11','color':'white','label':'w03'},
{'r':'00','y':'01','s':'11','color':'white','label':'w04'},
{'r':'00','y':'00','s':'01','color':'white','label':'w01'},
//yellow
{'r':'00','y':'01','s':'00','color':'yellow','label':'y02'},
{'r':'00','y':'01','s':'01','color':'yellow','label':'y03'},
{'r':'00','y':'11','s':'00','color':'yellow','label':'y04'},
{'r':'00','y':'11','s':'11','color':'yellow','label':'y05'},
{'r':'00','y':'11','s':'01','color':'yellow','label':'y01'}
];

var tulips = [
//black
{'r':'11','y':'00','s':'00','color':'black','label':'h01'},
{'r':'11','y':'01','s':'00','color':'black','label':'h02'},
//orange
{'r':'01','y':'01','s':'00','color':'orange','label':'o01'},
{'r':'01','y':'11','s':'00','color':'orange','label':'o02'},
//pink
{'r':'01','y':'00','s':'01','color':'pink','label':'p01'},
//purple
{'r':'11','y':'11','s':'00','color':'purple','label':'u01'},
{'r':'11','y':'11','s':'01','color':'purple','label':'u02'},
{'r':'11','y':'11','s':'11','color':'purple','label':'u03'},
//red
{'r':'01','y':'00','s':'00','color':'red','label':'r02'},
{'r':'11','y':'00','s':'11','color':'red','label':'r03'},
{'r':'11','y':'01','s':'01','color':'red','label':'r04'},
{'r':'11','y':'01','s':'11','color':'red','label':'r05'},
{'r':'11','y':'00','s':'01','color':'red','label':'r01'},
//white
{'r':'00','y':'00','s':'00','color':'white','label':'w02'},
{'r':'00','y':'00','s':'11','color':'white','label':'w03'},
{'r':'00','y':'01','s':'11','color':'white','label':'w04'},
{'r':'01','y':'00','s':'11','color':'white','label':'w05'},
{'r':'00','y':'00','s':'01','color':'white','label':'w01'},
//yellow
{'r':'00','y':'01','s':'00','color':'yellow','label':'y02'},
{'r':'00','y':'01','s':'01','color':'yellow','label':'y03'},
{'r':'00','y':'11','s':'01','color':'yellow','label':'y04'},
{'r':'00','y':'11','s':'11','color':'yellow','label':'y05'},
{'r':'01','y':'01','s':'01','color':'yellow','label':'y06'},
{'r':'01','y':'01','s':'11','color':'yellow','label':'y07'},
{'r':'01','y':'11','s':'01','color':'yellow','label':'y08'},
{'r':'01','y':'11','s':'11','color':'yellow','label':'y09'},
{'r':'00','y':'11','s':'00','color':'yellow','label':'y01'}
];

var patterns = [
{'pattern':'0000','outcome':1},
{'pattern':'0001','outcome':2},
{'pattern':'0011','outcome':1},
{'pattern':'1100','outcome':1},
{'pattern':'1101','outcome':2},
{'pattern':'1111','outcome':1},
{'pattern':'0100','outcome':2},
{'pattern':'0101','outcome':3},
{'pattern':'0111','outcome':2}
];

var patterns = [
{'pattern':'0000','outcome':1,'child1':'00'},
{'pattern':'0001','outcome':2,'child1':'00', 'child2':'01'},
{'pattern':'0011','outcome':1,'child1':'01'},
{'pattern':'1100','outcome':1,'child1':'01'},
{'pattern':'1101','outcome':2,'child1':'10', 'child2':'11'},
{'pattern':'1111','outcome':1,'child1':'11'},
{'pattern':'0100','outcome':2,'child1':'00', 'child2':'01'},
{'pattern':'0101','outcome':3,'child1':'00', 'child2':'11', 'child3':'01'},
{'pattern':'0111','outcome':2,'child1':'01', 'child2':'11'}
];

var count = 0;
var resultSet = new Array;
var resultSet1 = new Array;
var resultSet2 = new Array;
var tmpArray = new Array;
var flagR, flagY, flagW, flagS; 

function checkParent() {
  resultSet1 = [];
  resultSet2 = [];
  tmpArray = [];
  var child = _.find(roses, { 'label':document.getElementById('child').value });
  var possibleRPatterns = _.filter(patterns, obj => obj.child1 == child.r || obj.child2 == child.r || obj.child2 == child.r);
  var possibleYPatterns = _.filter(patterns, obj => obj.child1 == child.y || obj.child2 == child.y || obj.child2 == child.y);
  var possibleWPatterns = _.filter(patterns, obj => obj.child1 == child.w || obj.child2 == child.w || obj.child2 == child.w);
  var possibleSPatterns = _.filter(patterns, obj => obj.child1 == child.s || obj.child2 == child.s || obj.child2 == child.s);
  var totalOutcome = possibleRPatterns.length * possibleYPatterns.length * possibleWPatterns.length * possibleSPatterns.length;
  var currentr = 1;
  var currenty = 1;
  var currentw = 1;
  var currents = 0;

  for (i=totalOutcome; i>0; i--)
  {
    currents += 1;
    if(currents>possibleSPatterns.length)
    {
      currents = 1;
      currentw += 1;
    }
    if(currentw>possibleWPatterns.length)
    {
      currents = 1;
      currentw = 1;
      currenty += 1;
    }
    if(currenty>possibleYPatterns.length)
    {
      currents = 1;
      currentw = 1;
      currenty = 1;
      currentr += 1;
    }

    var pr = possibleRPatterns[currentr-1].pattern;
    var py = possibleYPatterns[currenty-1].pattern;
    var pw = possibleWPatterns[currentw-1].pattern;
    var ps = possibleSPatterns[currents-1].pattern;

    resultSet1.push( pr.substr(0,2).concat(py.substr(0,2).concat(pw.substr(0,2).concat(ps.substr(0,2)))) );
    resultSet2.push( pr.slice(-2).concat(py.slice(-2).concat(pw.slice(-2).concat(ps.slice(-2)))) );
  }
  resultSet1.forEach(removeDuplicate);
  for (i=(tmpArray.length-1); i>=0; i--)
  {
    resultSet1.splice(tmpArray[i], 1);
    resultSet2.splice(tmpArray[i], 1);
  }

  count=0;
  document.getElementById("resultBody2").innerHTML = '';
  document.getElementById("resultTable2").setAttribute('style', '');
  resultSet1.forEach(printResult2);
}

function removeDuplicate(item, index) {
	for (i=(resultSet2.length-1); i>=0; i--)
	{
		var p2 = resultSet2[i];
		if (p2 == item && (i!=index))
		{
			if (resultSet1[i] == resultSet2[index])
			{
				tmpArray.push(index);
				break;
			}
		}
	}
}

function printResult2(item, index) {
  var parent1 = _.find(roses, { 'r':item.substr(0,2), 'y':item.substr(2,2), 'w':item.substr(4,2), 's':item.slice(-2) });
  var parent2 = _.find(roses, { 'r':resultSet2[count].substr(0,2), 'y':resultSet2[count].substr(2,2), 'w':resultSet2[count].substr(4,2), 's':resultSet2[count].slice(-2) });
  var table = document.getElementById("resultTable2").getElementsByTagName('tbody')[0];
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  count+=1;
  cell1.innerHTML = count;
  cell2.innerHTML = parent1.label;
  cell3.innerHTML = parent1.color;
  cell3.setAttribute('class', parent1.color);
  cell4.innerHTML = parent2.label;
  cell5.innerHTML = parent2.color;
  cell5.setAttribute('class', parent2.color);
}

function checkOffSpring() {
  clearTable();
  resultSet = [];
  var pa = document.getElementById('pa').value;
  var pb = document.getElementById('pb').value;
  var genea, geneb, flower;
  var g_r, g_y, g_w, g_s;
  flagR = true;
  flagY = true;
  flagW = true;
  flagS = true;

  switch (document.getElementById('type').value) {
    case 'roses':
      flower = roses;
      break;
    case 'pansies':
      flower = pansies;
      flagS = false;
      break;
    case 'tulips':
      flower = tulips;
      flagW = false;
      break;
    case 'cosmos':
      flower = cosmos;
      flagW = false;
      break;
  }
  genea = _.find(flower, { 'label':pa });
  geneb = _.find(flower, { 'label':pb });

  if (genea == undefined)
  {
    alert('Invalid parent A. Please refer to the table.');
    return;
  }
  if (geneb == undefined)
  {
    alert('Invalid parent B. Please refer to the table.');
    return;
  }

  var geneSet = new Array;
  var outcomeSet = new Array;
  var totalOutcome = 1;
  //set applicable gene
  if (flagR)
  {
    g_r = _.find(patterns, { 'pattern':(genea.r + geneb.r) });
    totalOutcome = totalOutcome * g_r.outcome;
    geneSet.push('r');
    outcomeSet.push(g_r.outcome);
  }
  if (flagY)
  {
    g_y = _.find(patterns, { 'pattern':(genea.y + geneb.y) });
    totalOutcome = totalOutcome * g_y.outcome;
    geneSet.push('y');
    outcomeSet.push(g_y.outcome);
  }
  if (flagW)
  {
    g_w = _.find(patterns, { 'pattern':(genea.w + geneb.w) });
    totalOutcome = totalOutcome * g_w.outcome;
    geneSet.push('w');
    outcomeSet.push(g_w.outcome);
  }
  if (flagS)
  {
    g_s = _.find(patterns, { 'pattern':(genea.s + geneb.s) });
    totalOutcome = totalOutcome * g_s.outcome;
    geneSet.push('s');
    outcomeSet.push(g_s.outcome);
  }

  //get list of gene outcome
  var current = 0;
  var positionSet = new Array(geneSet.length);
  for (i=0; i<positionSet.length-1; i++)
  {
    positionSet[i] = 1;
  }
  positionSet[positionSet.length-1] = 0;
  var index = positionSet.length-1;

  for (i=totalOutcome; i>0; i--)
  {
    //check for next outcome
    positionSet[index] += 1;
    while (index >= 0)
    {
      //if outcome is not valid
      if (positionSet[index]>outcomeSet[index])
      {
        //reset current gene and shift to the next gene
        positionSet[index] = 1;
        index -= 1;
        positionSet[index] += 1;
        current = positionSet[index];
        //reset gene index to initial position if change is valid
        if (positionSet[index]<=outcomeSet[index])
        {
          index = positionSet.length-1;
          break;
        }
      }
      else
      {
        break;
      }
    }

    //get resulting gene pattern
    var result = new Array;
    for (j=0; j<geneSet.length; j++)
    {
      var obj = {};
      switch (geneSet[j])
      {
        case 'r':
          result.r = getPattern(g_r, positionSet[j]);
          break;
        case 'y':
          result.y = getPattern(g_y, positionSet[j]);
          break;
        case 'w':
          result.w = getPattern(g_w, positionSet[j]);
          break;
        case 's':
          result.s = getPattern(g_s, positionSet[j]);
          break;
      }
    }
    
    resultSet.push(result);
    //push again if 3 patterns as 1 pattern is repeated in order to reflect accurate percentage
    if (current==3) resultSet.push(result);
  }

  //print result
  count=0;
  clearTable();
  resultSet.forEach(printResult);
};

function printResult(item, index) {
  count+=1;
  var result;
  switch (document.getElementById('type').value) {
    case 'roses':
      result = _.find(roses, { 'r':item.r, 'y':item.y, 'w':item.w, 's':item.s });
      break;
    case 'pansies':
      result = _.find(pansies, { 'r':item.r, 'y':item.y, 'w':item.w });
      result.s = '-';
      break;
    case 'tulips':
      result = _.find(tulips, { 'r':item.r, 'y':item.y, 's':item.s });
      result.w = '-';
      break;
    case 'cosmos':
      result = _.find(cosmos, { 'r':item.r, 'y':item.y, 's':item.s });
      result.w = '-';
      break;
  }
  var table = document.getElementById("resultTable").getElementsByTagName('tbody')[0];
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerHTML = count;
  cell2.innerHTML = result.r;
  cell3.innerHTML = result.y;
  cell4.innerHTML = result.w;
  cell5.innerHTML = result.s;
  cell6.innerHTML = result.color;
  cell6.setAttribute('class', result.color);
  cell7.innerHTML = result.label;
}

function getPattern(gene, order)
{
  var pt = gene.pattern;
  var result;
  if (gene.outcome==1) result = (pt.slice(0,1).concat(pt.slice(pt.length-1)));
  if (gene.outcome==2)
  {
    if (order==1) 
    {
      result = (pt.slice(0,1).concat(pt.substr(2,1)));
    }
    else
    {
      result = (pt.substr(1,1).concat(pt.slice(pt.length-1)));
    }
  }
  if (gene.outcome==3)
  {
    if (order==1)
    {
      result = (pt.slice(0,1).concat(pt.substr(2,1)));
    }
    else if (order==2)
    {
      result = (pt.substr(1,1).concat(pt.slice(pt.length-1)));
    }
    else
    {
      result = (pt.slice(0,1).concat(pt.slice(pt.length-1)));
    }
  }
  if (result=='10') result = '01';
  return result;
}

function clearTable()
{
  document.getElementById("resultBody").innerHTML = '';
  document.getElementById("resultTable").setAttribute('style', '');
}
