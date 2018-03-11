/**
 * @interface
 * @template Item
 */
function Bag() {
}

/**
 * Adds an item to the bag.
 * @param item item to be added to the bag
 * @param {Item} item
 */
Bag.prototype.add = function (item) { };

/**
 * Returns how many items it contains.
 * @return
 * @return {number}
 */
Bag.prototype.size = function () { };

/**
 * Searches for an Item.
 * @param target element to be searched
 * @return
 * @param {Item} target
 * @return {Item}
 */
Bag.prototype.find = function (target) { };

Bag.prototype.disposeItems = function () { };
