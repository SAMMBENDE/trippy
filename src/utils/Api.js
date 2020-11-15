import Config from "../Config";
const { host } = Config;

class Api {
    getHome() {
        const url = `${host}/api/home`;
        return fetch(url)
            .then(res => res.json())
            .then(res => ({ cities: res.cities }));
    }

    getCityHotels(city) {
        const url = `${host}/api/hotels/city/${city}`;
        return fetch(url)
            .then(res => res.json())
            .then(json => ({hotels: json.results, center: { lat: json.center.lat, lng: json.center.lon }, zoom: json.zoom}));
    }    
}

export default new Api();