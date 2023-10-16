/* eslint-disable */
import Long = require("long");
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "ids.v1";

export interface BankTransaction {
  id: string;
  transactionDate: Date | undefined;
  displayName: string;
  amount: number;
  plaidCategory: string[];
  settledDate?: Date | undefined;
}

export interface AssessmentInput {
  userId: number;
  bankAccountId: number;
  assessmentDateTime: Date | undefined;
  bankTransactions: BankTransaction[];
  assessmentId: string;
}

export interface GetIncomeRequest {
  assessmentDate: string;
  transactionData: BankTransaction[];
}

export interface InvalidReason {
  level: string;
  name: string;
  reason: string;
}

export interface ValidPayroll {
  payrollType: string;
  payrollName: string;
  status: boolean;
  confidenceScore?: number | undefined;
  payrollFrequency: string;
  isFreqAdjusted?: boolean | undefined;
  interval?: string | undefined;
  lastPayrollDate: string;
  last30dEarnings: number;
  nextPayrollAmount: number;
  estimatedMonthlyPayrollAmount: number;
  nextPayrollDates: string[];
  transactionIds: string[];
}

export interface GetIncomeResponse {
  validPayrollCount: number;
  last30daysIncomeAmount: number;
  payrollAssessmentGroups: ValidPayroll[];
  transactionsHash?: Long | undefined;
  mainInvalidReason?: string | undefined;
  invalidReasons: InvalidReason[];
  numPotentialPayrollGroups?: number | undefined;
  transactionHistoryDays?: number | undefined;
  version: string;
  expirationDate?: string | undefined;
}

export interface ProjectedPayroll {
  payDate: string;
  payPeriodStart: string;
  payPeriodEnd: string;
  netPayAmount: number;
}

export interface GetProjectedPayrollRequest {
  paystubs: ProjectedPayroll[];
}

export interface GetProjectedPayrollResponse {
  payDate: string;
  payrollAmount: number;
  payrollType: string;
  nextPayrollDates: string[];
  nextPayrollDatesAdjusted: string[];
  canPayrollBeCalculated: boolean;
}

export interface GetNextPayrollDatesResponse {
  payrollDate: string[];
}

export interface GetNextPayrollDatesRequest {
  nextPayrollDate: string;
  expiresAt: string;
  payrollFrequency: string;
}

export interface GetHolidaysRequest {
  inputDate: string;
}

export interface GetHolidaysResponse {
  outputDates: string[];
}

function createBaseBankTransaction(): BankTransaction {
  return { id: "", transactionDate: undefined, displayName: "", amount: 0, plaidCategory: [], settledDate: undefined };
}

export const BankTransaction = {
  encode(message: BankTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.transactionDate !== undefined) {
      Timestamp.encode(toTimestamp(message.transactionDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.amount !== 0) {
      writer.uint32(33).double(message.amount);
    }
    for (const v of message.plaidCategory) {
      writer.uint32(42).string(v!);
    }
    if (message.settledDate !== undefined) {
      Timestamp.encode(toTimestamp(message.settledDate), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankTransaction();
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

          message.transactionDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.amount = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.plaidCategory.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.settledDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BankTransaction {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      transactionDate: isSet(object.transactionDate) ? fromJsonTimestamp(object.transactionDate) : undefined,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      plaidCategory: globalThis.Array.isArray(object?.plaidCategory)
        ? object.plaidCategory.map((e: any) => globalThis.String(e))
        : [],
      settledDate: isSet(object.settledDate) ? fromJsonTimestamp(object.settledDate) : undefined,
    };
  },

  toJSON(message: BankTransaction): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.transactionDate !== undefined) {
      obj.transactionDate = message.transactionDate.toISOString();
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.plaidCategory?.length) {
      obj.plaidCategory = message.plaidCategory;
    }
    if (message.settledDate !== undefined) {
      obj.settledDate = message.settledDate.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BankTransaction>, I>>(base?: I): BankTransaction {
    return BankTransaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BankTransaction>, I>>(object: I): BankTransaction {
    const message = createBaseBankTransaction();
    message.id = object.id ?? "";
    message.transactionDate = object.transactionDate ?? undefined;
    message.displayName = object.displayName ?? "";
    message.amount = object.amount ?? 0;
    message.plaidCategory = object.plaidCategory?.map((e) => e) || [];
    message.settledDate = object.settledDate ?? undefined;
    return message;
  },
};

function createBaseAssessmentInput(): AssessmentInput {
  return { userId: 0, bankAccountId: 0, assessmentDateTime: undefined, bankTransactions: [], assessmentId: "" };
}

export const AssessmentInput = {
  encode(message: AssessmentInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.bankAccountId !== 0) {
      writer.uint32(16).int32(message.bankAccountId);
    }
    if (message.assessmentDateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.assessmentDateTime), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.bankTransactions) {
      BankTransaction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.assessmentId !== "") {
      writer.uint32(42).string(message.assessmentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssessmentInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssessmentInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bankAccountId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assessmentDateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bankTransactions.push(BankTransaction.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.assessmentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssessmentInput {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      bankAccountId: isSet(object.bankAccountId) ? globalThis.Number(object.bankAccountId) : 0,
      assessmentDateTime: isSet(object.assessmentDateTime) ? fromJsonTimestamp(object.assessmentDateTime) : undefined,
      bankTransactions: globalThis.Array.isArray(object?.bankTransactions)
        ? object.bankTransactions.map((e: any) => BankTransaction.fromJSON(e))
        : [],
      assessmentId: isSet(object.assessmentId) ? globalThis.String(object.assessmentId) : "",
    };
  },

  toJSON(message: AssessmentInput): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.bankAccountId !== 0) {
      obj.bankAccountId = Math.round(message.bankAccountId);
    }
    if (message.assessmentDateTime !== undefined) {
      obj.assessmentDateTime = message.assessmentDateTime.toISOString();
    }
    if (message.bankTransactions?.length) {
      obj.bankTransactions = message.bankTransactions.map((e) => BankTransaction.toJSON(e));
    }
    if (message.assessmentId !== "") {
      obj.assessmentId = message.assessmentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssessmentInput>, I>>(base?: I): AssessmentInput {
    return AssessmentInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssessmentInput>, I>>(object: I): AssessmentInput {
    const message = createBaseAssessmentInput();
    message.userId = object.userId ?? 0;
    message.bankAccountId = object.bankAccountId ?? 0;
    message.assessmentDateTime = object.assessmentDateTime ?? undefined;
    message.bankTransactions = object.bankTransactions?.map((e) => BankTransaction.fromPartial(e)) || [];
    message.assessmentId = object.assessmentId ?? "";
    return message;
  },
};

function createBaseGetIncomeRequest(): GetIncomeRequest {
  return { assessmentDate: "", transactionData: [] };
}

export const GetIncomeRequest = {
  encode(message: GetIncomeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assessmentDate !== "") {
      writer.uint32(10).string(message.assessmentDate);
    }
    for (const v of message.transactionData) {
      BankTransaction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIncomeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIncomeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assessmentDate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transactionData.push(BankTransaction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetIncomeRequest {
    return {
      assessmentDate: isSet(object.assessmentDate) ? globalThis.String(object.assessmentDate) : "",
      transactionData: globalThis.Array.isArray(object?.transactionData)
        ? object.transactionData.map((e: any) => BankTransaction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetIncomeRequest): unknown {
    const obj: any = {};
    if (message.assessmentDate !== "") {
      obj.assessmentDate = message.assessmentDate;
    }
    if (message.transactionData?.length) {
      obj.transactionData = message.transactionData.map((e) => BankTransaction.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIncomeRequest>, I>>(base?: I): GetIncomeRequest {
    return GetIncomeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIncomeRequest>, I>>(object: I): GetIncomeRequest {
    const message = createBaseGetIncomeRequest();
    message.assessmentDate = object.assessmentDate ?? "";
    message.transactionData = object.transactionData?.map((e) => BankTransaction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInvalidReason(): InvalidReason {
  return { level: "", name: "", reason: "" };
}

export const InvalidReason = {
  encode(message: InvalidReason, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidReason {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidReason();
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

  fromJSON(object: any): InvalidReason {
    return {
      level: isSet(object.level) ? globalThis.String(object.level) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: InvalidReason): unknown {
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

  create<I extends Exact<DeepPartial<InvalidReason>, I>>(base?: I): InvalidReason {
    return InvalidReason.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvalidReason>, I>>(object: I): InvalidReason {
    const message = createBaseInvalidReason();
    message.level = object.level ?? "";
    message.name = object.name ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseValidPayroll(): ValidPayroll {
  return {
    payrollType: "",
    payrollName: "",
    status: false,
    confidenceScore: undefined,
    payrollFrequency: "",
    isFreqAdjusted: undefined,
    interval: undefined,
    lastPayrollDate: "",
    last30dEarnings: 0,
    nextPayrollAmount: 0,
    estimatedMonthlyPayrollAmount: 0,
    nextPayrollDates: [],
    transactionIds: [],
  };
}

export const ValidPayroll = {
  encode(message: ValidPayroll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payrollType !== "") {
      writer.uint32(10).string(message.payrollType);
    }
    if (message.payrollName !== "") {
      writer.uint32(18).string(message.payrollName);
    }
    if (message.status === true) {
      writer.uint32(24).bool(message.status);
    }
    if (message.confidenceScore !== undefined) {
      writer.uint32(33).double(message.confidenceScore);
    }
    if (message.payrollFrequency !== "") {
      writer.uint32(42).string(message.payrollFrequency);
    }
    if (message.isFreqAdjusted !== undefined) {
      writer.uint32(48).bool(message.isFreqAdjusted);
    }
    if (message.interval !== undefined) {
      writer.uint32(58).string(message.interval);
    }
    if (message.lastPayrollDate !== "") {
      writer.uint32(66).string(message.lastPayrollDate);
    }
    if (message.last30dEarnings !== 0) {
      writer.uint32(73).double(message.last30dEarnings);
    }
    if (message.nextPayrollAmount !== 0) {
      writer.uint32(81).double(message.nextPayrollAmount);
    }
    if (message.estimatedMonthlyPayrollAmount !== 0) {
      writer.uint32(89).double(message.estimatedMonthlyPayrollAmount);
    }
    for (const v of message.nextPayrollDates) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.transactionIds) {
      writer.uint32(106).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidPayroll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidPayroll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payrollType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payrollName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.confidenceScore = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payrollFrequency = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isFreqAdjusted = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.interval = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.lastPayrollDate = reader.string();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.last30dEarnings = reader.double();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.nextPayrollAmount = reader.double();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.estimatedMonthlyPayrollAmount = reader.double();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.nextPayrollDates.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.transactionIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidPayroll {
    return {
      payrollType: isSet(object.payrollType) ? globalThis.String(object.payrollType) : "",
      payrollName: isSet(object.payrollName) ? globalThis.String(object.payrollName) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      confidenceScore: isSet(object.confidenceScore) ? globalThis.Number(object.confidenceScore) : undefined,
      payrollFrequency: isSet(object.payrollFrequency) ? globalThis.String(object.payrollFrequency) : "",
      isFreqAdjusted: isSet(object.isFreqAdjusted) ? globalThis.Boolean(object.isFreqAdjusted) : undefined,
      interval: isSet(object.interval) ? globalThis.String(object.interval) : undefined,
      lastPayrollDate: isSet(object.lastPayrollDate) ? globalThis.String(object.lastPayrollDate) : "",
      last30dEarnings: isSet(object.last30dEarnings) ? globalThis.Number(object.last30dEarnings) : 0,
      nextPayrollAmount: isSet(object.nextPayrollAmount) ? globalThis.Number(object.nextPayrollAmount) : 0,
      estimatedMonthlyPayrollAmount: isSet(object.estimatedMonthlyPayrollAmount)
        ? globalThis.Number(object.estimatedMonthlyPayrollAmount)
        : 0,
      nextPayrollDates: globalThis.Array.isArray(object?.nextPayrollDates)
        ? object.nextPayrollDates.map((e: any) => globalThis.String(e))
        : [],
      transactionIds: globalThis.Array.isArray(object?.transactionIds)
        ? object.transactionIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ValidPayroll): unknown {
    const obj: any = {};
    if (message.payrollType !== "") {
      obj.payrollType = message.payrollType;
    }
    if (message.payrollName !== "") {
      obj.payrollName = message.payrollName;
    }
    if (message.status === true) {
      obj.status = message.status;
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
    if (message.lastPayrollDate !== "") {
      obj.lastPayrollDate = message.lastPayrollDate;
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
    if (message.nextPayrollDates?.length) {
      obj.nextPayrollDates = message.nextPayrollDates;
    }
    if (message.transactionIds?.length) {
      obj.transactionIds = message.transactionIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidPayroll>, I>>(base?: I): ValidPayroll {
    return ValidPayroll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidPayroll>, I>>(object: I): ValidPayroll {
    const message = createBaseValidPayroll();
    message.payrollType = object.payrollType ?? "";
    message.payrollName = object.payrollName ?? "";
    message.status = object.status ?? false;
    message.confidenceScore = object.confidenceScore ?? undefined;
    message.payrollFrequency = object.payrollFrequency ?? "";
    message.isFreqAdjusted = object.isFreqAdjusted ?? undefined;
    message.interval = object.interval ?? undefined;
    message.lastPayrollDate = object.lastPayrollDate ?? "";
    message.last30dEarnings = object.last30dEarnings ?? 0;
    message.nextPayrollAmount = object.nextPayrollAmount ?? 0;
    message.estimatedMonthlyPayrollAmount = object.estimatedMonthlyPayrollAmount ?? 0;
    message.nextPayrollDates = object.nextPayrollDates?.map((e) => e) || [];
    message.transactionIds = object.transactionIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetIncomeResponse(): GetIncomeResponse {
  return {
    validPayrollCount: 0,
    last30daysIncomeAmount: 0,
    payrollAssessmentGroups: [],
    transactionsHash: undefined,
    mainInvalidReason: undefined,
    invalidReasons: [],
    numPotentialPayrollGroups: undefined,
    transactionHistoryDays: undefined,
    version: "",
    expirationDate: undefined,
  };
}

export const GetIncomeResponse = {
  encode(message: GetIncomeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validPayrollCount !== 0) {
      writer.uint32(8).int32(message.validPayrollCount);
    }
    if (message.last30daysIncomeAmount !== 0) {
      writer.uint32(17).double(message.last30daysIncomeAmount);
    }
    for (const v of message.payrollAssessmentGroups) {
      ValidPayroll.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.transactionsHash !== undefined) {
      writer.uint32(32).int64(message.transactionsHash);
    }
    if (message.mainInvalidReason !== undefined) {
      writer.uint32(42).string(message.mainInvalidReason);
    }
    for (const v of message.invalidReasons) {
      InvalidReason.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.numPotentialPayrollGroups !== undefined) {
      writer.uint32(56).int32(message.numPotentialPayrollGroups);
    }
    if (message.transactionHistoryDays !== undefined) {
      writer.uint32(64).int32(message.transactionHistoryDays);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    if (message.expirationDate !== undefined) {
      writer.uint32(82).string(message.expirationDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIncomeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIncomeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validPayrollCount = reader.int32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.last30daysIncomeAmount = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payrollAssessmentGroups.push(ValidPayroll.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactionsHash = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mainInvalidReason = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.invalidReasons.push(InvalidReason.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.numPotentialPayrollGroups = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.transactionHistoryDays = reader.int32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.version = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.expirationDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetIncomeResponse {
    return {
      validPayrollCount: isSet(object.validPayrollCount) ? globalThis.Number(object.validPayrollCount) : 0,
      last30daysIncomeAmount: isSet(object.last30daysIncomeAmount)
        ? globalThis.Number(object.last30daysIncomeAmount)
        : 0,
      payrollAssessmentGroups: globalThis.Array.isArray(object?.payrollAssessmentGroups)
        ? object.payrollAssessmentGroups.map((e: any) => ValidPayroll.fromJSON(e))
        : [],
      transactionsHash: isSet(object.transactionsHash) ? Long.fromValue(object.transactionsHash) : undefined,
      mainInvalidReason: isSet(object.mainInvalidReason) ? globalThis.String(object.mainInvalidReason) : undefined,
      invalidReasons: globalThis.Array.isArray(object?.invalidReasons)
        ? object.invalidReasons.map((e: any) => InvalidReason.fromJSON(e))
        : [],
      numPotentialPayrollGroups: isSet(object.numPotentialPayrollGroups)
        ? globalThis.Number(object.numPotentialPayrollGroups)
        : undefined,
      transactionHistoryDays: isSet(object.transactionHistoryDays)
        ? globalThis.Number(object.transactionHistoryDays)
        : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      expirationDate: isSet(object.expirationDate) ? globalThis.String(object.expirationDate) : undefined,
    };
  },

  toJSON(message: GetIncomeResponse): unknown {
    const obj: any = {};
    if (message.validPayrollCount !== 0) {
      obj.validPayrollCount = Math.round(message.validPayrollCount);
    }
    if (message.last30daysIncomeAmount !== 0) {
      obj.last30daysIncomeAmount = message.last30daysIncomeAmount;
    }
    if (message.payrollAssessmentGroups?.length) {
      obj.payrollAssessmentGroups = message.payrollAssessmentGroups.map((e) => ValidPayroll.toJSON(e));
    }
    if (message.transactionsHash !== undefined) {
      obj.transactionsHash = (message.transactionsHash || Long.ZERO).toString();
    }
    if (message.mainInvalidReason !== undefined) {
      obj.mainInvalidReason = message.mainInvalidReason;
    }
    if (message.invalidReasons?.length) {
      obj.invalidReasons = message.invalidReasons.map((e) => InvalidReason.toJSON(e));
    }
    if (message.numPotentialPayrollGroups !== undefined) {
      obj.numPotentialPayrollGroups = Math.round(message.numPotentialPayrollGroups);
    }
    if (message.transactionHistoryDays !== undefined) {
      obj.transactionHistoryDays = Math.round(message.transactionHistoryDays);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.expirationDate !== undefined) {
      obj.expirationDate = message.expirationDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIncomeResponse>, I>>(base?: I): GetIncomeResponse {
    return GetIncomeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIncomeResponse>, I>>(object: I): GetIncomeResponse {
    const message = createBaseGetIncomeResponse();
    message.validPayrollCount = object.validPayrollCount ?? 0;
    message.last30daysIncomeAmount = object.last30daysIncomeAmount ?? 0;
    message.payrollAssessmentGroups = object.payrollAssessmentGroups?.map((e) => ValidPayroll.fromPartial(e)) || [];
    message.transactionsHash = (object.transactionsHash !== undefined && object.transactionsHash !== null)
      ? Long.fromValue(object.transactionsHash)
      : undefined;
    message.mainInvalidReason = object.mainInvalidReason ?? undefined;
    message.invalidReasons = object.invalidReasons?.map((e) => InvalidReason.fromPartial(e)) || [];
    message.numPotentialPayrollGroups = object.numPotentialPayrollGroups ?? undefined;
    message.transactionHistoryDays = object.transactionHistoryDays ?? undefined;
    message.version = object.version ?? "";
    message.expirationDate = object.expirationDate ?? undefined;
    return message;
  },
};

function createBaseProjectedPayroll(): ProjectedPayroll {
  return { payDate: "", payPeriodStart: "", payPeriodEnd: "", netPayAmount: 0 };
}

export const ProjectedPayroll = {
  encode(message: ProjectedPayroll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payDate !== "") {
      writer.uint32(10).string(message.payDate);
    }
    if (message.payPeriodStart !== "") {
      writer.uint32(18).string(message.payPeriodStart);
    }
    if (message.payPeriodEnd !== "") {
      writer.uint32(26).string(message.payPeriodEnd);
    }
    if (message.netPayAmount !== 0) {
      writer.uint32(32).int32(message.netPayAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectedPayroll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectedPayroll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payDate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payPeriodStart = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payPeriodEnd = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.netPayAmount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectedPayroll {
    return {
      payDate: isSet(object.payDate) ? globalThis.String(object.payDate) : "",
      payPeriodStart: isSet(object.payPeriodStart) ? globalThis.String(object.payPeriodStart) : "",
      payPeriodEnd: isSet(object.payPeriodEnd) ? globalThis.String(object.payPeriodEnd) : "",
      netPayAmount: isSet(object.netPayAmount) ? globalThis.Number(object.netPayAmount) : 0,
    };
  },

  toJSON(message: ProjectedPayroll): unknown {
    const obj: any = {};
    if (message.payDate !== "") {
      obj.payDate = message.payDate;
    }
    if (message.payPeriodStart !== "") {
      obj.payPeriodStart = message.payPeriodStart;
    }
    if (message.payPeriodEnd !== "") {
      obj.payPeriodEnd = message.payPeriodEnd;
    }
    if (message.netPayAmount !== 0) {
      obj.netPayAmount = Math.round(message.netPayAmount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectedPayroll>, I>>(base?: I): ProjectedPayroll {
    return ProjectedPayroll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectedPayroll>, I>>(object: I): ProjectedPayroll {
    const message = createBaseProjectedPayroll();
    message.payDate = object.payDate ?? "";
    message.payPeriodStart = object.payPeriodStart ?? "";
    message.payPeriodEnd = object.payPeriodEnd ?? "";
    message.netPayAmount = object.netPayAmount ?? 0;
    return message;
  },
};

function createBaseGetProjectedPayrollRequest(): GetProjectedPayrollRequest {
  return { paystubs: [] };
}

export const GetProjectedPayrollRequest = {
  encode(message: GetProjectedPayrollRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paystubs) {
      ProjectedPayroll.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectedPayrollRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectedPayrollRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paystubs.push(ProjectedPayroll.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectedPayrollRequest {
    return {
      paystubs: globalThis.Array.isArray(object?.paystubs)
        ? object.paystubs.map((e: any) => ProjectedPayroll.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetProjectedPayrollRequest): unknown {
    const obj: any = {};
    if (message.paystubs?.length) {
      obj.paystubs = message.paystubs.map((e) => ProjectedPayroll.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectedPayrollRequest>, I>>(base?: I): GetProjectedPayrollRequest {
    return GetProjectedPayrollRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProjectedPayrollRequest>, I>>(object: I): GetProjectedPayrollRequest {
    const message = createBaseGetProjectedPayrollRequest();
    message.paystubs = object.paystubs?.map((e) => ProjectedPayroll.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProjectedPayrollResponse(): GetProjectedPayrollResponse {
  return {
    payDate: "",
    payrollAmount: 0,
    payrollType: "",
    nextPayrollDates: [],
    nextPayrollDatesAdjusted: [],
    canPayrollBeCalculated: false,
  };
}

export const GetProjectedPayrollResponse = {
  encode(message: GetProjectedPayrollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payDate !== "") {
      writer.uint32(10).string(message.payDate);
    }
    if (message.payrollAmount !== 0) {
      writer.uint32(16).int32(message.payrollAmount);
    }
    if (message.payrollType !== "") {
      writer.uint32(26).string(message.payrollType);
    }
    for (const v of message.nextPayrollDates) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.nextPayrollDatesAdjusted) {
      writer.uint32(42).string(v!);
    }
    if (message.canPayrollBeCalculated === true) {
      writer.uint32(48).bool(message.canPayrollBeCalculated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectedPayrollResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectedPayrollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payDate = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.payrollAmount = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payrollType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextPayrollDates.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nextPayrollDatesAdjusted.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.canPayrollBeCalculated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectedPayrollResponse {
    return {
      payDate: isSet(object.payDate) ? globalThis.String(object.payDate) : "",
      payrollAmount: isSet(object.payrollAmount) ? globalThis.Number(object.payrollAmount) : 0,
      payrollType: isSet(object.payrollType) ? globalThis.String(object.payrollType) : "",
      nextPayrollDates: globalThis.Array.isArray(object?.nextPayrollDates)
        ? object.nextPayrollDates.map((e: any) => globalThis.String(e))
        : [],
      nextPayrollDatesAdjusted: globalThis.Array.isArray(object?.nextPayrollDatesAdjusted)
        ? object.nextPayrollDatesAdjusted.map((e: any) => globalThis.String(e))
        : [],
      canPayrollBeCalculated: isSet(object.canPayrollBeCalculated)
        ? globalThis.Boolean(object.canPayrollBeCalculated)
        : false,
    };
  },

  toJSON(message: GetProjectedPayrollResponse): unknown {
    const obj: any = {};
    if (message.payDate !== "") {
      obj.payDate = message.payDate;
    }
    if (message.payrollAmount !== 0) {
      obj.payrollAmount = Math.round(message.payrollAmount);
    }
    if (message.payrollType !== "") {
      obj.payrollType = message.payrollType;
    }
    if (message.nextPayrollDates?.length) {
      obj.nextPayrollDates = message.nextPayrollDates;
    }
    if (message.nextPayrollDatesAdjusted?.length) {
      obj.nextPayrollDatesAdjusted = message.nextPayrollDatesAdjusted;
    }
    if (message.canPayrollBeCalculated === true) {
      obj.canPayrollBeCalculated = message.canPayrollBeCalculated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectedPayrollResponse>, I>>(base?: I): GetProjectedPayrollResponse {
    return GetProjectedPayrollResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProjectedPayrollResponse>, I>>(object: I): GetProjectedPayrollResponse {
    const message = createBaseGetProjectedPayrollResponse();
    message.payDate = object.payDate ?? "";
    message.payrollAmount = object.payrollAmount ?? 0;
    message.payrollType = object.payrollType ?? "";
    message.nextPayrollDates = object.nextPayrollDates?.map((e) => e) || [];
    message.nextPayrollDatesAdjusted = object.nextPayrollDatesAdjusted?.map((e) => e) || [];
    message.canPayrollBeCalculated = object.canPayrollBeCalculated ?? false;
    return message;
  },
};

function createBaseGetNextPayrollDatesResponse(): GetNextPayrollDatesResponse {
  return { payrollDate: [] };
}

export const GetNextPayrollDatesResponse = {
  encode(message: GetNextPayrollDatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payrollDate) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNextPayrollDatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNextPayrollDatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payrollDate.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNextPayrollDatesResponse {
    return {
      payrollDate: globalThis.Array.isArray(object?.payrollDate)
        ? object.payrollDate.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetNextPayrollDatesResponse): unknown {
    const obj: any = {};
    if (message.payrollDate?.length) {
      obj.payrollDate = message.payrollDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNextPayrollDatesResponse>, I>>(base?: I): GetNextPayrollDatesResponse {
    return GetNextPayrollDatesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNextPayrollDatesResponse>, I>>(object: I): GetNextPayrollDatesResponse {
    const message = createBaseGetNextPayrollDatesResponse();
    message.payrollDate = object.payrollDate?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetNextPayrollDatesRequest(): GetNextPayrollDatesRequest {
  return { nextPayrollDate: "", expiresAt: "", payrollFrequency: "" };
}

export const GetNextPayrollDatesRequest = {
  encode(message: GetNextPayrollDatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextPayrollDate !== "") {
      writer.uint32(10).string(message.nextPayrollDate);
    }
    if (message.expiresAt !== "") {
      writer.uint32(18).string(message.expiresAt);
    }
    if (message.payrollFrequency !== "") {
      writer.uint32(26).string(message.payrollFrequency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNextPayrollDatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNextPayrollDatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nextPayrollDate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expiresAt = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payrollFrequency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNextPayrollDatesRequest {
    return {
      nextPayrollDate: isSet(object.nextPayrollDate) ? globalThis.String(object.nextPayrollDate) : "",
      expiresAt: isSet(object.expiresAt) ? globalThis.String(object.expiresAt) : "",
      payrollFrequency: isSet(object.payrollFrequency) ? globalThis.String(object.payrollFrequency) : "",
    };
  },

  toJSON(message: GetNextPayrollDatesRequest): unknown {
    const obj: any = {};
    if (message.nextPayrollDate !== "") {
      obj.nextPayrollDate = message.nextPayrollDate;
    }
    if (message.expiresAt !== "") {
      obj.expiresAt = message.expiresAt;
    }
    if (message.payrollFrequency !== "") {
      obj.payrollFrequency = message.payrollFrequency;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNextPayrollDatesRequest>, I>>(base?: I): GetNextPayrollDatesRequest {
    return GetNextPayrollDatesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNextPayrollDatesRequest>, I>>(object: I): GetNextPayrollDatesRequest {
    const message = createBaseGetNextPayrollDatesRequest();
    message.nextPayrollDate = object.nextPayrollDate ?? "";
    message.expiresAt = object.expiresAt ?? "";
    message.payrollFrequency = object.payrollFrequency ?? "";
    return message;
  },
};

function createBaseGetHolidaysRequest(): GetHolidaysRequest {
  return { inputDate: "" };
}

export const GetHolidaysRequest = {
  encode(message: GetHolidaysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputDate !== "") {
      writer.uint32(10).string(message.inputDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHolidaysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHolidaysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetHolidaysRequest {
    return { inputDate: isSet(object.inputDate) ? globalThis.String(object.inputDate) : "" };
  },

  toJSON(message: GetHolidaysRequest): unknown {
    const obj: any = {};
    if (message.inputDate !== "") {
      obj.inputDate = message.inputDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetHolidaysRequest>, I>>(base?: I): GetHolidaysRequest {
    return GetHolidaysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHolidaysRequest>, I>>(object: I): GetHolidaysRequest {
    const message = createBaseGetHolidaysRequest();
    message.inputDate = object.inputDate ?? "";
    return message;
  },
};

function createBaseGetHolidaysResponse(): GetHolidaysResponse {
  return { outputDates: [] };
}

export const GetHolidaysResponse = {
  encode(message: GetHolidaysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outputDates) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHolidaysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHolidaysResponse();
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

  fromJSON(object: any): GetHolidaysResponse {
    return {
      outputDates: globalThis.Array.isArray(object?.outputDates)
        ? object.outputDates.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetHolidaysResponse): unknown {
    const obj: any = {};
    if (message.outputDates?.length) {
      obj.outputDates = message.outputDates;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetHolidaysResponse>, I>>(base?: I): GetHolidaysResponse {
    return GetHolidaysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHolidaysResponse>, I>>(object: I): GetHolidaysResponse {
    const message = createBaseGetHolidaysResponse();
    message.outputDates = object.outputDates?.map((e) => e) || [];
    return message;
  },
};

export interface IncomeDetectionService {
  GetIncome(request: GetIncomeRequest): Promise<GetIncomeResponse>;
  GetNextPayrollDates(request: GetNextPayrollDatesRequest): Promise<GetNextPayrollDatesResponse>;
  GetProjectedPayroll(request: GetProjectedPayrollRequest): Promise<GetProjectedPayrollResponse>;
}

export const IncomeDetectionServiceServiceName = "ids.v1.IncomeDetectionService";
export class IncomeDetectionServiceClientImpl implements IncomeDetectionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || IncomeDetectionServiceServiceName;
    this.rpc = rpc;
    this.GetIncome = this.GetIncome.bind(this);
    this.GetNextPayrollDates = this.GetNextPayrollDates.bind(this);
    this.GetProjectedPayroll = this.GetProjectedPayroll.bind(this);
  }
  GetIncome(request: GetIncomeRequest): Promise<GetIncomeResponse> {
    const data = GetIncomeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetIncome", data);
    return promise.then((data) => GetIncomeResponse.decode(_m0.Reader.create(data)));
  }

  GetNextPayrollDates(request: GetNextPayrollDatesRequest): Promise<GetNextPayrollDatesResponse> {
    const data = GetNextPayrollDatesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNextPayrollDates", data);
    return promise.then((data) => GetNextPayrollDatesResponse.decode(_m0.Reader.create(data)));
  }

  GetProjectedPayroll(request: GetProjectedPayrollRequest): Promise<GetProjectedPayrollResponse> {
    const data = GetProjectedPayrollRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProjectedPayroll", data);
    return promise.then((data) => GetProjectedPayrollResponse.decode(_m0.Reader.create(data)));
  }
}

export interface HolidayService {
  GetHolidays(request: GetHolidaysRequest): Promise<GetHolidaysResponse>;
}

export const HolidayServiceServiceName = "ids.v1.HolidayService";
export class HolidayServiceClientImpl implements HolidayService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || HolidayServiceServiceName;
    this.rpc = rpc;
    this.GetHolidays = this.GetHolidays.bind(this);
  }
  GetHolidays(request: GetHolidaysRequest): Promise<GetHolidaysResponse> {
    const data = GetHolidaysRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHolidays", data);
    return promise.then((data) => GetHolidaysResponse.decode(_m0.Reader.create(data)));
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
