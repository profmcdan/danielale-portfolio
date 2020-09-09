export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f586f51e0d3cefb9baddc19',
                  title: 'Sanity Studio',
                  name: 'danielale-portfolio-studio',
                  apiId: '6cc009ef-0df9-43bb-9318-604e67fa2214'
                },
                {
                  buildHookId: '5f586f51e6317ecf0be9efcf',
                  title: 'Portfolio Website',
                  name: 'danielale-portfolio',
                  apiId: 'a1e81332-f5f1-4205-89e3-ac5124f447e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/profmcdan/danielale-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://danielale-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
