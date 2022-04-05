const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 9000, function() {
<<<<<<< HEAD
	console.log('App is running on http://locahost:9000');
});
=======
  console.log('Project is running on http://localhost:9000');
});
>>>>>>> fc42f3d18f6e3284179c614287c0e15635254bde
