// Step 1: Create an array of favorite movies
let favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Parasite"];
console.log("Second movie:", favoriteMovies[1]);

// Step 2: Declare an array using the constructor method
let movies = new Array(5);
movies[0] = "Inception";
movies[1] = "The Matrix";
movies[2] = "Interstellar";
movies[3] = "The Dark Knight";
movies[4] = "Parasite";
console.log("First movie:", movies[0]);

// Step 3: Add a new movie at the 3rd position
movies.splice(2, 0, "The Prestige");
console.log("Updated movie list:", movies);
console.log("Array length:", movies.length);

// Step 4: Declare an array using literal notation and delete first movie
let moviesLiteral = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Parasite"];
delete moviesLiteral[0];
console.log("Movies after delete:", moviesLiteral);

// Step 5: Declare an array with 7 movies
let moviesExpanded = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Parasite", "The Prestige", "Memento"];
console.log("Movies using for/in loop:");
for (let index in moviesExpanded) {
    console.log(moviesExpanded[index]);
}

// Step 6: Iterate using for/of loop
console.log("Movies using for/of loop:");
for (let movie of moviesExpanded) {
    console.log(movie);
}

// Step 7: Sort and display movies
console.log("Sorted Movies:");
moviesExpanded.sort();
for (let movie of moviesExpanded) {
    console.log(movie);
}

// Step 8: Create least favorite movies array
let leastFavMovies = ["Movie A", "Movie B", "Movie C"];
console.log("\nMovies I like:");
moviesExpanded.forEach(movie => console.log(movie));

console.log("\nMovies I regret watching:");
leastFavMovies.forEach(movie => console.log(movie));

// Step 9: Merge arrays and display in reverse order
let allMovies = moviesExpanded.concat(leastFavMovies);
console.log("Merged and Reverse Sorted Movies:");
console.log(allMovies.reverse());

// Step 10: Display last item
console.log("Last Movie:", allMovies[allMovies.length - 1]);

// Step 11: Display first item
console.log("First Movie:", allMovies[0]);

// Step 12: Remove bad movies and replace them
let badMoviesIndices = leastFavMovies.map(movie => allMovies.indexOf(movie));
badMoviesIndices.forEach(index => {
    if (index !== -1) allMovies[index] = "New Favorite Movie";
});
console.log("Updated Movie List:", allMovies);

// Step 13: Multi-dimensional array with rankings
let rankedMovies = [
    ["Inception", 1],
    ["The Matrix", 2],
    ["Interstellar", 3],
    ["The Dark Knight", 4],
    ["Parasite", 5]
];

// Filtering out just movie names
let movieNames = rankedMovies.map(movie => movie[0]);
console.log("Filtered Movie Names:", movieNames);
