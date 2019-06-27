export function handler() {
  return {
    statusCode: 500,
    body: JSON.stringify({ msg: '接受的数据' }) // Could be a custom message or object i.e. JSON.stringify(err)
  }
}
