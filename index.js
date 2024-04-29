var htm = `<pre>
     <table id='simple_table' >
     <thead>
     <tr>`
let css = `<style>
     #simple_table {
         font-family: arial, sans-serif;
          border-collapse: collapse; 
          width: 100%;
         background-color: #e6faff;
         color:black;
     }
     #simple_table td, #simple_table th {
          text-align: left;
          padding: 8px;
          border: 1px solid #ffffff;
     }
     #simple_table tr:nth-child(even) {
         background-color: #b3f0ff;
     }
     #simple_table tr:hover {
         background-color: #80ff80;
     }
     #simple_table tr > th 
     {
         background: #0000ff;
          color: #ffffff;
     }
     </style>`
function doweb() {
    let preview = document.getElementById("preview");
    if ( preview.innerText != "nothing"){
        return
    }
    preview.innerText = "";
    let con = document.getElementById("con").value;
    let data = (con).split("\n");
    for (let row of data) {
        if (row == "") {
            break;
        }
        else if (row == data[0]) {
            for (let j of row.split("\t")) {
                htm += "<th>" + j + "</th>";
            }
            htm += "\n</tr>\n</thead>\n<tbody>";
        }
        else {
            htm += "<tr>\n";
            for (let j of row.split("\t")) {
                htm += "<td>" + j + "</td>";
            }
            htm += "\n</tr>";
        }
    }
    htm += "\n</tbody>\n</table>\n</pre>"
    let hide = document.getElementsByClassName("hide");
    for (let i = 0; i < 8; i++) {
        hide[i].style.display = "block";
    }
    preview.innerHTML = htm;
    let htmlcode = document.getElementById("htmlcode");
    htmlcode.innerText = htm;
    let csscode = document.getElementById("csscode");
    csscode.innerText = css;
    document.getElementById("submit").innerText = "Submitted !!";
}

function copyhtm() {
    let copyhtml = document.getElementById("copyhtml");
    copyhtml.innerText = "HTML Code Copied !!";
    navigator.clipboard.writeText(htm);
}

function copycs() {
    let copycss = document.getElementById("copycss");
    copycss.innerText = "Css Code Copied !!";
    navigator.clipboard.writeText(css);
}

function slidebar(){
    let header = document.getElementsByClassName("header")[0];
    header.style.flexDirection = "column";
    let navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.display="block";
    let nav = document.getElementById("nav");
    nav.style.display="flex";
    nav.style.flexDirection="column";
    nav.style.width="100%";
    let slidebar = document.getElementById("slidebar");
    slidebar.style.display = "none";
    let reload = document.getElementById("reload");
    reload.style.display="block";
}

function reload(){
    location.reload();
}