import { useContext } from 'react'
import ZenAuthContext from 'app/contexts/ZenAuthContext'

const useAuth = () => useContext(ZenAuthContext)

export default useAuth
