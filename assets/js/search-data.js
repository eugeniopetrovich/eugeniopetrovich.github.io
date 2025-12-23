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
        },{id: "post-poster-at-epsa25",
        
          title: "Poster at EPSA25",
        
        description: "Poster presented at EPSA25 in Groningen",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/EPSA/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
