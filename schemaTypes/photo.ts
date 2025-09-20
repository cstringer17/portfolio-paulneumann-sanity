import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'shotAt', title: 'Shot date', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'geopoint' }),
    defineField({
      name: 'exif',
      title: 'EXIF',
      type: 'object',
      fields: [
        { name: 'camera', type: 'string' },
        { name: 'lens', type: 'string' },
        { name: 'focalLength', type: 'string' },
        { name: 'aperture', type: 'string' },
        { name: 'shutter', type: 'string' },
        { name: 'iso', type: 'number' }
      ]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }]
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' })
  ],
  orderings: [
    { title: 'Order (asc)', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Order (desc)', name: 'orderDesc', by: [{ field: 'order', direction: 'desc' }] },
    { title: 'Shot date (new→old)', name: 'shotDesc', by: [{ field: 'shotAt', direction: 'desc' }] }
  ],
  preview: {
    select: { title: 'title', media: 'image', subtitle: 'caption' }
  }
})
