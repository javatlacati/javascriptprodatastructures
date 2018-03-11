/**
 * @interface
 * @template Type
 */
function List() {
}

/**
 * Gives the size of the list.
 * @return number of elements
 * @return {number}
 */
List.prototype.size = function () { };

/**
 * Determines if list is empty.
 * @return <code>true<code> if the list is empty <code>false<code>
 * otherwise
 * @return {boolean}
 */
List.prototype.isEmpty = function () { };

/**
 * @param {Type} object
 * @return {boolean}
 */
List.prototype.contains = function (object) { };

/**
 * @return {Array<Type>}
 */
List.prototype.toArray = function () { };

/**
 * Adds and element to the list.
 * @param element the element to be added
 * @return <code>true<code> if the element was added <code>false<code>
 * otherwise
 * @param {Type} element
 * @return {boolean}
 */
List.prototype.add = function (element) { };

List.prototype.clear = function () { };
