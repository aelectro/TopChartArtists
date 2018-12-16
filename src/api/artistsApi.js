class ArtistsApi {
  static getTopArtists(){
    return fetch(`http://ws.audioscrobbler.com/2.0/?format=json&method=chart.getTopArtists&api_key=${this.api_key}`);
  }

  static getTopAlbums(mbid, limit = 10){
    return fetch(`http://ws.audioscrobbler.com/2.0/?format=json&limit=${limit}&method=artist.gettopalbums&mbid=${mbid}&api_key=${this.api_key}`);
  }

  static searchArtist(mbid){
    return fetch(`http://ws.audioscrobbler.com/2.0/?format=json&method=artist.getinfo&mbid=${mbid}&api_key=${this.api_key}`);
  }

}

ArtistsApi.api_key = "4cb074e4b8ec4ee9ad3eb37d6f7eb240";

export default ArtistsApi;
