var firebaseConfig = {
    apiKey: "AIzaSyACKBP8Uif7YVdeqFhr3g-Q9jWHtMZZF68",
    authDomain: "practica1firebase-fdf5c.firebaseapp.com",
    projectId: "practica1firebase-fdf5c",
    storageBucket: "practica1firebase-fdf5c.appspot.com",
    messagingSenderId: "682745624828",
    appId: "1:682745624828:web:b410f519879602e3817f79",
    measurementId: "G-PSMKDG2DSB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
const productoslista = document.querySelector("#lista");
const formulario = document.querySelector('#forma');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // hace que no se recargue la página c:
    
    db.collection('productos').add({
        nombre: formulario.nombre.value,
        codigo: formulario.codigo.value
    });
});