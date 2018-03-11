/**
 * @constructor
 * @implements {unknown<Type>}
 * @template Type
 */
function DoublyLinkedList() {
}

/**
 * @private
 * @type {DoublyLinkedNode<Type>}
 */
DoublyLinkedList.prototype.root;

/**
 * @return {number}
 */
DoublyLinkedList.prototype.size = function () {
    return undefined;
};

/**
 * @return {boolean}
 */
DoublyLinkedList.prototype.isEmpty = function () {
    return null === this.root;
};

/**
 * @param {Type} object
 * @return {boolean}
 */
DoublyLinkedList.prototype.contains = function (object) {
    return undefined;
};

/**
 * @return {Array<Type>}
 */
DoublyLinkedList.prototype.toArray = function () {
    return undefined;
};

/**
 * @param {Type} element
 * @return {boolean}
 */
DoublyLinkedList.prototype.add = function (element) {
    return undefined;
};

DoublyLinkedList.prototype.clear = function () {
};
