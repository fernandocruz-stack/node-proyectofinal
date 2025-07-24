# Proyecto Final Integrador Node JS API RESTful  
### Autor: Fernando Cruz Palma  
### Agencia Habilidades para el Futuro

Esta API RESTful fue creada para la gestión de productos en una tienda online, desarrollada con Node.js, Express, Firebase Firestore y autenticación JWT.

---

## 📋 Descripción

Este proyecto consiste en una API que permite gestionar productos con operaciones CRUD (crear, leer, actualizar y eliminar).  
Se implementa seguridad mediante autenticación con JWT para controlar el acceso a las rutas.  
Los datos se almacenan y recuperan desde Firestore, base de datos en la nube de Firebase.  

---

## 🛠 Tecnologías utilizadas

- Node.js  
- Express.js  
- Firebase Firestore  
- JSON Web Tokens (JWT)  
- dotenv (variables de entorno)  
- CORS  

---

## 📁 Estructura del proyecto
```
    proyecto-base/
    ├── index.js
    ├── .env
    ├── package.json
    ├── /controllers
    │ ├── auth.controllers.js
    │ └── productos.controllers.js
    ├── /routes
    │ ├── auth.routes.js
    │ └── productos.routes.js
    ├── /models
    │ └── productos.models.js
    ├── /middlewares
    │ ├── auth.authentication.js
    │ └── manejoDeErrores.js
    ├── /utils
    │ └── token-generator.js
    └── /firebase
    └── firebase.config.js
```

---

## 🚀 Instalación y configuración

1. **Clonar el repositorio**  
   bash
   git clone https://github.com/fernandocruz-stack/node-proyectofinal
   cd proyecto-final-ecommerce-fernandocruz-palma

2. **Instalar dependencias**
    npm install

3. **Crear archivo `.env` con las siguientes variables:**
```
    JWT_SECRET_KEY=tu_clave_secreta_jwt
    FIREBASE_API_KEY=tu_api_key_firebase
    FIREBASE_AUTH_DOMAIN=tu_auth_domain_firebase
    FIREBASE_PROJECT_ID=tu_project_id_firebase
    FIREBASE_STORAGE_BUCKET=tu_storage_bucket_firebase
    FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
    FIREBASE_APP_ID=tu_app_id
```
4. **Ejecutar el servidor** 
    npm start

| Método | Ruta             | Descripción                        | Autenticación |
| ------ | ---------------- | ---------------------------------- | ------------- |
| POST   | `/auth/login`    | Iniciar sesión y obtener token JWT | ❌ No         |
| GET    | `/productos`     | Obtener todos los productos        | 🔐 Sí         |
| GET    | `/productos/:id` | Obtener producto por ID            | 🔐 Sí         |
| POST   | `/productos`     | Crear un producto nuevo            | 🔐 Sí         |
| PUT    | `/productos/:id` | Editar un producto existente      | 🔐 Sí         |
| DELETE | `/productos/:id` | Eliminar un producto               | 🔐 Sí         |

Ejemplo para metodo GET /productos

GET http://localhost:3000/api/productos/NPVP2U5SrFuF7G0bIkPZ


**🧪 Cómo autenticar con Postman**

1.  Enviar una petición POST a:
http://localhost:3000/auth/login

2.  En la pestaña Body, seleccionar raw y JSON, y colocar:
{
  "email": "user@email.com",
  "password": "strongPass123"
}

3. En la respuesta recibirás un token JWT.

4. Para acceder a las rutas protegidas, agregá el token en la pestaña Headers:
    Key: Authorization
    Value: Bearer <tu_token_aquí>

✅ ¡Listo! Ahora podés usar los endpoints protegidos con GET, POST, PUT o DELETE sobre /productos.