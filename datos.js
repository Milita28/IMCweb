        function getData() {
            const nombre = prompt("Ingrese su nombre:");
            const edad = parseInt(prompt("Ingrese su edad:"));
            const peso = parseFloat(prompt("Ingrese su peso (kg):"));
            const altura = parseFloat(prompt("Ingrese su altura (cm):")) / 100; // Convertir a metros

            const imc = (peso / (altura * altura)).toFixed(2);

            alert(`\nNombre: ${nombre}\nEdad: ${edad}\nPeso: ${peso} kg\nAltura: ${altura * 100} cm\nIMC: ${imc}`);
        }