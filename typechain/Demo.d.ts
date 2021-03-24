/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DemoInterface extends ethers.utils.Interface {
  functions: {
    "incNounce()": FunctionFragment;
    "nounce()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "incNounce", values?: undefined): string;
  encodeFunctionData(functionFragment: "nounce", values?: undefined): string;

  decodeFunctionResult(functionFragment: "incNounce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nounce", data: BytesLike): Result;

  events: {};
}

export class Demo extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DemoInterface;

  functions: {
    incNounce(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "incNounce()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nounce(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nounce()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  incNounce(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "incNounce()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nounce(overrides?: CallOverrides): Promise<BigNumber>;

  "nounce()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    incNounce(overrides?: CallOverrides): Promise<void>;

    "incNounce()"(overrides?: CallOverrides): Promise<void>;

    nounce(overrides?: CallOverrides): Promise<BigNumber>;

    "nounce()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    incNounce(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "incNounce()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nounce(overrides?: CallOverrides): Promise<BigNumber>;

    "nounce()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    incNounce(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "incNounce()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nounce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nounce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
