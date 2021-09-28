//----------------------------------------------------------------------------------------
// Jay Lin
// API Practice
// My Favorite Songs
const express = require('express');
const app = express();
const PORT = 8080; // HTTP alt, above the restricted range

//----------------------------------------------------------------------------------------
// Set up the app to listen for requests
const uri = 'songs';
const defaultSongs = [
    {
        "name": "STAY (with Justin Bieber)",
        "artist(s)": ["The Kid LAROI", "Justin Bieber"],
        "duration": "2:21",
    },
    {
        "name": "INDUSTRY BABY",
        "artist(s)": ["Lil Nas X", "Jack Harlow"],
        "duration": "3:32",
    },
];

app.use(express.json()) // use middleware to convert and handle JSON
app.listen(
    PORT,
    () => console.log(`Server is alive on http://localhost:${PORT}/${uri}`)
);

//----------------------------------------------------------------------------------------
// HANDLE REQUESTS
// ex: curl http://localhost:8080/tshirt => {"tshirt":"SHIRT","size":"large"}
app.get(`/${uri}`, (request, response) => {
    response.status(200).send(defaultSongs);
});

// Handle many new submitted tshirts with dynamic ID
app.post(`/${uri}/:id`, (request, response) => {
    const { id } = request.params;
    const { name } = request.body;
    if (!name) {
        response.status(418).send({
            message: "ERROR: Sorry, you must include a name for your SONG!"
        })
    }
    response.send({
        tshirt: `You UPLOADED 1 SONG: ${name}, with ID: ${id}!`,
    })
});