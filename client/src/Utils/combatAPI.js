
export default {

    attack: function (userAtk, monsterHP, monsterDef) {
        return monsterHP -= (Math.max(0, userAtk - monsterDef));
    },

    guard: function (userHP, userDef, monsterAtk) {
        return userHP -= (Math.max(0, monsterAtk - (userDef * 2)));
    },

    usePotion: function (userHP) {
        return userHP += 50;
    },

    run: function () {
        return;
    },

    monsterRet: function (userHP, userDef, monsterAtk) {
        return userHP -= (Math.max(0, monsterAtk - userDef));
    },

    reducePotions: function (userPotion) {
        return userPotion - 1;
    }

};
