/* node.js */
import express from 'express'
import path from 'path'
import compression from 'compression'
import serialize from 'serialize-javascript'

/* react */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/* store */
import { configureStore } from './store'

/* route */
import routes from './routes'

const app = express()

app.use(compression())

/* static file path */
app.use(express.static(path.join(process.cwd(),'public')))

/* any path */
app.use((req,res) => {
  const memoryHistory = createMemoryHistory(res.url)
  const store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if(error){
      res.status(500).send(error.message)
    }
    else if(redirectLocation){
      res.redirect(302,redirectLocation.pathname + redirectLocation.search)
    }
    else if(renderProps){
      const promises = renderProps.components.map((component) => {
        if(component.fetchData){
          return store.dispatch(component.fetchData(store.dispatch))
        }
        else{
          return Promise.resolve(0)
        }
      })

      Promise.all(promises).then(() => {
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        const meta = store.getState().meta;
        res.send('<!doctype html>\n' + renderToString(<HTML content={content} meta={meta} store={store} />))
      }).catch((e) => {
        console.log(e)
        console.log("rejected")
        res.status(500).send(error.message)
      })
    }
  })
})

const HTML = ({content,meta,store}) => (
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
      <title>{meta.title}</title>
      <link rel="stylesheet" type="text/css" href="/styles.css" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.img} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content="mycontest" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@twitter_account" />

      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
      <script src="/bundle.js" />
    </body>
  </html>
)

app.listen(8080,function() {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})