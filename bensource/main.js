
var objUsers = [
    {
        username: "jolena",
        password: "hirejolena"
    },
    {
        username: "jo",
        password: "jo"
    }
]
function getInfo(){
    var username = document.getElementById('user').value
    var password = document.getElementById('password').value

    for(i = 0; i < objUsers.length; i++) {
        if(username == objUsers[i].username && password == objUsers[i].password) {
            console.log(`${username} is logged in!!!`)
        }
    }

}