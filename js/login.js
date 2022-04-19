ingreso = false;
menu = true;
let newAccBtn = document.getElementById('newAccount');
let accCreated = document.getElementById('accCreated');
let hasAcc = document.getElementById('hasAcc');
let loginBtn = document.getElementById('entrarBtn');
let crearBtn = document.getElementById('crearBtn');
let result;
let users = [
    {
        username: 'julian',
        password: 'lobos',
        nombre: 'Julian',
        apellido: 'Lobos',
    },
    {
        username: 'baltazar',
        password: 'salomon',
        nombre: 'Baltazar',
        apellido: 'Salomón',
    },
    {
        username: 'user',
        password: 'user'
    }
]

function currentUser(users, value) {
    result = [];
    users.forEach(function(o){if (o.username == value) result.push(o);} );
    return result;
}

function login(){
    event.preventDefault();
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value;
    if(users.some((el) => el.username === username && el.password === password)){
        document.location.href = 'home.html';
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        currentUser(users, username);
        console.log(result)
        let resultJS = JSON.stringify(result);
        localStorage.setItem('CuentaAbierta', resultJS);

    }else{
        document.getElementById('errorText').style.display='block';
    }
}

function crear(){
    event.preventDefault();
    let newUser = document.getElementById('newUser').value;
    let newPass = document.getElementById('newPass').value;
    let newName = document.getElementById('newName').value;
    let newLastname = document.getElementById('newLastname').value;
    if(newUser != '' && newPass != ''){
        users.unshift({
            username: newUser,
            password: newPass,
            nombre: newName,
            apellido: newLastname
        });
        document.getElementById('exitoText').style.display='block';
        document.getElementById('errorText2').style.display='none';
    }else{
        document.getElementById('errorText2').style.display='block';
    }
}

function mostrarLogin(num){
    document.getElementById('section1').style.display='none';
    document.getElementById('section2').style.display='none';
    document.getElementById('section'+num).style.display='flex'
}

let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

document.getElementById("user").value = localStorage.getItem("username");
document.getElementById("pass").value = localStorage.getItem("password");

newAccBtn.onclick = () => {mostrarLogin('2');};
accCreated.onclick = () => {mostrarLogin('1');};
hasAcc.onclick = () => {mostrarLogin('1')};
loginBtn.onclick = () => {login()};
crearBtn.onclick = () => {crear()};
