export const getUser = () => {
  const user = sessionStorage.getItem('user')
  if (!user) return
  return JSON.parse(user)
}