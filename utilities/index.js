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

const sortRecords = (records, method) => {
  const recordsCopy = records.map(record => ({...record}))
  let sortingFunction;

  switch(method) {
    case 'Date: Most Recent': {
      sortingFunction = (a, b) => (new Date(b.date) - new Date(a.date))
      break;
    }
    case 'Date: Oldest': {
      sortingFunction = (a, b) => (new Date(a.date) - new Date(b.date))
      break;
    }
    case 'Pain Level: Highest': {
      sortingFunction = (a, b) => b.painLevel - a.painLevel
      break;
    }
    case 'Pain Level: Lowest': {
      sortingFunction = (a, b) => a.painLevel - b.painLevel
      break;
    }
    default: {
      sortingFunction = (a, b) => (new Date(a.date) - new Date(b.date))
    }
  }

  return recordsCopy.sort(sortingFunction)
}

const displayDate = date => `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`

module.exports = {
  titleCase,
  paragraphCase,
  sortRecords,
  displayDate
}
