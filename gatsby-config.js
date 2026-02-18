module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    // Your Name
    name: 'Jayden Loring',
    // Main Site Title
    title: `Ryan Fitzgerald | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: '@yLoringJayden',
github: 'https://github.com/SP26-CS315-JaydenLoring/',
linkedin: 'https://www.linkedin.com/in/jayden-loring-96734a265/',

    about: `I am a Computer Science student at Oakland City University with a strong interest in building reliable, practical software that solves real problems. My focus is primarily backend and systems-adjacent development, where I enjoy working close to how things actually function rather than hiding behind abstractions. I have experience developing applications using Python, JavaScript, C, and SQL, and I am comfortable working across the full development workflow, from design to implementation and version control.

Through my coursework and personal projects, I have developed a solid foundation in data structures, backend development, and application logic. I enjoy breaking down complex problems, designing clean solutions, and writing code that is readable, efficient, and maintainable. I am particularly interested in software engineering, backend systems, and the intersection of software with hardware and low-level computing.

What sets me apart is my technical discipline and persistence. I approach problems methodically, value strong fundamentals, and continuously refine my skills through hands-on projects and experimentation. I am currently working toward building a strong professional portfolio and gaining real-world experience through internships or entry-level roles where I can continue learning, contribute meaningfully, and grow as a developer.`,

education: [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Oakland City University',
    graduation: 'Expected May 2026',
    coursework: [
      'Data Structures and Algorithms',
      'Application Development (Backend)',
      'Database Systems',
      'Modern Web Technologies',
      'Computer Organization and C Programming',
    ],
  },
],

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
  {
    name: 'CS300 Digital Notebook',
    description:
      'A structured GitHub repository used to document coursework, code snippets, and development concepts while practicing professional Git workflows and documentation.',
    link: 'https://github.com/yourusername/cs300-digital-notebook',
  },
  {
    name: 'Command-Line Data Processor',
    description:
      'A Node.js command-line application that reads JSON data, processes user input, and writes filtered results to files with proper validation and error handling.',
    link: 'https://github.com/yourusername/node-data-processor',
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'A responsive portfolio website showcasing my projects, skills, and academic background, built and deployed using modern static site tooling.',
    link: 'https://yourusername.github.io',
  },
],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
   skills: [
  'Python',
  'JavaScript',
  'C',
  'Java',
  'SQL',
  'HTML',
  'CSS',
  'Node.js',
  'REST APIs',
  'Git',
  'GitHub',
  'Linux',
  'MySQL',
  'SQLite',
  'Object-Oriented Programming',
],

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
