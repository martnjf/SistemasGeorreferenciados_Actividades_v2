var firebaseConfig = {
    apiKey: "AIzaSyAtskMISz-kfWH-A-WnJvXpHBfQQNTL75U",
    authDomain: "practica1firebase1.firebaseapp.com",
    projectId: "practica1firebase1",
    storageBucket: "practica1firebase1.appspot.com",
    messagingSenderId: "1065846295266",
    appId: "1:1065846295266:web:fd569d5e4baad1b1bb2cbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const productoslista = document.querySelector("#lista");
const formulario = document.querySelector('#forma');

function renderProductos(doc){
    let li = document.createElement("li")
    let nombre = document.createElement("span")
    let codigo = document.createElement("span")
    let borrar = document.createElement("button")

    borrar.className = "btn btn-danger m-3";

    nombre.textContent = doc.data().nombre + " ";
    codigo.textContent = doc.data().codigo + " ";
    borrar.textContent = "Borrar";

    li.setAttribute("id", doc.id);
    li.appendChild(borrar);
    li.appendChild(nombre);
    li.appendChild(codigo);

    productoslista.appendChild(li);

    borrar.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        db.collection("productos").doc(id).delete();
    });
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // hace que no se recargue la página c:
    
    db.collection('productos').add({
        nombre: formulario.nombre.value,
        codigo: formulario.codigo.value
    });

    formulario.nombre.value = '';
    formulario.codigo.value = '';
});

db.collection('productos').onSnapshot( snapshot => {
    let changes = snapshot.docChanges();

    changes.forEach(change => {
        if(change.type == 'added'){
            renderProductos(change.doc)
        } else if (change.type = "removed"){
            console.log(change.doc.id);
            let valorid = document.getElementById(change.doc.id);
            lista.removeChild(valorid) 
        }
    });
     console.log(changes);
});