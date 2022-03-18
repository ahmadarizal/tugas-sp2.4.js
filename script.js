var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

let orang = personnel.filter((pilot) => pilot.isForceUser === true);
const totalkeseluruhan = orang.reduce(
  (acc, pilot) => acc + pilot.pilotingScore + pilot.shootingScore,
  0
);

document.write("force user");

let pilot = personnel.map(function (item) {
  return document.write(`
  <br>
      ID : ${item.id} <br>
      Name : ${item.name} <br>
      PilotingScore : ${item.pilotingScore} <br>
      ShootingScore : ${item.shootingScore} <br>
      IsForceUser : ${item.isForceUser} <br>
      TotalScore : ${item.pilotingScore + item.shootingScore} <br>
  <br>
  `);
});
document.write(`total keseluruhan = ${totalkeseluruhan}`);
