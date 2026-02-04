import { MetadataRoute } from 'next'
import { properties } from '@/data/properties'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://puntotierra.mx'

    // Static routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/residencial`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/comercial`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/desarrollos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/macrolotes`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]

    // Dynamic property routes
    const propertyRoutes: MetadataRoute.Sitemap = properties.map((property) => ({
        url: `${baseUrl}/propiedades/${property.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    return [...routes, ...propertyRoutes]
}
