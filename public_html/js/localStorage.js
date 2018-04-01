var d = document;

/*function olvidarIdioma()
{
    localStorage.removeItem('idioma');
    window.location.href = 'local-storage.html';
}*/

//d.querySelector('#btn-idioma').onclick = olvidarIdioma;
//d.querySelector('#btn-language').onclick = olvidarIdioma;*/

function irAlIdioma()
{
    var obtenerIdioma = localStorage.getItem('idioma');
    console.log(obtenerIdioma);
    
    if(obtenerIdioma !== null || 
            obtenerIdioma !== undefined) // !== diferente en valor y en tipo de dato
    {
        var idioma = JSON.parse(obtenerIdioma);
        
        console.log(idioma.id, idioma.url);
        
        window.location.href = idioma.url;
    }
}

function guardarIdioma(evento)
{
    //Con esto detenemos la acción que en ese momento el elemento 
    //que genera el evento se ejecute. Inhabilita la acción por defecto.
    evento.preventDefault();
    
    //Variable tipo objeto
    var objetoDatos = {
        id: evento.target.id,
        url: evento.target.href
    };
    
    console.log(objetoDatos);
    
    var objetoJSON = JSON.stringify(objetoDatos);
    
    console.log(objetoJSON);
    
    localStorage.setItem('idioma', objetoJSON);
    
    irAlIdioma();
    
}

function recordarIdioma()
{
    var en = d.querySelector('#en'),
        es = d.querySelector('#es');

    en.onclick = guardarIdioma;
    es.onclick = guardarIdioma;
    
    irAlIdioma();
}

window.onload = recordarIdioma;

