import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { VideoContext } from "../Context/VideoContext";

export const initialState = {
  frontEnd: [
    {
      id: 1,
      title: "Equipo Front End",
      descripcion: "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?\n\nEn este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Front End:\n[Cursos de Front End](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/rpvrLaBQwgg?si=fBJpBZWA2KWzmvXT",
    },
    {
      id: 2,
      title: "¿Que es JavaScript?",
      descripcion: "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.\n\n¿Quieres saber más?\n\nVe nuestros cursos de JavaScript:\n[Cursos de JavaScript](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/GJfOSoaXk4s?si=jMpA3JbRxNNSbmkM",
    },
    {
      id: 3,
      title: "Cuando usar Let, Var y Const",
      descripcion: "¿A veces cuando estás programando sientes dificultades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Innovación y Gestión:\n[Cursos de Innovación y Gestión](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nInstructor: Bárbara dos Santos\nProducción audiovisual: [Henrique Balleiras](https://www.instagram.com/henriqueballeiras)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursos)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/PztCEdIJITY?si=IZBov9JdRGKcqkLg",
    },
    {
      id: 4,
      title: "¿Por qué utilizar React con Typescript? ",
      descripcion: "¿React con JavaScript o React con TypeScript? En este video, te mostramos las diferencias clave entre usar React con JavaScript y hacerlo con TypeScript. Exploramos las ventajas de cada enfoque, cómo impactan en la productividad y la calidad del código, y cuál puede ser la mejor opción para tu proyecto. ¡Descubre cuál es ideal para ti!\n\nSuscríbete al canal de Alura Latam para no perderte ningún contenido 🚀\n\n🧠 ¿Quieres desarrollar tus habilidades en Front End?\nDescubre los cursos de Alura que pueden ayudarte:\n[Cursos de Alura](https://www.aluracursos.com/cursos-on...)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\n💡 Conoce nuestro TechGuide:\n[TechGuide](https://techguide.sh/es)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)\n- [TikTok](https://www.tiktok.com/@aluralatam)",
      url: "https://www.youtube.com/embed/RLZ7-ZfkwOE?si=LTkrBg2chCQvLYeI",
    },
  ],
  backEnd: [
    {
      id: 5,
      title: "Spring Framework. ¿Qué es ?",
      descripcion: "¿Busca un framework para utilizar en sus proyectos? ¿Conoce Spring Framework? Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Programación:\n[Cursos de Programación](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nEdición: [Vinicius Borges](https://www.instagram.com/vinicius.borges)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/t-iqt1b2qqk?si=ey2CZSbGChCd0m7W",
    },
    {
      id: 6,
      title: "¿Qué es SQL y NoSQL?",
      descripcion: "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este vídeo.\n\nContenido del video:\n- 00:00 Introducción\n- 00:28 Base de datos\n- 01:50 Diferencia entre SQL y NoSQL\n- 07:10 Bases de datos más conocidas\n- 10:10 Cuándo utilizar cada base de datos\n\n¿Quieres profundizar más?\n\nVe nuestros cursos de Bases de Datos:\n[Cursos de Bases de Datos](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/cLLKVd5CNLc?si=gkDEcMEXw7QYfZfo",
    },
    {
      id: 7,
      title: "Simplificando tu código en Java: Conoce los enum",
      descripcion: "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? \n\nEn este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum.\n\n¿Te gustaría aprender Java desde 0 en nuestra plataforma?\n[Formación de Java](https://www.aluracursos.com/formacion...)\n\nConoce más detalles sobre los tipos de datos enum visitando la documentación oficial:\n[Documentación de enum en Java](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)\n\nInstructora: Génesys Rondón\n\nProducción audiovisual: [Henrique Balleiras](https://www.instagram.com/henriqueballeiras)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursos)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/EoPvlE85XAQ?si=9GPArZ1oJn7fgzYU",
    },
    {
      id: 8,
      title: "Explorando el poder del Back-End en el Desarrollo Web",
      descripcion: "¿Quieres saber más?\n\nVe nuestros cursos:\n[Cursos de Alura](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nProductor Audiovisual: [Henrique Balleiras](https://www.instagram.com/henriqueballeiras)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)\n\nContenido del video:\n- 00:00 Introducción\n- 00:30 Qué es Back End\n- 02:30 Por qué empezar su carrera con Back End\n- 04:50 Existe Back End sin Front End?\n- 06:50 Con cuál lenguaje empezar en Back End\n- 09:00 Habilidades de un desarrollador Back End",
      url: "https://www.youtube.com/embed/Z024LSCMqFk?si=E7en_tcb5lqZbscD",
    },
  ],
  innovacionGestion: [
    {
      id: 9,
      title: "¿Qué son las Soft Skills?",
      descripcion: "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Innovación y Gestión:\n[Cursos de Innovación y Gestión](https://app.aluracursos.com/category/...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/vhwspfvI52k?si=bITtheflF9jdZsHX",
    },
    {
      id: 10,
      title: "Las 7 Soft Skills más deseadas por las empresas",
      descripcion:"Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? Quédate en este video con nosotros que vamos a explicarte la importancia de estas habilidades y porque son tan requeridas en el mercado laboral.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Innovación y Gestión:\n[Cursos de Innovación y Gestión](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nEdición: [Pamela Lima](https://www.instagram.com/pamelalimafotografia)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/YhR7Zp8NUzE?si=cmvuxErTFcE3nWpI",
    },
    {
      id: 11,
      title: "¿Qué son las metodologias ágiles?",
      descripcion:"En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Innovación y Gestión:\n[Cursos de Innovación y Gestión](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\nEdición: [Pamela Lima](https://www.instagram.com/pamelalimafotografia)\n\nProducción e Dirección:\n[Henrique Balleiras](https://www.instagram.com/henriqueballeiras)\n\nCaptura de audio:\n- [Daya Costa](https://www.instagram.com/daayard)\n- [Kaue Felipe](https://www.instagram.com/kauefsr01)\n\nAsistente de Cámara:\nLua Apolinário\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)",
      url: "https://www.youtube.com/embed/6N3OkLCfK-0?si=G-TQFF1eXjndGk8m",
    },
    {
      id: 12,
      title: "Desafíos y soluciones del trabajo remoto #AluraTips",
      descripcion: "En el video de hoy vamos a ver cuáles son los desafíos y las soluciones que las empresas y los colaboradores enfrentan con el trabajo remoto.\n\n¿Quieres saber más?\n\nVe nuestros cursos de Innovación y Gestión:\n[Cursos de Innovación y Gestión](https://www.aluracursos.com/cursos-on...)\n\nEncuentra variados artículos sobre tecnologia en nuestro blog: \n[Blog de Alura](https://www.aluracursos.com/blog/)\n\n¡Videos nuevos todos los miércoles! \nA las 6pm México * 7pm Colombia * 8pm Bolivia * 9pm Argentina/Chile\n\n💡 Conoce nuestro TechGuide:\n[TechGuide](https://techguide.sh/es)\n\nSíguenos en:\n- [Instagram](https://www.instagram.com/aluralatam)\n- [Facebook](https://www.facebook.com/aluracursoslatam)\n- [Linkedin](https://www.linkedin.com/company/alura-latam)\n- [TikTok](https://www.tiktok.com/@aluralatam)\n\n👉 ¡Visita nuestro sitio web y descubre el universo de oportunidades que te esperan en Alura Latam! 💡\n[Alura Latam](https://www.aluracursos.com/)",
      url: "https://www.youtube.com/embed/kIvnVfnmDyE",
    },
  ],
  uxUiDiseño: [],
  devOps: [],
  mobileDevelopment: [],
  dataScience: [],
  otros: []
};

function VideoProvider({ children }) {
  const [videos, setVideos] = useState(initialState);
  const [alert, setAlert] = useState({ type: null, message: null });

  const transformYoutubeUrl = (url) => {
    try {
      if (!url) return '';
      
      if (url.includes('/embed/')) {
        return url;
      }

      const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/);
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }

      return url;
    } catch (error) {
      console.error("Error transformando URL:", error);
      return url;
    }
  };

  const addVideo = (newVideo) => {

    if (!newVideo.category) {
      console.error("El video debe tener una categoría");
      return;
    }

    const videoToAdd = {
      ...newVideo,
      url: transformYoutubeUrl(newVideo.url),
      id: new Date().getTime()
    };

    setVideos(prevVideos => {
      const updatedVideos = {
        ...prevVideos,
        [newVideo.category]: [...(prevVideos[newVideo.category] || []), videoToAdd]
      };
      return updatedVideos;
    });

 
    setAlert({
      type: 'success',
      message: 'Video agregado con éxito',
      position: { vertical: 'bottom', horizontal: 'left' }
    });
  };

  const deleteVideo = (videoId) => {
    setVideos(prevVideos => {
      const updatedVideos = {};
      
      Object.keys(prevVideos).forEach(category => {
        updatedVideos[category] = prevVideos[category].filter(video => video.id !== videoId);
      });

      return updatedVideos;
    });

    setAlert({
      type: 'success',
      message: 'El video se borró de la galería con éxito',
      position: { vertical: 'bottom', horizontal: 'left' }
    });

    setTimeout(() => {
      setAlert({ type: null, message: null, position: null });
    }, 3000);
  };

  const updateVideo = (videoId, updatedVideo) => {
    
    setVideos(prevVideos => {
      const updatedVideos = { ...prevVideos };

      Object.keys(updatedVideos).forEach(category => {
        const videoIndex = updatedVideos[category].findIndex(video => video.id === videoId);
        
        if (videoIndex !== -1) {
          const originalCategory = category;
          const newCategoryKey = updatedVideo.category;
          
          if (newCategoryKey !== originalCategory) {
            const videoToMove = updatedVideos[originalCategory][videoIndex];
            updatedVideos[originalCategory] = updatedVideos[originalCategory].filter(video => video.id !== videoId);

            if (!updatedVideos[newCategoryKey]) {
              updatedVideos[newCategoryKey] = [];
            }
            updatedVideos[newCategoryKey].push({
              ...videoToMove,
              ...updatedVideo,
              id: videoId 
            });
          } else {
            updatedVideos[category][videoIndex] = {
              ...updatedVideos[category][videoIndex],
              ...updatedVideo,
              id: videoId 
            };
          }
        }
      });

      return updatedVideos;
    });

    setAlert({
      type: 'success',
      message: 'El video se actualizó con éxito',
      position: { vertical: 'bottom', horizontal: 'left' }
    });

    setTimeout(() => {
      setAlert({ type: null, message: null, position: null });
    }, 3000);
  };

  const value = {
    videos,
    addVideo,
    deleteVideo,
    updateVideo,
    alert,
    setAlert
  };

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
}

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { VideoProvider };
export default VideoProvider;
