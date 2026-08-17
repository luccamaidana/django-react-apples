# Django + React Apples

## Backend (Django)

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

## Frontend (React + Vite)

1. Entrar a la carpeta del frontend:
   cd "react+django"

2. Instalar dependencias:
   npm install

3. Correr el servidor de desarrollo:
   npm run dev