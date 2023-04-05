const userDb = {
  results: [
    {
      
      id: "VCK01",
      thumbnail: "https://i.scdn.co/image/ab67616d0000485133dcbaf383aad23af9a4b7b5",
      title: "Vibe",
      artist: "Cookiee Kawaii",     
      rating: 4

    },
    {
      id: "DB02",
      thumbnail: "https://i.scdn.co/image/ab67616d000048517e4135635fa0e393b31dc407",
      artist: "Powfu",
      title: "death bed by",
      rating: 3

    },
    {
      id: "MOTS03",     
      thumbnail: "https://i.scdn.co/image/ab67616d00004851aea0d98794e91056c608e069",
      artist: "Ashe",
      title: "Moral of the Story by",
      rating: 5

    },
    {
      id: "MYT04", 
      thumbnail: "https://i.scdn.co/image/9bb7e673f1d5605709f576ccfbdfd765d8b58c6a",
      artist: "Breland",
      title: "My Truck by",
      rating: 2

    },    
    {
      
      id: "PPL05",  
      thumbnail: "https://i.scdn.co/image/d506fd8f64a0cf745912bb15fecc80a3c971ca9d",
      artist: "Mahen",
      title: "Pura Pura Lupa by",
      rating: 3

    },
    {
      id: "WHP06", 
      thumbnail: "https://i.scdn.co/image/ab67616d0000485105c50cf7a461aa654fe9b15a",
      artist: "Jack Harlow",
      title: "WHATS POPPIN by",
      rating:  4

    },
    {
      
      id: "AP07", 
      thumbnail: "https://i.scdn.co/image/ab67616d00004851626c524e10b50daae74879f9",
      artist: "Smoove'L",
      title: "Apollo by",
      rating: 4

    },
    {
      id: "CHEG08", 
      thumbnail: "https://i.scdn.co/image/f4f02683810ea9cd03330b0db8ab6a530444740b",
      artist: "Rennen Da Penha",
      title: "Carnivale Chegando by",
      rating: 5

    },
    {
      id: "PSY09", 
      thumbnail: "https://i.scdn.co/image/a9284cea0242cedb2fdf9de7711e8041f1b0f484",
      artist: "Jack Harlow",
      title: "WHATS POPPIN by",
      rating:  4

    },
    {
      
      id: "ANYS10", 
      thumbnail: "https://i.scdn.co/image/445de0881dd3694a836dcb0d9882f45a4b3bacb1",
      artist: "Smoove'L",
      title: "Apollo by",
      rating: 4

    }     

  ],
  info: {
    seed: "253718ec092ad3da",
    results: 8,
    page: 1,
    version: "1.2"
  }
};

const createSong = userDb.results.map((u, i) => {
  return {
    id: i,
    rating: u.rating,
    title: u.title,
    artist: u.artist,
    songPic: u.thumbnail
  };
});

const songs = () =>
  new Promise(resolve => resolve(createSong));

export default songs;
