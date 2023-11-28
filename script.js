let objArray=[{"id":1,"first_name":"Sheff","last_name":"Hame","email":"shame0@hatena.ne.jp","gender":"Male","country":"China"},
{"id":2,"first_name":"Josh","last_name":"Jacobssen","email":"jjacobssen1@php.net","gender":"Male","country":"Peru"},
{"id":3,"first_name":"Frederique","last_name":"Tarn","email":"ftarn2@jalbum.net","gender":"Female","country":"France"},
{"id":4,"first_name":"Spencer","last_name":"Mohammed","email":"smohammed3@who.int","gender":"Male","country":"Egypt"},
{"id":5,"first_name":"Editha","last_name":"Clemerson","email":"eclemerson4@bigcartel.com","gender":"Female","country":"Botswana"},
{"id":6,"first_name":"Raimundo","last_name":"O'Haire","email":"rohaire5@prlog.org","gender":"Male","country":"China"},
{"id":7,"first_name":"Abbey","last_name":"Regler","email":"aregler6@wufoo.com","gender":"Female","country":"China"},
{"id":8,"first_name":"Georgianne","last_name":"Payfoot","email":"gpayfoot7@google.cn","gender":"Female","country":"Ukraine"},
{"id":9,"first_name":"Daron","last_name":"Sebrens","email":"dsebrens8@feedburner.com","gender":"Male","country":"China"},
{"id":10,"first_name":"Mal","last_name":"Farthing","email":"mfarthing9@foxnews.com","gender":"Non-binary","country":"Indonesia"}];

let tableBodyTag = document.getElementById('tbody');

function displayTables(items){
    let eachItem=``;
    if(items.length>0)
    {
        for(let item of items){
            eachItem+=`<tr>
            <td>${item.id}</td>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td>${item.email}</td>
            <td>${item.gender}</td>
            <td>${item.country}</td>
        </tr>`
         }
    }
    tableBodyTag.innerHTML=eachItem;
};

displayTables(objArray);

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        

        if (td ) {
            txtValue = td.textContent || td.innerText;
            

            if (txtValue.toUpperCase().indexOf(filter) > -1 ) {
                tr[i].style.display = "";
            }

            else {
                tr[i].style.display = "none";
            }

        }
    }
}

let malesGroup=objArray.filter(person => person.gender==='Male');
let femalesGroup=objArray.filter(person => person.gender==='Female');

