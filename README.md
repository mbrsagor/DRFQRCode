# Homework money management App
> The project is frontend React Redux application which bakcend use python popular web framework like Django.

In the project directory, you can run the below commands:

```
git clone https://github.com/mbrsagor/homework-frontend.git
cd homework-frontend
yarn install
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


###### If redux dev tools will not work properly you may follow the follow the code.
```javascript
compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
```
