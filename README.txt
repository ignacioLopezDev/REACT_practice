REACT_practice exercise
https://www.youtube.com/watch?v=sjrK6RA65eQ&ab_channel=FaztCode

Dependencias:
    Inicialitation:

        -npx create-react-app client
        -npm i react-router-dom

    CSS Frameworks:
        -npm i bootstrap@5.2.2


-----------
localStorage.setItem("task", JSON.stringify([{name:"joe"}])) --> convierto un arreglo en un string y lo guardo con "set item" en el local storage

para volver a convertirlo --> JSON.parse()

<React.StrictMode>
    lo quito de index para que mantenga el local storage