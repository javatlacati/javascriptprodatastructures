/**
 * Constructs instances of bag class.
 * @param capacity number of elements that this bag can hold.
 * @constructor
 * @implements {Bag<Item>}
 * @param {number} capacity
 * @template Item
 */
function ArrayBasedBag(capacity) {
    "use strict";
    this.internalArray = new Array(capacity);
    this.topPosition = 0;
}

/**
 * Array that contains the bag elements.
 * @type {Array<Item>}
 */
ArrayBasedBag.prototype.internalArray;

/**
 * Number of max 0 based index of used slots in the array.
 * @type {number}
 */
ArrayBasedBag.prototype.topPosition;

/**
 * {@inheritDoc}
 * @param {Item} item
 */
ArrayBasedBag.prototype.add = function (item) {
    if (this.internalArray.length > this.topPosition) {
        this.internalArray[this.topPosition++] = item;
    }
    else {
        throw new RangeError("Capacity overflow");
    }
};

/**
 * indexes are 0 based
 * @param {number} index
 * @return {Item}
 */
ArrayBasedBag.prototype.getAtIndex = function (index) {
    return this.internalArray[index];
};

/**
 * {@inheritDoc}
 * @return {boolean}
 */
ArrayBasedBag.prototype.isEmpty = function () {
    return this.topPosition == 0;
};

ArrayBasedBag.prototype.disposeItems = function () {
    this.internalArray = this.internalArray = new Array(this.internalArray.length);
    this.topPosition = 0;
};

/**
 * {@inheritDoc}
 * @return {number}
 */
ArrayBasedBag.prototype.size = function () {
    return this.topPosition;
};

/**
 * {@inheritDoc}
 * This method performs a lineal search.
 * @param {Item} target
 * @return {Item}
 */
ArrayBasedBag.prototype.find = function (target) {
    /** @type {number} */ var index = this.internalArray.indexOf(target);
    return index === -1 ? null : this.internalArray[index];
};
