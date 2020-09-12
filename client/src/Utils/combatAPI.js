
export default {

    attack: function (userAtk, monsterHP, monsterDef) {
        return monsterHP -= userAtk - monsterDef;
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
    }

};
