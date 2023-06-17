function findMatching(drivers, name) {
    let selection = drivers.filter(match => match.toLowerCase() == name.toLowerCase())
    return selection
  }
  

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

  
  matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
  }

