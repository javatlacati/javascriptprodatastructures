/**
 * @constructor
 * @param {Object} item
 * @template Type
 */
function DoublyLinkedNode(item) {
    "use strict";
    this.item = item;
}

/**
 * @private
 * @type {Object}
 */
DoublyLinkedNode.prototype.item;

/**
 * @private
 * @type {DoublyLinkedNode<Type>}
 */
DoublyLinkedNode.prototype.previous;

/**
 * @private
 * @type {DoublyLinkedNode<Type>}
 */
DoublyLinkedNode.prototype.next;
