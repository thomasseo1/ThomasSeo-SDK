# Thomas Seo - SDK

An SDK for the [Lord of the Rings](https://the-one-api.dev/) API.


## Installation

```
npm i thomassdk
```

## Usage

There are 5 different API endpoints to choose from: 
- book
- movie
- character
- quote
- chapter

## Rules


Each endpoint is set as a class. To use its methods, first create a new instance of the class you want and set as a variable.

All the endpoints except (book) require an access token. To obtain an access token, you must create an account on the [website](https://the-one-api.dev/).
- Pass the token as an argument when creating a new instance of an API class.

Invoke the methods to grab the data that you need then log the result to the console to view it.

To handle the async nature of grabbing the data, input a `.then` and `.catch` after the call.
- Within the `.then` console.log the response object and access its `data.docs` property to view the data.
- Within the `.catch` console.log an error message to display an errors if problem occurs.

### Book API
There are 3 different methods to choose from:

- getAllBooks()
  - Is used to request all the books from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificBook(id)
  - Is used to request a specific book based on the id.
  - Requires a valid id (string) of the book.

- getSpecificBookChapters(id)
  - Is used to request all chapters of one specific book.
  - Requires a valid id (string) of the book. 
  - Has the option of a second parameter (object) for inputting filters.

### Movie API
There are 3 different methods to choose from:

- getAllMovies()
  - Is used to request all the movies from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificMovie(id)
  - Is used to request a specific movie based on the id.
  - Requires a valid id (string) of the movie.

- getSpecificMovieQuotes(id)
  - Is used to request all quotes of one specific movie.
  - Requires a valid id (string) of the book. 
  - Has the option of a second parameter (object) for inputting filters.
  - Note: this only works for the Lord of the Rings trilogy.

### Character API
There are 3 different methods to choose from:

- getAllCharacters()
  - Is used to request all the characters and its metadata from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificCharacter(id)
  - Is used to request a specific character based on the id.
  - Requires a valid id (string) of the character.

- getSpecificCharacterQuotes(id)
  - Is used to request all movie quotes of one specific character.
  - Requires a valid id (string) of the book. 
  - Has the option of a second parameter (object) for inputting filters.

### Quote API
There are 2 different methods to choose from:

- getAllQuotes()
  - Is used to request all the movie quotes from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificQuoteFromMovie(id)
  - Is used to request a specific movie quote based on the id.
  - Requires a valid id (string) of the quote.

### Chapter API
There are 2 different methods to choose from:

- getAllChapters()
  - Is used to request all the book chapters from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificChapterFromBook(id)
  - Is used to request a specific book chapter based on the id.
  - Requires a valid id (string) of the quote.


### Options 
There is an option for filtering your requests by adding pagination, sorting, and filters.

#### Rules for using options:
- Must be an object.
- For multiple filtering in one request, separate each key value filter pair by comma. 
  - Ex:  `{limit: 200, symbol: 'budgetInMillions<100'}`

### Pagination
| Property | Description | Type | Default value | Example |
| ------------- | ------------- | ------------- | ------------- | ---------|
| limit | Controls the maximum number of items that may be returned | number | 100 | `{limit: 200}` |
| page | Controls what page you want returned | number | 1 | `{page: 2}` |
| offset | Controls the starting point within the collection of resource | number | 0 | `{offset: 2}` |


### Sorting
| Property | Description | Type | Default value | Example |
| ------------- | ------------- | ------------- | ------------- | ---------|
| asc | Controls if what is returned should be in ascending order | string | '' | `{sort: 'name:asc' }` |
| desc | Controls if what is returned should be in descending order| string | '' | `{sort: 'name:desc' }` |


### Filtering
| Property | Description | Type | Default value | Example |
| ------------- | ------------- | ------------- | ------------- | ---------|
| match or negate match | Returns data that matches or doesn't match the filter | string | '' | `{match: 'budgetInMillions=200'}, {match: 'budgetInMillions!=200'}` |
| include or exclude | Returns data that includes or excludes the filter | string | '' | `{include: 'race=Hobbit'}, {include: 'race!=Hobbit'}` |
| exists or doesn't exist | Returns data that exists or doesn't exist according to the filter  | string | '' | `{exists: 'name=Isembold Took'}, {exists: 'name!=Isembold Took'}` |
| regex | Returns data that passes or doesn't pass the regex | string | '' | `{regex: 'name=/foot/i'}, {regex: 'name!=/foot/i'}` |
| < or > or >= | Returns data that is filtered from the symbol | string | '' | `{symbol: 'budgetInMillions<100'}, {symbol: 'budgetInMillions>100'}, {symbol: 'budgetInMillions>=100'}` |


## Example Setup
```
import { 
  BookApi,
	MovieApi,
	CharacterApi,
	QuoteApi,
	ChapterApi 
  } from 'thomassdk'

// token must be in string format
const token = 'put-your-access-token-here';

const grabFromBooks = new BookApi();

const grabFromMovies = new MovieApi(token);

const grabFromCharacters = new CharacterApi(token);

const grabFromQuotes = new QuoteApi(token);

const grabFromChapters = new ChapterApi(token);



//Example requests for books
// grabFromBooks.getAllBooks()
// .then(response => console.log(response.data.docs))
// .catch(error => console.log('There was an error when grabbing all the books!', error))

// grabFromBooks.getSpecificBook('5cf58077b53e011a64671583')
// .then(response => console.log(response.data.docs))
// .catch(error => console.log('There was an error when grabbing a specific book!', error))

// grabFromBooks.getAllBooks({sort: 'name:asc'})
// .then(response => console.log(response.data.docs))
// .catch(error => console.log('There was an error grabbing all the chapters of a specific book!', error))

// grabFromBooks.getSpecificBookChapters('5cf58077b53e011a64671583')
// .then(response => console.log(response.data.docs))
// .catch(error => console.log('There was an error grabbing all the chapters of a specific book!', error))

//Example requests for movies
// grabFromMovies.getAllMovies()
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movies!', error))

// grabFromMovies.getAllMovies({symbol: 'budgetInMillions>100'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movies!', error))

// grabFromMovies.getSpecificMovie('5cd95395de30eff6ebccde58')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing a specific movie!', error))

// grabFromMovies.getSpecificMovieQuotes('5cd95395de30eff6ebccde5c')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing quotes from a specific movie!', error))

// grabFromMovies.getAllMovies({match: 'budgetInMillions=200'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movies!', error))


// Example requests for characters
// grabFromCharacters.getAllCharacters({include: 'race=Hobbit'})
// .then(response => console.log(response.data.docs))
// .catch(error => console.log('There was an error when grabbing all the characters!', error))

// grabFromCharacters.getAllCharacters({sort: 'name:asc'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the characters!', error))

// grabFromCharacters.getAllCharacters({exists: 'name=Frodo Baggins'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the characters!', error))

// grabFromCharacters.getAllCharacters({include: 'race=Hobbit'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the characters!', error))

// grabFromCharacters.getAllCharacters({regex: 'name!=/foot/i'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the characters!', error))

// grabFromCharacters.getSpecificCharacter('5cd99d4bde30eff6ebccfd2f')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing a specific character!', error))

// grabFromCharacters.getSpecificCharacterQuotes('5cd99d4bde30eff6ebccfc15')
// 	.then(response =>  console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the quotes from a character.', error))


// Example requests for quotes
// grabFromQuotes.getAllQuotes()
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movie quotes!', error))

// grabFromQuotes.getSpecificQuoteFromMovie('5cd96e05de30eff6ebcce84b')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing a specific quote from a movie!', error))

// Example requests for chapters
// grabFromChapters.getAllChapters()
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the book chapters!', error))

// grabFromChapters.getAllChapters({exists: 'chapterName=The Black Gate Opens'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the book chapters!', error))

// grabFromChapters.getSpecificChapterFromBook('6091b6d6d58360f988133bbf')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing a specific chapter from a book!', error))
```