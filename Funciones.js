function registrarse() {
    window.location.href = "signup.html";
  }
function Cancelar() {
    window.location.href = "Inicio.html";
  }
function validar() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }
  function cacelarsignup() {
    window.location.href = "admin.html";
  }

  function signup() {
    var nombres = document.getElementById("nombres1").value;
    var apellidos = document.getElementById("apellidos").value;
    var username = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;
    var estrato = document.getElementById("estrato").value;
    var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    var gruposanguinio = document.getElementById("gruposanguinio").value;
    var genero = document.querySelector('input[name="genero"]:checked');
  
    var nombreApellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!nombreApellidoRegex.test(nombres)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!nombreApellidoRegex.test(apellidos)) {
        alert("Por favor, ingresa un apellido válido.");
        return;
    }

    if (!contraseñaRegex.test(contraseña)) {
        alert("La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números.");
        return;
    }

    var actividades = [];
    if (document.getElementById("baloncesto").checked) {
        actividades.push(document.getElementById("baloncesto").value);
    }
    if (document.getElementById("futbol").checked) {
        actividades.push(document.getElementById("futbol").value);
    }
    if (document.getElementById("ciclismo").checked) {
        actividades.push(document.getElementById("ciclismo").value);
    }

    alert("Nombres: " + nombres + "\nApellidos: " + apellidos + "\nUsuario: " + username + "\nContraseña: " + contraseña + "\nEstrato: " + estrato + "\nFecha de nacimiento: " + fecha_nacimiento + "\nGrupo Sanguíneo: " + gruposanguinio + "\nGénero: " + genero.value + "\nActividades Favoritas: " + actividades.join(", "));
}

function Cambiarfondo() {
    var body = document.body;
    body.classList.toggle('fondo-cambiado');
  }
