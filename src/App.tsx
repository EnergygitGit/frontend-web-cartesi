// Copyright 2022 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import { FC } from "react";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";

import { GraphQLProvider } from "./GraphQL";
import { Notices } from "./Notices";
import { Input } from "./Input";
import { Inspect } from "./Inspect";
import { Network } from "./Network";
import { Vouchers } from "./Vouchers";
import { Reports } from "./Reports";

const injected: any = injectedModule();
init({
    wallets: [injected],
    chains: [
        {
            id: "0x7a69",
            token: "ETH",
            label: "localhost",
            rpcUrl: "http://localhost:8545",
        },
        {
            id: "0x13881",
            token: "MATIC",
            label: "Matic Testnet",
            rpcUrl: "https://rpc-mumbai.maticvigil.com",
        },
        // {
        //     id: "0x3",
        //     token: "ETH",
        //     label: "Ropsten Test Network",
        //     rpcUrl: "https://ropsten.infura.io/v3/",
        // },
    ],
    appMetadata: {
        name: "Cartesi Rollups Echo DApp",
        icon: "<svg><svg/>",
        description: "Demo app for Cartesi Rollups",
        recommendedInjectedWallets: [
            { name: "MetaMask", url: "https://metamask.io" },
            { name: "Coinbase", url: "https://wallet.coinbase.com/" },
        ],
    },
});

const App: FC = () => {
    return (
        <div>
            <Network />
            <GraphQLProvider>
                <h2>Inspect</h2>
                <Inspect />
                <h2>Input</h2>
                <Input />
                <h2>Notices</h2>
                <Notices />
                <h2>Reports</h2>
                <Reports />
                <h2>Vouchers</h2>
                <Vouchers />
            </GraphQLProvider>
        </div>
    );
};

export default App;
