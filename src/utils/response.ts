import { HttpMessage, HttpStatus } from "../core/constant/http.constant";

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
