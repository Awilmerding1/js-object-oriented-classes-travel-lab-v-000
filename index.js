class Driver {
  
  constructor(name, day) {
    this.name = name 
    this.startDate = new Date(day)
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getFullYear()) - 1
  }
  
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation 
    this.endingLocation = endingLocation
  }
  
  blocksTravelled() {
    let h = Number.parseInt(this.beginningLocation[0], 10) - Number.parseInt(this.endingLocation[0], 10)
    let v = this.beginningLocation[1]
  }
  
}