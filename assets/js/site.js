var crossTable = [
{'pattern':'0000','outcome':['00','00','00','00'],'count':1},
{'pattern':'0001','outcome':['00','01','00','01'],'count':2},
{'pattern':'0011','outcome':['01','01','01','01'],'count':1},
{'pattern':'1100','outcome':['01','01','01','01'],'count':1},
{'pattern':'1101','outcome':['01','11','01','11'],'count':2},
{'pattern':'1111','outcome':['11','11','11','11'],'count':1},
{'pattern':'0100','outcome':['00','00','01','01'],'count':2},
{'pattern':'0101','outcome':['00','01','01','11'],'count':3},
{'pattern':'0111','outcome':['01','01','11','11'],'count':2}
];

var count = 0;
var resultSet = new Array;
var resultSet1 = new Array;
var resultSet2 = new Array;
var tmpArray = new Array;
var flagR, flagY, flagW, flagS;
var flower;

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
  var geneA, geneB;
  var g_r, g_y, g_w, g_s;
  flagR = true;
  flagY = true;
  flagW = true;
  flagS = false;

  switch (document.getElementById('type').value) {
    case 'roses':
      flower = roses;
      flagS = true;
      break;
    case 'pansies':
      flower = pansies;
      break;
    case 'tulips':
      flower = tulips;
      break;
    case 'cosmos':
      flower = cosmos;
      break;
    case 'lilies':
      flower = lilies;
      break;
    case 'windflowers':
      flower = windflowers;
      break;
    case 'hyacinths':
      flower = hyacinths;
      break;
    case 'mums':
      flower = mums;
      break;
  }

  //make sure color exists
  geneA = getFlower(pa);
  geneB = getFlower(pb);
  if (geneA == undefined)
  {
    alert('Invalid parent A. Please refer to the table.');
    return;
  }
  if (geneB == undefined)
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
    g_r = _.find(crossTable, { 'pattern':(geneA.r + geneB.r) });
    totalOutcome = totalOutcome * g_r.count;
    geneSet.push('r');
    outcomeSet.push(g_r.count);
  }
  if (flagY)
  {
    g_y = _.find(crossTable, { 'pattern':(geneA.y + geneB.y) });
    totalOutcome = totalOutcome * g_y.count;
    geneSet.push('y');
    outcomeSet.push(g_y.count);
  }
  if (flagW)
  {
    g_w = _.find(crossTable, { 'pattern':(geneA.w + geneB.w) });
    totalOutcome = totalOutcome * g_w.count;
    geneSet.push('w');
    outcomeSet.push(g_w.count);
  }
  if (flagS)
  {
    g_s = _.find(crossTable, { 'pattern':(geneA.s + geneB.s) });
    totalOutcome = totalOutcome * g_s.count;
    geneSet.push('s');
    outcomeSet.push(g_s.count);
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
  if (document.getElementById('type').value == 'roses')
  {
    result = _.find(flower, { 'r':item.r, 'y':item.y, 'w':item.w, 's':item.s });
  }
  else
  {
    result = _.find(flower, { 'r':item.r, 'y':item.y, 'w':item.w });
    result.s = '-';
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
  var cell8 = row.insertCell(7);
  cell1.innerHTML = count;
  cell2.innerHTML = result.r;
  cell3.innerHTML = result.y;
  cell4.innerHTML = result.w;
  cell5.innerHTML = result.s;
  cell6.innerHTML = result.color;
  cell6.setAttribute('class', result.color);
  cell7.innerHTML = result.label;
  cell8.innerHTML = result.hex;
}

function getFlower(val) {
  if(val.length==2){
    return _.find(flower, { 'hex':val.toLowerCase() });
  }
  else
  {
    return _.find(flower, { 'label':val });
  }
}

function getPattern(gene, order)
{
  var pt = gene.pattern;
  var result;
  if (gene.count==1) result = (pt.slice(0,1).concat(pt.slice(pt.length-1)));
  if (gene.count==2)
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
  if (gene.count==3)
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
