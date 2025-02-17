const express = require('express');
const cors = require('cors');
// const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();


const app = express();


// Enable CORS for all origins
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/passwords', require('./routes/passOpRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'passOp', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));