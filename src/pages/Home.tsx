import React from "react";
import AddressBar from "../components/AddressBar";
import Banner from "../components/Banner";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, Web3Button } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, linea } from 'wagmi/chains'


const Home: React.FC = () => {

const [isOpen, setIsOpen] = React.useState(false)
const chains = [arbitrum, mainnet, polygon, linea ]
const projectId = process.env.WALLET_CONNECT_PROJECT_ID || ''

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (
    <>
    <WagmiConfig config={wagmiConfig}>
      <img
        src="/overlay-vertical.svg"
        alt="bg overlay"
        className="absolute top-20 left-20"
      />
      <img
        src="/bg-resources.webp"
        alt="bg overlay"
        className="absolute top-0 -right-16"
      />
      <div>
        <div className="w-full">
          <h1 className="text-white text-8xl font-bold mb-4">Linearrrº</h1>
          <h3 className="text-white text-4xl mb-8">
            Dashboard for when that airdrop goes{" "}
            <span className=" font-bold italic">brrr</span> 💸
          </h3>
        </div>
        <AddressBar
          placeholderText="Enter address"
          classname="w-full h-16 rounded-full text-4xl px-8 mb-8"
        />
        <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-linea-blue to-blue-500 pointer active:shadow-inner-xl transition-all duration-500 ease-in-out bg-gradient hover:bg-opacity-60 rounded-full px-8 py-4"> Connect Wallet </button>
      </div>

      <Banner text="Made with ❤️ by Diarm0d. If you would like to support this project, please consider donating at 0x6bd4361F03d345DA1a357B72026F787cFAb51c92" />
      { isOpen && <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> }
      </WagmiConfig>
    </>
  );
};

export default Home;
