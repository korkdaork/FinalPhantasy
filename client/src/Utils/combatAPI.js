
export default {

    attack: function (userAtk, monsterHP, monsterDef) {
        return monsterHP -= userAtk - monsterDef; //issue found with defense being higher than attack, making attack heal.
    },

    guard: function (userHP, userDef, monsterAtk) {
        return userHP -= monsterAtk - (userDef * 2);
    },

    usePotion: function (userHP) {
        return userHP += 50;
    },

    run: function () {
        return;
    },

    monsterRet: function (userHP, userDef, monsterAtk) {
        return userHP -= monsterAtk - userDef;
    },

    reducePotions: function (userPotion) {
        return userPotion - 1;
    }

};
