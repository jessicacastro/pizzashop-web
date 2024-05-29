import { APIClient } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const getManagedRestaurant = async () => {
  const response = await APIClient.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
