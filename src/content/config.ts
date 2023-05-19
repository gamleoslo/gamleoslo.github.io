import { z, defineCollection} from 'astro:content';

const eventCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
    }),
})

export const collections = {
    "events": eventCollection
}