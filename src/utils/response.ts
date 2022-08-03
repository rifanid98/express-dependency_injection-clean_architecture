export type GlobalResponse = {
  statusCode: number;
  message?: string;
  data?: any | any[];
  error?: any | any[];
};

export type GlobalResponseWithData = {
  message?: string;
  data?: any | any[];
};

export type GlobalResponseWithError = {
  message?: string;
  error?: any | any[];
};

export enum HttpStatus {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLYHINTS = 103,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  AMBIGUOUS = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  I_AM_A_TEAPOT = 418,
  MISDIRECTED = 421,
  UNPROCESSABLE_ENTITY = 422,
  FAILED_DEPENDENCY = 424,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}

export enum HttpMessage {
  CONTINUE = "Continue",
  SWITCHING_PROTOCOLS = "Switching Protocols",
  PROCESSING = "Processing",
  EARLYHINTS = "Earlyhints",
  OK = "OK",
  CREATED = "Created",
  ACCEPTED = "Accepted",
  NON_AUTHORITATIVE_INFORMATION = "Non Authoritative Information",
  NO_CONTENT = "No Contnent",
  RESET_CONTENT = "Reset Content",
  PARTIAL_CONTENT = "Partial Content",
  AMBIGUOUS = "Ambiguos",
  MOVED_PERMANENTLY = "Moved Permanently",
  FOUND = "Found",
  SEE_OTHER = "See Other",
  NOT_MODIFIED = "Not Modified",
  TEMPORARY_REDIRECT = "Temprary Redirect",
  PERMANENT_REDIRECT = "Permanent Redirect",
  BAD_REQUEST = "Bad Request",
  UNAUTHORIZED = "Unathorized",
  PAYMENT_REQUIRED = "Payment Required",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not Found",
  METHOD_NOT_ALLOWED = "Method Not Allowed",
  NOT_ACCEPTABLE = "Not Acceptable",
  PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required",
  REQUEST_TIMEOUT = "Request Timeout",
  CONFLICT = "Conflict",
  GONE = "Gone",
  LENGTH_REQUIRED = "Length Required",
  PRECONDITION_FAILED = "Precondition Failed",
  PAYLOAD_TOO_LARGE = "Payload Too Large",
  URI_TOO_LONG = "Uri Too Long",
  UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type",
  REQUESTED_RANGE_NOT_SATISFIABLE = "Requested Range Not Satisfable",
  EXPECTATION_FAILED = "Expectation Failed",
  I_AM_A_TEAPOT = "I Am A Teapot",
  MISDIRECTED = "Misdirected",
  UNPROCESSABLE_ENTITY = "Unprocessable Entity",
  FAILED_DEPENDENCY = "Failed Dependency",
  PRECONDITION_REQUIRED = "Precondition Required",
  TOO_MANY_REQUESTS = "Too Many Requests",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
  NOT_IMPLEMENTED = "Not Implemented",
  BAD_GATEWAY = "Bad Gateway",
  SERVICE_UNAVAILABLE = "Service Unavailable",
  GATEWAY_TIMEOUT = "Gateway Timeout",
  HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported",
}

export class Response {
  static resp: GlobalResponse;

  static created(param?: GlobalResponseWithData): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.CREATED;
    this.resp.message = param?.message ? param.message : HttpMessage.CREATED;
    param?.data ? (this.resp.data = param.data) : false;
    return this.resp;
  }

  static success(param?: GlobalResponseWithData): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.OK;
    this.resp.message = param?.message ? param.message : HttpMessage.OK;
    param?.data && (this.resp.data = param.data);
    return this.resp;
  }

  static error(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.INTERNAL_SERVER_ERROR;
    } else this.resp.message = HttpMessage.INTERNAL_SERVER_ERROR;
    return this.resp;
  }

  static badrequest(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.BAD_REQUEST;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.BAD_REQUEST;
    } else this.resp.message = HttpMessage.BAD_REQUEST;
    return this.resp;
  }

  static serviceunavailable(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.SERVICE_UNAVAILABLE;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.SERVICE_UNAVAILABLE;
    } else this.resp.message = HttpMessage.SERVICE_UNAVAILABLE;
    return this.resp;
  }

  static notfound(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.NOT_FOUND;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.NOT_FOUND;
    } else this.resp.message = HttpMessage.NOT_FOUND;
    return this.resp;
  }

  static notmodified(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.NOT_MODIFIED;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.NOT_MODIFIED;
    } else this.resp.message = HttpMessage.NOT_MODIFIED;
    return this.resp;
  }

  static unprocessableentity(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.UNPROCESSABLE_ENTITY;
    } else this.resp.message = HttpMessage.UNPROCESSABLE_ENTITY;
    return this.resp;
  }

  static unauthorized(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.UNAUTHORIZED;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.UNAUTHORIZED;
    } else this.resp.message = HttpMessage.UNAUTHORIZED;
    return this.resp;
  }

  static forbidden(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.FORBIDDEN;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.FORBIDDEN;
    } else this.resp.message = HttpMessage.FORBIDDEN;
    return this.resp;
  }

  static conflict(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.CONFLICT;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.CONFLICT;
    } else this.resp.message = HttpMessage.CONFLICT;
    return this.resp;
  }

  static gone(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.GONE;
    if (error?.message) {
      this.resp.message = error.message;
      this.resp.error = HttpMessage.GONE;
    } else this.resp.message = HttpMessage.GONE;
    return this.resp;
  }

  static clear() {
    this.resp = { statusCode: 0 };
  }
}
