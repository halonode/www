
const detectedWallets : string[] = []
const getKeplr = async () => {
    if (!window.keplr) {
      throw new Error('Keplr extension not installed')
    }
    detectedWallets.push("keplr")
    return window.keplr
  }

const getLeap = async () => {
    if (!window.leap) {
      throw new Error('Leap extension not installed')
    }
    detectedWallets.push("leap")
    return window.leap
  }

const getEthereum = async () => {
    if (!window.ethereum) {
      throw new Error('Ethereum extension not installed')
    }
    detectedWallets.push("ethereum")
    return window.ethereum
  }


export const getWalletProviders = async (): Promise<string[]> => {

    console.log('WalletDetection');

    async function checkWalletProviders() {
        console.log("checkWalletProviders")
        const detectedWallets : string[] = []
        try {
            const keplr = await getKeplr()
            detectedWallets.push("keplr")
        } catch (error) {
            console.log(error,"keplr")
        }
        try {
            const leap = await getLeap()
            detectedWallets.push("leap")
            } catch (error) {
            console.log(error,"leap")
        }
        try {
            const ethereum = await getEthereum()
            detectedWallets.push("ethereum")
        } catch (error) {
            console.log(error,"ethereum")
        }
        return detectedWallets
    }
    const providers = await checkWalletProviders()
    return providers

}
