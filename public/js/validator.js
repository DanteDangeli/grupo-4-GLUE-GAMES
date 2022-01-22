window.addEventListener("load", function(){

    let formulario = document.querySelector("form.crearProducto");

    formulario.addEventListener("submit", function(e) {
        let errores = [];

        let nombre = document.querySelector("div.formulario div div.email input#nombre");
        let nombreLength = document.querySelector("div.formulario div div.email input#nombre").value.length;
        if (nombre.value == "") {
            errores.push("El nombre del producto debe estar completo.");
        } else if (nombreLength <= 5) {
            errores.push("El nombre del producto debe tener más de 5 caracteres.")
        };

        let descripcion = document.querySelector("div.formulario div div.email input#descripcion").value.length;
        if (descripcion <= 20) {
            errores.push("La descripcion del producto tener más de 20 caracteres.");
        };


        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.erroresCrearProducto ul');
            // errores.forEach(error => {
            //     ulErrores.innerHTML  += '<li>' + ${error} + '</li>'
            // });

            for (let i = 0; i < errores.length; i++){
                ulErrores.innerHTML  += '<li>' + errores[i] + '</li>'
            }
        }


    })
})


