var crossTable = [
{'pattern':'0000','child1':'00'},
{'pattern':'0001','child1':'00','child2':'01'},
{'pattern':'0011','child1':'01'},
{'pattern':'1100','child1':'01'},
{'pattern':'1101','child1':'01','child2':'11'},
{'pattern':'1111','child1':'11'},
{'pattern':'0100','child1':'00','child2':'01'},
{'pattern':'0101','child1':'00','child2':'01','child3':'11'},
{'pattern':'0111','child1':'01','child2':'11'}
];

var count = 0;
var resultSet = new Array;
var resultSet1 = new Array;
var resultSet2 = new Array;
var tmpArray = new Array;
var flagR, flagY, flagW, flagS;
var flower;
var child;

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

function checkParent(val) {
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

  child = getFlower(val);
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
  tmpArray = [];
  getDuplicate();
  for (i=(tmpArray.length-1); i>=0; i--)
  {
    resultSet1.splice(tmpArray[i], 1);
    resultSet2.splice(tmpArray[i], 1);
  }

  count=0;
  document.getElementById("resultBody2").innerHTML = '';
  document.getElementById("resultTable2").setAttribute('style', '');
  resultSet1.forEach(printResult2);
  sortTableByNumber('resultTable2', 5);
}

function getDuplicate() {
  for (i=0; i<resultSet1.length; i++)
  {
    for (j=i+1; j<resultSet2.length; j++)
    {
      if (resultSet2[j] == resultSet1[i])
      {
        if (resultSet1[j] == resultSet2[i])
        {
          tmpArray.push(j);
        }
      }
    }
  }
}

function printResult2(item, index) {
  var percentage = 0;
  var parent1 = _.find(flower, { 'r':item.substr(0,2), 'y':item.substr(2,2), 'w':item.substr(4,2), 's':item.slice(-2) });
  var parent2 = _.find(flower, { 'r':resultSet2[count].substr(0,2), 'y':resultSet2[count].substr(2,2), 'w':resultSet2[count].substr(4,2), 's':resultSet2[count].slice(-2) });
  if(parent1!=undefined && parent2!=undefined)
  {
    getOffSpringResult(parent1.label, parent2.label);
    var colorCount = 0;
    for (i=0; i<resultSet.length; i++)
    {
      var result = _.find(flower, { 'r':resultSet[i].r, 'y':resultSet[i].y, 'w':resultSet[i].w, 's':resultSet[i].s });
      if (result.color == child.color) colorCount += 1;
      if (result.label == child.label) percentage = (resultSet[i].count / resultSet.totalResult * 100).toFixed(2);
    }
    
    var table = document.getElementById("resultTable2").getElementsByTagName('tbody')[0];
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
    count+=1;
    cell2.innerHTML = parent1.label;
    cell3.innerHTML = parent1.hex;
    cell4.innerHTML = parent1.color;
    cell4.setAttribute('class', parent1.color);
    cell5.innerHTML = parent2.label;
    cell6.innerHTML = parent2.hex;
    cell7.innerHTML = parent2.color;
    cell7.setAttribute('class', parent2.color);
    cell8.innerHTML = percentage;
    cell9.innerHTML = colorCount;
  }
}

function checkOffSpring(pa, pb) {
  clearTable();
  getOffSpringResult(pa, pb);
  printOffspringResult();
}

function getOffSpringResult(pa, pb) {
  var geneA, geneB;
  var g_r, g_y, g_w, g_s;
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
    alert('Invalid parent A. Please refer to the table for valid variant.');
    return;
  }
  if (geneB == undefined)
  {
    alert('Invalid parent B. Please refer to the table for valid variant.');
    return;
  }

  //set applicable gene
  if (flagR) g_r = _.find(crossTable, { 'pattern':(geneA.r + geneB.r) });
  if (flagY) g_y = _.find(crossTable, { 'pattern':(geneA.y + geneB.y) });
  if (flagW) g_w = _.find(crossTable, { 'pattern':(geneA.w + geneB.w) });
  if (flagS) g_s = _.find(crossTable, { 'pattern':(geneA.s + geneB.s) });

  resultSet = new Array;
  var currentR, currentY, currentW, currentS;
  var totalOutcome = 0;
  for (r=1; r<=4; r++)
  {
    currentR = getPattern(g_r, r);
    for (y=1; y<=4; y++)
    {
      currentY = getPattern(g_y, y);
      for (w=1; w<=4; w++)
      {
        currentW = getPattern(g_w, w);
        if (flagS)
        {
          for (s=1; s<=4; s++)
          {
            currentS = getPattern(g_s, s);
            setResult(resultSet, currentR, currentY, currentW, currentS);
            totalOutcome += 1;
          }
        }
        else
        {
          currentS = '00';
          totalOutcome += 1;
          setResult(resultSet, currentR, currentY, currentW, currentS);
        }
      }
    }
  }
  resultSet.totalResult = totalOutcome;
}

function setResult(arr, r, y, w, s)
{
  var result = new Array;
  result.r = r;
  result.y = y;
  result.w = w;
  result.s = s;

  var flgFound = false;
  for (i=0; i<arr.length; i++)
  {
    if (arr[i].r==result.r && arr[i].y==result.y && arr[i].w==result.w && arr[i].s==result.s)
    {
      arr[i].count += 1;
      flgFound = true;
      break;
    }
  }
  if (!flgFound)
  {
    result.count = 1;
    arr.push(result);
  }
}

function printOffspringResult()
{
  //print result
  count=0;
  clearTable();
  resultSet.forEach(printResult);
  sortTableByNumber('resultTable', 8);
}

function printResult(item, index) {
  count+=1;
  var result = _.find(flower, { 'r':item.r, 'y':item.y, 'w':item.w, 's':item.s });
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
  cell2.innerHTML = result.r;
  cell3.innerHTML = result.y;
  cell4.innerHTML = result.w;
  cell5.innerHTML = result.s;
  cell6.innerHTML = result.color;
  cell6.setAttribute('class', result.color);
  cell7.innerHTML = result.label;
  cell8.innerHTML = result.hex;
  cell9.innerHTML = (item.count / resultSet.totalResult * 100).toFixed(2);
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

function sortTableByNumber(tableId, column) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(tableId);
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
