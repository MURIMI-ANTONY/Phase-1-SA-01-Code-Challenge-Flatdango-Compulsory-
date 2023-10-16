# Phase-1-SA-01-Code-Challenge-Flatdango-Compulsory-

## Overview
This web application provides a simple interface for users to view a list of movies available in a theater, see details about a selected movie, and purchase tickets. The application is built using HTML, CSS, and JavaScript, and fetches movie data from a local server(db.json).

## Features
First Movie: Shows all the details of the first movie .
All Movies: Shows all available movies and enables the user to buy a ticket of any or/and all movies dispalyed. 

## Prerequisites
A web server to serve the application (e.g., Apache, Nginx).
A local server or API endpoint that provides movie data in the specified format.

## Installation
Clone or download the repository to your local machine.
Place the files in the appropriate directory of your web server.
Ensure that the local server or API endpoint providing movie data is running and accessible from the application.
Run (json-server --watch db.json)
Open a web browser and navigate to the location where the application is served.

## Usage
On page load, the application will display a list of movies on the left side.
If tickets are available for the selected movie, you can click the "Buy Ticket" button to purchase a ticket. The number of available tickets will decrease by one.
If the movie is sold out, the "Buy Ticket" button will be disabled.

## License
This project is open-source and free to use. Please provide appropriate attribution if you use or modify the code.

## Support
For any issues or feature requests, please open an issue on the repository or contact the developer directly.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
