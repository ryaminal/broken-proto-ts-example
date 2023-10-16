import { UnaryCallback } from "@grpc/grpc-js/build/src/client";
import { Client } from "@grpc/grpc-js";

type RpcImpl = (
  service: string,
  method: string,
  data: Uint8Array
) => Promise<Uint8Array>;

function sendRequest(conn: Client): RpcImpl {
  return (service, method, data) => {
    // Conventionally in gRPC, the request path looks like
    //   "package.names.ServiceName/MethodName",
    // we therefore construct such a string
    const path = `/${service}/${method}`;

    return new Promise((resolve, reject) => {
      // makeUnaryRequest transmits the result (and error) with a callback
      // transform this into a promise!
      const resultCallback: UnaryCallback<any> = (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      };

      function passThrough(argument: any) {
        return argument;
      }

      // Using passThrough as the serialize and deserialize functions
      conn.makeUnaryRequest(
        path,
        passThrough,
        passThrough,
        data,
        resultCallback
      );
    });
  };
}
/**
 * Use below function like following
 *    const client = new grpc.Client("localhost:8000", grpc.credentials.createInsecure());
 *    const rpc = buildRpc(client);
 *    const service = new SomeServiceImpl(rpc);
 * @param client
 * @returns
 */
export function buildRpc(client: Client) {
  return {
    request: sendRequest(client),
  };
}
