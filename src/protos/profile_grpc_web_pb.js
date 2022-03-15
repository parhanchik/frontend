/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = require('./profile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ProfileClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ProfilePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SignInRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Profile_SignIn = new grpc.web.MethodDescriptor(
  '/Profile/SignIn',
  grpc.web.MethodType.UNARY,
  proto.SignInRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProfileClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Profile/SignIn',
      request,
      metadata || {},
      methodDescriptor_Profile_SignIn,
      callback);
};


/**
 * @param {!proto.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ProfilePromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Profile/SignIn',
      request,
      metadata || {},
      methodDescriptor_Profile_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SignUpRequest,
 *   !proto.SignUpResponse>}
 */
const methodDescriptor_Profile_SignUp = new grpc.web.MethodDescriptor(
  '/Profile/SignUp',
  grpc.web.MethodType.UNARY,
  proto.SignUpRequest,
  proto.SignUpResponse,
  /**
   * @param {!proto.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SignUpResponse.deserializeBinary
);


/**
 * @param {!proto.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SignUpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SignUpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProfileClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Profile/SignUp',
      request,
      metadata || {},
      methodDescriptor_Profile_SignUp,
      callback);
};


/**
 * @param {!proto.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SignUpResponse>}
 *     Promise that resolves to the response
 */
proto.ProfilePromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Profile/SignUp',
      request,
      metadata || {},
      methodDescriptor_Profile_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubmitCodeRequest,
 *   !proto.SubmitCodeResponse>}
 */
const methodDescriptor_Profile_SubmitCode = new grpc.web.MethodDescriptor(
  '/Profile/SubmitCode',
  grpc.web.MethodType.UNARY,
  proto.SubmitCodeRequest,
  proto.SubmitCodeResponse,
  /**
   * @param {!proto.SubmitCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubmitCodeResponse.deserializeBinary
);


/**
 * @param {!proto.SubmitCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SubmitCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubmitCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProfileClient.prototype.submitCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Profile/SubmitCode',
      request,
      metadata || {},
      methodDescriptor_Profile_SubmitCode,
      callback);
};


/**
 * @param {!proto.SubmitCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubmitCodeResponse>}
 *     Promise that resolves to the response
 */
proto.ProfilePromiseClient.prototype.submitCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Profile/SubmitCode',
      request,
      metadata || {},
      methodDescriptor_Profile_SubmitCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.Passport>}
 */
const methodDescriptor_Profile_GetPassport = new grpc.web.MethodDescriptor(
  '/Profile/GetPassport',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.Passport,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Passport.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Passport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Passport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProfileClient.prototype.getPassport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Profile/GetPassport',
      request,
      metadata || {},
      methodDescriptor_Profile_GetPassport,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Passport>}
 *     Promise that resolves to the response
 */
proto.ProfilePromiseClient.prototype.getPassport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Profile/GetPassport',
      request,
      metadata || {},
      methodDescriptor_Profile_GetPassport);
};


module.exports = proto;

