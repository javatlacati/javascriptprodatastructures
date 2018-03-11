/**
 * @constructor
 * @implements {unknown<Type>}
 * @template Type
 */
function SingleLinkedList() {
}

/**
 * @private
 * @type {SinglyLinkedNode<Type>}
 */
SingleLinkedList.prototype.root;

/**
 * @param {Type} element
 */
SingleLinkedList.prototype.addAtRoot = function (element) {
    /** @type {SinglyLinkedNode<Type>} */ var newNode = new SinglyLinkedNode(element);
    newNode.next = this.root;
    this.root = newNode;
};

/**
 * @param {Type} element
 * @return {boolean}
 */
SingleLinkedList.prototype.addAtEnd = function (element) {
    /** @type {SinglyLinkedNode<Type>} */ var newNode = new SinglyLinkedNode(element);
    try {
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            /** @type {SinglyLinkedNode<Type>} */ var actual = this.root;
            while (actual.next != null) {
                actual = actual.next;
            }
            actual.next = newNode;
        }
        return true;
    }
    catch (e) {
        return false;
    }
};

/**
 * Index is 0 base
 * @param element
 * @param index   position to insert
 * @param {Type} element
 * @param {Number} index
 */
SingleLinkedList.prototype.addAtIndex = function (element, index) {
    if (index == 0) {
        this.addAtRoot(element);
    }
    else {
        if (index > 0) {
            /** @type {SinglyLinkedNode<Type>} */ var currentNode = this.root.next;
            for (var currentIndex = 1; currentIndex < index; currentIndex++) {
                /** @type {SinglyLinkedNode<Type>} */ var next = currentNode.next;
                if (next != null) {
                    currentNode = next;
                }
                else {
                    throw ("the specified index is not possible to reach");
                }
            }
            currentNode.next = new SinglyLinkedNode(element);
        }
        else {
            throw ("no negative index values allowed");
        }
    }
};

/**
 * @param {SingleLinkedList<Type>} singleLinkedList
 */
SingleLinkedList.prototype.addSingleLinkedListAtRoot = function (singleLinkedList) {
    singleLinkedList.addAtEnd(this.root.item);
    this.root = singleLinkedList.root;
};

/**
 * @param {SingleLinkedList<Type>} singleLinkedList
 */
SingleLinkedList.prototype.addSingleLinkedListAtEnd = function (singleLinkedList) {
    this.addAtRoot(singleLinkedList.root.item);
};

SingleLinkedList.prototype.removeLast = function () {
    if (this.root != null) {
        if (this.root.next == null) {
            this.root = null;
        }
        else {
            /** @type {SinglyLinkedNode<Type>} */ var currentNode = this.root;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            if (currentNode.next == null) {
                currentNode.next = null;
            }
        }
    }
};

/**
 * @return {number}
 */
SingleLinkedList.prototype.size = function () {
    /** @type {number} */ var size = 0;
    /** @type {SinglyLinkedNode<Type>} */ var currentNode = this.root;
    while (currentNode != null) {
        currentNode = currentNode.next;
        size++;
    }
    return size;
};

/**
 * @return {boolean}
 */
SingleLinkedList.prototype.isEmpty = function () {
    return this.root == null;
};

/**
 * @param {Type} o
 * @return {boolean}
 */
SingleLinkedList.prototype.contains = function (o) {
    if (this.root == null && o == null) {
        return false;
    }
    else {
        /** @type {SinglyLinkedNode<Type>} */ var currentNode = this.root;
        while (currentNode) {
            if (currentNode.item == o) {
                return true;
            }
            currentNode = currentNode.next;
        }
    }
    return false;
};

/**
 * @return {Array<Type>}
 */
SingleLinkedList.prototype.toArray = function () {
    /** @type {Array<Type>} */ var retorno = new Array(this.size());
    /** @type {SinglyLinkedNode<Type>} */ var currentNode = this.root;
    /** @type {number} */ var index = 0;
    while (currentNode != null) {
        retorno[index] = currentNode.item;
        currentNode = currentNode.next;
        index++;
    }
    return retorno;
};

/**
 * @param {Type} element
 * @return {boolean}
 */
SingleLinkedList.prototype.add = function (element) {
    return this.addAtEnd(element);
};

SingleLinkedList.prototype.clear = function () {
    this.root = null;
};
