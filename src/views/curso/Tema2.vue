<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Métodos cuantitativos y cualitativos en la toma de decisiones'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  


      .bg-full-width.bg-fondo-4
        .px-4.px-md-5.pb-4

          //- p.text-center.mb-5 #[em Una mirada complementaria para abordar problemas empresariales complejos.]

     
          .row.mb-5
            .col-lg-8
              .bg-color-1.p-4.mb-4(data-aos="fade-left")
                .row.align-items-start
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 En la toma de decisiones empresariales, es fundamental contar con métodos que permitan analizar, comprender y resolver situaciones complejas desde diversas perspectivas. Para ello, las organizaciones utilizan métodos cuantitativos y cualitativos, los cuales ofrecen enfoques complementarios. Mientras los métodos cuantitativos se basan en el análisis numérico y estadístico, los cualitativos exploran percepciones, experiencias y comportamientos, proporcionando una comprensión más contextual.
          
              p(data-aos="fade-left") Ambos enfoques sustentan decisiones estratégicas, tácticas y operativas, y se aplican en áreas como #[em marketing], finanzas, recursos humanos y operaciones. A continuación, se presentan las principales características, aplicaciones y herramientas de cada uno.
          
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


          h2 Métodos cuantitativos

          h3 Modelos objetivos para decisiones basadas en datos numéricos.

          p Los métodos cuantitativos utilizan datos numéricos y herramientas estadísticas para analizar fenómenos empresariales de forma objetiva y medible. Permiten construir modelos predictivos y prescriptivos, reduciendo la subjetividad y facilitando decisiones fundamentadas en evidencia.

          p Las características de los métodos cuantitativos son:

          div.row.justify-content-center.align-items-stretch
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/2.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center A
                p.mb-0.text-center Uso de datos numéricos 
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/3.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center B
                p.mb-0.text-center Aplicación de modelos estadísticos y matemáticos.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center C
                p.mb-0.text-center Simulación de escenarios y optimización de decisiones.


            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center D
                p.mb-0.text-center Repetibilidad y consistencia en los resultados.
          

      p Algunos ejemplos de métodos cuantitativos son:


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Modelos de regresión lineal y múltiple.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Series temporales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Análisis estadísticos descriptivos e inferenciales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Programación lineal y no lineal.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Simulación y métodos Monte Carlo.

              
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 606px").mx-auto


      p Las aplicaciones en el entorno empresarial son:


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Finanzas")
              p Proyección de ingresos, análisis de riesgos.
      
            .div(titulo="Logística")
              p Optimización de rutas y gestión de inventarios.
      
            .div(titulo="<em>Marketing</em>")
              p Segmentación de clientes, análisis de comportamiento.
      
            .div(titulo="Producción")
              p Planificación de producción y control de calidad.
      

      p Las herramientas tecnológicas más utilizadas incluyen:

      ul.lista-ul--color.color-dark.mb-4
        li.mb-0
          i.fas.fa-arrow-circle-right
          | Excel avanzado (Solver, análisis de datos).
        li.mb-0
          i.fas.fa-arrow-circle-right
          | SPSS y SAS.
        li.mb-0
          i.fas.fa-arrow-circle-right
          | Python y R.
        li.mb-0
          i.fas.fa-arrow-circle-right
          | MATLAB
      

      .bg-full-width.bg-color-3
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 "Los métodos cuantitativos permiten traducir problemas complejos en modelos matemáticos que facilitan decisiones precisas" (Hillier & Lieberman, 2021, p. 45).
      
      .bg-full-width.bg-fondo-3
        .px-4.px-md-5.py-4
          h2.pt-4 Métodos cualitativos

          h3 Comprensión profunda de fenómenos organizacionales desde lo humano y contextual.
          p Los métodos cualitativos permiten interpretar fenómenos desde una perspectiva social, centrándose en comprender significados, motivaciones y experiencias. A diferencia de los cuantitativos, no buscan medir ni contar, sino explorar y entender a fondo una situación.
          p Las principales características de los métodos cualitativos son:


          div.row.justify-content-center.align-items-stretch
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/tarjeta-1.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Exploración de percepciones y significados.
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/tarjeta-1.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Enfoque en profundidad más que en cantidad.
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/tarjeta-1.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Uso de técnicas como entrevistas, grupos focales y observación.

            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/tarjeta-1.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Generación de información contextual.
        

      p Ejemplos comunes de métodos cualitativos:

      .bg-full-width.bg-color-3
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/9.svg", style="max-width: 609px").mx-auto
            .col-lg
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Entrevistas en profundidad.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Grupos focales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Observación participante.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Análisis de contenido y discurso.
                li.mb-0
                  | Estudios de caso.
              

      

      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.py-4

          p.pt-4 En el contexto empresarial, se aplican en:

          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/10.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Recursos humanos
                p.mb-0.text-center Clima organizacional, diagnóstico cultural.
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/11.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center #[em Marketing]
                p.mb-0.text-center Estudio de percepción de marca.
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/12.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Innovación
                p.mb-0.text-center Identificación de necesidades del cliente.


            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/13.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Gestión del cambio
                p.mb-0.text-center Evaluación del impacto humano y cultural en procesos organizativos.


          p Las herramientas tecnológicas más empleadas son:


          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-3
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/14.svg", style="max-width: 80px").mx-auto
                  .col-lg
                    h5.mb-0 NVivo.
          
            .col-lg-3
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/14.svg", style="max-width: 80px").mx-auto
                  .col-lg
                    h5.mb-0 Atlas.ti.
            
            .col-lg-3
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/14.svg", style="max-width: 80px").mx-auto
                  .col-lg
                    h5.mb-0 Dedoose.
          
            .col-lg-3
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/14.svg", style="max-width: 80px").mx-auto
                  .col-lg
                    h5.mb-0 Google Forms y SurveyMonkey.
          

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/277320" target="_blank" rel="noopener noreferrer") Pulido Varón, H. S. Quintero Arango, L. F. & Gutiérrez Avendaño, J. (2024). Investigación cualitativa: claves para estudiantes universitarios: (1 ed.). Universidad Católica Luis Amigó. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=VRejGl3j9IE&t=45s" target="_blank" rel="noopener noreferrer") ¿Qué es ser un Data Analyst? Contado por un Analista de Datos.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Analítica avanzada para la toma de decisiones',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Imagina que trabajas en el área de logística de una empresa de comercio electrónico. Los clientes han reportado retrasos en las entregas durante los últimos meses. ¿Qué tipo de análisis deberías aplicar primero para comprender las causas de estos retrasos y qué herramienta tecnológica te sería más útil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Análisis Prescriptivo con Python.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Análisis Descriptivo con Power BI.',
                esCorrecta: true,
              },
              { id: 'c', texto: 'Minería de Datos con R.', esCorrecta: false },
              {
                id: 'd',
                texto: 'Análisis Predictivo con Excel.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto. El análisis descriptivo te permitirá explorar los datos históricos de entregas para detectar patrones de retraso, y Power BI facilitará la visualización de esta información para la toma de decisiones.',
            mensaje_incorrecto:
              'Revisa la retroalimentación y vuelve a intentarlo.',
          },
          {
            id: 2,
            texto:
              'En una empresa de alimentos, se desea predecir cuáles serán los productos más vendidos en la próxima temporada navideña. ¿Qué técnica de analítica avanzada sería la más adecuada para anticiparse a la demanda?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Análisis Predictivo.', esCorrecta: true },
              { id: 'b', texto: 'Análisis Descriptivo.', esCorrecta: false },
              { id: 'c', texto: 'Métodos Cualitativos.', esCorrecta: false },
              {
                id: 'd',
                texto: 'Optimización de la Cadena de Suministro.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Exacto! El análisis predictivo permite proyectar la demanda futura basándose en datos históricos y patrones de consumo anteriores, lo que facilita la planeación del inventario.',
            mensaje_incorrecto:
              'Revisa la retroalimentación y vuelve a intentarlo.',
          },
          {
            id: 3,
            texto:
              'Una cadena de hoteles desea mejorar su servicio al cliente y personalizar sus ofertas según las preferencias de cada huésped. ¿Qué combinación de técnicas sería la más adecuada para obtener información relevante y proponer soluciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Métodos Cuantitativos y Optimización de la Cadena de Suministro.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Métodos Cualitativos y Machine Learning.',
                esCorrecta: true,
              },
              { id: 'c', texto: 'Informes y KPI.', esCorrecta: false },
              {
                id: 'd',
                texto: 'Simulación de Datos y Análisis Descriptivo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Bien hecho! Métodos cualitativos, como entrevistas o encuestas, pueden captar las preferencias de los clientes, y con Machine Learning se pueden automatizar las recomendaciones personalizadas.',
            mensaje_incorrecto:
              'Revisa la retroalimentación y vuelve a intentarlo.',
          },
          {
            id: 4,
            texto:
              'Una empresa financiera está buscando reducir el riesgo de impago en los créditos otorgados. ¿Qué tipo de análisis podría aplicar para anticiparse a los clientes que probablemente no cumplirán con sus pagos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Análisis Descriptivo.', esCorrecta: false },
              { id: 'b', texto: 'Análisis Predictivo.', esCorrecta: true },
              { id: 'c', texto: 'Visualización de Datos.', esCorrecta: false },
              { id: 'd', texto: 'Informes mensuales.', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El análisis predictivo, a través de modelos de scoring crediticio, permitirá identificar a los clientes con mayor probabilidad de incumplimiento, ayudando a la empresa a tomar medidas preventivas.',
            mensaje_incorrecto:
              'Revisa la retroalimentación y vuelve a intentarlo.',
          },
          {
            id: 5,
            texto:
              'Eres parte del equipo de datos de una empresa global de moda. Quieren saber cuál sería el mejor lugar para abrir una nueva tienda física. ¿Qué tipo de herramienta o técnica ayudaría a decidirlo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Informes estáticos.', esCorrecta: false },
              {
                id: 'b',
                texto: 'Algoritmos de Optimización y Simulación de Datos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Gráficos simples en Excel.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Método cualitativo de entrevistas a empleados.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Muy bien! La optimización y simulación de datos permiten modelar diferentes escenarios, considerando variables como demanda, competencia, costos y logística, para encontrar la mejor ubicación estratégica.',
            mensaje_incorrecto:
              'Revisa la retroalimentación y vuelve a intentarlo.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
