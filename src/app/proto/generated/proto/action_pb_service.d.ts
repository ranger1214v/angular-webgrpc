// package: AiiiGRPC
// file: proto/action.proto

import * as proto_action_pb from "../proto/action_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ToDoServiceUnaryAddItem = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_action_pb.Item;
  readonly responseType: typeof proto_action_pb.List;
};

type ToDoServiceClientStreamingAddItem = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof proto_action_pb.Item;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ToDoServiceServerStreamingSubList = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_action_pb.Filter;
  readonly responseType: typeof proto_action_pb.Item;
};

type ToDoServiceBidirectionalStreamingAsyncList = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_action_pb.Item;
  readonly responseType: typeof proto_action_pb.List;
};

export class ToDoService {
  static readonly serviceName: string;
  static readonly UnaryAddItem: ToDoServiceUnaryAddItem;
  static readonly ClientStreamingAddItem: ToDoServiceClientStreamingAddItem;
  static readonly ServerStreamingSubList: ToDoServiceServerStreamingSubList;
  static readonly BidirectionalStreamingAsyncList: ToDoServiceBidirectionalStreamingAsyncList;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ToDoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  unaryAddItem(
    requestMessage: proto_action_pb.Item,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_action_pb.List|null) => void
  ): UnaryResponse;
  unaryAddItem(
    requestMessage: proto_action_pb.Item,
    callback: (error: ServiceError|null, responseMessage: proto_action_pb.List|null) => void
  ): UnaryResponse;
  clientStreamingAddItem(metadata?: grpc.Metadata): RequestStream<proto_action_pb.Item>;
  serverStreamingSubList(requestMessage: proto_action_pb.Filter, metadata?: grpc.Metadata): ResponseStream<proto_action_pb.Item>;
  bidirectionalStreamingAsyncList(metadata?: grpc.Metadata): BidirectionalStream<proto_action_pb.Item, proto_action_pb.List>;
}

