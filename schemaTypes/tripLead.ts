// /schemas/tripLead.ts
import {defineType, defineField} from 'sanity'
import {certOptions} from './constants'

export default defineType({
  name: 'tripLead',
  title: 'Trip Lead',
  type: 'document',
  fields: [
    defineField({
      name: 'trip',
      type: 'reference',
      to: [{type: 'trip'}],
      description: 'Which trip this enquiry is about (optional for general interest).',
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'certLevel',
      title: 'Certification Level',
      type: 'string',
      options: {list: certOptions},
    }),
    defineField({
      name: 'divesLogged',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'message',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'consent',
      title: 'I agree to be contacted about this trip',
      type: 'boolean',
      validation: (Rule) =>
        Rule.required().custom((v) => (v === true ? true : 'Consent is required')),
    }),
    defineField({
      name: 'submittedAt',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
})
