// source: proto/moonshot.proto
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

goog.provide('proto.v1.PlacedBet');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');

goog.forwardDeclare('proto.v1.PlacedBetStatus');
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
proto.v1.PlacedBet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.PlacedBet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.PlacedBet.displayName = 'proto.v1.PlacedBet';
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
proto.v1.PlacedBet.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.PlacedBet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.PlacedBet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.PlacedBet.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    trash: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    userId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    betId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    placedbetstatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    payoutmultiplier: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0)
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
 * @return {!proto.v1.PlacedBet}
 */
proto.v1.PlacedBet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.PlacedBet;
  return proto.v1.PlacedBet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.PlacedBet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.PlacedBet}
 */
proto.v1.PlacedBet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrash(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBetId(value);
      break;
    case 7:
      var value = /** @type {!proto.v1.PlacedBetStatus} */ (reader.readEnum());
      msg.setPlacedbetstatus(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPayoutmultiplier(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
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
proto.v1.PlacedBet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.PlacedBet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.PlacedBet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.PlacedBet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTrash();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBetId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPlacedbetstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getPayoutmultiplier();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.PlacedBet.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.v1.PlacedBet.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.v1.PlacedBet} returns this
*/
proto.v1.PlacedBet.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.PlacedBet.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.v1.PlacedBet.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.v1.PlacedBet} returns this
*/
proto.v1.PlacedBet.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.PlacedBet.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool trash = 4;
 * @return {boolean}
 */
proto.v1.PlacedBet.prototype.getTrash = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setTrash = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string user_id = 5;
 * @return {string}
 */
proto.v1.PlacedBet.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string bet_id = 6;
 * @return {string}
 */
proto.v1.PlacedBet.prototype.getBetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setBetId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional PlacedBetStatus placedBetStatus = 7;
 * @return {!proto.v1.PlacedBetStatus}
 */
proto.v1.PlacedBet.prototype.getPlacedbetstatus = function() {
  return /** @type {!proto.v1.PlacedBetStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.v1.PlacedBetStatus} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setPlacedbetstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional float payoutMultiplier = 8;
 * @return {number}
 */
proto.v1.PlacedBet.prototype.getPayoutmultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setPayoutmultiplier = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float amount = 9;
 * @return {number}
 */
proto.v1.PlacedBet.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.v1.PlacedBet} returns this
 */
proto.v1.PlacedBet.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};

