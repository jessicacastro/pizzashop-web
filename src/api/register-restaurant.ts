import { APIClient } from '@/lib/axios'

interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export const registerRestaurant = ({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) =>
  APIClient.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
