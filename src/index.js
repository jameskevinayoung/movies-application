/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');


$('#info').append('Now Loading'); //jquery appending #info with Now Loading

$.ajax('/api/movies').done(function(data) {  //ajax request from api movies; when done run function
    $('#info').html('');  //change html of #info
    data.forEach(function(movie){ //loop through the data (an array with a forEach) getting each movie
      $('#info').append(formatMovies(movie)); //append the #info with movie title
    })
});

function formatMovies(movie){//create a function that formats the movie title and rating
    let movieTitle = "<td class='movie'>"+ movie.title+"</td>";
    let movieRating = "<td class='rating'>"+ movie.rating+"</td>";
    let movieItem = "<tr class='rowcontent'>" + movieTitle+movieRating + "</tr>";
    //variable that formats each line that will be added to the
    return movieItem;
}


// Allow users to add new movies

// Create a form for adding a new movie that has fields for the movie's title and rating
/**
 * When the form is submitted, the page should not reload / refresh, instead, your javascript should make a
 * POST request to /api/movies with the information the user put into the form

 */

$('#submitButton').click(function(e){
    e.preventDefault();


    $.ajax('/api/movies', {
        type: "POST",
        dataType: "json",
        data: {
            title: $('#movieTitleInput').val(),
            rating: $('input[name=rating]:checked').val()
        }
    });


    $.ajax('/api/movies').done(function(data) {  //ajax request from api movies; when done run function
        $('#info').html('');  //change html of #info
        data.forEach(function(movie){ //loop through the data (an array with a forEach) getting each movie
            $('#info').append(formatMovies(movie)); //append the #info with movie title
        })
    });
    function formatMovies(movie){//create a function that formats the movie title and rating
        let movieTitle = "<td class='movie'>"+ movie.title+"</td>";
        let movieRating = "<td class='rating'>"+ movie.rating+"</td>";
        let movieItem = "<tr class='rowcontent'>" + movieTitle+movieRating + "</tr>";
        //variable that formats each line that will be added to the
        return movieItem;
    }
});




//
// getMovies().then((movies) => {
//   console.log('Here are all the movies:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });
//
//
