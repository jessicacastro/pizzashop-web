import { APIClient } from '@/lib/axios'

interface SignInBody {
  email: string
}

export const signIn = async ({ email }: SignInBody) =>
  APIClient.post('/authenticate', {
    email,
  })
