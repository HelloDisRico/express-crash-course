// const exp = require('constants');
const express = require('express');
const path = require('path');


const logger = require('./MiddleWare/logger')
const app = express();

//Init MiddleWare
//                            app.use(logger);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false } ));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

//app.get('/', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));