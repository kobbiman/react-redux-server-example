# react-redux-server-example
React-Redux server side rendering (SSR) example.  
Server is Express(node.js).

## step
1. download
2. npm install
3. npm run dev
4. browse http://localhost:8080/  

## using packages
* react
* react-redux
* react-router-redux
* css-loader
* isomorphic-fetch
* webpack
* etc...

## babelrc
```
{
  "presets": ["react", "es2015", "stage-0"]
}
```

## files
When npm run dev or npm run build, create this files.
```
.
├── dist/
│   └── server.js
└── public/
    ├── bundle.js
    └── styles.css
```

## access
If you access http://localhost:8080/detail direct, meta.title is Detail Container fetchData.  
http://localhost:8080/detail access by any other, meta.title is Detail Components.  
componentWillMount is not called twice.(on server html, on browser js)
