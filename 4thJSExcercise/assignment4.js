// Homework: Read documentation and write an example of using Promise.all, .allSettled, .race, and .any to fetch data from this api: https://pokeapi.co/
// You can choose any of the endpoints to use
// https://pokeapi.co/api/v2/berry/{id or name}/

//Promise.allSettled
const berryIds = [1,2,3,22222]

const fetchBerryData = (id) => {
    return fetch(`https://pokeapi.co/api/v2/berry/${id}`)
    .then(response => {
        if (!response.ok) { 
            throw new Error(`Can not find Berry ${id}`);
        }
        return response.json();
    });
};

Promise.allSettled(berryIds.map(id=> fetchBerryData(id)))
    .then(results => {
        results.forEach((result,index) =>{
            const berryId = berryIds[index];
            if (result.status === 'fulfilled') {
                console.log(`Berry ${berryId} data:`, result.value);
            } else {
                console.log(`failed to fetch ${berryId}:`, result.reason.message);
            }
        });
    })


console.log(fetchBerryData(1))



//.all

//.race

//.any