import { GlobalResponse, GlobalResponseWithError, Response } from "./response";
import { HttpException } from "../core/port/utils/exception.utils";

export class NotFoundException implements HttpException {
  constructor(error?: any) {
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}

export class BadRequestException implements HttpException {
  constructor(error?: any) {
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}

export class NotModifiedException implements HttpException {
  constructor(error?: any) {
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}

export class UnauthorizedException implements HttpException {
  constructor(error?: any) {
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}
