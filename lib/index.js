const queryParser = (urlSearch) => {
    
    const queryList = urlSearch.split('&')
    const queryObject = queryList.reduce((query, currentItem) => {
      const keyValue = currentItem.split('=')
      const key = keyValue[0]
      const value = keyValue[1]
      query[key] = value
      return query
    }, {})
    return queryObject
}

module.exports = queryParser