/**
 * @constructor
 * @implements {unknown<Type>}
 * @template Type
 */
function TailedSingleLinkedList() {
}

/**
 * @private
 * @type {SinglyLinkedNode<Type>}
 */
TailedSingleLinkedList.prototype.head;

/**
 * @private
 * @type {SinglyLinkedNode<Type>}
 */
TailedSingleLinkedList.prototype.tail;

/**
 * @return {number}
 */
TailedSingleLinkedList.prototype.size = function () {
    /** @type {SinglyLinkedNode<Type>} */ var tmp = this.head;
    /** @type {number} */ var size = 0;
    while (null != tmp) {
        tmp = tmp.next;
        size++;
    }
    return size;
};

/**
 * @return {boolean}
 */
TailedSingleLinkedList.prototype.isEmpty = function () {
    return this.head == null;
};

/**
 * @param {Type} o
 * @return {boolean}
 */
TailedSingleLinkedList.prototype.contains = function (o) {
    /** @type {SinglyLinkedNode<Type>} */ var current = this.head;
    while (current != null) {
        if (o === current.item)
            return true;
        current = current.next;
    }
    return false;
};

/**
 * @return {Array<Type>}
 */
TailedSingleLinkedList.prototype.toArray = function () {
    /** @type {number} */ var size = this.size();
    /** @type {Array<Type>} */ var retorno = [];
    if (size != 0) {
        /** @type {SinglyLinkedNode<Type>} */ var currentNode = this.head;
        /** @type {number} */ var index = 0;
        while (currentNode != null) {
            retorno[index] = currentNode.item;
            currentNode = currentNode.next;
            index++;
        }
    }
    return retorno;
};

/**
 * {@inheritDoc}
 * @param {Type} element
 * @return {boolean}
 */
TailedSingleLinkedList.prototype.add = function (element) {
    //        System.out.println("Adding: "+element);
    return this.addAtEnd(new SinglyLinkedNode(element));
};

TailedSingleLinkedList.prototype.clear = function () {
    this.head = null;
    this.tail = null;
};

/**
 * @private
 * @param {SinglyLinkedNode<Type>} aNode
 * @return {boolean}
 */
TailedSingleLinkedList.prototype.addAtEnd = function (aNode) {
    // check if the list is empty
    if (this.head == null) {
        //since there is only one element, both head and
        //tail points to the same object.
        this.head = aNode;
        this.tail = aNode;
    }
    else {
        //set current tail next link to new node
        this.tail.next = aNode;
        //set tail as newly created node
        this.tail = aNode;
    }
    return true;
};

/**
 * @param {Type} element
 * @param {Type} after
 */
TailedSingleLinkedList.prototype.addAfter = function (element, after) {
    /** @type {SinglyLinkedNode<Type>} */ var tmp = this.head;
    /** @type {SinglyLinkedNode<Type>} */ var refNode = null;
    /*
     * Traverse till given element
     */
    while (true) {
        if (tmp == null) {
            //break;
            throw new Error("Unable to find the given element...");
        }
        //            if(tmp.compareTo(after) == 0){
        if (tmp.item === after) {
            //found the target node, add after this node
            refNode = tmp;
            break;
        }
        tmp = tmp.next;
    }
    if (refNode != null) {
        //add element after the target node
        /** @type {SinglyLinkedNode<Type>} */ var nd = new SinglyLinkedNode(element);
        nd.next = tmp.next;
        if (tmp == this.tail) {
            this.tail = nd;
        }
        tmp.next = nd;
    }
    else {
        throw new Error("Unable to find the given element...");
    }
};

TailedSingleLinkedList.prototype.deleteFront = function () {
    if (null == this.head) {
        throw new Error("Capacity underflow");
    }
    /** @type {SinglyLinkedNode<Type>} */ var tmp = this.head;
    this.head = tmp.next;
    if (null == this.head) {
        this.tail = null;
    }
    //console.log("Deleted: "+tmp.getItem());
};

/**
 * @param {Type} after
 */
TailedSingleLinkedList.prototype.deleteAfter = function (after) {
    /** @type {SinglyLinkedNode<Type>} */ var tmp = this.head;
    /** @type {SinglyLinkedNode<Type>} */ var refNode = null;
    //System.out.println("Traversing to all nodes..");
    /*
     * Traverse till given element
     */
    while (true) {
        if (tmp == null) {
            break;
        }
        if (tmp.item === after) {
            //found the target node, add after this node
            refNode = tmp;
            break;
        }
        tmp = tmp.next;
    }
    if (refNode != null) {
        tmp = refNode.next;
        refNode.next = tmp.next;
        if (refNode.next == null) {
            this.tail = refNode;
        }
    }
    else {
        throw new Error("Unable to find the given element...");
    }
};

/**
 * @return {String}
 */
TailedSingleLinkedList.prototype.getStrings = function () {
    if (this.head == null) {
        return "";
    }
    else {
        /** @type {String} */ var salida = this.head.toString();
        /** @type {SinglyLinkedNode<Type>} */ var actual = this.head;
        while (actual.next != null) {
            actual = actual.next;
            salida.concat(actual.toString().concat());
        }
        return salida.toString();
    }
};

TailedSingleLinkedList.prototype.printList = function () {
    console.log(this.getStrings());
};

/**
 * @return {Iterator<Type>}
 */
TailedSingleLinkedList.prototype.iterator = function () {
    /** @type {Array<Type>} */ var arr = this.toArray();
    return arr[Symbol.iterator]();
};
