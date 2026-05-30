# Project Image Requirements

Usa esta guia cuando quieras generar o preparar imagenes para las cards de proyectos.

## Tamano

- Formato visual: 16:9 horizontal.
- Recomendado para generar: 1600 x 900 px.
- Alternativa liviana: 1200 x 675 px.
- Evita imagenes verticales porque se van a recortar dentro de la card.

## Formato

- Preferido: `.webp` para imagen final optimizada.
- Aceptable: `.png` si es screenshot de UI con texto fino.
- Usa `.jpg` solo si la imagen es mas fotografica.
- Peso recomendado: menos de 400 KB por imagen.

## Ubicacion

Guarda las imagenes en:

```txt
portfolio/public/assets/projects/
```

Y referencialas en `portfolio/src/data/projects.json` asi:

```json
{
  "image": "/assets/projects/k8co-preview.webp"
}
```

## Nombres

Usa nombres simples en kebab-case:

```txt
k8co-preview.webp
browser-docker-preview.webp
terraform-aws-preview.webp
```

## Estilo

- Dark terminal/dashboard style.
- Fondo oscuro con detalles neon cyan, green o blue.
- Puede tener marco de ventana, barras de terminal, paneles, graficos o lineas de codigo.
- Evita logos de marcas si no tienes derechos de uso.
- Evita texto muy pequeno o demasiado realista; en cards chicas no se lee bien.
- Sin marcas de agua.

## Prompt Base

```txt
Create a 16:9 project preview image for a developer portfolio card.
Style: dark terminal dashboard, polished UI mockup, neon cyan and green accents.
Composition: terminal window frame with three small window dots, abstract code lines, small infrastructure/pipeline panels, network nodes.
No readable text, no logos, no watermark.
Use a clean high-contrast layout that still works as a small thumbnail.
```

## Placeholder Actual

Por ahora todas las cards usan:

```txt
/assets/projects/project-placeholder-fullbleed.png
```

La imagen debe ocupar todo el lienzo. Evita generar una captura pequena flotando sobre un fondo oscuro, porque en la card se ve como un cuadro dentro de otro cuadro.

16:9 project thumbnail, zoomed-in crop of a dark dashboard UI.
The interface should fill the whole image edge-to-edge.
No outer browser frame, no terminal window border, no large padding.
Show only the inner app/dashboard content: panels, charts, code blocks, pipeline nodes.
Dark background, neon cyan and green accents, no readable text, no logos.
