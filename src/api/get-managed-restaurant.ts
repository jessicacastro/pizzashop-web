import { APIClient } from '@/lib/axios'

interface GetManagerRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const getManagerRestaurant = async () => {
  const response = await APIClient.get<GetManagerRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
