function getSleepHours(day) {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    }
  }
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  function getIdealSleepHours (idealHours) {
    idealHours = 8;
    return idealHours*7;
  }
  
  function calculateSleepDebt() {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('you got the perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`you too like sleep, you are ${actualSleepHours - idealSleepHours} over your sleep limit`)
    } else {
      console.log(`you need to sleep more by ${idealSleepHours - actualSleepHours}`)
    }
  }
  calculateSleepDebt()