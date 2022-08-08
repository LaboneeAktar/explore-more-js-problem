/*
*fixed:per item wood requirement
1.chair--- 3cft
2. table ----- 10cft
3. bed ------- 50cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(0, 0, 2);
console.log('Total Wood:', totalWood);