const express=require('express');
const app=express();

const { spawn } = require('child_process');

app.get('/streamlit', (req, res) => {
  const streamlitProcess = spawn('streamlit', ['run', 'olympics.py']);
  streamlitProcess.stdout.pipe(process.stdout);
  streamlitProcess.stderr.pipe(process.stderr);
  res.send('Streamlit app is running...');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
