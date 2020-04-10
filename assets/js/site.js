var crossTable = [
{'pattern':'0000','count':1,'child1':'00'},
{'pattern':'0001','count':2,'child1':'00', 'child2':'01'},
{'pattern':'0011','count':1,'child1':'01'},
{'pattern':'1100','count':1,'child1':'01'},
{'pattern':'1101','count':2,'child1':'10', 'child2':'11'},
{'pattern':'1111','count':1,'child1':'11'},
{'pattern':'0100','count':2,'child1':'00', 'child2':'01'},
{'pattern':'0101','count':3,'child1':'00', 'child2':'11', 'child3':'01'},
{'pattern':'0111','count':2,'child1':'01', 'child2':'11'}
];

var count = 0;
var resultSet = new Array;
var resultSet1 = new Array;
var resultSet2 = new Array;
var tmpArray = new Array;
var flagR, flagY, flagW, flagS;
var flower;

function setFlower(value) {
  switch (value) {
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
}

function checkParent()
{
  clearTable2();
  var possibleRPatterns, possibleYPatterns, possibleWPatterns, possibleSPatterns;
  resultSet = [];
  resultSet1 = [];
  resultSet2 = [];
  tmpArray=[];
  flagR = true;
  flagY = true;
  flagW = true;
  flagS = false;

  setFlower(document.getElementById('type').value);

  var child = getFlower(document.getElementById('child').value);
  if (child == undefined)
  {
    alert('Invalid child. Please refer to the table for valid variant.');
    return;
  }

  if (flagR) possibleRPatterns = _.filter(crossTable, obj => obj.child1 == child.r || obj.child2 == child.r || obj.child3 == child.r);
  if (flagY) possibleYPatterns = _.filter(crossTable, obj => obj.child1 == child.y || obj.child2 == child.y || obj.child3 == child.y);
  if (flagW) possibleWPatterns = _.filter(crossTable, obj => obj.child1 == child.w || obj.child2 == child.w || obj.child3 == child.w);
  if (flagS) possibleSPatterns = _.filter(crossTable, obj => obj.child1 == child.s || obj.child2 == child.s || obj.child3 == child.s);
  
  for (r=0; r<possibleRPatterns.length; r++)
  {
    for (y=0; y<possibleYPatterns.length; y++)
    {
      for (w=0; w<possibleWPatterns.length; w++)
      {
        if (flagS)
        {
          for (s=0; s<possibleSPatterns.length; s++)
          {
            resultSet1.push(possibleRPatterns[r].pattern.substr(0,2).concat(possibleYPatterns[y].pattern.substr(0,2).concat(possibleWPatterns[w].pattern.substr(0,2).concat(possibleSPatterns[s].pattern.substr(0,2)))));
            resultSet2.push(possibleRPatterns[r].pattern.slice(-2).concat(possibleYPatterns[y].pattern.slice(-2).concat(possibleWPatterns[w].pattern.slice(-2).concat(possibleSPatterns[s].pattern.slice(-2)))));
          }
        }
        else
        {
          resultSet1.push(possibleRPatterns[r].pattern.substr(0,2).concat(possibleYPatterns[y].pattern.substr(0,2).concat(possibleWPatterns[w].pattern.substr(0,2))).concat('00'));
          resultSet2.push(possibleRPatterns[r].pattern.slice(-2).concat(possibleYPatterns[y].pattern.slice(-2).concat(possibleWPatterns[w].pattern.slice(-2))).concat('00'));
        }  
      }
    }
  }

  //remove duplicates
  resultSet1.forEach(getDuplicate);
  for (i=(tmpArray.length-1); i>=0; i--)
  {
    resultSet1.splice(tmpArray[i], 1);
    resultSet2.splice(tmpArray[i], 1);
  }

  count=0;
  clearTable2();
  resultSet1.forEach(printResult2);
}

function getDuplicate(item, index) {
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
  var parent1 = _.find(flower, { 'r':item.substr(0,2), 'y':item.substr(2,2), 'w':item.substr(4,2), 's':item.slice(-2) });
  var parent2 = _.find(flower, { 'r':resultSet2[count].substr(0,2), 'y':resultSet2[count].substr(2,2), 'w':resultSet2[count].substr(4,2), 's':resultSet2[count].slice(-2) });
  if(parent1!=undefined && parent2!=undefined)
  {
    var table = document.getElementById("resultTable2").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    count+=1;
    cell1.innerHTML = count;
    cell2.innerHTML = parent1.label;
    cell3.innerHTML = parent1.hex;
    cell4.innerHTML = parent1.color;
    cell4.setAttribute('class', parent1.color);
    cell5.innerHTML = parent2.label;
    cell6.innerHTML = parent2.hex;
    cell7.innerHTML = parent2.color;
    cell7.setAttribute('class', parent2.color);
  }
}

function checkOffSpring() {
  clearTable();
  resultSet = [];
  var pa = document.getElementById('pa').value;
  var pb = document.getElementById('pb').value;
  var geneA, geneB;
  var g_r, g_y, g_w, g_s;
  var totalResult = 0;
  flagR = true;
  flagY = true;
  flagW = true;
  flagS = false;

  setFlower(document.getElementById('type').value);

  //make sure color exists
  geneA = getFlower(pa);
  geneB = getFlower(pb);
  if (geneA == undefined)
  {
    alert('Invalid parent A.');
    return;
  }
  if (geneB == undefined)
  {
    alert('Invalid parent B.');
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
    
    totalResult += 1;
    result.count = 1;
    resultSet.push(result);
    //add count if 3 patterns as 1 pattern is repeated for percentage calculation
    if (current==3) {
      totalResult += 1;
      resultSet[resultSet.length-1].count += 1;
    }
  }
  resultSet.totalResult = totalResult;

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
  var cell9 = row.insertCell(8);
  cell1.innerHTML = count;
  cell2.innerHTML = result.r;
  cell3.innerHTML = result.y;
  cell4.innerHTML = result.w;
  cell5.innerHTML = result.s;
  cell6.innerHTML = result.color;
  cell6.setAttribute('class', result.color);
  cell7.innerHTML = result.label;
  cell8.innerHTML = result.hex;
  cell9.innerHTML = Number(Math.round(item.count / resultSet.totalResult * 100 + 'e2') + 'e-2');
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
function clearTable2()
{
  document.getElementById("resultBody2").innerHTML = '';
  document.getElementById("resultTable2").setAttribute('style', '');
}
