# Django + React Apples

## Preview
![alt text](/img/image.png)
![alt text](/img/image-1.png)

## Acerca del proyecto

Aplicación full-stack que muestra un catálogo de manzanas (nombre, color e imagen) 
consumido desde una API REST de Django y renderizado en un frontend de React con 
animaciones.

## Stack

**Backend**
- Django 5.2
- SQLite
- django-cors-headers (para permitir peticiones desde el frontend)
- python-decouple (variables de entorno)

**Frontend**
- React 19 + TypeScript
- Vite 8
- Tailwind CSS (vía CDN)
- Axios (consumo de la API)
- Framer Motion (animaciones)

## Funcionalidad

- El backend expone un endpoint (`GET /apples/`) que devuelve un listado de manzanas 
  en formato JSON, cada una con nombre, color y URL de imagen.
- El frontend consume ese endpoint y muestra las manzanas en una grilla de tarjetas 
  con animaciones de entrada.
- Al hacer click en una tarjeta, se abre un modal ampliado con más detalle de la 
  manzana seleccionada.

## Instalación

### Backend (Django)

1. Crear y activar entorno virtual:
   python -m venv env
   source env/bin/activate   # Linux/Mac
   env\Scripts\activate      # Windows

2. Instalar dependencias:
   pip install -r requirements.txt

3. Crear archivo `.env` en la raíz (basado en `.env.example`) con tu propia SECRET_KEY

4. Migrar la base de datos:
   python manage.py migrate

5. Correr el servidor:
   python manage.py runserver

### Frontend (React + Vite)

1. Entrar a la carpeta del frontend:
   cd "react+django"

2. Instalar dependencias:
   npm install

3. Correr el servidor de desarrollo:
   npm run dev

> **Nota:** Tailwind CSS se carga vía CDN (`index.html`), no como dependencia de npm. 
> Se necesita conexión a internet para que los estilos carguen correctamente.