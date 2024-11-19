function ej1(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(console.log("Promesa Resuelta"));
        }, 2000);
    } )    
}

ej1();

function ej2(nro){
    return new Promise((resolve,reject) =>{
        if(nro > 10){
            resolve(console.log("numero valido"));
        }
        else{
            reject(console.log("numero invalido"));
        }
    } )
}

ej2(11).then((res)=>console.log(res)).catch((error) => console.log(error));

function ej3(datos){
    return new Promise((resolve,reject) =>{
        if(1>2){
            reject(console.log("Error de conexion"));
        }else{
            setTimeout(() => {
                resolve(console.log('conectado con API',datos));
            }, 3000);
        }
    } )  
}

ej3({nombre: "Isma",edad: 18,mail: "soyunmail@gmail.com"});

function ej4y5(){

    doblarNumero(-2)
    .then((res) => sumarDiez(res)).then((result)=> console.log("Resultado de ejercicio 4: ",result))
    .catch(() => console.log("Numero no valido"));

    function doblarNumero(n){
        return new Promise((resolve,reject) =>{
            if(n>0){
                setTimeout(() => {
                    resolve(n*2);
                }, 1000);
            }else{
                reject(n);
            }
        })
    }

    function sumarDiez(n){
        return new Promise((resolve) =>{
            resolve(n+10);
        } )
    }
}

ej4y5();

function user(){
    return new Promise((resolve) => {
        let user = "usuario";
        resolve(user);
    });
}

function post(){
    return new Promise((resolve) => {
        let post = "post";
        resolve(post);
    });
}

function comentarios(){
    return new Promise((resolve) => {
        let coment = "comentario";
        resolve(coment);
    });
}

Promise.all([user(),post(),comentarios()]).then((res) => console.log("datos recibidos: ",res));

function delay(timer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Tiempo Completado, pasaron: ", timer/1000," segundos"))
        },timer )
    } )
}

delay(2000).then(() => delay(3000)).then(() => delay(5000));