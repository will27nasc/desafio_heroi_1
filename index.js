let heroi = {
    nome: "Batman",
    nivel: 9001,
}

if(heroi.nivel < 1000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Ferro
    `);
} 
else if(heroi.nivel > 1000 && heroi.nivel <= 2000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Bronze
    `);
}
else if(heroi.nivel > 2000 && heroi.nivel <= 5000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Prata
    `);
}
else if(heroi.nivel > 5000 && heroi.nivel <= 7000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Ouro
    `);
}
else if(heroi.nivel > 7000 && heroi.nivel <= 8000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Platina
    `);
}else if(heroi.nivel > 8000 && heroi.nivel <= 9000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Ascendente
    `);
}
else if(heroi.nivel > 9000 && heroi.nivel <= 10000) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Imortal
    `);
} 
else if(heroi.nivel >= 10001) {
    console.log(`
        O Herói de nome ${heroi.nome} 
        está no nível de ${heroi.nivel} - Radiante
    `);
} else {
    console.log("Nível não identificado")
}




