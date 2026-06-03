# Contexto del proyecto CV

## Objetivo real
Crear un sitio de portfolio/CV personal de Pedro Mendoza para publicar en GitHub Pages.

El objetivo principal no es que el asistente construya la web completa, sino que el usuario aprenda a hacerla. El asistente debe actuar como tutor: explicar, proponer pasos chicos, revisar cambios y ayudar a destrabar problemas.

El usuario quiere aprender principalmente Python, por lo que el proyecto debe incluir una parte frontend visible y una parte backend o automatizacion pequena en Python.

## Forma de trabajo acordada
- El usuario escribe la mayor parte del codigo.
- El asistente guia, explica y revisa.
- Evitar copiar una plantilla completa.
- Trabajar en pasos pequenos, de a un tema por vez.
- Antes de implementar mucho codigo, explicar que se esta haciendo y por que.
- Priorizar aprendizaje practico por encima de velocidad.

## Referencias actuales del repo
- `portfolio/`: proyecto Astro real creado por el usuario.
- `mockups/`: contiene el mockup elegido por el usuario.
  - Mockup elegido: `mockups/ig_0207e7036219d786016a18e15d23d881918590971984e19519.png`
- `mockups/notuse/`: contiene una referencia que no es el diseno principal, pero tiene una parte que al usuario le gusto y podria retomarse mas adelante.
- `Personal_Website-main/`: carpeta descargada de referencia.
  - No representa el diseno deseado.
  - Tiene contenido de Pablo Rodriguez, que era parte de la guia/referencia anterior y no corresponde a la identidad del portfolio final.
  - Puede servir para mirar ideas puntuales de estructura, animaciones o componentes.
  - Es candidata a borrarse mas adelante si deja de aportar.

## Direccion de diseno
- Basarse principalmente en el mockup elegido dentro de `mockups/`.
- Evitar tomar el diseno de `Personal_Website-main/` como base.
- El sitio debe sentirse como portfolio personal profesional, no como copia de una plantilla.
- La estetica terminal puede existir si encaja con el mockup, pero no debe dominar todo por defecto.

## Stack validado hasta ahora
Lo que esta confirmado por el contexto:
- Frontend para GitHub Pages.
- Stack elegido para el frontend: Astro.
- Estilos globales en `portfolio/src/styles/global.css`.
- Datos separados en JSON dentro de `portfolio/src/data/`.
- Python como eje de aprendizaje.
- Mini backend o automatizacion pequena para obtener/generar la informacion del CV.

Lo que aparece como referencia, pero no es la decision final:
- `Personal_Website-main/` usa React + Vite + TypeScript + Tailwind.
- Ese stack puede servir como inspiracion, pero no obliga al proyecto final.

Opcion elegida para aprender sin abrumarse:
1. Frontend con Astro, empezando por HTML/CSS dentro de componentes `.astro`.
2. Datos del CV en archivos JSON separados por dominio:
   - `profile.json`
   - `skills.json`
   - `projects.json`
   - `experience.json`
   - `hobbies.json`
3. Python para validar/generar contenido o servir datos:
   - primera etapa: script `build_cv.py` que lee `cv.json` y genera parte del sitio;
   - etapa posterior: mini API con FastAPI para practicar backend.
4. Si el usuario quiere subir dificultad despues: agregar islas interactivas con JavaScript o algun framework puntual.

## Estado actual
- Proyecto Astro creado en `portfolio/`.
- Pagina principal: `portfolio/src/pages/index.astro`.
- CSS global movido a `portfolio/src/styles/global.css`.
- Secciones existentes:
  - `home`
  - `skills`
  - `projects`
  - `experience`
  - `about`
  - `hobbies`
  - `contact`
- `skills`, `projects`, `experience`, `profile` y `hobbies` ya se renderizan desde JSON con `.map()` donde aplica.
- El build de Astro paso correctamente despues de mover CSS y separar datos.

## Brechas visuales contra el mockup elegido
Todavia faltan capas visuales importantes para que se parezca mas al mockup:
- Hero en dos columnas: texto a la izquierda y ventana terminal/neofetch a la derecha.
- Botones/CTA en el hero: por ejemplo `Ver mi trabajo` y `Descargar CV`.
- Cards de skills con iconos o pequenos simbolos visuales.
- Cards de proyectos con topbar tipo terminal y, mas adelante, preview/imagen.
- Hobbies con imagenes o textura propia estilo `crew log`/aventura.
- Contact con iconos por linea.
- Fondo global con grilla/scanlines/textura sutil.
- Detalles terminal: cursores, separadores, prompts consistentes y pequenos bloques de estado.

## Proxima prioridad visual
Mejorar primero el hero, porque es la mayor diferencia actual contra el mockup:
1. Convertir `#home` en layout de dos columnas.
2. Crear bloque izquierdo con nombre, rol, descripcion y CTAs.
3. Crear bloque derecho `.terminal-card` tipo `neofetch` con datos del perfil.
4. Mantener todo simple y editable antes de agregar animaciones.

## Roadmap propuesto
1. Revisar el mockup elegido y dividirlo en secciones: hero, sobre mi, skills, experiencia, proyectos, contacto.
2. Crear una version estatica simple en Astro con HTML/CSS basada en el mockup.
3. Separar el contenido del CV en JSON por dominio.
4. Crear un script Python que lea los JSON y valide/genera HTML o datos consumibles por el frontend.
5. Agregar interactividad pequena con JavaScript.
6. Agregar animaciones de manera gradual, inspirandose si hace falta en `Personal_Website-main/`.
7. Preparar deploy en GitHub Pages.
8. Como etapa avanzada, crear un mini backend con FastAPI para servir la informacion del CV.

## Siguiente sesion recomendada
No empezar borrando o rehaciendo todo.

Primero:
1. Mejorar el hero para acercarlo al mockup.
2. Revisar responsive despues del cambio del hero.
3. Luego agregar iconos/imagenes a skills, projects, hobbies y contact.

Recomendacion actual del asistente: seguir con Astro + JSON + CSS, y despues introducir Python como validador de datos.


## Ultima lectura

Leí CONTEXTO_CV.md (line 1) y comparé contra el estado actual de /home/drope/personal/portfolio. No modifiqué nada.

Avanzado

Stack elegido cumplido: Astro + CSS global + JSON por dominio.
home ya tiene layout de dos columnas, CTAs y terminal/neofetch.
skills ya carga desde JSON e incluye iconos.
projects ya carga desde JSON, tiene cards con topbar e imagen placeholder.
experience avanzó bastante más que el plan: timeline, dots, conectores, separador interno y highlights tipo tree.
certifications fue agregado aunque no estaba en el estado inicial: badges, cards tipo credencial, desplegable de verificación.
about fue rediseñado como profile/config y toma datos desde profile.json.
hobbies ya tiene textura/fondo propio, layout disruptivo y carga dinámica desde JSON.
contact ya tiene canales, formulario, preview JSON vivo y status bar.
Menú/header también avanzó: breadcrumb, nav desktop y menú mobile compacto.
Parcial

Contenido real del CV: la estructura está, pero varios datos siguen como placeholder.
projects.json: hay Proyecto 1/2/3, URLs repetidas a k8co y placeholders de imagen.
experience.json: hay empresas genéricas tipo Tech Solutions, Innovatech, Digital Services y una experiencia duplicada.
certifications.json: badges están, pero verificationCode sigue PENDING y URLs son example.com.
hobbies.json: hay bloques de prueba Compania2, Compania3; conviene limpiar cuando cierres contenido.
Responsive: se hicieron ajustes, pero falta una revisión completa sección por sección en mobile real.
Pendiente Del Plan Original

Python todavía no aparece implementado. No encontré build_cv.py, cv.json, validador ni mini automatización.
Falta la parte de aprendizaje Python planteada en el contexto.
Falta preparar o revisar deploy final en GitHub Pages.
Falta decidir si cv/portfolio sigue siendo copia útil o si se ignora/limpia.
Falta reemplazar placeholders por contenido definitivo y assets reales.
Diferencia Importante
El contexto decía que la idea era que vos escribieras la mayor parte del código y yo actuara más como tutor. En la práctica avanzamos mucho más en modo implementación guiada. Está bien si querías momentum visual, pero si volvemos al objetivo de aprendizaje, el próximo bloque conviene hacerlo más paso a paso contigo, especialmente Python y contenido.

Mi lectura: visualmente el portfolio está muy avanzado. Lo que falta ya no es “diseñar más”, sino cerrar contenido real, validar responsive y retomar la parte Python/automatización del plan.
