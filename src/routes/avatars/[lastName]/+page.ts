import { faker } from '@faker-js/faker'

export async function load({ params }) {
    const { lastName } = params
    console.log('lastName', lastName)

    return {
        lastName
    }
}