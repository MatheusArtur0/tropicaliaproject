---
description: Code model to have initial example for the project (carroussel bar)
---

# Code model - galeria carrossel



\<!DOCTYPE html>

\<html>

\<head>

&#x20;         \<title> Galeria Carrossel \</title>

&#x20;         \<! -- arquivos CSS e javascript do bootstrap>

&#x20;         \<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

&#x20;         \<script scr="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery/jquery.min.js">\</script>

&#x20;         \<script src="https://cdnjs.cloudfare.com/ajax/libs/popper.js/1.16/umd/popper.min.js">\</script>

&#x20;          \<script src="https:// maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'>\</script>

\</head>

\<body>



\<div class= "container">

&#x20;  \<h2>Galeria Carrossel\</h2>

&#x20;  \<div id="myCarousel"class="carouselslide" data-ride="carousel">

&#x20;  \<! -- Indicadores (slides) -->]

&#x20;  \<ul class="carousel-indicators">

&#x20;    \<li data-target="#myCarousel"data-slide-to="0"class="active">\</li>

&#x20;     \<li data-target="#mycarousel#data-slide-to="1">\</li>

&#x20;      \<li data-target="#mycarousel#data-slide-to="2">\</li>

\</ul>



&#x20;   \<!--slides-->

&#x20;   \<div class="carousel-inner">

&#x20;     \<div class="carousel-itemactive">

&#x20;     \<img src="imagem1.jpg" alt="imagem 1">

&#x20;     \</div>

&#x20;     \<div class="carousel-item">

&#x20;          \<img src="imagem2.jpg" alt="imagem 2">

&#x20;      \</div>

&#x20;      \<div class="carousel-item">

&#x20;      \<img src="imagem3.jpg" alt="imagem3">

&#x20;      \</div>

&#x20;   \</div>



\<!-- Controles de navegação -->

\<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">

&#x20;       \<span class="carousel-control-prev-icon">\</span>

&#x20;       \</a>

&#x20;       \<a class="carousel-control-next" href="#mycarousel" data-slide="next">

&#x20;        \<span class="carousel-control-next-icon">\</span>

&#x20;        \</a>

&#x20;      \</div>

&#x20;    \</div>



\</body>

\</html>
