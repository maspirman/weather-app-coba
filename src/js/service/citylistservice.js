import AppServiceComponent from "../framework/appservicecomponent.js";
import StorageService from "./storageservice.js";
/** Class representing city list service. */
export default class CityListService extends AppServiceComponent {
  /**
   * Create city list service.
   * @constructor
   */
  constructor() {
    super();
    this.config = {
      baseUrl: 'baseUrl',
      cityList: 'cityList',
    };
    this.dependencies = {
      Services: {
        StorageService: 'StorageService',
      },
    };
    this._storeName = 'cities';
  }

  /* === Public methods === */

  /**
   * Component initial activities
   */
  run() {
    super.run();
    // this.debugThisClassName('run');
    this.updateStorage();
  }

  /* === Private methods : SECONDARY === */

  /**
   * Update idb storage if required
   */
  updateStorage() {
    this.dependencies.Services.StorageService.storeCount(this._storeName).then(count => {
      if (!count) {
        this.loadSource().then(cityList => {
          console.log(cityList.length + ' entries in the city list.');
          cityList = cityList.slice(0, 1234);
          this.dependencies.Services.StorageService.put(this._storeName, cityList).then(()=>{
            console.log('idb.cities updated.');
          });
        });
      }
      console.log('CityListService.updateStorage(cities).count==' + count);
    });
  }

  /**
   * Import data (cities list) from external resource and customize it as appropriate
   */
  loadSource() {
    return fetch(this.config.baseUrl + this.config.cityList, {method: 'get'})
      .then(response => {
        if (response.ok)
         return response.json();
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        let list = data.map(entry =>
          ({id: entry.id, name:entry.name + ', ' + entry.country, nameUC: (entry.name + ', ' + entry.country).toUpperCase()})
        ).filter(el => /^[^\d\W]/.test(el.name));
        return list.sort((a,b) => a.nameUC < b.nameUC ? -1 : 1 );
      })
      .catch(error => {
        console.error(error);
      });
  }
}
