$(document).ready(function () {

    // SLIDER

    if (window.location.href.indexOf('index') > -1) {  // Este sirve para cargar el javascript tambien en el about.html
        $('.galeria-slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    };



    // POSTS
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: "Titulo 1",
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),  // Libreria moment
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mattis dolor ultricies cursus quam, at vulputate lorem scelerisque eget.Quisque justo diam, pellentesque eget nulla a, fringilla semper magna.Etiam non sapien est.Cras leo sem, commodo qu malesuada non, placerat eget elit.Nulla '
            },
            {
                title: "Titulo 2",
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mattis dolor ultricies cursus quam, at vulputate lorem scelerisque eget.Quisque justo diam, pellentesque eget nulla a, fringilla semper magna.Etiam non sapien est.Cras leo sem, commodo qu malesuada non, placerat eget elit.Nulla '
            }, {
                title: "Titulo 3",
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mattis dolor ultricies cursus quam, at vulputate lorem scelerisque eget.Quisque justo diam, pellentesque eget nulla a, fringilla semper magna.Etiam non sapien est.Cras leo sem, commodo qu malesuada non, placerat eget elit.Nulla '
            }, {
                title: "Titulo 4",
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mattis dolor ultricies cursus quam, at vulputate lorem scelerisque eget.Quisque justo diam, pellentesque eget nulla a, fringilla semper magna.Etiam non sapien est.Cras leo sem, commodo qu malesuada non, placerat eget elit.Nulla '
            },
            {
                title: "Titulo 5",
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mattis dolor ultricies cursus quam, at vulputate lorem scelerisque eget.Quisque justo diam, pellentesque eget nulla a, fringilla semper magna.Etiam non sapien est.Cras leo sem, commodo qu malesuada non, placerat eget elit.Nulla '
            },
            {
                title: "Titulo 6",
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mattis dolor ultricies cursus quam, at vulputate lorem scelerisque eget.Quisque justo diam, pellentesque eget nulla a, fringilla semper magna.Etiam non sapien est.Cras leo sem, commodo qu malesuada non, placerat eget elit.Nulla '
            }
        ]


        posts.forEach((item, index) => {
            var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                    </article>`;



            $('#posts').append(post);  // Añade los articulos

        });
    };


    // CAMBIAR TEMA
    var theme = $('#theme');

    $('#to-green').click(function () {           // Verde
        theme.attr('href', 'css/green.css')
    });

    $('#to-red').click(function () {           // Rojo
        theme.attr('href', 'css/red.css')
    });

    $('#to-blue').click(function () {           // Blue
        theme.attr('href', 'css/blue.css')
    });



    //  SCROLL ARRIBA
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });



    //  LOGIN (falso)
    $('#login form').submit(function () {
        var form_name = $('#form_name').val();    //  Recojer los valores de los input
        var form_email = $('#form_email').val();
        var form_password = $('#form_password').val();

        localStorage.setItem("form_name", form_name);   //  Guardar los valores en el local storage
        localStorage.setItem("form_email", form_email);
        localStorage.setItem("form_password", form_password);
    });

    var form_name = localStorage.getItem("form_name");   //  Sacar los valores desde el local storage
    var form_email = localStorage.getItem("form_email");
    var form_password = localStorage.getItem("form_password");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $('#about p');

        about_parrafo.html("<br/><strong>Bienvenido " + form_name + "</strong>  <br/>");
        about_parrafo.append('<a href="#" id="logout">Cerrar session</a>');

        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    };


    // + + + + SOBRE MI + + + +
    //  ACORDEON
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    };



    // + + + + RELOJ + + + +
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format('hh:mm:ss ');

            $('#reloj').html(reloj);
        }, 1000)

    }





    //  + + + + CONTACTO + + + +
    // Validacion Formulario
    if (window.location.href.indexOf('contact') > -1) {

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });


}



});