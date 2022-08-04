import { GlobalResponse, GlobalResponseWithError, Response } from "utils";
import { HttpMessage } from "../../constant/http.constant";

interface Exception {
  throw(error: GlobalResponseWithError): GlobalResponse;
}

export class HttpException implements Exception {
  constructor(error?: any) {
    this.throw(error ?? HttpMessage.INTERNAL_SERVER_ERROR);
  }

  throw(error: GlobalResponseWithError): GlobalResponse {
    return Response.error(error);
  }
}
