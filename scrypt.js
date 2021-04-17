let add = document.getElementById('but-add');
let dell = document.getElementById('but-del');


     function addContent (){
    let div = document.createElement('div');

    document.body.append(div);
    div.innerHTML = 'Текст123454';
}

add.addEventListener( "click" , addContent);

dell.addEventListener( "click" , delContent);

function delContent (){
    let divContent = document.body.getElementsByTagName('div');
    let last = divContent[divContent.length-1];
    document.body.removeChild(last);
}
