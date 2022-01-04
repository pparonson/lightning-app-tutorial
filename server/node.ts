import createLnRpc, { LnRpc } from "@radar/lnrpc";
import env from "./env";

export let node: LnRpc;

export async function initNode() {
    // node = await createLnRpc({
    //   server: env.LND_GRPC_URL,
    //   cert: new Buffer(env.LND_TLS_CERT, 'base64').toString('ascii'),
    //   macaroon: new Buffer(env.LND_MACAROON, 'base64').toString('hex'),
    // });

    node = await createLnRpc({
        server: env.LND_GRPC_URL,
        // cert: new Buffer(env.LND_TLS_CERT, "base64").toString("ascii"),
        cert: Buffer.from(env.LND_TLS_CERT, "base64").toString("ascii"),
        // tls: "/media/sf_Shared/Backups/raspiblitz_backups/certs/tls.cert",
        // macaroon: new Buffer(env.LND_MACAROON, "base64").toString("hex"),
        macaroon: Buffer.from(env.LND_MACAROON, "base64").toString("hex"),
        // macaroon:
        //     "0201036C6E6402AC01030A101A78686BCDA3404D3874B7B69B69363E1201301A0F0A07616464726573731204726561641A0C0A04696E666F1204726561641A100A08696E766F696365731204726561641A100A086D616361726F6F6E1204726561641A0F0A076D6573736167651204726561641A100A086F6666636861696E1204726561641A0F0A076F6E636861696E1204726561641A0D0A0570656572731204726561641A0E0A067369676E657212047265616400000620BCACBF3E5CE192077F136E09B2338C5CF0CFDF6892CC6D2094B6517086384F3E",
        // macaroonPath: "/media/sf_Shared/Backups/raspiblitz_backups/certs/admin.macaroon",
    });

    try {
        const getInfoResponse = await node.getInfo();
        console.log(`getInfoResponse: ${getInfoResponse}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
