import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'photo' }] }],
      // arrays are drag-sortable by default
      validation: (Rule) => Rule.min(1).error('Add at least one photo')
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'reference',
      to: [{ type: 'photo' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' })
  ],
  preview: {
    select: { title: 'title', media: 'cover', subtitle: 'description' }
  }
})
