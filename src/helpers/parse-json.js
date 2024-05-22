export const parseJson = text => {
  try {
    return JSON.parse(text)
  } catch (error) {
    return text
  }
}
