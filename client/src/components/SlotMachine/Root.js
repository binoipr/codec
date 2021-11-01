/* -------Slot Machine root component-------- */

import React, { useState, useEffect, createRef } from "react";
import { rollingPrice, balance } from "../../actions/slotMachineAction";
import getValues from "../../_helpers/slotMachineAPI";
import { useDispatch, useSelector } from "react-redux";
import "./slot.css";

const Reels = [
  { fruits: ["🍒", "🍋", "🍎", "🍋", "🍌", "🍌", "🍋", "🍋"] },
  { fruits: ["🍋", "🍎", "🍋", "🍋", "🍒", "🍎", "🍌", "🍋"] },
  { fruits: ["🍋", "🍎", "🍋", "🍎", "🍒", "🍋", "🍌", "🍋"] },
];

const Root = () => {
  const [fruit1, setFruit1] = useState("🍒");
  const [fruit2, setFruit2] = useState("🍋");
  const [fruit3, setFruit3] = useState("🍋");
  const [rolling, setRolling] = useState(false);
  const [awardCoins, setAwardCoins] = useState(0);

  const coins = useSelector((state) => state.slotMachine.coins);

  /*--- used  for displaying Reels -- */
  const slotRef = [createRef(), createRef(), createRef()];

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!rolling) {
        const values = await getValues("POST", {
          coins,
          fruit1,
          fruit2,
          fruit3,
        });
        dispatch(balance(values.awardCoin));
        setAwardCoins(coins);
      }
    })();
    // eslint-disable-next-line
  }, [rolling]);

  /* -----rolling the SM----- */
  const roll = () => {
    setRolling(true);
    dispatch(rollingPrice());
    // ---- for roll and rolling...
    setTimeout(() => {
      setRolling(false);
    }, 500);
    //----setting fruit states after rolling----
    slotRef.forEach((slot, i) => {
      const selected = triggerSlotRotation(slot.current);
      if (i + 1 === 1) setFruit1(selected);
      else if (i + 1 === 2) setFruit2(selected);
      else setFruit3(selected);
    });
  };

  //triggering rolling and return random selected option
  const triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(Math.random() * Reels[ref.id].fruits.length);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return Reels[ref.id].fruits[randomOption];
  };

  return (
    <div className="slot__app">
      <div className="slot__app-containers">
        <section className="slot__app-section">
          <div className="slot__app-single-container" id="0" ref={slotRef[0]}>
            {Reels[0].fruits.map((fruit, i) => (
              <div key={i}>
                <span id="slot__app-span">{fruit}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="slot__app-section">
          <div className="slot__app-single-container" id="1" ref={slotRef[1]}>
            {Reels[1].fruits.map((fruit) => (
              <div>
                <span id="slot__app-span">{fruit}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="slot__app-section">
          <div className="slot__app-single-container" id="2" ref={slotRef[2]}>
            {Reels[2].fruits.map((fruit) => (
              <div>
                <span id="slot__app-span">{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        className={!rolling ? "roll rolling" : "roll"}
        onClick={!rolling && roll}
        disabled={rolling}
      >
        {rolling ? "Rolling..." : "ROLL"}
      </div>
      <p class="slot__app-info">
        Your score is :{" "}
        <span className="slot__app-result-span">
          {awardCoins > 0 ? awardCoins : 0}
        </span>
      </p>
      <div className="slot__app-info">
        <table>
          <tr>
            🍒 🍒 🍒 = <strong>50</strong> coins
          </tr>
          <tr>
            🍎 🍎 🍎 = <strong>20</strong> coins
          </tr>
          <tr>
            🍌 🍌 🍌 = <strong>15</strong> coins
          </tr>
          <tr>
            🍋 🍋 🍋 = <strong>3</strong> coins
          </tr>

          <tr>
            🍒 🍒 = <strong>40</strong> coins
          </tr>
          <tr>
            🍎 🍎 = <strong>10</strong> coins
          </tr>
          <tr>
            🍌 🍌 = <strong>5</strong> coins
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Root;
