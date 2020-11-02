const express = require('express')
//database connection
const mongoose = require('mongoose')
//importing the models
const Article = require('./models/article')
//importing all routes
const articleRouter = require('./routes/articles')
//used to create methods like post and get(here used to create DELETE and PUT)
const methodOverride = require('method-override')
const app = express()

//connecting to database
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

//rendering views
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  //sorting the articles in descending order accorting to the date, i.e., new one at the top
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})
//using all route paths using app.use
//every route created in route folder are added at the end of /articles
app.use('/articles', articleRouter)

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
