import { ethers } from 'ethers';

const ConnectWalletButton = () => {
  const connectWallet = async () => {
    // Connect to the wallet provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    try {
      // Request access to the user's accounts
      const accounts = await provider.send('eth_requestAccounts', []);
      
      // Log the user's Ethereum address
      console.log(accounts[0]);
    } catch (error) {
      // Handle errors during authentication
      console.error(error);
    }
  }

  return (
    <button className="connect-wallet-button" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;