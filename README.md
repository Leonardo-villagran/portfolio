## React Portfolio Website

Este es un ejemplo básico de una aplicación de portafolio utilizando React y React Router para la navegación. La aplicación incluye una barra de navegación, secciones para la página de inicio, sobre mí, habilidades, educación, experiencias, proyectos y contacto.

## Índice

- [Instrucciones de Uso](#instrucciones-de-uso)
    - [1. Clonar el Repositorio](#1-clonar-el-repositorio)
    - [2. Instalar Dependencias](#2-instalar-dependencias)
    - [3. Iniciar la Aplicación](#3-iniciar-la-aplicación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración de las Rutas](#configuración-de-las-rutas)
- [Dependencias Utilizadas](#dependencias-utilizadas)
- [Personalización](#personalización)
- [Configuración del sistema de contacto](#configuración-del-sistema-de-contacto)


### Instrucciones de Uso

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local.

#### 1. Clonar el Repositorio

```bash
git clone https://tu-repositorio.git
cd tu-repositorio
```

#### 2. Instalar Dependencias

```bash
npm install
```

#### 3. Iniciar la Aplicación

```bash
npm run dev
```

La aplicación se ejecutará en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para verla.

### Estructura del Proyecto

- **`src/views/`**: Contiene los componentes de cada sección (Home, About, Skills, Education, Experiences, Projects, Contact).
- **`src/views/Navigation.js`**: Componente de barra de navegación.
- **`src/App.js`**: Archivo principal que configura las rutas y utiliza React Router.

### Configuración de las Rutas

El archivo `src/App.js` utiliza React Router para manejar las rutas de la aplicación. A continuación, se describen las rutas disponibles:

- `/portfolio/`: Página de inicio.
- `/portfolio/about`: Página "Sobre Mí".
- `/portfolio/skills`: Página de habilidades.
- `/portfolio/education`: Página de educación.
- `/portfolio/experiences`: Página de experiencias.
- `/portfolio/projects`: Página de proyectos.
- `/portfolio/contact`: Página de contacto.

Puedes personalizar estas rutas según tus necesidades y agregar más rutas según sea necesario.

### Dependencias Utilizadas

- **`bootstrap`**: Se utiliza para estilos básicos. Importamos el archivo de estilo de Bootstrap en el archivo `src/App.js`.

### Personalización

Si deseas personalizar y adaptar este portafolio para tu propio uso, sigue estos pasos:

**Modificar Contenidos:**

   - Todos los contenidos de las secciones (Inicio, Sobre Mí, Habilidades, Educación, Experiencias, Proyectos, Contacto) están almacenados en archivos JSON dentro de la carpeta `public/json/`.

   - Puedes editar estos archivos JSON (`home.json`, `about.json`, `skills.json`, etc.) para reflejar tus propios datos y detalles.

### Configuración del sistema de contacto

Para configurar el sistema de contacto, sigue estos pasos:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/).

2. Obtén tu service ID, template ID y public user ID de EmailJS. Asegúrate de crear el template del email necesario.

3. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno con los datos obtenidos de EmailJS:

    ```dotenv
    VITE_SERVICE_ID='tu_service_ID'
    VITE_TEMPLATE_ID='tu_template_ID'
    VITE_USER_ID='tu_user_ID'
    ```

   Asegúrate de reemplazar `'tu_service_ID'`, `'tu_template_ID'` y `'tu_user_ID'` con los valores específicos que obtuviste de EmailJS.

Con estos pasos, habrás configurado correctamente el sistema de contacto en tu aplicación. Este sistema utiliza EmailJS para enviar emails a través de los servicios configurados con las credenciales proporcionadas.

