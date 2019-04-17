const titleCase = str => str
  .trim()
  .split(' ')
  .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
  .join(' ')

const paragraphCase = p => {
  let newParagraph = p.trim()
  newParagraph = newParagraph[0].toUpperCase() + newParagraph.slice(1)
  return newParagraph
}


module.exports = {
  titleCase,
  paragraphCase
}
