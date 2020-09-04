import React from "react";

function Stage1() {
    return (

        <form className="stageOne">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card-body whiteFont mediumFont">
                        <img src="assets/knight.gif" className="card-img-top" alt="knight" />
                        <h5 className="card-title">FIGHT!!!</h5>
                        <p className="card-text ">
                            {/* A {monster.name} is in front of you, what will you do? */}
                        </p>


                        <ul className="list-group list-group-flush"></ul>
                        <br />
                        <li className="atk"><button className="action" data-action="attack">Attack</button></li>
                        <br />
                        <li className="guard"><button className="action" data-action="guard">Guard</button></li>
                        <br />
                        <li className="item"><button className="action" data-action="potion">Potion</button></li>
                        <br />
                        <li className="run"><button className="action" data-action="run">Run</button></li>
                        <br />



                        {/* Hit Points(HP): {stats.hp}
                        <br></br>
                        Attack Power: {stats.attack}
                        <br></br>
                        Defense: {stats.defense}
                        <br></br>
                        Speed: {stats.speed}
                        <br></br>
                        Potions: {stats.potion}
                        <br></br>
                        Gil: {stats.gil} */}
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title whiteFont mediumFont"> Combat Log </h5>
                            <p className="card-text combat-log">
                                <p className="card-text whiteFont mediumFont">
                                    {/* A {monster.name} is in front of you, what will you do? */}
                                </p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card" id="monster-card" style="width: 18rem;">
                        <div className="card-body whiteFont mediumFont">

                            <img id="monster" src="{{monster.src}}" className="card-img-top" alt="monster" />
                            <h5 className="card-title">FIGHT!!!</h5>
                            <p className="card-text">
                                {/* <h5> {monster.quote} </h5> */}
                            </p>


                            <ul className="list-group list-group-flush"> </ul>
                            <br />
                            <li className="atk"><button className="action" data="attack">Attack</button></li>
                            <br />
                            <li className="guard"><button className="action" data="guard">Guard</button></li>
                            <br />
                            <li className="item"><button className="action" data="potion">Item</button></li>
                            <br />
                            <li className="run"><button className="action" data="run">Run</button></li>
                            <br />



                            {/* Hit Points(HP): {monster.hp}
                            <br></br>
                            Attack Power: {monster.attack}
                            <br></br>
                            Defense: {monster.defense} */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Stage1;