import { HttpException } from '@nestjs/common';
export declare class ValidationExeption extends HttpException {
    messages: string[];
    constructor(response: any);
}
