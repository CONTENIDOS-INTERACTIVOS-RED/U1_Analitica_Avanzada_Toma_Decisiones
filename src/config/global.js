export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Fundamentos de la analítica avanzada y la toma de decisiones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Introducción a la analítica avanzada en entornos empresariales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Analítica descriptiva',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Analítica predictiva ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Analítica prescriptiva',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos cuantitativos y cualitativos en la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subtítulo tema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subtítulo tema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Subtítulo tema',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Chaudhuri, S., Dayal, U., & Narasayya, V. (2011). An overview of business intelligence technology. Communications of the ACM, 54(8), 88-98.',
      link: 'https://doi.org/10.1145/1978542.1978562',
    },
    {
      referencia:
        'Chen, H., Chiang, R. H., & Storey, V. C. (2012). Business Intelligence and Analytics: From Big Data to Big Impact. MIS Quarterly, 36(4), 1165-1188.',
      link: 'https://doi.org/10.2307/41703503',
    },
    {
      referencia:
        'Davenport, T. H., & Bean, R. (2018). Artificial intelligence for the real world. Harvard Business Review, 96(1), 108-116.',
      link:
        'https://hbr.org/2018/01/artificial-intelligence-for-the-real-world',
    },
    {
      referencia:
        'Kitchin, R. (2014). The data revolution: Big data, open data, data infrastructures and their consequences.',
      link:
        'https://se.moemv.info/lib/exe/fetch.php/courses%3Asmart_data%3Athe_data_revolution_big_data_open_data_data_infrastructures_and_their_consequences_by_rob_kitchin-z-lib.org_.pdf',
    },
    {
      referencia:
        'Marr, B. (2016). Big data in practice: How 45 successful companies used big data analytics to deliver extraordinary results.',
      link:
        'https://www.wiley.com/en-us/Big+Data+in+Practice%3A+How+45+Successful+Companies+Used+Big+Data+Analytics+to+Deliver+Extraordinary+Results-p-9781119231387',
    },
    {
      referencia:
        "Provost, F., & Fawcett, T. (2013). Data science for business: What you need to know about data mining and data-analytic thinking. O'Reilly Media, Inc.",
      link:
        'https://www.oreilly.com/library/view/data-science-for/9781449374273/',
    },
    {
      referencia:
        'Chaffey, D. (2019). Digital business and e-commerce management. Pearson Education.',
      link:
        'https://www.pearson.com/store/p/digital-business-and-e-commerce-management/P100000657641',
    },
    {
      referencia:
        'Siegel, E. (2013). Predictive Analytics: The Power to Predict Who Will Click, Buy, Lie, or Die. Wiley.',
      link: 'https://archive.org/details/predictiveanalytic0000sieg_e3b6',
    },
    {
      referencia:
        'Bock, L. (2015). Work Rules!: Insights from Inside Google That Will Transform How You Live and Lead. Twelve.',
      link:
        'https://books.google.com/books/about/Work_Rules.html?id=JbJvBAAAQBAJ',
    },
    {
      referencia:
        'Creswell, J. W., & Poth, C. N. (2018). Qualitative Inquiry & Research Design: Choosing Among Five Approaches (4ª ed.). SAGE.',
      link:
        'https://books.google.com/books/about/Qualitative_Inquiry_and_Research_Design.html?id=DLbBDAAAQBAJ',
    },
    {
      referencia: 'Walkenbach, J. (2015). Excel 2016 Bible. Wiley.',
      link:
        'https://books.google.com/books/about/Excel_2016_Bible.html?id=CFZ_BwAAQBAJ',
    },
    {
      referencia:
        'Google. (2020). Google Data Studio: Make Data Work for You. Retrieved from',
      link: 'https://datastudio.google.com/',
    },
    {
      referencia: 'Microsoft. (2021). Power BI Documentation. Retrieved from',
      link: 'https://docs.microsoft.com/en-us/power-bi/',
    },
    {
      referencia: 'Tableau. (2020). Why Tableau?.',
      link: 'https://www.tableau.com/',
    },
    {
      referencia: 'Verizon. (2019). Customer Service KPIs.',
      link: 'https://www.verizon.com/',
    },
    {
      referencia:
        'Davenport, T. H., & Bean, R. (2018). Artificial intelligence for the real world. Harvard Business Review, 96(1), 108-116.',
      link:
        'https://hbr.org/2018/01/artificial-intelligence-for-the-real-world',
    },
    {
      referencia:
        'Goodwin, P., Wright, G., & Salvidge, S. (2019). Decision Analysis for Management Judgment (6ª ed.). Wiley.',
      link:
        'https://books.google.com/books/about/Decision_Analysis_for_Management_Judgment.html?id=1F3ADwAAQBAJ',
    },
    {
      referencia:
        'Hillier, F. S., & Lieberman, G. J. (2021). Introduction to Operations Research (11ª ed.). McGraw-Hill.',
      link:
        'https://books.google.com/books/about/Introduction_to_Operations_Research.html?id=G0i9zQEACAAJ',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmos de optimización',
      significado:
        'métodos matemáticos que buscan encontrar la mejor solución a un problema, como minimizar costos o maximizar beneficios, dentro de ciertos límites o condiciones.',
    },
    {
      termino: 'Análisis descriptivo',
      significado:
        'técnica para resumir datos históricos y comprender patrones pasados.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        'uso de modelos y algoritmos para prever tendencias futuras.',
    },
    {
      termino: 'Análisis prescriptivo',
      significado:
        'recomendaciones basadas en análisis descriptivo y predictivo para optimizar decisiones.',
    },
    {
      termino: 'Power BI',
      significado:
        'herramienta de Microsoft para análisis y visualización de datos.',
    },
    {
      termino: 'Big Data',
      significado:
        'conjunto de datos masivos, diversos y generados a gran velocidad, cuyo análisis requiere herramientas y métodos avanzados para extraer valor.',
    },
    {
      termino: 'Business Intelligence (BI)',
      significado:
        'conjunto de tecnologías y procesos que permiten recopilar, analizar y presentar información empresarial para mejorar la toma de decisiones.',
    },
    {
      termino: 'Machine Learning (ML)',
      significado:
        'subcampo de la inteligencia artificial que utiliza algoritmos para que los sistemas aprendan automáticamente de los datos y realicen predicciones o recomendaciones.',
    },
    {
      termino: 'Minería de Datos (Data Mining)',
      significado:
        'proceso de explorar grandes volúmenes de datos para descubrir patrones, relaciones y tendencias útiles para la toma de decisiones.',
    },
    {
      termino: 'Indicador clave de desempeño (KPI)',
      significado:
        'métrica que mide el rendimiento de una actividad o proceso específico en una organización.',
    },
    {
      termino: 'Informes (Reports)',
      significado:
        'documentos que presentan datos procesados y análisis de manera organizada para toma de decisiones.',
    },
    {
      termino: 'Lenguaje Python',
      significado:
        'lenguaje de programación versátil y de código abierto, ampliamente usado en ciencia de datos, analítica avanzada y desarrollo de modelos de machine learning.',
    },
    {
      termino: 'Lenguaje R',
      significado:
        'Lenguaje de programación especializado en análisis estadístico y visualización de datos, utilizado en investigación, finanzas y modelado estadístico.',
    },
    {
      termino: 'Métodos cuantitativos',
      significado:
        'técnicas basadas en datos numéricos, estadísticas y modelos matemáticos para analizar problemas y tomar decisiones objetivas y medibles.',
    },
    {
      termino: 'Métodos cualitativos',
      significado:
        'estrategias de análisis basadas en la interpretación de percepciones, opiniones y comportamientos, útiles para comprender fenómenos sociales y organizacionales.',
    },
    {
      termino: 'Simulación de datos',
      significado:
        'técnica que utiliza modelos matemáticos o computacionales para replicar procesos reales, analizar riesgos y prever resultados bajo diferentes escenarios.',
    },
    {
      termino: 'Optimización de la cadena de suministro',
      significado:
        'aplicación de modelos analíticos para mejorar la gestión de inventarios, logística y distribución de productos, reduciendo costos y mejorando la eficiencia operativa.',
    },
    {
      termino: 'Tableau',
      significado:
        'herramienta para visualización interactiva de datos y creación de dashboards.',
    },
    {
      termino: 'Toma de decisiones basada en datos',
      significado: 'uso de análisis para guiar decisiones organizativas.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'presentación gráfica de datos para facilitar su comprensión.',
    },
  ],
}
