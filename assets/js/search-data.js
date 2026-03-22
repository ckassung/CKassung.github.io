// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "nav-teaching",
          title: "teaching",
          description: "Laufende und geplante Lehrveranstaltungen.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Akademischer Lebenslauf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-oranienburg-post-nr-6",
        
          title: "Oranienburg-Post Nr. 6",
        
        description: "Stoffgeschichte",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/oranienburg_006/";
          
        },
      },{id: "post-semesterplan-einführung-in-die-kulturgeschichte",
        
          title: "Semesterplan »Einführung in die Kulturgeschichte«",
        
        description: "Leitet direkt zum Semesterplan »Einführung in die Kulturgeschichte« als PDF weiter.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/semesterplan_einfuehrung-kulturgeschichte_2025-26.pdf";
          
        },
      },{id: "post-seminarplan-von-der-kybernetik-zur-ki-zur-geschichte-und-theorie-der-maschinen",
        
          title: "Seminarplan »Von der Kybernetik zur KI. Zur Geschichte und Theorie der Maschinen«",
        
        description: "Leitet direkt zum Seminarplan »Von der Kybernetik zur KI. Zur Geschichte und Theorie der Maschinen« als PDF weiter.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/seminarplan_kybernetik.pdf";
          
        },
      },{id: "post-culinarium",
        
          title: "Culinarium",
        
        description: "Ein fiktives Interview zur kulinarischen Lage der Zeit",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/culinarium/";
          
        },
      },{id: "post-oranienburg-post-nr-5",
        
          title: "Oranienburg-Post Nr. 5",
        
        description: "Stoffgeschichte",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/oranienburg_005/";
          
        },
      },{id: "post-aquatic-mobilities-littoral-cultures",
        
          title: "Aquatic Mobilities/Littoral Cultures",
        
        description: "Exploratory Workshop",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/workshop-mobility-02/";
          
        },
      },{id: "post-kulturtechniken-der-mobilität-amp-ndash-material-cultures-of-mobility",
        
          title: "Kulturtechniken der Mobilität &amp;ndash; Material Cultures of Mobility",
        
        description: "Exploratory Workshop",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/workshop-mobility-01/";
          
        },
      },{id: "post-oranienburg-post-nr-4",
        
          title: "Oranienburg-Post Nr. 4",
        
        description: "Stoffgeschichte",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/oranienburg_004/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-digitization-of-indigenous-knowledge-for-extended-reality-and-culture",
        
          title: 'Digitization of Indigenous Knowledge for Extended Reality and Culture <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Report on Summer School 2023 at Borneo Cultures Museum, Kuching",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.matters-of-activity.de/en/activities/11082/digitization-of-indigenous-knowledge-for-extended-reality-and-culture", "_blank");
          
        },
      },{id: "post-oranienburg-post-nr-3",
        
          title: "Oranienburg-Post Nr. 3",
        
        description: "Monazitbaum",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/oranienburg-003/";
          
        },
      },{id: "post-kultur-und-informatik-2023",
        
          title: "Kultur und Informatik 2023",
        
        description: "Bericht von der 20. Tagung »Kultur und Informatik« in Lissabon",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/lissabon/";
          
        },
      },{id: "post-wissenschaftliches-schreiben",
        
          title: "Wissenschaftliches Schreiben",
        
        description: "Eine maximal kurze Einführung ins wissenschaftliche Schreiben.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/wissenschaftliches-schreiben/";
          
        },
      },{id: "post-digitisation-of-indigenous-knowledge-for-extended-reality-and-cultural-heritage",
        
          title: 'Digitisation of Indigenous Knowledge for Extended Reality and Cultural Heritage <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Filtering Project Prepares DAAD Summer School in March 2023 at University of Technology Sarawak in Malaysia",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.matters-of-activity.de/en/activities/9674/digitisation-of-indigenous-knowledge-for-extended-reality-and-cultural-heritage", "_blank");
          
        },
      },{id: "post-oranienburg-post-nr-2",
        
          title: "Oranienburg-Post Nr. 2",
        
        description: "Auerlichter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/oranienburg_002/";
          
        },
      },{id: "post-oranienburg-post-nr-1",
        
          title: "Oranienburg-Post Nr. 1",
        
        description: "Basics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/oranienburg-001/";
          
        },
      },{id: "post-akademisches-schreiben-mit-zettrl",
        
          title: "Akademisches Schreiben mit Zettrl",
        
        description: "Installation und Verwendung von Zettrl als Zettelkasten.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/zettlr/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-lesbarkeit-amp-typographie",
        
          title: "Lesbarkeit &amp; Typographie",
        
        description: "Einige Standards für besser lesbare Texte.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/formalia/";
          
        },
      },{id: "post-allgemeine-relativitätstheorie",
        
          title: "Allgemeine Relativitätstheorie",
        
        description: "Die allgemeine Relativitätstheorie im Cube of Physics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/art/";
          
        },
      },{id: "post-perl-camel",
        
          title: "Perl Camel",
        
        description: "Ein schönes Beispiel von Obfuscated Perl Code.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/perl/";
          
        },
      },{id: "post-projektseminar-malmaschinen",
        
          title: "Projektseminar »Malmaschinen«",
        
        description: "Plakate der interaktiven Seminarausstellung",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/malmaschinen/";
          
        },
      },{id: "post-temporäres-objektlabor",
        
          title: "Temporäres Objektlabor",
        
        description: "Ein Experiment zur Erforschung von Objekten aus wissenschaftlichen Sammlungen",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/objektlabor/";
          
        },
      },{id: "post-analogspeicher-in-namibia",
        
          title: "Analogspeicher in Namibia",
        
        description: "Bericht von der »International Summer School 2015 in Culture and Computer Science«",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/analogspeicher-namibia/";
          
        },
      },{id: "books-max-planck",
          title: 'Max Planck',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/max_planck/";
            },},{id: "news-stellenausschreibung-videoproduktion-am-exzellenzcluster-matters-of-activity",
          title: 'Stellenausschreibung Videoproduktion am Exzellenzcluster »Matters of Activity«',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_stellenausschreibung-moa/";
            },},{id: "news-zur-diesjährigen-langen-nacht-der-wissenschaften-präsentieren-wir-eine-neugestaltung-des-cube-of-physics-im-lise-meitner-haus-institut-für-physik",
          title: 'Zur diesjährigen Langen Nacht der Wissenschaften präsentieren wir eine Neugestaltung des »Cube of...',
          description: "",
          section: "News",},{id: "news-der-tagungsbericht-zur-diesjährigen-zwanzigsten-kultur-und-informatik-in-lissabon-ist-online",
          title: 'Der Tagungsbericht zur diesjährigen zwanzigsten »Kultur und Informatik« in Lissabon ist online.',
          description: "",
          section: "News",},{id: "news-das-buch-filtern-zur-theorie-einer-kulturtechnik-des-21-jahrhunderts-ist-jetzt-online-als-pdf-im-open-access-verfügbar-sparkles",
          title: 'Das Buch »Filtern. Zur Theorie einer Kulturtechnik des 21. Jahrhunderts« ist jetzt online...',
          description: "",
          section: "News",},{id: "news-die-lehrplanung-für-das-kommende-sommersemester-ist-unter-online-geschaltet-bitte-schreiben-sie-sich-bei-interesse-in-die-entsprechenden-moodle-kurse-ein",
          title: 'Die Lehrplanung für das kommende Sommersemester ist unter online geschaltet. Bitte schreiben Sie...',
          description: "",
          section: "News",},{id: "news-sprechstunden-finden-ab-semesterbeginn-wöchentlich-mittwochs-um-16-uhr-statt-bitte-melden-sie-sich-hierzu-bei-frau-gaedicke-per-e-mail-unter-an-für-formale-fragen-zur-lehre-können-sie-sich-gerne-per-e-mail-an-meine-hilfkraft-patrick-mackens-wenden-aktuelle-informationen-zum-anstehenden-sommersemester-finden-sie-online-auf-dieser-website",
          title: 'Sprechstunden finden ab Semesterbeginn wöchentlich mittwochs um 16 Uhr statt. Bitte melden Sie...',
          description: "",
          section: "News",},{id: "projects-cube-of-physics",
          title: 'Cube of Physics',
          description: "Installation im Lise-Meitner-Haus, 2018",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cube-of-physics/";
            },},{id: "projects-dingler",
          title: 'Dingler',
          description: "Retrodigitalisierung Polytechnisches Journal, 2008&amp;ndash;2013",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dingler/";
            },},{id: "projects-plancks-hexadekachor",
          title: 'Plancks Hexadekachor',
          description: "Installation im IRIS Forschungsbau, Adlershof, 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hexadekachor/";
            },},{id: "projects-hidden-kosmos",
          title: 'Hidden Kosmos',
          description: "Reconstructing Alexander von Humboldt’s »Kosmos-Lectures«, 2014&amp;ndash;2016",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hidden-kosmos/";
            },},{id: "projects-klangsehen",
          title: 'Klangsehen',
          description: "Ausstellung im Jacob-und-Wilhelm-Grimm-Zentrum, 2015",
          section: "Projects",handler: () => {
              window.location.href = "/projects/klangsehen/";
            },},{id: "projects-minerva",
          title: 'Minerva',
          description: "Medienstationen im Märkischen Museum, 2015",
          section: "Projects",handler: () => {
              window.location.href = "/projects/minerva/";
            },},{id: "projects-techniken-des-nährens",
          title: 'Techniken des Nährens',
          description: "Beiträge zur Kulturgeschichte von Nahrungsasymmetrien, seit 2015",
          section: "Projects",handler: () => {
              window.location.href = "/projects/naehren/";
            },},{id: "projects-okkulte-moderne",
          title: 'Okkulte Moderne',
          description: "Beiträge zur nichthegemonialen Innovation, seit 2011",
          section: "Projects",handler: () => {
              window.location.href = "/projects/okkulte-moderne/";
            },},{id: "projects-filtering-oranienburg",
          title: 'Filtering Oranienburg',
          description: "Erforschung der Geschichte einer Stadt als radioaktive Industrielandschaft im Rahmen des Exzellenzclusters »Matters of Activity«, seit 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oranienburg/";
            },},{id: "projects-synchron",
          title: 'Synchron',
          description: "Ausstellung im Pergamon-Palais, 2012",
          section: "Projects",handler: () => {
              window.location.href = "/projects/synchron/";
            },},{id: "projects-vortex",
          title: 'Vortex',
          description: "Eine Kultur- und Wissensgeschichte des Wirbels, seit 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vortex/";
            },},{id: "teachings-bachelorkolloquium-co",
          title: 'Bachelorkolloquium (CO)',
          description: "Begleitendes Kolloquium für Bachelorarbeiten.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/bachelorkolloquium/";
            },},{id: "teachings-dark-side-of-the-moon-se",
          title: 'Dark Side of the Moon (SE)',
          description: "Mystifizierung und Rationalisierung des Mondes als europäische Wissens- und Kulturgeschichte.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/dark-side-of-the-moon/";
            },},{id: "teachings-einführung-in-die-kulturgeschichte-vl",
          title: 'Einführung in die Kulturgeschichte (VL)',
          description: "Kulturhistorischer Überblick von der Neolithischen Revolution bis 1970er Jahre anhand der Leitfrage, wie das Zusammenspiel von Praktiken, Dingen und Wissen das Verhältnis von Natur und Kultur geprägt hat",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/einfuehrung-kulturgeschichte/";
            },},{id: "teachings-forschungskolloquium-co",
          title: 'Forschungskolloquium (CO)',
          description: "Begleitendes Kolloquium für Masterarbeiten und Promotionen.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/forschungskolloquium/";
            },},{id: "teachings-fundus-und-unauffindbares-medienarchäologisches-sammeln-in-globaler-perspektive-rvl",
          title: 'Fundus und Unauffindbares. Medienarchäologisches Sammeln in globaler Perspektive (RVL)',
          description: "Ringvorlesung zur Gegenwart und Zukunft des medienarchäologischen Fundus&#39;.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/fundus-und-unauffindbares/";
            },},{id: "teachings-lektürekurs-kulturtechnikforschung-se",
          title: 'Lektürekurs Kulturtechnikforschung (SE)',
          description: "Einführung in die wichtigsten Grundlagentexte der Kulturtechnikforschung.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/lektuerekurs-kulturtechnikforschung/";
            },},{id: "teachings-mediengeschichte-berlins-se",
          title: 'Mediengeschichte Berlins (SE)',
          description: "Die Geschichte Berlins als Mediengeschichte seit Mitte des 18. Jahrhunderts in Theorietexten und Standortexkursionen.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/mediengeschichte-berlins/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/kassung_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6B%61%73%73%75%6E%67@%63%75%6C%74%75%72%65.%68%75-%62%65%72%6C%69%6E.%64%65", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7VfSCT4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
