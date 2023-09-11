export async function getRandomNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10000));
    }, 2000); //wait for 1 second before resolving
  });
}