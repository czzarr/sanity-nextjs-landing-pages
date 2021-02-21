export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '603274205c468ab1eb676fd4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cmtaaax2',
                  apiId: '00e7a538-6325-4d66-baa9-25532d2b7c86'
                },
                {
                  buildHookId: '60327420550410c80a1785aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t4tejnae',
                  apiId: 'dd432058-484a-40d4-8b18-77e5ec2b1246'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/czzarr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t4tejnae.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
