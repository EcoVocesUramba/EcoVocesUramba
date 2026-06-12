#   
<!DOCTYPE html>  
<html lang="es">  
  
<head>  
  
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
  
<title>Eco Voces Uramba</title>  
  
<link rel="preconnect" href="https://fonts.googleapis.com">  
  
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">  
  
<style>  
  
:root{  
    --verde:#00b894;  
    --verde2:#00d2a8;  
    --oscuro:#081f18;  
    --claro:#f4fff8;  
    --texto:#173b30;  
}  
  
*{  
    margin:0;  
    padding:0;  
    box-sizing:border-box;  
    scroll-behavior:smooth;  
}  
  
body{  
    font-family:'Poppins',sans-serif;  
    background:var(--claro);  
    color:var(--texto);  
    overflow-x:hidden;  
}  
  
/* SCROLL */  
  
::-webkit-scrollbar{  
    width:10px;  
}  
  
::-webkit-scrollbar-track{  
    background:#dceee6;  
}  
  
::-webkit-scrollbar-thumb{  
    background:var(--verde);  
    border-radius:20px;  
}  
  
/* NAVBAR */  
  
header{  
    position:fixed;  
    top:0;  
    left:0;  
    width:100%;  
    z-index:999;  
    background:rgba(0,0,0,.45);  
    backdrop-filter:blur(12px);  
    transition:.4s;  
}  
  
.navbar{  
    display:flex;  
    justify-content:space-between;  
    align-items:center;  
    padding:20px 8%;  
}  
  
.logo{  
    color:white;  
    font-size:30px;  
    font-weight:800;  
    letter-spacing:1px;  
}  
  
.logo span{  
    color:var(--verde2);  
}  
  
.nav-links{  
    display:flex;  
    gap:25px;  
}  
  
.nav-links a{  
    color:white;  
    text-decoration:none;  
    font-weight:500;  
    transition:.3s;  
    position:relative;  
}  
  
.nav-links a::after{  
    content:'';  
    position:absolute;  
    width:0%;  
    height:2px;  
    background:var(--verde2);  
    left:0;  
    bottom:-6px;  
    transition:.3s;  
}  
  
.nav-links a:hover::after{  
    width:100%;  
}  
  
/* HERO */  
  
.hero{  
    position:relative;  
    height:100vh;  
    display:flex;  
    justify-content:center;  
    align-items:center;  
    text-align:center;  
    overflow:hidden;  
}  
  
.hero::before{  
    content:'';  
    position:absolute;  
    inset:0;  
  
    background:  
    linear-gradient(  
        rgba(0,0,0,.45),  
        rgba(0,0,0,.65)  
    ),  
  
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');  
  
    background-size:cover;  
    background-position:center;  
  
    animation:heroZoom 18s linear infinite alternate;  
}  
  
@keyframes heroZoom{  
  
    from{  
        transform:scale(1);  
    }  
  
    to{  
        transform:scale(1.15);  
    }  
  
}  
  
.hero-content{  
    position:relative;  
    z-index:2;  
    max-width:900px;  
    color:white;  
    animation:fadeUp 1.5s ease;  
}  
  
.hero-content h1{  
    font-size:78px;  
    font-weight:800;  
    line-height:1.1;  
    margin-bottom:25px;  
}  
  
.hero-content p{  
    font-size:22px;  
    line-height:1.8;  
    margin-bottom:35px;  
}  
  
.hero-buttons{  
    display:flex;  
    justify-content:center;  
    gap:20px;  
    flex-wrap:wrap;  
}  
  
.btn{  
    display:inline-block;  
    padding:15px 38px;  
    border-radius:40px;  
    text-decoration:none;  
    font-weight:600;  
    transition:.4s;  
}  
  
.btn-primary{  
    background:var(--verde);  
    color:white;  
}  
  
.btn-primary:hover{  
    transform:translateY(-5px);  
    background:#009d7e;  
}  
  
.btn-outline{  
    border:2px solid white;  
    color:white;  
}  
  
.btn-outline:hover{  
    background:white;  
    color:black;  
}  
  
@keyframes fadeUp{  
  
    from{  
        opacity:0;  
        transform:translateY(40px);  
    }  
  
    to{  
        opacity:1;  
        transform:translateY(0);  
    }  
  
}  
  
section{  
    padding:110px 8%;  
}  
  
.titulo{  
    text-align:center;  
    margin-bottom:60px;  
}  
  
.titulo h2{  
    font-size:48px;  
    color:#0f766e;  
    margin-bottom:10px;  
}  
  
.titulo p{  
    color:#666;  
    max-width:700px;  
    margin:auto;  
}  
  
/* TARJETAS */  
  
.cards{  
    display:grid;  
    grid-template-columns:  
    repeat(auto-fit,minmax(300px,1fr));  
  
    gap:30px;  
}  
  
.card{  
    background:white;  
    border-radius:22px;  
    overflow:hidden;  
    box-shadow:0 10px 30px rgba(0,0,0,.08);  
    transition:.4s;  
}  
  
.card:hover{  
    transform:translateY(-12px);  
}  
  
.card img{  
    width:100%;  
    height:250px;  
    object-fit:cover;  
}  
  
.card-content{  
    padding:28px;  
}  
  
.card-content h3{  
    color:#0f766e;  
    margin-bottom:15px;  
    font-size:24px;  
}  
  
.card-content p{  
    line-height:1.8;  
}  
  
/* INFORMACIÓN */  
  
.info{  
    background:#dff6ed;  
}  
  
.info-container{  
    display:flex;  
    flex-wrap:wrap;  
    gap:50px;  
    align-items:center;  
}  
  
.info-text{  
    flex:1;  
}  
  
.info-text h2{  
    font-size:48px;  
    color:#14532d;  
    margin-bottom:20px;  
}  
  
.info-text p{  
    line-height:1.9;  
    margin-bottom:20px;  
}  
  
.info-img{  
    flex:1;  
}  
  
.info-img img{  
    width:100%;  
    border-radius:25px;  
    box-shadow:0 20px 40px rgba(0,0,0,.15);  
}  
  
/* ESTADÍSTICAS */  
  
.stats{  
    background:  
    linear-gradient(  
    rgba(0,0,0,.75),  
    rgba(0,0,0,.75)  
    ),  
    url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e');  
  
    background-size:cover;  
    background-position:center;  
  
    color:white;  
}  
  
.stats-grid{  
    display:grid;  
    grid-template-columns:  
    repeat(auto-fit,minmax(220px,1fr));  
  
    gap:30px;  
    text-align:center;  
}  
  
.stat{  
    background:rgba(255,255,255,.05);  
    backdrop-filter:blur(6px);  
    border-radius:20px;  
    padding:35px;  
}  
  
.stat h3{  
    font-size:58px;  
    color:#7fffd4;  
}  
  
.stat p{  
    margin-top:10px;  
}  
  
/* ACCIONES */  
  
.acciones{  
    background:white;  
}  
  
.accion-card{  
    text-align:center;  
    padding:40px 25px;  
}  
  
.icon{  
    font-size:60px;  
    margin-bottom:20px;  
}  
  
/* GALERÍA CINEMATOGRÁFICA */  
  
#galeria{  
    background:#081f18;  
}  
  
#galeria .titulo h2{  
    color:white;  
}  
  
#galeria .titulo p{  
    color:#ddd;  
}  
  
.slider{  
    position:relative;  
    width:100%;  
    height:85vh;  
    overflow:hidden;  
    border-radius:30px;  
    box-shadow:0 25px 60px rgba(0,0,0,.35);  
}  
  
.slide{  
    position:absolute;  
    inset:0;  
    opacity:0;  
    transition:opacity 1.6s ease;  
}  
  
.slide.active{  
    opacity:1;  
    z-index:2;  
}  
  
.slide img{  
    width:100%;  
    height:100%;  
    object-fit:cover;  
  
    animation:  
    kenburns 12s linear infinite alternate;  
}  
  
@keyframes kenburns{  
  
    from{  
        transform:scale(1);  
    }  
  
    to{  
        transform:scale(1.15);  
    }  
  
}  
  
.slide::after{  
    content:'';  
    position:absolute;  
    inset:0;  
  
    background:  
    linear-gradient(  
        to top,  
        rgba(0,0,0,.85),  
        rgba(0,0,0,.15)  
    );  
}  
  
.caption{  
    position:absolute;  
    left:60px;  
    bottom:90px;  
    color:white;  
    z-index:10;  
    max-width:650px;  
}  
  
.caption h3{  
    font-size:60px;  
    margin-bottom:15px;  
}  
  
.caption p{  
    font-size:20px;  
    line-height:1.8;  
}  
  
.prev,  
.next{  
    position:absolute;  
    top:50%;  
    transform:translateY(-50%);  
  
    width:65px;  
    height:65px;  
  
    border:none;  
    border-radius:50%;  
  
    background:rgba(0,0,0,.45);  
  
    color:white;  
    font-size:30px;  
  
    cursor:pointer;  
    z-index:20;  
  
    transition:.3s;  
}  
  
.prev:hover,  
.next:hover{  
    background:rgba(0,0,0,.85);  
}  
  
.prev{  
    left:20px;  
}  
  
.next{  
    right:20px;  
}  
  
.dots{  
    position:absolute;  
    bottom:30px;  
    left:50%;  
    transform:translateX(-50%);  
    display:flex;  
    gap:10px;  
    z-index:20;  
}  
  
.dot{  
    width:12px;  
    height:12px;  
    border-radius:50%;  
    background:rgba(255,255,255,.4);  
    cursor:pointer;  
    transition:.3s;  
}  
  
.dot.active{  
    width:40px;  
    border-radius:20px;  
    background:white;  
}  
  
/* CONTACTO */  
  
.contact{  
    background:#f4fff8;  
    text-align:center;  
}  
  
.contact form{  
    max-width:800px;  
    margin:auto;  
}  
  
.contact input,  
.contact textarea{  
    width:100%;  
    padding:18px;  
    margin:12px 0;  
    border:none;  
    border-radius:15px;  
    background:#eaf7f1;  
    font-size:16px;  
    font-family:'Poppins',sans-serif;  
}  
  
.contact button{  
    border:none;  
    cursor:pointer;  
}  
  
/* FOOTER */  
  
footer{  
    background:#08261d;  
    color:white;  
    text-align:center;  
    padding:35px;  
}  
  
/* RESPONSIVE */  
  
@media(max-width:992px){  
  
    .hero-content h1{  
        font-size:58px;  
    }  
  
    .caption h3{  
        font-size:45px;  
    }  
  
    .info-container{  
        flex-direction:column;  
    }  
  
}  
  
@media(max-width:768px){  
  
    .navbar{  
        flex-direction:column;  
        gap:15px;  
    }  
  
    .nav-links{  
        flex-wrap:wrap;  
        justify-content:center;  
    }  
  
    .hero-content h1{  
        font-size:42px;  
    }  
  
    .hero-content p{  
        font-size:18px;  
    }  
  
    .titulo h2{  
        font-size:35px;  
    }  
  
    .caption{  
        left:25px;  
        right:25px;  
        bottom:80px;  
    }  
  
    .caption h3{  
        font-size:32px;  
    }  
  
    .caption p{  
        font-size:16px;  
    }  
  
    .slider{  
        height:65vh;  
    }  
  
}  
  
</style>  
  
</head>  
  
<body>  
  
<header>  
  
    <div class="navbar">  
  
        <div class="logo">  
            Eco <span>Voces</span> Uramba  
        </div>  
  
        <div class="nav-links">  
  
            <a href="#inicio">Inicio</a>  
            <a href="#ecosistemas">Ecosistemas</a>  
            <a href="#biodiversidad">Biodiversidad</a>  
            <a href="#acciones">Acciones</a>  
            <a href="#galeria">Galería</a>  
            <a href="#contacto">Contacto</a>  
  
        </div>  
  
    </div>  
  
</header>  
  
<!-- HERO -->  
  
<section class="hero" id="inicio">  
  
    <div class="hero-content">  
  
        <h1>  
            Protejamos el Pacífico Colombiano  
        </h1>  
  
        <p>  
            Educación ambiental, biodiversidad y conciencia ecológica  
            para cuidar uno de los ecosistemas más importantes del planeta.  
        </p>  
  
        <div class="hero-buttons">  
  
            <a href="#ecosistemas"  
            class="btn btn-primary">  
  
                Explorar  
  
            </a>  
  
            <a href="#contacto"  
            class="btn btn-outline">  
  
                Únete  
  
            </a>  
  
        </div>  
  
    </div>  
  
</section>  
  
<!-- ECOSISTEMAS -->  
  
<section id="ecosistemas">  
  
    <div class="titulo">  
  
        <h2>Ecosistemas Naturales</h2>  
  
        <p>  
            Conoce la riqueza ambiental  
            del Pacífico colombiano.  
        </p>  
  
    </div>  
  
    <div class="cards">  
  
        <div class="card">  
  
            <img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1">  
  
            <div class="card-content">  
  
                <h3>🌳 Selvas Tropicales</h3>  
  
                <p>  
                    Bosques húmedos llenos de vida,  
                    hogar de miles de especies.  
                </p>  
  
            </div>  
  
        </div>  
  
        <div class="card">  
  
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">  
  
            <div class="card-content">  
  
                <h3>🌊 Manglares</h3>  
  
                <p>  
                    Ecosistemas costeros que protegen  
                    playas y fauna marina.  
                </p>  
  
            </div>  
  
        </div>  
  
        <div class="card">  
  
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98">  
  
            <div class="card-content">  
  
                <h3>🐋 Océano Pacífico</h3>  
  
                <p>  
                    Uno de los mares con mayor  
                    biodiversidad marina.  
                </p>  
  
            </div>  
  
        </div>  
  
    </div>  
  
</section>  
  
<!-- BIODIVERSIDAD -->  
  
<section  
class="info"  
id="biodiversidad">  
  
    <div class="info-container">  
  
        <div class="info-text">  
  
            <h2>  
                Biodiversidad Única  
            </h2>  
  
            <p>  
                El Pacífico colombiano es uno de los lugares  
                con mayor biodiversidad del planeta.  
            </p>  
  
            <p>  
                Habitan tortugas marinas, aves tropicales,  
                ranas exóticas y ballenas jorobadas.  
            </p>  
  
            <a href="#galeria"  
            class="btn btn-primary">  
  
                Descubrir  
  
            </a>  
  
        </div>  
  
        <div class="info-img">  
  
            <img src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759">  
  
        </div>  
  
    </div>  
  
</section>  
  
<!-- ESTADÍSTICAS -->  
  
<section class="stats">  
  
    <div class="titulo">  
  
        <h2 style="color:white;">  
            Impacto Ambiental  
        </h2>  
  
        <p style="color:#d8d8d8;">  
            Algunos datos sobre la riqueza natural del Pacífico colombiano.  
        </p>  
  
    </div>  
  
    <div class="stats-grid">  
  
        <div class="stat">  
            <h3>900+</h3>  
            <p>Especies de aves</p>  
        </div>  
  
        <div class="stat">  
            <h3>300+</h3>  
            <p>Especies marinas</p>  
        </div>  
  
        <div class="stat">  
            <h3>50%</h3>  
            <p>Oxígeno producido por ecosistemas marinos</p>  
        </div>  
  
        <div class="stat">  
            <h3>100%</h3>  
            <p>Compromiso ambiental</p>  
        </div>  
  
    </div>  
  
</section>  
  
<!-- ACCIONES -->  
  
<section  
class="acciones"  
id="acciones">  
  
    <div class="titulo">  
  
        <h2>¿Cómo Podemos Ayudar?</h2>  
  
        <p>  
            Pequeñas acciones generan grandes cambios.  
        </p>  
  
    </div>  
  
    <div class="cards">  
  
        <div class="card accion-card">  
  
            <div class="icon">  
                ♻️  
            </div>  
  
            <h3>  
                Reciclar  
            </h3>  
  
            <p>  
                Separar correctamente los residuos  
                ayuda a disminuir la contaminación.  
            </p>  
  
        </div>  
  
        <div class="card accion-card">  
  
            <div class="icon">  
                🌊  
            </div>  
  
            <h3>  
                Cuidar los océanos  
            </h3>  
  
            <p>  
                Evitar arrojar basura en playas y ríos  
                protege la fauna marina.  
            </p>  
  
        </div>  
  
        <div class="card accion-card">  
  
            <div class="icon">  
                🌱  
            </div>  
  
            <h3>  
                Reforestar  
            </h3>  
  
            <p>  
                Sembrar árboles ayuda a mejorar  
                la calidad del aire.  
            </p>  
  
        </div>  
  
    </div>  
  
</section>  
  
<!-- GALERÍA CINEMATOGRÁFICA -->  
  
<section id="galeria">  
  
    <div class="titulo">  
  
        <h2>  
            Galería del Pacífico  
        </h2>  
  
        <p>  
            Explora la biodiversidad y los paisajes  
            más impresionantes de la región.  
        </p>  
  
    </div>  
  
    <div class="slider">  
  
        <div class="slide active">  
  
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb">  
  
            <div class="caption">  
  
                <h3>  
                    Selvas Tropicales  
                </h3>  
  
                <p>  
                    Uno de los ecosistemas más biodiversos del planeta.  
                </p>  
  
            </div>  
  
        </div>  
  
        <div class="slide">  
  
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">  
  
            <div class="caption">  
  
                <h3>  
                    Costas del Pacífico  
                </h3>  
  
                <p>  
                    Playas vírgenes rodeadas de naturaleza.  
                </p>  
  
            </div>  
  
        </div>  
  
        <div class="slide">  
  
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e">  
  
            <div class="caption">  
  
                <h3>  
                    Reservas Naturales  
                </h3>  
  
                <p>  
                    Protección de especies únicas y ecosistemas estratégicos.  
                </p>  
  
            </div>  
  
        </div>  
  
        <div class="slide">  
  
            <img src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759">  
  
            <div class="caption">  
  
                <h3>  
                    Vida Silvestre  
                </h3>  
  
                <p>  
                    Fauna y flora que hacen único al Pacífico colombiano.  
                </p>  
  
            </div>  
  
        </div>  
  
        <div class="slide">  
  
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e">  
  
            <div class="caption">  
  
                <h3>  
                    Ríos y Cascadas  
                </h3>  
  
                <p>  
                    Fuentes de vida para miles de especies.  
                </p>  
  
            </div>  
  
        </div>  
  
        <button class="prev">  
            &#10094;  
        </button>  
  
        <button class="next">  
            &#10095;  
        </button>  
  
        <div class="dots"></div>  
  
    </div>  
  
</section>  
  
<!-- CONTACTO -->  
  
<section  
class="contact"  
id="contacto">  
  
    <div class="titulo">  
  
        <h2>  
            Contáctanos  
        </h2>  
  
        <p>  
            Únete a nuestra comunidad ambiental.  
        </p>  
  
    </div>  
  
    <form>  
  
        <input  
        type="text"  
        placeholder="Nombre completo">  
  
        <input  
        type="email"  
        placeholder="Correo electrónico">  
  
        <textarea  
        rows="6"  
        placeholder="Escribe tu mensaje"></textarea>  
  
        <button  
        class="btn btn-primary">  
  
            Enviar Mensaje  
  
        </button>  
  
    </form>  
  
</section>  
  
<!-- FOOTER -->  
  
<footer>  
  
    <h3>  
        Eco Voces Uramba  
    </h3>  
  
    <br>  
  
    <p>  
        Educación ambiental, biodiversidad y conservación  
        del Pacífico colombiano.  
    </p>  
  
    <br>  
  
    <p>  
        © 2026 Todos los derechos reservados  
    </p>  
  
</footer>  
  
<!-- JAVASCRIPT DEL CARRUSEL -->  
  
<script>  
  
const slides =  
document.querySelectorAll(".slide");  
  
const dotsContainer =  
document.querySelector(".dots");  
  
let current = 0;  
  
let autoSlide;  
  
/* CREAR INDICADORES */  
  
slides.forEach((slide,index)=>{  
  
    const dot =  
    document.createElement("div");  
  
    dot.classList.add("dot");  
  
    if(index === 0){  
  
        dot.classList.add("active");  
  
    }  
  
    dot.addEventListener("click",()=>{  
  
        showSlide(index);  
  
        restartAuto();  
  
    });  
  
    dotsContainer.appendChild(dot);  
  
});  
  
const dots =  
document.querySelectorAll(".dot");  
  
/* MOSTRAR SLIDE */  
  
function showSlide(index){  
  
    slides[current]  
    .classList.remove("active");  
  
    dots[current]  
    .classList.remove("active");  
  
    current = index;  
  
    slides[current]  
    .classList.add("active");  
  
    dots[current]  
    .classList.add("active");  
  
}  
  
/* SIGUIENTE */  
  
function nextSlide(){  
  
    let next =  
    current + 1;  
  
    if(next >= slides.length){  
  
        next = 0;  
  
    }  
  
    showSlide(next);  
  
}  
  
/* ANTERIOR */  
  
function prevSlide(){  
  
    let prev =  
    current - 1;  
  
    if(prev < 0){  
  
        prev =  
        slides.length - 1;  
  
    }  
  
    showSlide(prev);  
  
}  
  
/* BOTONES */  
  
document  
.querySelector(".next")  
.addEventListener("click",()=>{  
  
    nextSlide();  
  
    restartAuto();  
  
});  
  
document  
.querySelector(".prev")  
.addEventListener("click",()=>{  
  
    prevSlide();  
  
    restartAuto();  
  
});  
  
/* AUTOPLAY */  
  
function startAuto(){  
  
    autoSlide =  
    setInterval(()=>{  
  
        nextSlide();  
  
    },5000);  
  
}  
  
function restartAuto(){  
  
    clearInterval(autoSlide);  
  
    startAuto();  
  
}  
  
startAuto();  
  
/* EFECTO NAVBAR */  
  
window.addEventListener("scroll",()=>{  
  
    const header =  
    document.querySelector("header");  
  
    if(window.scrollY > 100){  
  
        header.style.background =  
        "rgba(0,0,0,.85)";  
  
    }else{  
  
        header.style.background =  
        "rgba(0,0,0,.45)";  
  
    }  
  
});  
  
</script>  
  
</body>  
</html>  
