// Homework: Read documentation and write an example of using Promise.all, .allSettled, .race, and .any to fetch data from this api: https://pokeapi.co/
// You can choose any of the endpoints to use
// https://pokeapi.co/api/v2/berry/{id or name}/

//Promise.allSettled
// const berryIds = [1,2,3,22222]

// const fetchBerryData = (id) => {
//     return fetch(`https://pokeapi.co/api/v2/berry/${id}`)
//     .then(response => {
//         if (!response.ok) { 
//             throw new Error(`Can not find Berry ${id}`);
//         }
//         return response.json();
//     });
// };

// Promise.allSettled(berryIds.map(id=> fetchBerryData(id)))
//     .then(results => {
//         results.forEach((result,index) =>{
//             const berryId = berryIds[index];
//             if (result.status === 'fulfilled') {
//                 console.log(`Berry ${berryId} data:`, result.value);
//             } else {
//                 console.log(`failed to fetch ${berryId}:`, result.reason.message);
//             }
//         });
//     })


// console.log(fetchBerryData(1))   

//.all
// const berryIds = [1,2,3]

// const fetchBerryData = (id) => {
//     return fetch(`https://pokeapi.co/api/v2/berry/${id}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Can not find Berry ${id}`);
//         }
//         return response.json();
//     });
// };

// Promise.all(berryIds.map(id => fetchBerryData(id)))
//     .then(results => {
//         results.forEach((berry, index) => {
//             const berryId = berryIds[index];
//             console.log(`This is a berry ${berryId}`, berry);
//         });
//     })

//     .catch(error => {
//         console.error(`This is failed message:`,error.message);

//     });

// console.log(fetchBerryData(1));



//.race
// const fetchBerryData = (id) => {
//     return fetch(`https://pokeapi.co/api/v2/berry/${id}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Can not find Berry ${id}`);
//         }
//         return response.json();
//     });
// };

// const racingBerry = async () => {
//     const berryIds = [6,7,8,111111];
    
//     try { 
//         const fastBerry = await Promise.race(berryIds.map(id => fetchBerryData(id)));
//         console.log('Im a fast berry', fastBerry);
//     }catch (error) {
//         console.error('first failed promise', error.message);
//     }
// };

// racingBerry();


//.any //Give me the first successful result. I don’t care about failures unless everything fails.

const fetchBerryData = (id) => {
    return fetch(`https://pokeapi.co/api/v2/berry/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Can not find Berry ${id}`);
            }
            return response.json();
        });
};

const getFirstBerry = async () => {
    const berryIds = [3, 4, 5];

    try {
        const firstBerry = await Promise.any(berryIds.map(id => fetchBerryData(id)));
        console.log('Im a first good berry', firstBerry);
    } catch (error) {
        console.error('failed berry alert:', error.message);
    }
}

getFirstBerry(2)