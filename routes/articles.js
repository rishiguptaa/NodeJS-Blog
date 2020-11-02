const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

//route to create a new article
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})

//route to create edit an article
router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
})

//route to read the whole article
router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article })
})

//route to create a new article
router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))

//route to create a edit a particular article
router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveArticleAndRedirect('edit'))

//to delete an article
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
    } catch (e) {
      res.render(`articles/${path}`, { article: article })
    }
  }
}

//exporting all routes to the server to let the app use all routes
module.exports = router
