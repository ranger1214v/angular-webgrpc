/**
 * @fileoverview gRPC-Web generated client stub for AiiiGRPC
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_action_pb from '../proto/action_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ToDoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorUnaryAddItem = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/UnaryAddItem',
    grpcWeb.MethodType.UNARY,
    proto_action_pb.Item,
    proto_action_pb.List,
    (request: proto_action_pb.Item) => {
      return request.serializeBinary();
    },
    proto_action_pb.List.deserializeBinary
  );

  unaryAddItem(
    request: proto_action_pb.Item,
    metadata: grpcWeb.Metadata | null): Promise<proto_action_pb.List>;

  unaryAddItem(
    request: proto_action_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_action_pb.List) => void): grpcWeb.ClientReadableStream<proto_action_pb.List>;

  unaryAddItem(
    request: proto_action_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_action_pb.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AiiiGRPC.ToDoService/UnaryAddItem',
        request,
        metadata || {},
        this.methodDescriptorUnaryAddItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AiiiGRPC.ToDoService/UnaryAddItem',
    request,
    metadata || {},
    this.methodDescriptorUnaryAddItem);
  }

  methodDescriptorServerStreamingSubList = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/ServerStreamingSubList',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_action_pb.Filter,
    proto_action_pb.Item,
    (request: proto_action_pb.Filter) => {
      return request.serializeBinary();
    },
    proto_action_pb.Item.deserializeBinary
  );

  serverStreamingSubList(
    request: proto_action_pb.Filter,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_action_pb.Item> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/AiiiGRPC.ToDoService/ServerStreamingSubList',
      request,
      metadata || {},
      this.methodDescriptorServerStreamingSubList);
  }

  methodDescriptorUnaryAddMemberRecord = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/UnaryAddMemberRecord',
    grpcWeb.MethodType.UNARY,
    proto_action_pb.Member,
    google_protobuf_empty_pb.Empty,
    (request: proto_action_pb.Member) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  unaryAddMemberRecord(
    request: proto_action_pb.Member,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  unaryAddMemberRecord(
    request: proto_action_pb.Member,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unaryAddMemberRecord(
    request: proto_action_pb.Member,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AiiiGRPC.ToDoService/UnaryAddMemberRecord',
        request,
        metadata || {},
        this.methodDescriptorUnaryAddMemberRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AiiiGRPC.ToDoService/UnaryAddMemberRecord',
    request,
    metadata || {},
    this.methodDescriptorUnaryAddMemberRecord);
  }

  methodDescriptorServerStreamingSubMemberRecord = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/ServerStreamingSubMemberRecord',
    grpcWeb.MethodType.SERVER_STREAMING,
    google_protobuf_empty_pb.Empty,
    proto_action_pb.Member,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proto_action_pb.Member.deserializeBinary
  );

  serverStreamingSubMemberRecord(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_action_pb.Member> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/AiiiGRPC.ToDoService/ServerStreamingSubMemberRecord',
      request,
      metadata || {},
      this.methodDescriptorServerStreamingSubMemberRecord);
  }

}

