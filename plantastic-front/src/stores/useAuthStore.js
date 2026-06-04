import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)

  async function login(email, password) {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Error al iniciar sesión')
    user.value = data.usuario
    return data
  }

  async function logout() {
    await fetch('/api/users/logout', {
      method: 'POST',
      credentials: 'include',
    })
    user.value = null
  }

  const checked = ref(false)

  async function checkSession() {
    try {
      const res = await fetch('/api/users/me', {
        credentials: 'include'
      })
      if (res.ok) {
        user.value = await res.json()
      }
    } catch {
      // sin sesión activa
    } finally {
      checked.value = true // ← add
    }
  }

  return { user, isLoggedIn, login, logout, checked, checkSession }
})
