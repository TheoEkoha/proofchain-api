import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateUser(address: string, signature: string): Promise<any>;
    login(address: string, signature: string): Promise<{
        token: string;
    }>;
}
