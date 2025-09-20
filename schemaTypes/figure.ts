import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'figure',
  title: 'Figure',
  type: 'object',
  fields: [
    defineField({ name: 'image', title: 'Image', type: 'image', options: {hotspot: true} }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'credit', title: 'Credit', type: 'string' }),
  ],
  preview: {
    select: { media: 'image', title: 'caption', subtitle: 'credit' }
  }
})
