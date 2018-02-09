import AppControllerComponent from './../framework/appcontrollercomponent.js';

/** Class representing url controller. */
export default class UrlController extends AppControllerComponent {
  /**
   * Create url controller.
   * @constructor
   */
  constructor() {
    super();
    this.config = {
      baseUrl: 'baseUrl',
    };
    this.dependencies = {};
    this.debugThisClassName('constructor');
  }

  /**
   * Updates URL
   * @param {string} cityName
   */
  updateUrl(cityName) {
    // TODO: CityInputController calls this method too early
    history.pushState({}, document.title, this.config.baseUrl + '?q=' + cityName );
  }

  /**
   * Extract city name from url
   */
  getCityName() {
    const url = new URL(window.location.href);
    const cityName = url.searchParams.get('q');
    console.log('Q=' + cityName);
    return cityName;
  }

  run() {
    super.run();
    this.debugThisClassName('run');
    const cityName = this.getCityName();
    if (this.dependencies.CityInputController && cityName) {
      this.dependencies.CityInputController.setValue(cityName);
    }
  }
}
