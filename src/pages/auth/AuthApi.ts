import { http } from "@/globals"
import { SessionDTO } from "@/store/session/types"

export default abstract class AuthApi {
  static async login(email: string, password: string) {
    return await http.post<SessionDTO>('auth/login', { email, password })
  }

  static async register(email: string, username: string, password: string) {
    return await http.post<SessionDTO>('auth/register', { email, username, password })
  }
}