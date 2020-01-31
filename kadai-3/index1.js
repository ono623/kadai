//　生まれた日
const day = perseInt(process.argv[2])

if (day % 4 === 0){
    console.log('あなたは真面目な性格です')
}　else if (day % 4 === 1){
    console.log('あなたは陽気な性格です')
} else {
    console.log('あなたは勝気な性格です')
}