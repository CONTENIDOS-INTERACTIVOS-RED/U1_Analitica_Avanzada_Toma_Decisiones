<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Título tema'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Subtítulo tema

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
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
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
