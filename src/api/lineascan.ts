import axios, { AxiosResponse } from "axios";

interface ethBalance {
    balance: number;
}

export const getEthBalance = async (address: string) => {
   const balance = await axios
    .get(
      `https://api.lineascan.build/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.LINEASCAN_API_KEY}`
    )
    .then((response) => {
        console.log(response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      return error;
    });

    return balance;
};
