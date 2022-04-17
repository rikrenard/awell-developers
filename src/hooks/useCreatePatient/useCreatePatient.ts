import { useMutation } from '@apollo/client'

import { CREATE_PATIENT } from './graphql/CreatePatient.graphql'

interface UseCreatePatientHook {
  createPatient: (profile: unknown) => Promise<unknown>
}

export const useCreatePatient = (): UseCreatePatientHook => {
  const [createPatientMutation] = useMutation(CREATE_PATIENT)

  const createPatient = async (profile: unknown) => {
    try {
      const { data } = await createPatientMutation({
        variables: {
          input: profile,
        },
      })
      return data.createPatient.patient
    } catch (error) {
      console.log(error)
    }
    return undefined
  }
  return {
    createPatient,
  }
}
