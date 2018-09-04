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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hStart = Number.parseInt(this.beginningLocation[0], 10) 
    let hEnd = Number.parseInt(this.endingLocation[0], 10)
    
    if (hStart < hEnd) {
      let h = hEnd - hStart
    } else {
      let h =  hStart - hEnd
    }
    
    let vStart = this.beginningLocation[1]
  }
  
}