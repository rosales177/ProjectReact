export const helpHttp = () =>{
    const customFetch = (endPoint,options) =>{
        //cabezeras por defecto
        const defaultHeader = { accept: "application/json" };

        //controlador para abortar petision que no responde
        const controller = new AbortController();

        //agregar a las opciones el controlador
        options.signal = controller.signal;

        //Asignar perticion por defecto en caso el valor de methos sea vacio
        options.method = options.method || "GET";

        //Conbinar las cabezeras por defecto y las que el usuario ingrese
        options.headers = options.headers? {...defaultHeader,...options.headers} : defaultHeader;
        
        //Parceo de datos de json a cadena si la peticion es diferente a get
        options.body = JSON.stringify(options.body) || false ;

        //Si la opcion de body es falso se eliminara de las opciones
        if(!options.body) delete options.body;

        console.log(options);

        //Se establece un tiempo limite de la peticion antes de bortar
        setTimeout(() => {
            controller.abort();
        }, 3000);


        //Se realiza la peticion fetch
        return fetch(endPoint, options)
         .then(res => 
            //Si es correcto retorna json
            res.ok?res.json()
            //Caso contrario retorna un json con el error
            :Promise.reject({
                err:true,
                status: res.status || '000',
                statusText: res.statusText || 'Ocurrio un error',
            }))
         .catch((err) => err);
    }

    //Method GET
    const get = (url,options = {}) => customFetch(url,options);
    
    //Method POST
    const post = (url,options = {}) =>{
        options.method = 'POST';
        return customFetch(url,options);
    }

    //Method PUT
    const put = (url,options = {}) =>{
        options.method = 'PUT';
        return customFetch(url,options);
    }

    //Method DELETE
    const del = (url,options = {}) =>{
        options.method = 'DELETE';
        return customFetch(url,options);
    }

    //Retorno de metodos GET,POST,PUT,DELETED
    return{get,post,put,del};

}