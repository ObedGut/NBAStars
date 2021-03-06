const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port',process.env.PORT || 8080);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/nbastars' ,require('./routes/nbastars'));

//Server awaken
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});