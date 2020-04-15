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

showFlower(document.getElementById('type'));

function showFlower(sel)
{
  document.getElementById('img-flower').setAttribute('src', '/assets/img/' + sel.options[sel.selectedIndex].text + '-red.png');
}

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

function checkIdentifier(ga, gb) {
  var geneA, geneB;
  var colorSet1 = new Array;
  var colorSet2 = new Array;
  var differenceA = new Array;
  var differenceB = new Array;

  clearTable(3);
  setFlower(document.getElementById('type').value);

  geneA = getFlower(ga);
  geneB = getFlower(gb);
  if (geneA == undefined)
  {
    alert('Invalid gene A. Please refer to the table for valid variant.');
    return;
  }
  if (geneB == undefined)
  {
    alert('Invalid gene B. Please refer to the table for valid variant.');
    return;
  }

  for (l=0; l<flower.length; l++)
  {
    getOffSpringResult(flower[l].label, ga);
    colorSet1 = getColorSet(resultSet);
    getOffSpringResult(flower[l].label, gb);
    colorSet2 = getColorSet(resultSet);

    let uniqueA = [...new Set(colorSet1)]; 
    let uniqueB = [...new Set(colorSet2)];

    differenceA = uniqueA.filter(val => !uniqueB.includes(val));
    differenceB = uniqueB.filter(val => !uniqueA.includes(val));
    
    if (differenceA.length!=0 || differenceB.length!=0)
    {
      var table = document.getElementById("resultTable3").getElementsByTagName('tbody')[0];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell2.innerHTML = flower[l].label + ' / ' + flower[l].hex;
      cell2.setAttribute('class', flower[l].color);
      var text = '';
      if (differenceA.length!=0)
      {
        count = 0;
        differenceA.forEach(function(item, index){
          text = text + '<div class="' + item + ' idcolor">' + item + '</div>';
          colorSet1.forEach(function(itm, idx){
            if (itm == item) count += 1;
          });
        });
        cell3.innerHTML = text;
        cell4.innerHTML = (count / colorSet1.length * 100).toFixed(2);
      }
      text = '';
      if (differenceB.length!=0)
      {
        count = 0;
        differenceB.forEach(function(item, index){
          text = text + '<div class="' + item + ' idcolor">' + item + '</div>';
          colorSet2.forEach(function(itm, idx){
            if (itm == item) count += 1;
          });
        });
        cell5.innerHTML = text;
        cell6.innerHTML = (count / colorSet2.length * 100).toFixed(2);
      }
    }
  }
  showTable(3);
  focusResult();
}

function getColorSet(array)
{
  var result = new Array;
  for (j=0; j<array.length; j++)
  {
    result.push(_.find(flower, { 'r':array[j].r, 'y':array[j].y, 'w':array[j].w, 's':array[j].s }).color);
  }
  return result;
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

  clearTable(2);
  setFlower(document.getElementById('type').value);

  child = getFlower(val);

  if (child == undefined)
  {
    alert('Invalid offspring. Please refer to the table for valid variant.');
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
  tmpArray.sort((a, b) => (a - b));
  for (i=(tmpArray.length-1); i>=0; i--)
  {
    resultSet1.splice(tmpArray[i], 1);
    resultSet2.splice(tmpArray[i], 1);
  }

  count=0;
  resultSet1.forEach(printResult2);
  sortTable("resultBody2", 7, -1);
  setColorClass('resultBody2', 3);
  setColorClass('resultBody2', 6);
  showTable(2);
  focusResult();
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
    cell5.innerHTML = parent2.label;
    cell6.innerHTML = parent2.hex;
    cell7.innerHTML = parent2.color;
    cell8.innerHTML = percentage;
    cell9.innerHTML = colorCount;
  }
}

function checkOffSpring(pa, pb) {
  clearTable(1);
  getOffSpringResult(pa, pb);
  if (resultSet.length!=0)
  {
    printOffspringResult();
    showTable(1);
  }
}

function getOffSpringResult(pa, pb) {
  var geneA, geneB;
  var g_r, g_y, g_w, g_s;
  flagR = true;
  flagY = true;
  flagW = true;
  flagS = false;

  resultSet = new Array;
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
  clearTable(1);
  resultSet.forEach(printResult);
  sortTable('resultBody1', 8, -1);
  setColorClass('resultBody1', 5);
  focusResult();
}

function printResult(item, index) {
  count+=1;
  var result = _.find(flower, { 'r':item.r, 'y':item.y, 'w':item.w, 's':item.s });
  var table = document.getElementById("resultTable1").getElementsByTagName('tbody')[0];
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
  var result;
  var pt = gene.pattern;
  switch (order)
  {
    case 1:
      result = (pt.substr(0,1).concat(pt.substr(2,1)));
      break;
    case 2:
      result = (pt.substr(0,1).concat(pt.substr(3,1)));
      break;
    case 3:
      result = (pt.substr(1,1).concat(pt.substr(2,1)));
      break;
    case 4:
      result = (pt.substr(1,1).concat(pt.substr(3,1)));
      break;
  }

  if (result=='10') result = '01';
  return result;
}

function clearTable(num)
{
  document.getElementById("resultBody" + num).innerHTML = '';
  document.getElementById("div-result" + num).setAttribute('style', 'display:none;');
  if (num==2)
  {
    document.getElementById('parentFilterBtn').setAttribute('style', '');
    document.getElementById('colorFilterBtn').setAttribute('style', '');
  }
}

function clearAllTables()
{
  clearTable(1);
  clearTable(2);
  clearTable(3);
}

function showTable(num)
{
  document.getElementById("div-result" + num).setAttribute('style', '');
}

function sortTable(tbodyId, col, asc)
{
    var tbody = document.getElementById(tbodyId);
    var rows = tbody.rows;
    var rlen = rows.length;
    var arr = new Array();
    var i, j, cells, clen;
    // fill the array with values from the table
    for(i = 0; i < rlen; i++)
    {
        cells = rows[i].cells;
        clen = cells.length;
        arr[i] = new Array();
      for(j = 0; j < clen; j++) { arr[i][j] = cells[j].innerHTML; }
    }
    // sort the array by the specified column number (col) and order (asc)
    arr.sort(function(a, b)
    {
        var retval=0;
        var fA=parseFloat(a[col]);
        var fB=parseFloat(b[col]);
        if(a[col] != b[col])
        {
            if((fA==a[col]) && (fB==b[col]) ){ retval=( fA > fB ) ? asc : -1*asc; } //numerical
            else { retval=(a[col] > b[col]) ? asc : -1*asc;}
        }
        return retval;      
    });
    for(var rowidx=0;rowidx<rlen;rowidx++)
    {
        for(var colidx=0;colidx<arr[rowidx].length;colidx++){ tbody.rows[rowidx].cells[colidx].innerHTML=arr[rowidx][colidx]; }
    }
}

function setColorClass(tbodyId, col)
{
  var tbody = document.getElementById(tbodyId);
  var rows = tbody.rows;
  var rlen = rows.length;
  for(i = 0; i < rlen; i++)
  {
      cells = rows[i].cells;
      cells[col].setAttribute('class', cells[col].innerHTML);
  }
}

function setColorClass2(tbodyId, col)
{
  var tbody = document.getElementById(tbodyId);
  var rows = tbody.rows;
  var rlen = rows.length;
  var color;
  for(i = 0; i < rlen; i++)
  {
    cells = rows[i].cells;
    switch (cells[col].innerHTML.substr(0,1))
    {
      case 'r':
        color = 'red';
        break;
      case 'y':
        color = 'yellow';
        break;
      case 'w':
        color = 'white';
        break;
      case 'o':
        color = 'orange';
        break
      case 'p':
        color = 'pink';
        break;
      case 'b':
        color = 'blue';
        break;
      case 'u':
        color = 'purple';
        break;
      case 'h':
        color = 'black';
        break;
      case 'g':
        color = 'green';
        break;
    }
    cells[col].setAttribute('class', color);
  }
}

function filterTable(tbodyId, col, val)
{
  var tbody = document.getElementById(tbodyId);
  var rows = tbody.rows;
  var rlen = rows.length;
  for(i = rlen-1; i >=0; i--)
  {
      cells = rows[i].cells;
      if (cells[col].innerHTML==val) tbody.deleteRow(i);
  }
}

function filterParentResult()
{
  var child = document.getElementById('child').value;
  var col1, col2;
  if (child.length==2)
  {
    col1 = 2;
    col2 = 5;
  }
  else
  {
    col1 = 1;
    col2 = 4;
  }
  filterTable('resultBody2', col1, child);
  filterTable('resultBody2', col2, child);
  alert('Result filtered');
  document.getElementById('parentFilterBtn').setAttribute('style', 'display:none');
}

function filterParentColorResult()
{
  var child = getFlower(document.getElementById('child').value);
  var col1, col2;
  col1 = 3;
  col2 = 6;
  filterTable('resultBody2', col1, child.color);
  filterTable('resultBody2', col2, child.color);
  alert('Result filtered');
  document.getElementById('colorFilterBtn').setAttribute('style', 'display:none');
}

function focusResult()
{
  document.getElementById('div-prediction').scrollIntoView();
}
