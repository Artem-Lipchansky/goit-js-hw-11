


export class PixabayApi{
	constructor() {
		this.BASE_URL = 'https://pixabay.com/api/';
		this.API_KEY='42546986-414d01ac2526fb250e7f0e208'
	}

  getImages(userQuery) {
    const searchParams = new URLSearchParams({
      key: this.API_KEY,
      q: userQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${this.BASE_URL}?${searchParams}`;

    return fetch(url).then(res => res.json());
  }
}

