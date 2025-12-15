const person = {
    name: "Kiuru",
    age: 21,
    role: "Learner",
    email: "example@gmail.com"
}

console.log(Object.keys(person).length); 
// Object keys represent the data in array list, 
// and .length calculate the number of arrays
delete person.age;
console.log(Object.keys(person).length);

for(let key in person){
    console.log(`Properties: ${key} Value: ${person[key]}`); // Prints the all key in 
}

const anime = {
    name: "One Piece",
    seasons: 22,
    Episodes: 1152,
    Arcs: [
        { name: "Alabasta", Season_no: 5, episodes: 52 },
        { name: "Wano", Season_no:22, episodes: 241 }
    ]
};

const { name, seasons, Episodes} = anime;
const { name: ArcName, Season_no, episodes: arcEpisodes } = anime.Arcs[0];

console.log(`Anime name is ${name}, Episodes: ${Episodes}, seasons: ${seasons}`);
console.log(`Arc Name: ${ArcName}, Seasons: ${Season_no}, Episodes: ${arcEpisodes}`);

const Kim = {
  name: "Alex",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

Kim.name = "Kimname";

Kim.greet();
