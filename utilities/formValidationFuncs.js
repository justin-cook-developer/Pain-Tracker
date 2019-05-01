const title = title => {
  if (title === '') {
    return 'Title Required.'
  } else if (title.length > 100) {
    return 'Title must be fewer than 100 characters.'
  } else {
    return null
  }
}

const date = dateStr => {
  if (dateStr === '') {
    return 'Date is required.'
  } else {
    return null
  }
}

const painLevel = level => {
  if (level === '' || level === undefined || level === null) {
    return 'Pain level must be a number from 0-10.'
  } else if (level < 0) {
    return 'Pain level cannot be less than 0.'
  } else if (level > 10) {
    return 'Pain level cannot be more than 10.'
  } else {
    return null
  }
}

const notes = notes => {
  if (notes === '') {
    return 'Notes are required.'
  } else {
    return null
  }
}

const validators = {
  title,
  painLevel,
  notes,
  date
}

export default validators
