

    const userinfo = window.localStorage;


           function addUser() {
                let username = document.getElementById("username").value; 
                userinfo.setItem('username', username);
                console.log(userinfo);
            }
