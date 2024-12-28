document.getElementById('get-location').addEventListener('click', () => {
    document.getElementById('output').innerHTML = "Fetching location..."
    getip();
let m=document.getElementById(`map`)
});
async function getip() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}`);
            console.log(`Longitude: ${longitude}`);
            console.log(document.getElementById(`map`).src=`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.005},${latitude-0.005},${longitude+0.005},${latitude+0.005}&layer=mapnik&marker=${latitude},${longitude}`)
            document.getElementById('output').innerHTML = "Location Fetched."
        },
        (error) => {
            console.error(`Error: ${error.message}`);
            alert("Location cannot be fetched.")
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}

}