/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import Long = require("long");

export const protobufPackage = "broken.v1";

export interface GetBrokenRequest {
  inputDate: string;
  transactionDate: Date | undefined;
}

export interface GetBrokenResponse {
  outputDates: string[];
}

function createBaseGetBrokenRequest(): GetBrokenRequest {
  return { inputDate: "", transactionDate: undefined };
}

export const GetBrokenRequest = {
  encode(message: GetBrokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputDate !== "") {
      writer.uint32(10).string(message.inputDate);
    }
    if (message.transactionDate !== undefined) {
      Timestamp.encode(toTimestamp(message.transactionDate), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputDate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transactionDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrokenRequest {
    return {
      inputDate: isSet(object.inputDate) ? globalThis.String(object.inputDate) : "",
      transactionDate: isSet(object.transactionDate) ? fromJsonTimestamp(object.transactionDate) : undefined,
    };
  },

  toJSON(message: GetBrokenRequest): unknown {
    const obj: any = {};
    if (message.inputDate !== "") {
      obj.inputDate = message.inputDate;
    }
    if (message.transactionDate !== undefined) {
      obj.transactionDate = message.transactionDate.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBrokenRequest>, I>>(base?: I): GetBrokenRequest {
    return GetBrokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBrokenRequest>, I>>(object: I): GetBrokenRequest {
    const message = createBaseGetBrokenRequest();
    message.inputDate = object.inputDate ?? "";
    message.transactionDate = object.transactionDate ?? undefined;
    return message;
  },
};

function createBaseGetBrokenResponse(): GetBrokenResponse {
  return { outputDates: [] };
}

export const GetBrokenResponse = {
  encode(message: GetBrokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outputDates) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputDates.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrokenResponse {
    return {
      outputDates: globalThis.Array.isArray(object?.outputDates)
        ? object.outputDates.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetBrokenResponse): unknown {
    const obj: any = {};
    if (message.outputDates?.length) {
      obj.outputDates = message.outputDates;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBrokenResponse>, I>>(base?: I): GetBrokenResponse {
    return GetBrokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBrokenResponse>, I>>(object: I): GetBrokenResponse {
    const message = createBaseGetBrokenResponse();
    message.outputDates = object.outputDates?.map((e) => e) || [];
    return message;
  },
};

export interface BrokenService {
  GetBroken(request: GetBrokenRequest): Promise<GetBrokenResponse>;
}

export const BrokenServiceServiceName = "broken.v1.BrokenService";
export class BrokenServiceClientImpl implements BrokenService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || BrokenServiceServiceName;
    this.rpc = rpc;
    this.GetBroken = this.GetBroken.bind(this);
  }
  GetBroken(request: GetBrokenRequest): Promise<GetBrokenResponse> {
    const data = GetBrokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroken", data);
    return promise.then((data) => GetBrokenResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
