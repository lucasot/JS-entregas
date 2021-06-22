document.querySelector('#datos').addEventListener('click',traerdatos);

function traerdatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datos.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        
        if(this.readyState == 4 && this.status == 200){

            let dat = JSON.parse(this.responseText);
            let res = document.querySelector('#resp');
            res.innerHTML='';

            for(let item of dat){
                res.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.modelo}</td>
                    <td>${item.fecha}</td>
                </tr>`
            }
        }

    }
}