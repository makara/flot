(function ($) {

/**
 * Flot.
 */
Drupal.flot = Drupal.flot || {};

/**
 * Attaches the behavior.
 */
Drupal.behaviors.Flot = {};
Drupal.behaviors.Flot.attach = function (context, settings) {
  for (var base in settings.flot) {
    if (!$('#' + base + '.flot-processed').length) {
      var element_settings = settings.flot[base];

      if (typeof element_settings.selector == 'undefined') {
        element_settings.selector = '#' + base;
      }
      $(element_settings.selector).each(function () {
        element_settings.element = this;
        Drupal.flot[base] = new Drupal.flot(base, this, element_settings);
      });

      $('#' + base).addClass('flot-processed');
    }
  }
};

/**
 * Flot object.
 */
Drupal.flot = function (base, element, element_settings) {
  var defaults = {
    options: {}
  };
  $.extend(this, defaults, element_settings);

  this.element = element;
  this.element_settings = element_settings;

  $.plot(element, element_settings.data, element_settings.options);
};

})(jQuery);
