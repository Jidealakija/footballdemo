import Football from './components/Football'

const football = [
  {
    "Id": 1,
    "name": "Pierre-Emerick Aubameyang",
    "age": 32,
    "country": "Gabon",
    "image": "/images/Auba.jpg",
    "description": "Pierre-Emerick Aubameyang is a prolific striker known for his incredible pace and goal-scoring ability. He has won multiple titles including the Bundesliga Golden Boot and has been Arsenal's captain since 2019."
  },
  {
    "Id": 2,
    "name": "Bukayo Saka",
    "age": 19,
    "country": "England",
    "image": "/images/Saka.webp",
    "description": "Bukayo Saka is a versatile and talented young player who can play as a winger, attacking midfielder, or full-back. He made his debut for Arsenal in 2018 and has since become a key player for both club and country."
  },
  {
    "Id": 3,
    "name": "Kieran Tierney",
    "age": 24,
    "country": "Scotland",
    "image": "/images/Tierney.webp",
    "description": "Kieran Tierney is a left-back known for his energy, tenacity, and excellent crossing ability. He joined Arsenal from Celtic in 2019 and has quickly established himself as a fan favorite."
  },
  {
    "Id": 4,
    "name": "Emile Smith Rowe",
    "age": 20,
    "country": "England",
    "image": "/images/ESR.webp",
    "description": "Emile Smith Rowe is a talented attacking midfielder who has progressed through Arsenal's youth academy. He made his first-team breakthrough in the 2020-2021 season and has impressed with his creativity and technical skills."
  },
  {
    "Id": 5,
    "name": "Gabriel Martinelli",
    "age": 20,
    "country": "Brazil",
    "image": "/images/Martinelli.webp",
    "description": "Gabriel Martinelli is a young Brazilian forward known for his speed, agility, and goal-scoring ability. He joined Arsenal in 2019 and has already made a significant impact with his performances and potential."
  },
  {
    "Id": 6,
    "name": "Thomas Partey",
    "age": 28,
    "country": "Ghana",
    "image": "/images/Partey.webp",
    "description": "Thomas Partey is a strong and versatile midfielder known for his defensive prowess and ability to drive forward with the ball. He joined Arsenal from Atletico Madrid in 2020 and has become an important presence in the team's midfield."
  },
  {
    "Id": 7,
    "name": "Bernd Leno",
    "age": 29,
    "country": "Germany",
    "image": "/images/Leno.jpeg",
    "description": "Bernd Leno is a reliable goalkeeper with excellent reflexes and shot-stopping ability. He joined Arsenal in 2018 and has since established himself as the team's first-choice goalkeeper."
  },
  {
    "Id": 8,
    "name": "Granit Xhaka",
    "age": 28,
    "country": "Switzerland",
    "image": "/images/Granit.jpeg",
    "description": "Granit Xhaka is a central midfielder known for his passing range, leadership qualities, and powerful shooting. He joined Arsenal in 2016 and has become an integral part of the team's midfield."
  },
  {
    "Id": 9,
    "name": "Gabriel Magalhães",
    "age": 23,
    "country": "Brazil",
    "image": "/images/Gabi.webp",
    "description": "Gabriel Magalhães is a talented Brazilian center-back known for his strong tackling, aerial ability, and composure on the ball. He joined Arsenal in 2020 and hasquickly established himself as a key figure in the team's defense, showcasing great potential for the future."
  },
  {
    "Id": 10,
    "name": "Nicolas Pépé",
    "age": 26,
    "country": "Ivory Coast",
    "image": "/images/Pepe.jpeg",
    "description": "Nicolas Pépé is a skillful and explosive winger known for his dribbling ability and goal-scoring prowess. He joined Arsenal in 2019 as the club's record signing, and although he had a slow start, he has shown glimpses of his immense talent."
  },
  {
    "Id": 11,
    "name": "Hector Bellerín",
    "age": 26,
    "country": "Spain",
    "image": "/images/bellerin.webp",
    "description": "Hector Bellerín is a pacey and attack-minded right-back known for his overlapping runs and crossing ability. He made his Arsenal debut in 2013 and has since become an established figure in the team's defense."
  },
  {
    "Id": 12,
    "name": "Alexandre Lacazette",
    "age": 30,
    "country": "France",
    "image": "/images/Lacazette.jpeg",
    "description": "Alexandre Lacazette is a talented French striker known for his clinical finishing and intelligent movement off the ball. He joined Arsenal in 2017 and has consistently been one of the team's top goal scorers."
  }
]


export default function page() {
  return (
    <div>
      <Football list={football}/>
    </div>
  )
}
