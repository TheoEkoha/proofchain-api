import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: {
        address: string;
        signature: string;
    }): Promise<{
        token: string;
    }>;
}
