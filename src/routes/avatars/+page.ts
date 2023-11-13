import { faker } from '@faker-js/faker'

export async function load() {
    const fiftyNames = [...Array(50)].map(() => {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: faker.image.avatar(),
        }
    })
    return {
        body: fiftyNames,
    }
}