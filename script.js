var hom=document.querySelector(".hom");
    acc=document.querySelector(".acc");
    cod=document.querySelector(".cod");
    inf=document.querySelector(".inf");
    hcj=document.querySelector(".hcj");
    py=document.querySelector(".py");
    c=document.querySelector(".c");
    cpp=document.querySelector(".cpp");
    java=document.querySelector(".java");
    sql=document.querySelector(".sql");
    nj=document.querySelector(".nj");
    hhcj=document.querySelector(".hhcj");
    hsql=document.querySelector(".hsql");
    hpython=document.querySelector(".hpython");
    hcpp=document.querySelector(".hcpp");
    ifr=document.querySelector(".ifr");
hom.addEventListener("click", home);
acc.addEventListener("click", account);
cod.addEventListener("click", cdpl);
inf.addEventListener("click", info);
hcj.addEventListener("click", hcja);
py.addEventListener("click", pyt);
c.addEventListener("click", cpr);
cpp.addEventListener("click", cpppr);
java.addEventListener("click", javap);
sql.addEventListener("click", sqla);
nj.addEventListener("click", nja);
hhcj.addEventListener("click", hhcjf);
hsql.addEventListener("click", hsqlf);
hpython.addEventListener("click", hpyf);
hcpp.addEventListener("click", hcppf);
function opensidebar(){
var sidebar=document.querySelector(".sidebar");
    sidebar.style.width="60%";
}
function closesidebar(){
var sidebar=document.querySelector(".sidebar");
    sidebar.style.width="0%";
}
function home(){
var col1=document.querySelector(".col-1");
col2=document.querySelector(".col-2");
col3=document.querySelector(".col-3");
col1.style.display="flex";
col2.style.display="none";
col3.style.display="none";
}
function account(){
var col1=document.querySelector(".col-1");
col2=document.querySelector(".col-2");
col3=document.querySelector(".col-3");
col2.style.display="flex";
col1.style.display="none";
col3.style.display="none";
}
function cdpl(){
var col1=document.querySelector(".col-1");
col2=document.querySelector(".col-2");
col3=document.querySelector(".col-3");
col3.style.display="flex";
col2.style.display="none";
col1.style.display="none";
}
function cdplf(){
var col1=document.querySelector(".col-1");
col2=document.querySelector(".col-2");
col3=document.querySelector(".col-3");
col3.style.display="flex";
col2.style.display="none";
col1.style.display="none";
}
function info(){
var col1=document.querySelector(".col-1");
col2=document.querySelector(".col-2");
col3=document.querySelector(".col-3");
col1.style.display="flex";
col2.style.display="none";
col3.style.display="none";
}
function hcja(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebhcj?lite=true";
}
function pyt(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebpython?lite=true";
}
function cpr(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebc?lite=true";
}
function cpppr(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebcpp?lite=true";
}
function javap(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebjava?lite=true";
}
function sqla(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebsql?lite=true";
}
function nja(){
    ifr.src="https://replit.com/@vaishnavravi/vimowebnj?lite=true";
}
function hhcjf(){
var col1=document.querySelector(".col-1");
col3=document.querySelector(".col-3");
    col3.style.display="flex";
    col1.style.display="none";
    ifr.src="https://replit.com/@vaishnavravi/vimowebhcj?lite=true";
}
function hpyf(){
    var col1=document.querySelector(".col-1");
        col3=document.querySelector(".col-3");
    col3.style.display="flex";
    col1.style.display="none";
    ifr.src="https://replit.com/@vaishnavravi/vimowebpython?lite=true";
}
function hsqlf(){
    var col1=document.querySelector(".col-1");
        col3=document.querySelector(".col-3");
    col3.style.display="flex";
    col1.style.display="none";
    ifr.src="https://replit.com/@vaishnavravi/vimowebsql?lite=true";
}
function hcppf(){
    var col1=document.querySelector(".col-1");
        col3=document.querySelector(".col-3");
    col3.style.display="flex";
    col1.style.display="none";
    ifr.src="https://replit.com/@vaishnavravi/vimowebcpp?lite=true";
}
