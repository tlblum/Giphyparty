async function getData() {
const response = await axios.get('http://api.giphy.com/v1/gifs/search');
console.log(response)
console.log("Let's get this party started!");
}