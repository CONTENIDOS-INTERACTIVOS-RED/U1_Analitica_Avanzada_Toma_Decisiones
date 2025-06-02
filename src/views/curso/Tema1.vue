<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la analítica avanzada en entornos empresariales.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.mb-5
      .col-lg-8
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta unidad aborda los fundamentos históricos y conceptuales de la analítica avanzada y su evolución hasta convertirse en un elemento clave para la toma de decisiones estratégicas. Mucho antes de la aparición de la inteligencia de negocios (Business Intelligence - BI) moderna, hacia mediados del siglo XX, las empresas ya realizaban análisis de datos de forma manual, centrados principalmente en informes financieros tradicionales. En ese contexto, los procesos estaban limitados a las capacidades humanas y se basaban en datos históricos, sin análisis predictivo ni en tiempo real.
    
        p(data-aos="fade-left") A medida que las tecnologías evolucionaron, surgieron nuevos enfoques y herramientas. La siguiente tabla resume esta evolución:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


   
    figure.mb-4
      img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in", style="max-width: 100%").mx-auto
    

    p En este contexto de incertidumbre, globalización y digitalización acelerada, la analítica avanzada se ha consolidado como una herramienta indispensable. Su aplicación permite anticipar escenarios, analizar grandes volúmenes de información y generar recomendaciones automatizadas que impulsan la gestión estratégica basada en datos. Así, las organizaciones pueden mejorar su desempeño operativo, detectar oportunidades de mercado y mitigar riesgos.
    

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 Hoy en día, ya no es viable tomar decisiones empresariales solo con intuición o datos limitados. Herramientas como Power BI, Tableau, Python y R permiten integrar datos en tiempo real para tener una visión integral de los procesos. En <em>marketing digital</em>, por ejemplo, la analítica predictiva ayuda a anticipar tendencias de consumo; en logística, la analítica prescriptiva optimiza las cadenas de suministro.
    
        p(data-aos="fade-left").mb-4 Por ello, esta unidad no solo ofrece una perspectiva histórica, sino que también busca generar conciencia sobre el impacto actual de la analítica avanzada en la toma de decisiones inteligentes, orientadas al crecimiento sostenible y competitivo. 

        p La analítica avanzada se clasifica en tres tipos principales: descriptiva, predictiva y prescriptiva. A continuación, se desarrolla la primera de ellas.
    
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Analítica descriptiva


    .row.mb-5
      .col-lg-8
        .bg-color-3.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La analítica descriptiva constituye la fase inicial dentro del proceso de analítica avanzada. Su objetivo es explorar, organizar y resumir datos históricos para ofrecer una comprensión clara de los eventos que ya han ocurrido en una organización. Este tipo de análisis permite identificar patrones pasados, entender comportamientos y establecer una base sólida para el análisis posterior.
        
        p(data-aos="fade-left") Su importancia ha crecido debido al aumento exponencial de los datos y al uso intensivo de herramientas de Business Intelligence (BI) y tecnologías de Big Data. A continuación, se resume su evolución histórica:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in").mb-4.mb-lg-0


    .titulo-figura.mb-2
      h5 Figura 1. 
      span Evolución de la analítica descriptiva
    
    figure.bg-color-info.p-4.p-md-5
      img(src="@/assets/curso/tema1/f1.svg", data-aos="zoom-in", style="max-width: 820px").mx-auto
    
    .bg-color-3
      .px-4.px-md-5.py-4
        p.mb-0 William Inmon, considerado el "padre del data warehousing", destacó la centralización y estructuración de datos como el primer gran paso hacia una gestión informada. A su vez, Davenport y Harris sostienen que el análisis descriptivo proporciona ventajas competitivas al sustentar decisiones con evidencia empírica. Por ejemplo, una empresa que revisa sus tendencias de ventas históricas puede ajustar sus estrategias de inventario y marketing con base en datos verificables.
    

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
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
