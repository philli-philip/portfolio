import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article-category',
  title: 'Article Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
