let tableArray;//表头
let tableElementArray;//表元
let rowNum=0;
let colNum;
function checkColAndAdd(){
    let col=document.getElementById("ColNumber").value;//输入的行数
    let choice=document.getElementById("select").selectedIndex;//下拉框选项
    if(col>0 && choice==1){//当输入的行数为整数时执行
        tableArray = new Array(col);
        for(var i=0; i<col;i++){
            tableArray[i]="Attr" + (i+1);
        }

        var s="";//内部代码
        for (let counter = 0; counter < col; counter++) {
            s+="<input type='text' placeholder="+"Attr"+(counter+1)+" "+"onchange='changeContent("+counter+")'>";
        }

        document.getElementById("inTable").innerHTML=s;//更改html

        document.getElementById("commitButton").style.display="block";//显示按钮
    }
    else{
        document.getElementById("commitButton").style.display="none";
    }
}

//改变下拉框选项时
function changeSelect() {
    let a=document.getElementById("select").selectedIndex;
    let b=document.getElementById("commitButton");
    switch(a){
        //一个一个地改display，有空再优化...
        case 0:  document.getElementById("commitButton").style.display="none";
            document.getElementById("inTable").style.display="none";
            document.getElementById("addRow").style.display="none";
            document.getElementById("inputPane").style.display="none"
            document.getElementById("deleteRow").style.display="none";
            document.getElementById("deleteTable").style.display="none";
            break;
        case 1:  document.getElementById("inTable").style.display="block";
            document.getElementById("addRow").style.display="none";
            document.getElementById("inputPane").style.display="block"
            document.getElementById("deleteRow").style.display="none";
            document.getElementById("deleteTable").style.display="none";
            checkColAndAdd();
            b.onclick=createTable;
            break;
        case 2:  document.getElementById("inTable").style.display="none";
            document.getElementById("inputPane").style.display="none";
            document.getElementById("addRow").style.display="block";
            document.getElementById("deleteRow").style.display="none";
            document.getElementById("deleteTable").style.display="none";
            document.getElementById("commitButton").style.display="block";
            addRowPane();
            b.onclick=addRow ;
            break;
        case 3:  addDeletePane();
            document.getElementById("inTable").style.display="none";
            document.getElementById("inputPane").style.display="none";
            document.getElementById("addRow").style.display="none";
            document.getElementById("deleteRow").style.display="block";
            document.getElementById("deleteTable").style.display="none";
            document.getElementById("commitButton").style.display="block";
            b.onclick=commitDeleteEvent;
            break;
        case 4:document.getElementById("inTable").style.display="none";
            document.getElementById("addRow").style.display="none";
            document.getElementById("inputPane").style.display="none"
            document.getElementById("deleteRow").style.display="none";
            document.getElementById("deleteTable").style.display="block";
            document.getElementById("commitButton").style.display="block";
            b.onclick=commitDeleteTable;
    }
}

//创造底部的table
function createTable(){
    let a=document.getElementById("select").selectedIndex;
    let b=document.getElementById("createdTables");
    b.innerHTML+="<table class='createdTable'><tr class='trForTh'></tr></table>";
    let trForTh=document.getElementsByClassName("trForTh");
    if(a==1){
        let s="";
        for(let i =0; i<tableArray.length;i++){
            s+="<th>"+tableArray[i]+"</th>";
        }
        trForTh[trForTh.length-1].innerHTML=s;
    }
    let c=document.getElementById("names");
    let d=document.getElementById("name").value;
    if(d==""){
        d="unNamed Table";
    }
    c.innerHTML+="<option>"+d+"</option>";

    document.getElementById("name").value="";
    document.getElementById("ColNumber").value=NaN;
    document.getElementById("inTable").innerHTML="";

    let tables=document.getElementById("names");
    tables.selectedIndex=tables.length-1;
    changeTableEvent();

}

//修改文本框时进行同步
function changeContent(num) {
    var arr=document.getElementById("inTable").children[num].value;
    tableArray[num]=arr;
    if (arr==""){
        tableArray[num]="Attr"+(num+1);
    }
}

//添加行面板
function addRowPane() {
    let a=document.getElementById("addRow");
    let index=document.getElementById("names").selectedIndex-1;
    let num=document.getElementsByClassName("trForTh")[index].children.length;
    let s="";
    for(let i=0;i<num;i++){
        s+="<input type='text'>"
    }
    a.innerHTML=s;
    colNum=num;
}

//添加行
function addRow() {
    let a=document.getElementsByClassName("createdTable");
    let inputValue=document.getElementById("addRow").children;
    rowNum++;
    let temp;
    if(tableElementArray!=null) {
         temp = tableElementArray;
    }
    tableElementArray=new Array(rowNum);
    if(temp!=null){
        for(let i=0;i<temp.length;i++){
            tableElementArray[i]=temp[i];
        }
    }
    tableElementArray[rowNum-1]=new Array(colNum);

    for(let i=0;i<colNum;i++){
        tableElementArray[rowNum-1][i]=inputValue[i].value;
    }

    let trNode=document.createElement("tr");
    for (let i=0;i<tableElementArray[rowNum-1].length;i++) {
        let tdNode=document.createElement("td");
        let textNode=document.createTextNode(tableElementArray[rowNum-1][i]);
        tdNode.appendChild(textNode);
        trNode.appendChild(tdNode);
    }
    let index=document.getElementById("names").selectedIndex-1;
    a[index].appendChild(trNode)

    for(let i=0;i<inputValue.length;i++){
        inputValue[i].value="";
    }
}

function changeTableEvent() {
    let tables=document.getElementById("createdTables").children;
    let index=document.getElementById("names").selectedIndex-1;
    if(index==-1){
        for (let i = 0; i < tables.length; i++) {
                tables[i].style.display = "none";
        }
    }else {
        for (let i = 0; i < tables.length; i++) {
            if (i == index)
                tables[i].style.display = "table";
            else
                tables[i].style.display = "none";
        }
    }
    addRowPane();
    if(document.getElementById("select").selectedIndex==3){
        addDeletePane();
    }
}

function addDeletePane() {
    let pane=document.getElementById("deleteRow");
    let index=document.getElementById("names").selectedIndex-1;
    let num=document.getElementsByClassName("trForTh")[index].children.length;
    let s="";
    for(let i=0;i<num;i++){
        s+="<input type='text'>"
    }
    pane.innerHTML=s;
}

function commitDeleteEvent(){
    let matcher=document.getElementById("deleteRow").children;
    let index=document.getElementById("names").selectedIndex-1;
    let matchElements=document.getElementsByClassName("createdTable")[index].children;
    for(let j=1;j<matchElements.length;j++) {
        for (let i = 0; i < matcher.length; i++) {
            if (matcher[i].value != matchElements[j].children[i].innerText) {
                break;
            }
            if(i==matcher.length-1){
                document.getElementsByClassName("createdTable")[index].deleteRow(j);
            }
        }
    }
}

function commitDeleteTable() {
    let index=document.getElementById("names").selectedIndex;
    let tableToBeDeleted=document.getElementsByClassName("createdTable")[index-1];
    tableToBeDeleted.parentNode.removeChild(tableToBeDeleted);
    let optionToBeDeleted=document.getElementById("names").children[index];
    optionToBeDeleted.parentNode.removeChild(optionToBeDeleted);
    if(document.getElementById("names").children.length==1){
        changeTableEvent();
    }
}