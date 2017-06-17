function heroicInventory(dataRows) {

    let heroData = [];
    for (let i = 0; i < dataRows.length; i++) {
        let currentHeroEl = dataRows[i].split(" / ");

        let currentHeroName = currentHeroEl[0];
        let currentHeroLevel = Number(currentHeroEl[1]);

        let currentHeroItems = [];
        if (currentHeroEl.length > 2) {
            currentHeroItems = currentHeroEl[2].split(", ");
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}

heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);