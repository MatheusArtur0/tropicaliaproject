---
description: Code model to have initial example for the project (secondary bar)
---

# Code model - barra secundária

Barra secundária: menu de tipo de flores (interativo), barra de vendas (redirecionamento), barra de highlights (redirecionamento), barra de favorite (redirecionamento), barra "seu carrinho".



\<!DOCTYPE html>

\<html>

\<head>

&#x20;          \<title>Título\</title>

&#x20;          \<style>

&#x20;                     /\*Estilos CSS para a barra secundária \*/

&#x20;          .sub-bar  {

&#x20;                     background-color:  #666;

&#x20;                     color: #fff;

&#x20;                     display: flex;

&#x20;                     justify-content:

&#x20;                     space-between;

&#x20;                     padding: 10px;

&#x20;         }

&#x20;          .sub-bar a {

&#x20;                     color: #fff&#x20;

&#x20;                     text-decoration: none;

&#x20;                     margin:  0 10px;

&#x20;        }



&#x20;   \</style>

\</head>

\<body>



\<div style="display: flex;

justify-content: space-between; align-items: center; background-color: #333; color: #fff; padding: 10px;">



\<! -- Barra Adicional -->

\<div class="sub-bar">

&#x20;   \<div>

&#x20;           \<! -- menu de tipos de flores (interativo)-->

&#x20;           \<a href="#">Tipos de Flores\</>

&#x20;\</div>

\<div>

&#x20;           \<! -- Barra de highlights (redirecionamento) -->

&#x20;           \<a href="#">Aba de Vendas\</a>

&#x20;           \</div>

&#x20;           \<div>

&#x20;                    \<! -- Barra de favoritos (redirecionamento) -->

&#x20;           \<a href="#"?Favoritos\</a>

&#x20;           \</div>

&#x20;           \<div>

&#x20;                    \<! -- Barra "seu carrinho"(redirecionamento)-->

&#x20;            \<a href="#"Seu carrinho \</a>

&#x20;           \</div>

\</div>











