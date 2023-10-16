/* eslint-disable */
import Long = require("long");
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "ids.v1";

export interface PayrollAssessment {
  id: string;
  created: Date | undefined;
  updated: Date | undefined;
  userId: number;
  bankAccountId: number;
  assessmentDateTime: Date | undefined;
  numValidPayrollGroups?:
    | number
    | undefined;
  /** TODO: change to float */
  last30dIncome?: number | undefined;
  version: string;
  transactionsHash?: Long | undefined;
  numPotentialPayrollGroups?: number | undefined;
  transactionHistoryDays?: number | undefined;
  invalidReasons: PayrollAssessment_InvalidReasons[];
  mainInvalidReason?: string | undefined;
  liveProdAssessmentId: string;
  writeSource?: string | undefined;
}

export interface PayrollAssessment_InvalidReasons {
  level: string;
  name: string;
  reason: string;
}

export interface PayrollGroupAssessment {
  id: string;
  created: Date | undefined;
  updated:
    | Date
    | undefined;
  /** FK -> `PayrollAssessment.id` */
  payrollAssessmentId: string;
  payrollName: string;
  status: boolean;
  payrollTypeId: string;
  /** TODO: change to double */
  confidenceScore?: number | undefined;
  payrollFrequency: string;
  isFreqAdjusted?: boolean | undefined;
  interval?: string | undefined;
  lastPayrollDate:
    | Date
    | undefined;
  /** TODO: change to double */
  last30dEarnings: number;
  /** TODO: change to double */
  nextPayrollAmount: number;
  /** TODO: change to double */
  estimatedMonthlyPayrollAmount: number;
}

/** messageType = next-payroll-date */
export interface NextPayrollDate {
  id: string;
  created: Date | undefined;
  updated:
    | Date
    | undefined;
  /** FK -> `PayrollGroupAssessment.id` */
  payrollGroupAssessmentId: string;
  /** Serialzed as timestamp, but can be interpretted as date */
  payrollDate: Date | undefined;
  overridePayrollGroupAssessmentId?: string | undefined;
}

function createBasePayrollAssessment(): PayrollAssessment {
  return {
    id: "",
    created: undefined,
    updated: undefined,
    userId: 0,
    bankAccountId: 0,
    assessmentDateTime: undefined,
    numValidPayrollGroups: undefined,
    last30dIncome: undefined,
    version: "",
    transactionsHash: undefined,
    numPotentialPayrollGroups: undefined,
    transactionHistoryDays: undefined,
    invalidReasons: [],
    mainInvalidReason: undefined,
    liveProdAssessmentId: "",
    writeSource: undefined,
  };
}

export const PayrollAssessment = {
  encode(message: PayrollAssessment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.created !== undefined) {
      Timestamp.encode(toTimestamp(message.created), writer.uint32(18).fork()).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(toTimestamp(message.updated), writer.uint32(26).fork()).ldelim();
    }
    if (message.userId !== 0) {
      writer.uint32(32).int32(message.userId);
    }
    if (message.bankAccountId !== 0) {
      writer.uint32(40).int32(message.bankAccountId);
    }
    if (message.assessmentDateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.assessmentDateTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.numValidPayrollGroups !== undefined) {
      writer.uint32(56).int32(message.numValidPayrollGroups);
    }
    if (message.last30dIncome !== undefined) {
      writer.uint32(69).float(message.last30dIncome);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    if (message.transactionsHash !== undefined) {
      writer.uint32(80).int64(message.transactionsHash);
    }
    if (message.numPotentialPayrollGroups !== undefined) {
      writer.uint32(88).int32(message.numPotentialPayrollGroups);
    }
    if (message.transactionHistoryDays !== undefined) {
      writer.uint32(96).int32(message.transactionHistoryDays);
    }
    for (const v of message.invalidReasons) {
      PayrollAssessment_InvalidReasons.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.mainInvalidReason !== undefined) {
      writer.uint32(114).string(message.mainInvalidReason);
    }
    if (message.liveProdAssessmentId !== "") {
      writer.uint32(122).string(message.liveProdAssessmentId);
    }
    if (message.writeSource !== undefined) {
      writer.uint32(130).string(message.writeSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayrollAssessment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayrollAssessment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.bankAccountId = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.assessmentDateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.numValidPayrollGroups = reader.int32();
          continue;
        case 8:
          if (tag !== 69) {
            break;
          }

          message.last30dIncome = reader.float();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.version = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.transactionsHash = reader.int64() as Long;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.numPotentialPayrollGroups = reader.int32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.transactionHistoryDays = reader.int32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.invalidReasons.push(PayrollAssessment_InvalidReasons.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.mainInvalidReason = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.liveProdAssessmentId = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.writeSource = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PayrollAssessment {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      bankAccountId: isSet(object.bankAccountId) ? globalThis.Number(object.bankAccountId) : 0,
      assessmentDateTime: isSet(object.assessmentDateTime) ? fromJsonTimestamp(object.assessmentDateTime) : undefined,
      numValidPayrollGroups: isSet(object.numValidPayrollGroups)
        ? globalThis.Number(object.numValidPayrollGroups)
        : undefined,
      last30dIncome: isSet(object.last30dIncome) ? globalThis.Number(object.last30dIncome) : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      transactionsHash: isSet(object.transactionsHash) ? Long.fromValue(object.transactionsHash) : undefined,
      numPotentialPayrollGroups: isSet(object.numPotentialPayrollGroups)
        ? globalThis.Number(object.numPotentialPayrollGroups)
        : undefined,
      transactionHistoryDays: isSet(object.transactionHistoryDays)
        ? globalThis.Number(object.transactionHistoryDays)
        : undefined,
      invalidReasons: globalThis.Array.isArray(object?.invalidReasons)
        ? object.invalidReasons.map((e: any) => PayrollAssessment_InvalidReasons.fromJSON(e))
        : [],
      mainInvalidReason: isSet(object.mainInvalidReason) ? globalThis.String(object.mainInvalidReason) : undefined,
      liveProdAssessmentId: isSet(object.liveProdAssessmentId) ? globalThis.String(object.liveProdAssessmentId) : "",
      writeSource: isSet(object.writeSource) ? globalThis.String(object.writeSource) : undefined,
    };
  },

  toJSON(message: PayrollAssessment): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.created !== undefined) {
      obj.created = message.created.toISOString();
    }
    if (message.updated !== undefined) {
      obj.updated = message.updated.toISOString();
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.bankAccountId !== 0) {
      obj.bankAccountId = Math.round(message.bankAccountId);
    }
    if (message.assessmentDateTime !== undefined) {
      obj.assessmentDateTime = message.assessmentDateTime.toISOString();
    }
    if (message.numValidPayrollGroups !== undefined) {
      obj.numValidPayrollGroups = Math.round(message.numValidPayrollGroups);
    }
    if (message.last30dIncome !== undefined) {
      obj.last30dIncome = message.last30dIncome;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.transactionsHash !== undefined) {
      obj.transactionsHash = (message.transactionsHash || Long.ZERO).toString();
    }
    if (message.numPotentialPayrollGroups !== undefined) {
      obj.numPotentialPayrollGroups = Math.round(message.numPotentialPayrollGroups);
    }
    if (message.transactionHistoryDays !== undefined) {
      obj.transactionHistoryDays = Math.round(message.transactionHistoryDays);
    }
    if (message.invalidReasons?.length) {
      obj.invalidReasons = message.invalidReasons.map((e) => PayrollAssessment_InvalidReasons.toJSON(e));
    }
    if (message.mainInvalidReason !== undefined) {
      obj.mainInvalidReason = message.mainInvalidReason;
    }
    if (message.liveProdAssessmentId !== "") {
      obj.liveProdAssessmentId = message.liveProdAssessmentId;
    }
    if (message.writeSource !== undefined) {
      obj.writeSource = message.writeSource;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayrollAssessment>, I>>(base?: I): PayrollAssessment {
    return PayrollAssessment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayrollAssessment>, I>>(object: I): PayrollAssessment {
    const message = createBasePayrollAssessment();
    message.id = object.id ?? "";
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.userId = object.userId ?? 0;
    message.bankAccountId = object.bankAccountId ?? 0;
    message.assessmentDateTime = object.assessmentDateTime ?? undefined;
    message.numValidPayrollGroups = object.numValidPayrollGroups ?? undefined;
    message.last30dIncome = object.last30dIncome ?? undefined;
    message.version = object.version ?? "";
    message.transactionsHash = (object.transactionsHash !== undefined && object.transactionsHash !== null)
      ? Long.fromValue(object.transactionsHash)
      : undefined;
    message.numPotentialPayrollGroups = object.numPotentialPayrollGroups ?? undefined;
    message.transactionHistoryDays = object.transactionHistoryDays ?? undefined;
    message.invalidReasons = object.invalidReasons?.map((e) => PayrollAssessment_InvalidReasons.fromPartial(e)) || [];
    message.mainInvalidReason = object.mainInvalidReason ?? undefined;
    message.liveProdAssessmentId = object.liveProdAssessmentId ?? "";
    message.writeSource = object.writeSource ?? undefined;
    return message;
  },
};

function createBasePayrollAssessment_InvalidReasons(): PayrollAssessment_InvalidReasons {
  return { level: "", name: "", reason: "" };
}

export const PayrollAssessment_InvalidReasons = {
  encode(message: PayrollAssessment_InvalidReasons, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== "") {
      writer.uint32(10).string(message.level);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayrollAssessment_InvalidReasons {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayrollAssessment_InvalidReasons();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.level = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PayrollAssessment_InvalidReasons {
    return {
      level: isSet(object.level) ? globalThis.String(object.level) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: PayrollAssessment_InvalidReasons): unknown {
    const obj: any = {};
    if (message.level !== "") {
      obj.level = message.level;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayrollAssessment_InvalidReasons>, I>>(
    base?: I,
  ): PayrollAssessment_InvalidReasons {
    return PayrollAssessment_InvalidReasons.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayrollAssessment_InvalidReasons>, I>>(
    object: I,
  ): PayrollAssessment_InvalidReasons {
    const message = createBasePayrollAssessment_InvalidReasons();
    message.level = object.level ?? "";
    message.name = object.name ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBasePayrollGroupAssessment(): PayrollGroupAssessment {
  return {
    id: "",
    created: undefined,
    updated: undefined,
    payrollAssessmentId: "",
    payrollName: "",
    status: false,
    payrollTypeId: "",
    confidenceScore: undefined,
    payrollFrequency: "",
    isFreqAdjusted: undefined,
    interval: undefined,
    lastPayrollDate: undefined,
    last30dEarnings: 0,
    nextPayrollAmount: 0,
    estimatedMonthlyPayrollAmount: 0,
  };
}

export const PayrollGroupAssessment = {
  encode(message: PayrollGroupAssessment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.created !== undefined) {
      Timestamp.encode(toTimestamp(message.created), writer.uint32(18).fork()).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(toTimestamp(message.updated), writer.uint32(26).fork()).ldelim();
    }
    if (message.payrollAssessmentId !== "") {
      writer.uint32(34).string(message.payrollAssessmentId);
    }
    if (message.payrollName !== "") {
      writer.uint32(42).string(message.payrollName);
    }
    if (message.status === true) {
      writer.uint32(48).bool(message.status);
    }
    if (message.payrollTypeId !== "") {
      writer.uint32(58).string(message.payrollTypeId);
    }
    if (message.confidenceScore !== undefined) {
      writer.uint32(69).float(message.confidenceScore);
    }
    if (message.payrollFrequency !== "") {
      writer.uint32(74).string(message.payrollFrequency);
    }
    if (message.isFreqAdjusted !== undefined) {
      writer.uint32(80).bool(message.isFreqAdjusted);
    }
    if (message.interval !== undefined) {
      writer.uint32(90).string(message.interval);
    }
    if (message.lastPayrollDate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastPayrollDate), writer.uint32(98).fork()).ldelim();
    }
    if (message.last30dEarnings !== 0) {
      writer.uint32(109).float(message.last30dEarnings);
    }
    if (message.nextPayrollAmount !== 0) {
      writer.uint32(117).float(message.nextPayrollAmount);
    }
    if (message.estimatedMonthlyPayrollAmount !== 0) {
      writer.uint32(125).float(message.estimatedMonthlyPayrollAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayrollGroupAssessment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayrollGroupAssessment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payrollAssessmentId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payrollName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payrollTypeId = reader.string();
          continue;
        case 8:
          if (tag !== 69) {
            break;
          }

          message.confidenceScore = reader.float();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payrollFrequency = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isFreqAdjusted = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.interval = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.lastPayrollDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 109) {
            break;
          }

          message.last30dEarnings = reader.float();
          continue;
        case 14:
          if (tag !== 117) {
            break;
          }

          message.nextPayrollAmount = reader.float();
          continue;
        case 15:
          if (tag !== 125) {
            break;
          }

          message.estimatedMonthlyPayrollAmount = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PayrollGroupAssessment {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
      payrollAssessmentId: isSet(object.payrollAssessmentId) ? globalThis.String(object.payrollAssessmentId) : "",
      payrollName: isSet(object.payrollName) ? globalThis.String(object.payrollName) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      payrollTypeId: isSet(object.payrollTypeId) ? globalThis.String(object.payrollTypeId) : "",
      confidenceScore: isSet(object.confidenceScore) ? globalThis.Number(object.confidenceScore) : undefined,
      payrollFrequency: isSet(object.payrollFrequency) ? globalThis.String(object.payrollFrequency) : "",
      isFreqAdjusted: isSet(object.isFreqAdjusted) ? globalThis.Boolean(object.isFreqAdjusted) : undefined,
      interval: isSet(object.interval) ? globalThis.String(object.interval) : undefined,
      lastPayrollDate: isSet(object.lastPayrollDate) ? fromJsonTimestamp(object.lastPayrollDate) : undefined,
      last30dEarnings: isSet(object.last30dEarnings) ? globalThis.Number(object.last30dEarnings) : 0,
      nextPayrollAmount: isSet(object.nextPayrollAmount) ? globalThis.Number(object.nextPayrollAmount) : 0,
      estimatedMonthlyPayrollAmount: isSet(object.estimatedMonthlyPayrollAmount)
        ? globalThis.Number(object.estimatedMonthlyPayrollAmount)
        : 0,
    };
  },

  toJSON(message: PayrollGroupAssessment): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.created !== undefined) {
      obj.created = message.created.toISOString();
    }
    if (message.updated !== undefined) {
      obj.updated = message.updated.toISOString();
    }
    if (message.payrollAssessmentId !== "") {
      obj.payrollAssessmentId = message.payrollAssessmentId;
    }
    if (message.payrollName !== "") {
      obj.payrollName = message.payrollName;
    }
    if (message.status === true) {
      obj.status = message.status;
    }
    if (message.payrollTypeId !== "") {
      obj.payrollTypeId = message.payrollTypeId;
    }
    if (message.confidenceScore !== undefined) {
      obj.confidenceScore = message.confidenceScore;
    }
    if (message.payrollFrequency !== "") {
      obj.payrollFrequency = message.payrollFrequency;
    }
    if (message.isFreqAdjusted !== undefined) {
      obj.isFreqAdjusted = message.isFreqAdjusted;
    }
    if (message.interval !== undefined) {
      obj.interval = message.interval;
    }
    if (message.lastPayrollDate !== undefined) {
      obj.lastPayrollDate = message.lastPayrollDate.toISOString();
    }
    if (message.last30dEarnings !== 0) {
      obj.last30dEarnings = message.last30dEarnings;
    }
    if (message.nextPayrollAmount !== 0) {
      obj.nextPayrollAmount = message.nextPayrollAmount;
    }
    if (message.estimatedMonthlyPayrollAmount !== 0) {
      obj.estimatedMonthlyPayrollAmount = message.estimatedMonthlyPayrollAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayrollGroupAssessment>, I>>(base?: I): PayrollGroupAssessment {
    return PayrollGroupAssessment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayrollGroupAssessment>, I>>(object: I): PayrollGroupAssessment {
    const message = createBasePayrollGroupAssessment();
    message.id = object.id ?? "";
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.payrollAssessmentId = object.payrollAssessmentId ?? "";
    message.payrollName = object.payrollName ?? "";
    message.status = object.status ?? false;
    message.payrollTypeId = object.payrollTypeId ?? "";
    message.confidenceScore = object.confidenceScore ?? undefined;
    message.payrollFrequency = object.payrollFrequency ?? "";
    message.isFreqAdjusted = object.isFreqAdjusted ?? undefined;
    message.interval = object.interval ?? undefined;
    message.lastPayrollDate = object.lastPayrollDate ?? undefined;
    message.last30dEarnings = object.last30dEarnings ?? 0;
    message.nextPayrollAmount = object.nextPayrollAmount ?? 0;
    message.estimatedMonthlyPayrollAmount = object.estimatedMonthlyPayrollAmount ?? 0;
    return message;
  },
};

function createBaseNextPayrollDate(): NextPayrollDate {
  return {
    id: "",
    created: undefined,
    updated: undefined,
    payrollGroupAssessmentId: "",
    payrollDate: undefined,
    overridePayrollGroupAssessmentId: undefined,
  };
}

export const NextPayrollDate = {
  encode(message: NextPayrollDate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.created !== undefined) {
      Timestamp.encode(toTimestamp(message.created), writer.uint32(18).fork()).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(toTimestamp(message.updated), writer.uint32(26).fork()).ldelim();
    }
    if (message.payrollGroupAssessmentId !== "") {
      writer.uint32(34).string(message.payrollGroupAssessmentId);
    }
    if (message.payrollDate !== undefined) {
      Timestamp.encode(toTimestamp(message.payrollDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.overridePayrollGroupAssessmentId !== undefined) {
      writer.uint32(50).string(message.overridePayrollGroupAssessmentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextPayrollDate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextPayrollDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payrollGroupAssessmentId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payrollDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.overridePayrollGroupAssessmentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NextPayrollDate {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
      payrollGroupAssessmentId: isSet(object.payrollGroupAssessmentId)
        ? globalThis.String(object.payrollGroupAssessmentId)
        : "",
      payrollDate: isSet(object.payrollDate) ? fromJsonTimestamp(object.payrollDate) : undefined,
      overridePayrollGroupAssessmentId: isSet(object.overridePayrollGroupAssessmentId)
        ? globalThis.String(object.overridePayrollGroupAssessmentId)
        : undefined,
    };
  },

  toJSON(message: NextPayrollDate): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.created !== undefined) {
      obj.created = message.created.toISOString();
    }
    if (message.updated !== undefined) {
      obj.updated = message.updated.toISOString();
    }
    if (message.payrollGroupAssessmentId !== "") {
      obj.payrollGroupAssessmentId = message.payrollGroupAssessmentId;
    }
    if (message.payrollDate !== undefined) {
      obj.payrollDate = message.payrollDate.toISOString();
    }
    if (message.overridePayrollGroupAssessmentId !== undefined) {
      obj.overridePayrollGroupAssessmentId = message.overridePayrollGroupAssessmentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NextPayrollDate>, I>>(base?: I): NextPayrollDate {
    return NextPayrollDate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NextPayrollDate>, I>>(object: I): NextPayrollDate {
    const message = createBaseNextPayrollDate();
    message.id = object.id ?? "";
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.payrollGroupAssessmentId = object.payrollGroupAssessmentId ?? "";
    message.payrollDate = object.payrollDate ?? undefined;
    message.overridePayrollGroupAssessmentId = object.overridePayrollGroupAssessmentId ?? undefined;
    return message;
  },
};

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
