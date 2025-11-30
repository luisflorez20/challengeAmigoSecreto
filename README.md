# 🎁 Amigo Secreto - Challenge ONE

![Amigo Secreto Banner](assets/amigo-secreto.png)

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida. Desarrollada como parte del programa Oracle Next Education (ONE).

## 🌐 Demo en Vivo

Prueba la aplicación aquí: [https://luisflorez20.github.io/challengeAmigoSecreto/](https://luisflorez20.github.io/challengeAmigoSecreto/)

## 📋 Descripción

**Amigo Secreto** es una aplicación web simple pero efectiva que permite a los usuarios crear una lista de nombres y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Perfecta para organizar intercambios de regalos en navidad, cumpleaños o cualquier ocasión especial.

## ✨ Características

- ✅ **Agregar nombres**: Añade fácilmente los nombres de tus amigos a la lista
- 📝 **Lista dinámica**: Visualiza todos los participantes en tiempo real
- 🎲 **Sorteo aleatorio**: Selecciona un amigo secreto de forma completamente aleatoria
- 🔄 **Reiniciar juego**: Limpia la lista y comienza de nuevo cuando quieras
- ⚠️ **Validaciones**: Alertas para evitar nombres vacíos o sorteos sin participantes
- 📱 **Diseño responsive**: Funciona perfectamente en dispositivos móviles y de escritorio
- 🎨 **Interfaz moderna**: Diseño limpio y atractivo con tipografía personalizada

## 🚀 Cómo Usar

1. **Ingresa nombres**: Escribe el nombre de un amigo en el campo de texto
2. **Añadir a la lista**: Haz clic en el botón "Añadir" para agregar el nombre
3. **Repite el proceso**: Continúa agregando todos los participantes
4. **Sortear**: Una vez tengas todos los nombres, presiona "Sortear amigo"
5. **Ver resultado**: El sistema mostrará quién es el amigo secreto seleccionado
6. **Reiniciar**: Usa el botón "Reiniciar Juego" para comenzar de nuevo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos modernos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de la aplicación sin frameworks
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
challengeAmigoSecreto/
│
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño visual
├── app.js              # Lógica de la aplicación
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentación del proyecto
```

## 💻 Instalación y Ejecución Local

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/luisflorez20/challengeAmigoSecreto.git
   ```

2. **Navega al directorio**:
   ```bash
   cd challengeAmigoSecreto
   ```

3. **Abre el archivo**:
   - Simplemente abre el archivo `index.html` en tu navegador preferido
   - O usa un servidor local como Live Server en VS Code

## 🧩 Funcionalidades Principales

### Agregar Amigos
```javascript
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if(!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}
```

### Sortear Amigo Secreto
```javascript
function sortearAmigo() {
    if(amigos.length === 0 ) {
        alert('No hay amigos en la lista!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}
```

## 🎯 Objetivos del Challenge

Este proyecto fue desarrollado como parte del programa **Oracle Next Education (ONE)** con los siguientes objetivos de aprendizaje:

- Fortalecer habilidades en **lógica de programación**
- Manipulación del **DOM** con JavaScript
- Implementación de **funciones** y **arrays**
- Validación de **entrada de datos**
- Generación de **números aleatorios**
- Creación de interfaces **interactivas** y **responsivas**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Luis Flores**

- GitHub: [@luisflorez20](https://github.com/luisflorez20)
- Proyecto: [Challenge Amigo Secreto](https://github.com/luisflorez20/challengeAmigoSecreto)

## 🙏 Agradecimientos

- **Oracle Next Education (ONE)** por proporcionar el desafío
- **Alura Latam** por el contenido educativo
- Comunidad de desarrolladores por el apoyo continuo

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
