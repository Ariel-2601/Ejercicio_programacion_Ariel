const partidos = [
  {
    juego: 1,
    lostoros: 0,
    Sanfernando: 4
  },
  {
    juego: 2,
    lostoros: 8,
    Sanfernando: 6
  },
  {
    juego: 3,
    lostoros: 5,
    Sanfernando: 3
  },
  {
    juego: 4, 
    lostoros: 6,
    Sanfernando: 7
  },
  {
    juego: 5,
    lostoros: 2,
    Sanfernando: 4
  },
  {
    juego: 6,
    lostoros: 3,
    Sanfernando: 1
  },
  {
    juego: 7,
    lostoros: 10,
    Sanfernando: 5
  }

];

const numPartidos = partidos.length;

for (let i = 0; i < numPartidos.length; i++) {
  const p = partidos.shift();
  console.log(`resultado del partido ${p.juego}:Los Toros ${p.lostoros} - San Fernando ${p.Sanfernando}`);  
}

partidos.forEach((partido) => {
  let p = partidos.shift();
  console.log(`resultado del partido ${p.juego}:Los Toros ${p.lostoros} - San Fernando ${p.Sanfernando}`);
});

console.log("partidos:", partidos);

const p1 = partidos.shift();

// resultado del partido1
console.log(`resultado del partido ${p1.juego}:Los Toros ${p1.lostoros} - San Fernando ${p1.Sanfernando}`);

const p2 = partidos.shift();


// resultado del partido2
console.log(`resultado del partido ${p2.juego}:Los Toros ${p2.lostoros} - San Fernando ${p2.Sanfernando}`);

const p3 = partidos.shift();

//resultado del partido3
console.log(`resultado del partido ${p3.juego}:Los Toros ${p3.lostoros} - San Fernando ${p3.Sanfernando}`);

const p4 = partidos.shift();

//resultado del partido4
console.log(`resultado del partido ${p4.juego}:Los Toros ${p4.lostoros} - San Fernando ${p4.Sanfernando}`);

const p5 = partidos.shift();


//resultado del partido5
console.log(`resultado del partido ${p5.juego}:Los Toros ${p5.lostoros} - San Fernando ${p5.Sanfernando}`);


const p6 = partidos.shift();

//resultado del partido6
console.log(`resultado del partido ${p6.juego}:Los Toros ${p6.lostoros} - San Fernando ${p6.Sanfernando}`);


const p7 = partidos.shift();

//resultado del partido7
console.log(`resultado del partido ${p7.juego}:Los Toros ${p7.lostoros} - San Fernando ${p7.Sanfernando}`);



//visualuizar cola
console.log(partidos);