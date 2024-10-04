import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as ethers from 'ethers';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(address: string, signature: string): Promise<any> {
    const message = `Sign this message to authenticate: ${new Date().toISOString()}`;
    
    try {
      // Utilisation d'ethers.js pour vérifier la signature
      const signerAddress = ethers.verifyMessage(message, signature);
      if (signerAddress.toLowerCase() === address.toLowerCase()) {
        return { address }; // Signature valide, retour de l'adresse du wallet
      }
    } catch (error) {
      console.error("Signature invalide", error);
    }

    return null; // Si la signature est invalide
  }

  // Génération du JWT si la signature est valide
  async login(address: string, signature: string) {
    console.log("address ", address)
    console.log("signature ", signature)
    const user = await this.validateUser(address, signature);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Génération du JWT avec l'adresse comme payload
    const payload = { address: user.address };
    return {
      token: this.jwtService.sign(payload), // Génération du token JWT
    };
  }
}
