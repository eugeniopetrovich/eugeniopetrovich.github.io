// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Here you can find my publications in reversed chronological order. PDFs are available as well.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a short version of my academic cv. Download the full version clicking on the pdf download button. Go to the section Publications for my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Find here projects I am currently working on, in research and public engagement.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I currently teach",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Some of my Github repositories that might be useful to other researchers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-paper-accepted-at-sti-enid-2026",
        
          title: "Paper accepted at STI-ENID 2026",
        
        description: "Paper on diversity in philosophy of science accepted at STI-ENID",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/STI_ENID/";
          
        },
      },{id: "post-visiting-professorship-in-bochum",
        
          title: "Visiting professorship in Bochum",
        
        description: "Next semester, I will be DAAD Guest Professor at the University of Bochum",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Visiting_Bochum/";
          
        },
      },{id: "post-sophis-paper-out-in-scientometrics",
        
          title: "SOPHIS paper out in Scientometrics",
        
        description: "New paper&#39;s out!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/SOPHIS_paper/";
          
        },
      },{id: "post-unito-working-group-on-open-science",
        
          title: "UniTO Working Group on Open Science",
        
        description: "Official appointment",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Open_Science/";
          
        },
      },{id: "post-poster-at-epsa25",
        
          title: "Poster at EPSA25",
        
        description: "Poster presented at EPSA25 in Groningen",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/EPSA/";
          
        },
      },{id: "post-workshop-philosophy-of-science-meets-quantitative-studies-of-science",
        
          title: "Workshop Philosophy of Science meets Quantitative Studies of Science",
        
        description: "International workshop on scientometrics and philosphy of science",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Workshop/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-first-version-of-the-website-is-online",
          title: 'First version of the website is online!',
          description: "",
          section: "News",},{id: "projects-star-war-antichi-vs-moderni",
          title: 'Star War, Antichi vs Moderni',
          description: "A board game on the Scientific Revolution",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Antichi_Moderni/";
            },},{id: "projects-citation-modelling",
          title: 'Citation modelling',
          description: "Modelling citations with Agent-Based Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Citation_model/";
            },},{id: "projects-data-cleaning",
          title: 'Data cleaning',
          description: "Reflections and code on data cleaning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Data_cleaning/";
            },},{id: "projects-diversity-in-philosophy-of-science",
          title: 'Diversity in Philosophy of Science',
          description: "Investigating diversity in philosophy of science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Div_Phil_Sci/";
            },},{id: "projects-edhiphy",
          title: 'EDHIPHY',
          description: "Enriched Data for the History of Philosophy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Edhiphy/";
            },},{id: "projects-interviews",
          title: 'Interviews',
          description: "Public engagement and outreach",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Interviews/";
            },},{id: "projects-atlas-of-philosophy-of-science",
          title: 'Atlas of Philosophy of Science',
          description: "Building a data-driven atlas of philosophy of science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_Phil_Sci_Atlas/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%75%67%65%6E%69%6F.%70%65%74%72%6F%76%69%63%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/eugeniopetrovich", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9646-0471", "_blank");
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
          window.open("https://scholar.google.com/citations?user=U6nN8roAAAAJ&hl", "_blank");
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
