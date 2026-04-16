document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if(user === "admin"&& pass === "1234"  ){
        window.location.href = "form.html"
    }else{
        document.getElementById("error").innerText =  "Datos incorrectos";
    }

}
)