const mongoose = require('mongoose')

const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app')




mongoose.connect(process.env.DATABASE).then(con=>{
    console.log('DB Connection Successfull!');
})

const port = process.env.PORT || 3000;

const server = app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});

