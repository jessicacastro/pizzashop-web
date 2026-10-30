import { APIClient } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async () => {
  const response = await APIClient.get<GetProfileResponse>('/me')

  return response.data
}
