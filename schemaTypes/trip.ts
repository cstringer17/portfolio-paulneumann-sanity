// /schemas/trip.ts
import {defineType, defineField} from 'sanity'
import {certOptions} from './constants'

export default defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      initialValue: 'prebook',
      options: {
        list: [
          {title: 'Pre-book (Coming Soon)', value: 'prebook'},
          {title: 'Active', value: 'active'},
          {title: 'Sold Out', value: 'soldout'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'e.g. “Maldives – South Ari Atoll”',
    }),
    defineField({
      name: 'whenText',
      type: 'string',
      description: 'Human text like “Nov–Dec 2025”',
    }),
    defineField({
      name: 'minCert',
      title: 'Minimum Certification',
      type: 'string',
      options: {list: certOptions},
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From (optional)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Short bullets: “Tiger shark encounters”, “Small groups”, etc.',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'heroImage', location: 'location', whenText: 'whenText'},
    prepare({title, media, location, whenText}) {
      return {
        title,
        subtitle: [location, whenText].filter(Boolean).join(' • '),
        media,
      }
    },
  },
})
