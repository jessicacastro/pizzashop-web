import { APIClient } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export const updateProfile = ({ name, description }: UpdateProfileBody) =>
  APIClient.put('/profile', { name, description })
