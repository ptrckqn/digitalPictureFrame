# digitalPictureFrame
Digital picture frame made with NodeJS, Express, and React

<ul>
<li>React components consist of the weather information, date, time, and changing background. States used to store image URL on server, time, date, and weather. Props used to pass the image file path from the App.js to the Background.js component</li>
<li>NodeJS server used to add all the image filenames into an array which is passed onto the react App.js through an axios request. Also handles uploading new images to the proper directory (./client/build/images) using multer.</li>
</ul>

<a href="https://react-picture-frame.herokuapp.com" target="_blank">View Demo</a>

Feel free to upload an image to the server for testing purposes by clicking on the weather icon located next to the current temperature (in Calgary, AB). All newly uploaded images are deleted every few days as Heroku refreshes the repository.
Note: The application hosted on Heroku changes the background image every 5 seconds for demonstration purposes.
