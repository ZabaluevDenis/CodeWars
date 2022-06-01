const flower = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
]
function howMuchILoveYou(nbPetals) {
    return flower[(nbPetals - 1) % flower.length]
}
