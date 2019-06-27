export function handler() {
  return {
    statusCode: 500,
    body: JSON.stringify({ msg: '我还会回来的' }) // Could be a custom message or object i.e. JSON.stringify(err)
  }
}