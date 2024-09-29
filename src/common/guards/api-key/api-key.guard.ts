import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as process from 'node:process';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest<Request>();
        const authHeader = request.headers['authorization'];
        return authHeader === process.env.API_KEY;
    }
}
