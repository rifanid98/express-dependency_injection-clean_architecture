import { GlobalResponse, GlobalResponseWithError } from "src/common/response";
interface Exception {
    throw(error: GlobalResponseWithError): GlobalResponse;
}
declare class HttpException implements Exception {
    constructor(error?: any);
    throw(error: GlobalResponseWithError): GlobalResponse;
}
export declare class NotFoundException extends HttpException {
    constructor(error?: any);
    throw(error: GlobalResponseWithError): GlobalResponse;
}
export declare class BadRequestException extends HttpException {
    constructor(error?: any);
    throw(error: GlobalResponseWithError): GlobalResponse;
}
export declare class NotModifiedException extends HttpException {
    constructor(error?: any);
    throw(error: GlobalResponseWithError): GlobalResponse;
}
export declare class UnauthorizedException extends HttpException {
    constructor(error?: any);
    throw(error: GlobalResponseWithError): GlobalResponse;
}
export {};
