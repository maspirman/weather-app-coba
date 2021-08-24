const appConfig = {
  baseUrl: window.location.protocol + "//" + window.location.host
    + window.location.pathname.split('/').slice(0,-1).join('/') + '/',
  api: {
    apiUrl : 'http://api.openweathermap.org/data/2.5/',
    apiEndpoint : {
      current: {
        cityname : { path: 'weather', params: ['q'] }, // ?q={city name},{country code}
        latlon : { path: 'weather', params: ['lat', 'lon'] }, //?lat={lat}&lon={lon}
      },
      forecast5 : {
        cityname : { path: 'forecast', params: ['q'] }, // ?q={city name},{country code}
        latlon : { path: 'weather', params: ['lat', 'lon'] }, //?lat={lat}&lon={lon}
      },
    },
    apiKey: 'abc4376c0c3836d72cde39fae90720fc',
    apiParamName: 'APPID',
    iconUrl: 'http://openweathermap.org/img/w/',
    iconExt: '.png',
  },
  notification: {
    progress: {
      container: 'progress-notification',
      action: 'progress-action',
      count: 'progress-count',
      countUnit: 'progress-count-unit',
      ofConjunction: 'progress-of',
      total: 'progress-total',
      totalUnit: 'progress-total-unit',
    }
  },
  search: {
    container: 'search-bar',
    gps: 'gps',
    favNo: 'favourite-no',
    favYes: 'favourite-yes',
    favDropDown: 'favourite-dropdown',
    textInput: 'search-input',
    searchAction: 'search-action',
  },
  weatherView: {
    container: 'weather-container',
    todayMain: 'weather-today-main',
    todayDebug: 'weather-today-debug',
    todayError: 'weather-today-error',
    todaySpinner: 'weather-today-spinner',
    forecastMain: 'weather-forecast-main',
    forecastDebug: 'weather-forecast-debug',
    forecastError: 'weather-forecast-error',
    forecastSpinner: 'weather-forecast-spinner',
  },
  cityList: 'assets/city.list.json',
  storage: {
    dbName: 'weatherapp-rdnk',
    dbVersion: 1,
    store: [
      // [0]: upgrade to v.1
      [
        {
          storeName: 'settings',
          storeOptions: {keyPath: 'option'},
          fields: ['option', 'value'], // option = {Units|...}; Units={metric|imperial}
        },
        {
          storeName: 'cities',
          storeOptions: {keyPath: 'id'},
          fields: ['id', 'name', 'nameUC'], // city name, city name uppercase
          index: [['nameUC']], // indices; when single literal then index name == index key name
        },
        {
          storeName: 'favcity',
          storeOptions: {keyPath: 'id'},
          fields: ['id', 'name', 'nameUC'], // city name, city name uppercase
          index: [['nameUC']],
        },
        {
          storeName: 'cityhistory',
          storeOptions: {keyPath: 'id'},
          fields: ['id', 'name', 'nameUC', 'lastQueried', 'queryCount'], // city name, city name uppercase
          index: [['nameUC'], ['lastQueried'], ['queryCount']],
        },
      ],
      // [1]: upgrade to v.2
      [
        {
          storeName: 'weather',
        },
      ],
    ], // store
  },
};
