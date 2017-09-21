Function.prototype.extends = function (father, option) {
    for (var key in father.prototype) {
        this.prototype[key] = father.prototype[key];
    }
    for (var name in option) {
        this.prototype[name] = option[name];

    }
}

// ps: extend prototype


