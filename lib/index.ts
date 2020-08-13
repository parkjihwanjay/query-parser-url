

const queryParser = (urlSearch:string) => {
    
    const queryList = urlSearch.split('&')
    const queryObject = queryList.reduce((query:object, currentItem:string) => {
      const keyValue = currentItem.split('=')
      const key = keyValue[0]
      const value = keyValue[1]
      query[key] = value
      return query
    }, {})
    return queryObject
}
