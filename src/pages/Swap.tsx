
// import { createThirdwebClient } from "thirdweb";
// import { ConnectButton } from "thirdweb/react";

// import {
//   inAppWallet,
//   createWallet,
// } from "thirdweb/wallets";

// const client = createThirdwebClient({
//   clientId: "2543a2669707084b6a2c660bb3ed522c",
// });

// const wallets = [
//   inAppWallet({
//     auth: {
//       options: ["google", "x", "passkey"],
//     },
//   }),
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("me.rainbow"),
//   createWallet("io.rabby"),
//   createWallet("io.zerion.wallet"),
//   createWallet("app.phantom"),
// ];
import { createThirdwebClient } from "thirdweb";
 
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
 
const client = createThirdwebClient({ clientId: '2543a2669707084b6a2c660bb3ed522c' });
 
const Swap = () => {
  return (

    // <ConnectButton
    //   client={client}
    //   wallets={wallets}
    //   connectModal={{ size: "compact" }}
    // />
    <ThirdwebProvider>
      <ConnectButton client={client} />
    </ThirdwebProvider>
  );
}

export default Swap;