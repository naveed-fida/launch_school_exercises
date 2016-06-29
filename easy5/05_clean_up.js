function cleanUp(text) {
  return text.replace(/[^a-zA-Z]/g, ' ').replace(/\s+/g, ' ')
}
