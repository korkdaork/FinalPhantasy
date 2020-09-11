
export default {

    attack: function (userAtk, monsterHP, monsterDef) {
        return monsterHP -= userAtk - monsterDef;
    },

    guard: function () {

    },

    usePotion: function () {
        return;
    },

    run: function () {
        return;
    }

};
