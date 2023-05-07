import { IUserProps, Roles } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): IUserProps => ({
  isSignInLoading: false,
  isSignUpLoading: false,
  isLogOutLoading: false,
  isRoleSelectSuccessful: false,
  isResetPasswordLoading: false,
  error: null,
  isAuthenticated: false,
  language: 'en',
  isLanguageChangeLoading: false,
  errorGoogleSignIn: '',
  selectedIndex: 0,
  otp: null,
  isRoleSelectLoading: false,
  user: {
    fullName: '',
    email: '',
    uuid: '',
    name: '',
    address: '',
    phone: '',
    employeeQuantity: 0,
    organizationType: '',
    imageURL: '',
    role: Roles.NOROLE,
  },
})
