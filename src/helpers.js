// Helper function to generate a random ID
export function randomId (length) {
  const characters =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const pickRandom = () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  return [...Array(length)].map(pickRandom).join('')
}

// Helper function to generate a timestamp
let startTime = null
export function currentTimestamp () {
  if (startTime === null) {
    startTime = Date.now()
    return 0
  } else {
    return Date.now() - startTime
  }
}
