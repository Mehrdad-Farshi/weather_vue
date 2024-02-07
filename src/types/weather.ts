type Temp = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
}

type Wind = {
  speed: number
}

export interface ExpandedWeather {
  id: number
  city_id: number
  code?: number
  timezone: number
  name: string
  country: string
  location: string
  main: string
  description: string
  icon: string
  temp: Temp & {[k: string]: number}
  wind: Wind
}




// visibility: data.visibility
// wind_speed: data.wind.speed
// humidity: data.main.humidity
// pressure: data.main.pressure




// let weatherOBJ: Weather = {
  //   id: data.value.weather[0].id,
  //   city_id: data.value.id,
  //   name: data.value.name,
  //   country: data.value.sys.country,
  //   main: data.value.weather[0].main,
  //   description: data.value.weather[0].description,
  //   icon: data.value.weather[0].icon,
  //   temp: {
  //     temp: data.value.main.temp,
  //     feels_like: data.value.main.feels_like,
  //     temp_min: data.value.main.temp_min,
  //     temp_max: data.value.main.temp_max
  //   },
  //   wind: {
  //     speed: data.value.wind.speed
  //   }
  // }