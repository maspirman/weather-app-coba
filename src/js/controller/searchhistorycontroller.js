/** Class representing search history service. */
class SearchHistoryController {
  /**
   * Create city browse history controller.
   * @constructor
   * @param {object} appConfig - application config
   * @param {object} cityHistoryService - city history service
   */
  constructor(appConfig, cityHistoryService) {
    this._config = appConfig.historyView;
    this._cityHistoryService = cityHistoryService;
    this._cityInputController = null;
    this._elContainer = document.getElementById(this._config.container);
    this._isActive = false;
    attachOnClickEvent(this._elContainer, this.onClick, this);
  }

  bindCityInputController(cityInputController) {
    this._cityInputController = cityInputController;
  }

  /**
   * Shows search history list
   */
  show() {
    this._cityHistoryService.getItems().then(list => {
      // show history
      this._elContainer.innerHTML = list.map((value, index) =>
        '<div id="city-list-element-' + index + '" class="city-list-element">' + value + '</div>'
      ).join('');
      this._elContainer.classList.add('city-container-visible');
      this._isActive = true;
    });
  }

  /**
   * Hides search history list
   */
  hide() {
    this._isActive = false;
    this._elContainer.classList.remove('city-container-visible');
  }

  /**
   * Handles item click
   * @param {Event} e
   */
  onClick(e) {
    const target = e.target;
    const cityName = e.target.textContent;
    console.log('Clicked on ' + cityName);
    console.log(e);
    /* // Update user text input
    this._actionTargets.textInputElement.value = target.textContent; */

    // Hide list
    this._isActive = false;
    this._elContainer.classList.remove('city-container-visible');

    /* // invoke search
    this._actionTargets.actionSearchElement.click(); */

    this._cityInputController.setValue(cityName);

  }

  /**
   * Sets action targets
   * @param {Object} targets { textInputElement:, actionSearchElement: }
   */
  setTargets(targets) {
    this._actionTargets = targets;
  }

}