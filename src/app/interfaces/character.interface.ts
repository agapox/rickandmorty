export interface Character {
  id:	number; //	The id of the character.
  name:	string;	// The name of the character.
  status:	string; //	The status of the character ('Alive', 'Dead' or 'unknown').
  species:	string;
    /*
      The species of the character.
      0: "Human"
      1: "Alien"
      2: "Humanoid"
      3: "unknown"
      4: "Poopybutthole"
      5: "Mythological Creature"
      6: "Animal"
      7: "Robot"
      8: "Cronenberg"
      9: "Disease"
      10: "Planet"
    */
  type:	string;	// The type or subspecies of the character.
  gender:	string; //	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  origin:	{
    name: string;
    url: string;
  };	// Name and link to the character's origin location.
  location: {
    name: string;
    url: string;
  }; //	Name and link to the character's last known location endpoint.
  image:	string; // (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
  episode: string[]; // (urls)	List of episodes in which this character appeared.
  url:	string;  // (url)	Link to the character's own URL endpoint.
  created:	string; //	Time at which the character was created in the database.
}

export interface CharactersHttp {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  },
  results: Character[]
}
