const alumns = ["Sofia Cárdenas", "Jorge Medrano", "Mariangela Alejandrina Pérez Lugo", "Fabián Conejo", "Shir Sahagún", "Julian Barrios ", "Angel Antonio", "Lucia Auyón", "Andru Vargas", "Fernando Hernandez Baez", "Arturo Camargo", "Miguel Monterroso", "Gerson González", "Oscar Hernández", "Laura Meléndez", "Sofia Fernandez", "Ana Maria Herrera", "Ignacio Gómez", "Dany Parc", "Andy Morales", "Alejandra Garcia", "Sherihan Garcia", "Mario Luis Valdez Maciel", "Víctor Alfonso Muñoz Toro", "Victor Cárdenas", "Rodrigo Eduardo Delgadillo González (Roy)", "Daniel Reyes Vivar", "Fernanda Escobedo", "Jorge Alvarez", "Isaac Castro", "Miguel Rodriguez", "Diana Ortiz"];

const randomPicker = (array) => {
    let randNum = Math.floor(Math.random() * array.length);
    let name = array[randNum];
    return name;
};

$('.random').click(function() {
    document.getElementById('card-body').innerHTML = `${randomPicker(alumns)}`;
});