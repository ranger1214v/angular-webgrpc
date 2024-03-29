// source: proto/action.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.AiiiGRPC.Filter', null, global);
goog.exportSymbol('proto.AiiiGRPC.Item', null, global);
goog.exportSymbol('proto.AiiiGRPC.List', null, global);
goog.exportSymbol('proto.AiiiGRPC.Log', null, global);
goog.exportSymbol('proto.AiiiGRPC.Member', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AiiiGRPC.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.Item.displayName = 'proto.AiiiGRPC.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AiiiGRPC.List.repeatedFields_, null);
};
goog.inherits(proto.AiiiGRPC.List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.List.displayName = 'proto.AiiiGRPC.List';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AiiiGRPC.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.Filter.displayName = 'proto.AiiiGRPC.Filter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AiiiGRPC.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.Member.displayName = 'proto.AiiiGRPC.Member';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AiiiGRPC.Log = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AiiiGRPC.Log, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AiiiGRPC.Log.displayName = 'proto.AiiiGRPC.Log';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFieldWithDefault(msg, 2, 0),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.Item}
 */
proto.AiiiGRPC.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.Item;
  return proto.AiiiGRPC.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.Item}
 */
proto.AiiiGRPC.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.AiiiGRPC.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Item} returns this
 */
proto.AiiiGRPC.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 price = 2;
 * @return {number}
 */
proto.AiiiGRPC.Item.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.AiiiGRPC.Item} returns this
 */
proto.AiiiGRPC.Item.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.AiiiGRPC.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Item} returns this
 */
proto.AiiiGRPC.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AiiiGRPC.List.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.List.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.List.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.AiiiGRPC.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.List}
 */
proto.AiiiGRPC.List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.List;
  return proto.AiiiGRPC.List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.List}
 */
proto.AiiiGRPC.List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AiiiGRPC.Item;
      reader.readMessage(value,proto.AiiiGRPC.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.AiiiGRPC.Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.AiiiGRPC.Item>}
 */
proto.AiiiGRPC.List.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.AiiiGRPC.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AiiiGRPC.Item, 1));
};


/**
 * @param {!Array<!proto.AiiiGRPC.Item>} value
 * @return {!proto.AiiiGRPC.List} returns this
*/
proto.AiiiGRPC.List.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AiiiGRPC.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AiiiGRPC.Item}
 */
proto.AiiiGRPC.List.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AiiiGRPC.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AiiiGRPC.List} returns this
 */
proto.AiiiGRPC.List.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFieldWithDefault(msg, 2, 0),
    opstr: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.Filter}
 */
proto.AiiiGRPC.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.Filter;
  return proto.AiiiGRPC.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.Filter}
 */
proto.AiiiGRPC.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpstr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOpstr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.AiiiGRPC.Filter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Filter} returns this
 */
proto.AiiiGRPC.Filter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 price = 2;
 * @return {number}
 */
proto.AiiiGRPC.Filter.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.AiiiGRPC.Filter} returns this
 */
proto.AiiiGRPC.Filter.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string opStr = 3;
 * @return {string}
 */
proto.AiiiGRPC.Filter.prototype.getOpstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Filter} returns this
 */
proto.AiiiGRPC.Filter.prototype.setOpstr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.Member} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.Member}
 */
proto.AiiiGRPC.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.Member;
  return proto.AiiiGRPC.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.Member}
 */
proto.AiiiGRPC.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.Member.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.Member} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Member.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.AiiiGRPC.Member.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Member} returns this
 */
proto.AiiiGRPC.Member.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.AiiiGRPC.Member.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.AiiiGRPC.Member} returns this
 */
proto.AiiiGRPC.Member.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string timestamp = 3;
 * @return {string}
 */
proto.AiiiGRPC.Member.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Member} returns this
 */
proto.AiiiGRPC.Member.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AiiiGRPC.Log.prototype.toObject = function(opt_includeInstance) {
  return proto.AiiiGRPC.Log.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AiiiGRPC.Log} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Log.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, ""),
    label: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sessionid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AiiiGRPC.Log}
 */
proto.AiiiGRPC.Log.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AiiiGRPC.Log;
  return proto.AiiiGRPC.Log.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AiiiGRPC.Log} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AiiiGRPC.Log}
 */
proto.AiiiGRPC.Log.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AiiiGRPC.Log.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AiiiGRPC.Log.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AiiiGRPC.Log} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AiiiGRPC.Log.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string category = 1;
 * @return {string}
 */
proto.AiiiGRPC.Log.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Log} returns this
 */
proto.AiiiGRPC.Log.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string action = 2;
 * @return {string}
 */
proto.AiiiGRPC.Log.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Log} returns this
 */
proto.AiiiGRPC.Log.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string label = 3;
 * @return {string}
 */
proto.AiiiGRPC.Log.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Log} returns this
 */
proto.AiiiGRPC.Log.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.AiiiGRPC.Log.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Log} returns this
 */
proto.AiiiGRPC.Log.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sessionid = 5;
 * @return {string}
 */
proto.AiiiGRPC.Log.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.AiiiGRPC.Log} returns this
 */
proto.AiiiGRPC.Log.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.AiiiGRPC);
