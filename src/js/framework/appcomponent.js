import AppServiceComponent from "./appservicecomponent";
import AppControllerComponent from "./appcontrollercomponent";

/**
 * Class representing application component with default properties.
 * Extended by AppServiceComponent class and AppControllerComponent class.
 */
export default class AppComponent {
  /**
   * AppComponent constructor
   */
  constructor() {
    this.dependencies = {
      Controllers: {},
      Services: {},
    };
    this.config = {};
  }

  /**
   * Returns component dependencies container
   * @returns {Object}
   */
  getDependencies() {
    return this.dependencies;
  }

  /**
   * Sets component dependencies container
   * @param dependencies
   */
  setDependencies(dependencies) {
    this.dependecies = dependencies;
  }

  /**
   * Returns component config
   * @returns {Object}
   */
  getConfig() {
    return this.config;
  }

  /**
   * Sets component config
   * @param config
   */
  setConfig(config) {
    this.config = config;
  }
}