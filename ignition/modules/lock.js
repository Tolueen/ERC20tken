const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  //const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  //const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("ERC20Token",[TOLU, TL,18,10000], {
    value: lockedAmount,
    
  });

  return { lock };
});
   
