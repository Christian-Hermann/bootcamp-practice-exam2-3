
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //

const setDigitalCode = function(collection, value){
 
    for(var i = collection.length - 1; i >= 0; i--){
        if( i % 2 === 0){
            collection[i].digitalCode = value
        }
    }
 return collection    
};

// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
    return array.filter(function(item){
        return item.genreTags.includes(tag)
    })
};



// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
    return array.filter(function(item){
     for (var i = 0; i < item.specialFeatures.length; i++){
        if (item.specialFeatures[i].type === type){
            return true
        } 
        
     }
     return false;
     
    });
};


// PROBLEM #4 //
/*
const getTopSpecialFeature = function(array, title){
 
    if(array.length == 0){
        return "no movie found matching that title"
    }

    if(array[0].title === title){
        return array[0].title.spcialFeature[0]+ " Special Feature: " + array[0].specialFeatures[0].title
    }
console.log(array[0])


    return getTopSpecialFeature(array.slice(1), title)
   
};

*/
// PROBLEM #5 //

const mapTitles = function(array){
   return array.map(function(item){
    return item.title + " (" + item.year + ") - .dir " + item.director
   })
};



// PROBLEM #6 //

const mapSpecialFeatures = function(array){
    
};

// PROBLEM #7 //

const createNonsenseString = function(){
    
};

// PROBLEM #8 //

const getValues = function(){
    
};
