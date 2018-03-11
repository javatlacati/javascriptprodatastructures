/**
 * @constructor
 * @param {Type} item
 * @template Type
 */
function SinglyLinkedNode(item) {
    "use strict";
    this._item = item;
}

/**
 * @private
 * @type {Type}
 */
SinglyLinkedNode.prototype._item;

/**
 * @private
 * @type {SinglyLinkedNode<Type>}
 */
SinglyLinkedNode.prototype._next;

Object.defineProperty(SinglyLinkedNode.prototype, "item", {
    /**
     * @this {SinglyLinkedNode}
     * @return {Type}
     */
    get: function () {
        return this._item;
    },
    /**
     * @this {SinglyLinkedNode}
     * @param {Type} value
     */
    set: function (value) {
        this._item = value;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(SinglyLinkedNode.prototype, "next", {
    /**
     * @this {SinglyLinkedNode}
     * @return {SinglyLinkedNode<Type>}
     */
    get: function () {
        return this._next;
    },
    /**
     * @this {SinglyLinkedNode}
     * @param {SinglyLinkedNode<Type>} value
     */
    set: function (value) {
        this._next = value;
    },
    enumerable: true,
    configurable: true
});

/**
 * @return {String}
 */
SinglyLinkedNode.prototype.toString = function () {
    return (" Node(" + this._item + ") -> ") + this._next.toString();
};
