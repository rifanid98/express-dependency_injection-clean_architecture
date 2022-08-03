import {
  GlobalResponse,
  GlobalResponseWithError,
  HttpMessage,
  Response,
} from ".//response";

interface Exception {
  throw(error: GlobalResponseWithError): GlobalResponse;
}

class HttpException implements Exception {
  constructor(error?: any) {
    this.throw(error ?? HttpMessage.INTERNAL_SERVER_ERROR);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.error(error);
  }
}

export class NotFoundException extends HttpException {
  constructor(error?: any) {
    super(error);
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}

export class BadRequestException extends HttpException {
  constructor(error?: any) {
    super(error);
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}

export class NotModifiedException extends HttpException {
  constructor(error?: any) {
    super(error);
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(error?: any) {
    super(error);
    this.throw(error);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.notfound(error);
  }
}
