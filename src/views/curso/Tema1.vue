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
    
    .bg-color-3.mb-4
      .px-4.px-md-5.py-4
        p.mb-0 William Inmon, considerado el "padre del data warehousing", destacó la centralización y estructuración de datos como el primer gran paso hacia una gestión informada. A su vez, Davenport y Harris sostienen que el análisis descriptivo proporciona ventajas competitivas al sustentar decisiones con evidencia empírica. Por ejemplo, una empresa que revisa sus tendencias de ventas históricas puede ajustar sus estrategias de inventario y marketing con base en datos verificables.


    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.py-4
        h2 Aplicaciones de la analítica descriptiva en entornos empresariales
        p La analítica descriptiva es clave para la toma de decisiones fundamentadas, ya que permite identificar relaciones, patrones y tendencias en los datos. Entre sus aplicaciones más relevantes destacan:


        div.row.justify-content-center.align-items-stretch
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Evaluación de indicadores clave de rendimiento (KPI)
              p.mb-0.text-center Permite analizar niveles de ventas, eficiencia operativa y comportamiento del cliente.
        
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Optimización de campañas de marketing
              p.mb-0.text-center Empresas como Amazon y Mercado Libre evalúan el desempeño de campañas, detectan patrones de compra por temporada y ajustan inventarios.
        
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/8.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Análisis de riesgos en el sector financiero
              p.mb-0.text-center Bancos y aseguradoras utilizan datos históricos para evaluar pagos, fraudes y morosidad.

          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Gestión de la experiencia del cliente
              p.mb-0.text-center Compañías como Salesforce y Verizon analizan encuestas (CSAT) y sistemas de tickets para mejorar sus servicios.
        

    p Este enfoque permite comprender qué funcionó y qué no, facilitando decisiones estratégicas, tácticas y operativas más informadas.


    h2 Herramientas para aplicar análisis descriptivo

    p La implementación del análisis descriptivo ha sido facilitada por múltiples herramientas digitales. Estas plataformas permiten a usuarios, incluso sin formación especializada en datos, interpretar y actuar con base en información precisa:

    TabsC.color-acento-contenido.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Power BI" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Power BI
            p Desarrollada por Microsoft, permite crear informes interactivos y #[em dashboards] personalizados en tiempo real.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Tableau" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Tableau
            p Destaca por sus potentes capacidades de visualización, útiles para detectar tendencias y patrones ocultos.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Excel avanzado" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Excel avanzado
            p Sigue siendo útil para análisis iniciales, especialmente con tablas dinámicas y gráficos automatizados.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Google Data Studio" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Google Data Studio
            p Plataforma gratuita que permite crear informes conectados a múltiples fuentes de datos, ideal para análisis en marketing digital.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-4.png', alt='')
    

    p.mb-5 Estas herramientas han democratizado el acceso a la analítica, facilitando decisiones más rápidas y precisas en todos los niveles organizacionales.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Analítica predictiva 

    
    p.mb-4 El análisis predictivo es una técnica avanzada de análisis de datos que tiene como finalidad anticipar eventos y comportamientos futuros mediante el uso de datos históricos, modelos estadísticos, algoritmos de aprendizaje automático y minería de datos. A diferencia del análisis descriptivo, que se centra en explicar lo que ya ocurrió, el análisis predictivo busca prever lo que probablemente sucederá bajo ciertas condiciones (Siegel, 2013).


    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 El origen del análisis predictivo está vinculado con la evolución de la minería de datos y la inteligencia artificial (IA), cuyos primeros avances se dieron entre las décadas de 1980 y 1990. Fue en los años 90 cuando las empresas comenzaron a explorar técnicas estadísticas avanzadas y algoritmos para extraer patrones ocultos en grandes volúmenes de datos, dando inicio a un enfoque más científico y automatizado de la toma de decisiones (Davenport & Harris, 2007).
    
        p(data-aos="fade-left").mb-4 Autoras y autores como Davenport y Harris (2007), en su obra Competing on Analytics, destacaron la importancia del análisis predictivo como fuente de ventaja competitiva, al permitir a las empresas adelantarse a las tendencias del mercado y responder de manera proactiva. Por su parte, Eric Siegel (2013), en su libro Predictive Analytics, resaltó cómo estas técnicas pueden transformar datos en conocimiento accionable, facilitando decisiones estratégicas en diversos sectores, desde la banca hasta el comercio electrónico.

    p.mb-5 Con la masificación del Big Data, el análisis predictivo ha alcanzado un nuevo nivel, integrándose con algoritmos de aprendizaje automático (Machine Learning), que permiten no solo identificar patrones, sino también aprender y mejorar automáticamente sus predicciones a medida que se incorpora nueva información (Marr, 2017).


    h2 Aplicación del análisis predictivo en entornos empresariales

    p El análisis predictivo es una herramienta fundamental en el contexto actual de inteligencia de negocios (BI), ya que permite anticiparse a los cambios del mercado, prever la demanda de productos y entender mejor el comportamiento de los clientes. Su aplicación se ha extendido a prácticamente todos los sectores económicos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7.order-lg-1
              h4 #[em Marketing] y ventas
              p Permite segmentar clientes, predecir su comportamiento de compra y personalizar campañas. Por ejemplo, Netflix utiliza análisis predictivo para sugerir contenido a sus usuarios, con base en patrones previos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7.order-lg-1
              h4 Finanzas
              p En bancos y aseguradoras, se emplea para prever el riesgo crediticio, estimar la probabilidad de impago y detectar fraudes. Bank of America, por ejemplo, usa modelos predictivos para decidir la aprobación de créditos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h4 Gestión de la cadena de suministro
              p Ayuda a anticipar la demanda de productos, optimizar inventarios y reducir costos logísticos. Empresas como Walmart ajustan sus niveles de stock con base en patrones de compra y factores estacionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h4 Recursos humanos
              p Algunas organizaciones aplican análisis predictivo para anticipar la rotación de personal y planificar procesos de selección y formación, mejorando la gestión del talento.
    


    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.py-4
        h2 Herramientas para aplicar análisis predictivo
        p El desarrollo de herramientas especializadas ha facilitado la implementación de análisis predictivo en las organizaciones. Entre las más destacadas se encuentran:



        div.row.justify-content-center.align-items-stretch
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center IBM SPSS Modeler
              p.mb-0.text-center Plataforma avanzada de minería de datos que permite crear modelos predictivos mediante técnicas estadísticas y algoritmos de machine learning.
        
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/12.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center SAS Predictive Analytics 
              p.mb-0.text-center Sistema completo para el desarrollo de modelos predictivos, con capacidades de visualización, modelado y automatización.
        
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center RapidMiner
              p.mb-0.text-center Herramienta de código abierto que combina minería de datos, machine learning y procesamiento de datos para la creación de modelos predictivos eficientes.

          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/14.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Python y R
              p.mb-0.text-center Lenguajes de programación ampliamente utilizados por analistas de datos, con librerías especializadas como Scikit-Learn, TensorFlow y XGBoost, que permiten construir modelos de predicción potentes y personalizados.
        

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estas herramientas permiten a las organizaciones construir modelos, evaluar su precisión y aplicarlos en tiempo real, integrando la analítica predictiva en sus sistemas de inteligencia de negocios (Marr, 2017).
    

    h2 KPIs para medir el análisis predictivo y ejemplos empresariales

    p La efectividad del análisis predictivo se mide a través de indicadores clave de desempeño (KPIs), que permiten evaluar la precisión y utilidad de los modelos implementados. Algunos de los KPIs más relevantes son:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="<em>Accuracy Rate</em> (Tasa de Precisión)")
            p Mide cuán precisas son las predicciones en comparación con los resultados reales. Por ejemplo, Uber la utiliza para calcular la exactitud en las estimaciones de llegada de los conductores.
    
          .div(titulo="<em>Prediction Confidence Level</em> (Nivel de Confianza de la Predicción)")
            p Indica la probabilidad de que una predicción sea correcta. En entidades como Bank of America, se emplea para evaluar la probabilidad de impago de créditos.
    
          .div(titulo="<em>Recall</em> y Precision")
            p Métricas que evalúan la capacidad del modelo para identificar correctamente los casos positivos y negativos. Google las emplea en la detección de correos spam en Gmail.
    
          .div(titulo="Lead Conversion Rate (Tasa de Conversión de Prospectos)")
            p Mide el porcentaje de prospectos que se convierten en clientes. Herramientas de CRM como Salesforce usan este KPI para mejorar las campañas de ventas.

          .div(titulo="MAPE (<em>Mean Absolute Percentage Error</em>)")
            p Mide el error porcentual medio entre las predicciones y los valores reales. Procter & Gamble lo usa para evaluar la precisión de sus proyecciones de ventas.


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Analítica prescriptiva
    
    p El análisis prescriptivo representa la fase más avanzada dentro del proceso de analítica de datos. A diferencia del análisis descriptivo, que explica lo que ocurrió, y del predictivo, que anticipa lo que podría pasar, el análisis prescriptivo se centra en recomendar las acciones concretas que una organización debe llevar a cabo para alcanzar los mejores resultados posibles (Davenport & Harris, 2007). Este tipo de análisis no solo predice, sino que optimiza las decisiones a través de modelos matemáticos, algoritmos, simulaciones y técnicas de inteligencia artificial (IA).


    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El desarrollo del análisis prescriptivo está estrechamente vinculado a la evolución de la analítica avanzada y de la inteligencia artificial aplicada a los negocios. Aunque las bases se sentaron desde la llegada del análisis predictivo, fue en la década de 2000 cuando, gracias a los avances en IA y Machine Learning, las empresas comenzaron a implementar modelos prescriptivos que no solo muestran lo que puede suceder, sino que también sugieren qué hacer al respecto (Watson & Jayaraman, 2013).
    
        p(data-aos="fade-left") Autores como Davenport y Harris (2007) destacan al análisis prescriptivo como un elemento esencial para lograr ventajas competitivas sostenibles, ya que permite a las organizaciones reaccionar de forma proactiva, especialmente en entornos de alta incertidumbre y competencia. A su vez, Watson y Jaynes (2012) resaltan su importancia en la optimización de la cadena de suministro, y cómo esta metodología ayuda a mejorar la eficiencia operativa, la asignación de recursos y la toma de decisiones complejas.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
    

    h2 Aplicación del análisis prescriptivo en entornos empresariales

    p En el mundo empresarial actual, caracterizado por cambios rápidos y entornos altamente competitivos, el análisis prescriptivo se convierte en una herramienta fundamental para la toma de decisiones estratégicas y operativas.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 896px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="28%" y="61%" numero="+")
                h5 1. Optimización de la cadena de suministro

                p Empresas como Amazon y UPS utilizan este análisis para definir rutas de entrega, optimizar inventarios y reducir costos logísticos mediante simulaciones y algoritmos.
    
              .bg-color-white.box-shadow.p-3(x="32%" y="28%" numero="+")
                h5 2. Marketing personalizado y ventas

                p Plataformas como Netflix y Spotify lo emplean para recomendar contenidos o productos personalizados, mejorando la experiencia del usuario y la retención.
    
              .bg-color-white.box-shadow.p-3(x="51.5%" y="11.5%" numero="+")
                h5 3. Gestión financiera

                p Bancos como JP Morgan aplican este análisis para gestionar inversiones, simular riesgos y optimizar recursos financieros.
    
              .bg-color-white.box-shadow.p-3(x="70.5%" y="28%" numero="+")
                h5 4. Salud y atención médica

                p Soluciones como IBM Watson Health lo usan para recomendar tratamientos personalizados basados en datos clínicos del paciente.
    
              .bg-color-white.box-shadow.p-3(x="75%" y="62%" numero="+")
                h5 5. Manufactura inteligente

                p Compañías como General Electric lo aplican para optimizar procesos, reducir desperdicios y mejorar la calidad del producto en tiempo real.
    

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.py-4
        h2 Herramientas para implementar análisis prescriptivo
        p Para ejecutar el análisis prescriptivo de manera efectiva, se requiere de herramientas avanzadas de optimización, simulación y modelado matemático. Entre las más destacadas se encuentran:



        div.row.justify-content-center.align-items-stretch
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center IBM Decision Optimization
              p.mb-0.text-center Plataforma que permite crear modelos matemáticos para decisiones basadas en datos, optimizando recursos, logística y procesos productivos.
        
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/12.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center SAS Optimization
              p.mb-0.text-center Herramienta que combina optimización, simulación y modelado para resolver problemas complejos en tiempo real.
        
          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Gurobi Optimizer
              p.mb-0.text-center Solución avanzada para resolver problemas de optimización lineal, no lineal y enteros, utilizada en logística, finanzas y manufactura.

          div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/14.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Tableau combinado con R o Python
              p.mb-0.text-center Aunque Tableau se enfoca en visualización, al integrarse con R o Python permite realizar simulaciones y modelos prescriptivos complejos.
        
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estas herramientas permiten a las organizaciones convertir los hallazgos descriptivos y predictivos en acciones concretas y estratégicas, optimizando la toma de decisiones (Marr, 2017)
    

    h2 KPIS para medir el análisis prescriptivo y ejemplos empresariales

    p El rendimiento de los modelos prescriptivos se evalúa mediante indicadores clave de desempeño (KPIs), que miden tanto la efectividad de las recomendaciones como su impacto en el negocio. Algunos KPIs relevantes son:

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="<em>Return on Investment</em> (ROI) del modelo prescriptivo")
            p Mide el retorno económico generado por las recomendaciones del modelo. Ejemplo: Toyota evalúa el ROI de sus estrategias logísticas sugeridas por modelos prescriptivos.
    
          .div(titulo="Tasa de cumplimiento de recomendaciones")
            p Indica el porcentaje de sugerencias del modelo que fueron implementadas. Ejemplo: Starbucks mide el cumplimiento en nuevas aperturas de tiendas.
    
          .div(titulo="Lead time de implementación")
            p Mide el tiempo entre la recomendación y su implementación. Ejemplo: FedEx lo usa para evaluar la rapidez en la adopción de rutas logísticas.
    
          .div(titulo="Customer Satisfaction Improvement")
            p Mide el impacto de las decisiones prescriptivas en la experiencia del cliente. Ejemplo: Amazon analiza si las recomendaciones en envíos mejoran la satisfacción.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/19.png", alt="").mb-4.mb-lg-0
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/58609" target="_blank" rel="noopener noreferrer") Curto Díaz, J. (2016). Organizaciones orientadas al dato: transformando las organizaciones hacia una cultura analítica: ( ed.). Editorial UOC. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4F8G87Ho7SI" target="_blank" rel="noopener noreferrer") Analítica descriptiva, analítica predictiva y analítica prescriptiva.

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
