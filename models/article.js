const mongoose = require('mongoose')
const marked = require('marked') 
// used to render HTML in node JS
const slugify = require('slugify')
//to avoid the random id given automatically and have desired string or element in url
const createDomPurify = require('dompurify')
// to sanitize the NTML so that malicious code is not entered
const { JSDOM } = require('jsdom')
//only part JSDOM is needed
const dompurify = createDomPurify(new JSDOM().window)
//used to create html elements and purify it

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  }
})

articleSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    //purifying the content in markdown text area.
  }

  next()
})

module.exports = mongoose.model('Article', articleSchema)
