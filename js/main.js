function browserSupportsCSSProperty(propertyName) {
    var elm = document.createElement('div');
    propertyName = propertyName.toLowerCase();
  
    if (elm.style[propertyName] != undefined)
      return true;
  
    var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
      domPrefixes = 'Webkit Moz ms O'.split(' ');
  
    for (var i = 0; i < domPrefixes.length; i++) {
      if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
        return true;
    }
  
    return false;
  }

  if (!browserSupportsCSSProperty('animation')) {
    // fallback…
  }