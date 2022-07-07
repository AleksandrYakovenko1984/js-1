// ==============================================1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

 
    orderedItems.forEach((i) => {
    totalPrice += i
})
  // Пиши код выше этой строки
  return totalPrice;
}
// =========================================2

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    numbers.forEach ( function(numbers)   {if
       (numbers > value) {
        filteredNumbers.push(numbers);
       }
      })
    
  
    // Пиши код выше этой строки
    return filteredNumbers
}
  // ====================================================3
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
  
   firstArray.forEach(function(i) {if
       (secondArray.includes(i)) {
        commonElements.push(i);
       }
      })
    return commonElements;
    // Пиши код выше этой строки
}
  // =========================================================4

  // Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}
// =============================================5
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => 
 quantity * pricePerItem

// Пиши код выше этой строки
// ==============================================6
// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки
// ===========================================7
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  // ========================================8
  // Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
  // ===============================9
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
   const newArray = [];
    numbers.forEach(elem => {
    newArray.push(elem % 2 === 0 ? elem + value : elem);
  });

  return newArray;

    
    // Пиши код выше этой строки
}
  // ======================================10
  const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => {
return planet.length
});
// ================================11
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const titles = books.map((book) => {
  return book.title
  });
  // =====================================12
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books.flatMap((book) => {
  return book.genres
  });
  // ======================================13
  const getUserNames = users =>
  users.map(user => user.name);
  // ==========================14
  // Пиши код ниже этой строки
const getUserEmails = users => users.map(user => user.email);
// ============================================================15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0 );
                                   
                                   
const oddNumbers = numbers.filter(number => number % 2 !== 0);
// ==============================================================16
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
   const allGenres = books.flatMap((book) => book.genres);
  const uniqueGenres = allGenres.filter((elem, index) => 
    allGenres.indexOf(elem) === index);
    // ===================================================17
    const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// =================================================18
// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => 
 users.filter((user) => user.eyeColor === color);
// Пиши код выше этой строки
// =================================================19
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => 
 users.filter((user) => user.age >= minAge && user.age <= maxAge);
// Пиши код выше этой строки
// ===================================================20
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => 
  users.filter((user) => user.friends.includes( friendName))
;
// Пиши код выше этой строки
// ====================================================21
// Пиши код ниже этой строки
const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  const uniqueFriends = allFriends.filter((elem, index) => 
    allFriends.indexOf(elem) === index);
  return uniqueFriends
};

// Пиши код выше этой строки
// ============================================================22
// Пиши код ниже этой строки
const getActiveUsers = (users) => 
  users.filter((user) => user.isActive === true) 
;
// Пиши код выше этой строки

// ==================================================================23
// Пиши код ниже этой строки
const getInactiveUsers = (users) => 
  users.filter((user) => user.isActive === false) 
;
// Пиши код выше этой строки
// ============================================================24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);
// ===============================================================25
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => 
   users.find((user) => user.email === email)
;
// Пиши код выше этой строки
// ============================================================26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((num) => num %2 === 0);
const eachElementInFirstIsOdd = firstArray.every((num) => num %2 !== 0);

const eachElementInSecondIsEven = secondArray.every((num) => num %2 === 0);
const eachElementInSecondIsOdd = secondArray.every((num) => num %2 !== 0);


const eachElementInThirdIsEven = thirdArray.every((num) => num %2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((num) => num % 2 !== 0);
// =====================================================================27
// Пиши код ниже этой строки
const isEveryUserActive = (users) => 
  users.every((user) => user.isActive) 
;
// Пиши код выше этой строки
// ===========================================================================28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some((num) => num % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((num) => num % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((num) => num % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((num) => num % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((num) => num % 2 === 0);;
const anyElementInThirdIsOdd = thirdArray.some((num) => num % 2 !== 0);
// ====================================================================29
// Пиши код ниже этой строки
const isAnyUserActive = users => 
  users.some((user) => user.isActive) 
;
// Пиши код выше этой строки
// ======================================================================30
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc, num) => {

  return acc + num;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;
// =============================================================31
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((acc, obj) => {
return acc + obj.playtime /   obj.gamesPlayed
}, 0);
// ===========================================================32
// Пиши код ниже этой строки
const calculateTotalBalance = users => 
  users.reduce((acc, user) =>  acc + user.balance, 0) ;
// Пиши код выше этой строк
// =====================================================33
// Пиши код ниже этой строки
const getTotalFriendCount = users => 
   users.reduce((acc, user) => acc + user.friends.length, 0)
;
// Пиши код выше этой строки
// ===========================================================34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort()
const alphabeticalAuthors = [...authors].sort()
// =======================================================35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// ==============================================================36
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  // ===============================================================37
  const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => 
a.author.localeCompare(b.author)
) ;

const sortedByReversedAuthorName = [...books].sort((a, b) => 
b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b)  => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// ==============================================================================38
// Пиши код ниже этой строки
const sortByAscendingBalance = users => 
  [...users].sort((a, b) => a.balance - b.balance)
;
// Пиши код выше этой строки
// ==============================================================================39
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => 
  [...users].sort((a, b) => b.friends.length -a.friends.length) 
;
// Пиши код выше этой строки
// ======================================================================40
// Пиши код ниже этой строки
const sortByName = users => 
  [...users].sort((a, b) => a.name.localeCompare(b.name)) 
;
// Пиши код выше этой строки
// ==================================================================41
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки
if (!!books.filter(book => book.rating > MIN_BOOK_RATING).length) {
  console.log(books.filter(book => book.rating > MIN_BOOK_RATING).length)
} else {
  console.log("Not found")
}
const names = books
.filter(book => book.rating > MIN_BOOK_RATING)
.map((book) => book.author) 
  .sort()
// ================================================================42
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => 
   [...users].sort((a, b) => a.friends.length -b.friends.length).map((user) => user.name) 

// Пиши код выше этой строки
// =========================================================================43
// Пиши код ниже этой строки
const getSortedFriends = users => 
  users.flatMap((user) => user.friends)
.filter((user, index, users) => 
    users.indexOf(user) === index)
.sort((a, b) => a.localeCompare(b))

// Пиши код выше этой строки
// =============================================================================44
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => 
  users.filter((user) => user.gender === gender) 
.reduce((acc, user) => acc + user.balance, 0)

// Пиши код выше этой строки

