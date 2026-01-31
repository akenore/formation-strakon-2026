import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
     return [
          {
               url: 'https://formation.strakon.fr',
               lastModified: new Date(),
               changeFrequency: 'monthly',
               priority: 1,
          },
     ]
}
