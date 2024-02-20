import { useEffect } from 'react'
import { Slot } from 'expo-router'
import { authenticateAsync } from 'expo-local-authentication'

export default function ProtectedLayout() {
  useEffect(() => {
    const authenticate = async () => {
      const res = await authenticateAsync()
      console.log('res: ', res)
    }

    authenticate()
  }, [])

  return <Slot />
}
