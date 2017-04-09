console.log('js is working');

var moveValue = document.getElementById('move-value');

document.getElementById('move-range').addEventListener('change', function () {
  moveValue.innerText = this.value;
}, false);

document.addEventListener('DOMContentLoaded', function(e) {
  var ruleNames = [];
  var forEach = Array.prototype.forEach;

  var ruleElements = document.querySelectorAll('span[data-rule]');
  forEach.call(ruleElements, function(element) {
    var ruleName = element.getAttribute('data-rule');
    if (ruleNames.indexOf(ruleNames) < 0) {
      ruleNames.push(ruleName);
    }
  });

  var validate = function () {
    var messages = document.querySelectorAll('.validation-messages span');
    forEach.call(messages, function (message){
      message.classList.add('hide')
    });
    document.getElementById('change-email-form').checkValidity();
  };

  var validationFail = function (e) {
    var element, validity;

    element = e.currentTarget;
    validity = element.validity;

    if (!validity.valid) {
      ruleNames.forEach(function (ruleName) {
        checkRule(validity, ruleName, element);
      });
      e.preventDefault();
    }
  };
  var checkRule = function(state, ruleName, element) {
    if (state[ruleName]) {
      var rules = element
        .nextElementSibling
        .querySelectorAll('[data-rule="' + ruleName + '"]');
      forEach.call(rules, function(rule){
        rule.classList.remove('hide');
      });
    }
  };

  var inputElements = document.querySelectorAll('input:not(button)');
  forEach.call(inputElements, function(input){
    input.oninvalid = validationFail;
    input.onblur = validate;
  });
  document.getElementById('login-button').addEventListener('click', validate, false);
});

