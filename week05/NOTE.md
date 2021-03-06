# 每周总结可以写在这里

### 作业1 realm内置对象
```javascript
let set = new Set
    let objects = [
        eval,
        isFinite,
        isNaN,
        parseFloat,
        parseInt,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        Array,
        Date,
        RegExp,
        Promise,
        Proxy,
        Map,
        WeakMap,
        Set,
        WeakSet,
        Function,
        Boolean,
        String,
        Number,
        Symbol,
        Object,
        Error,
        EvalError,
        RangeError,
        ReferenceError,
        SyntaxError,
        TypeError,
        URIError,
        ArrayBuffer,
        SharedArrayBuffer,
        DataView,
        Float32Array,
        Float64Array,
        Int8Array,
        Int16Array,
        Int32Array,
        Uint8Array,
        Uint16Array,
        Uint32Array,
        Uint8ClampedArray,
        Atomics,
        JSON,
        Math,
        Reflect];
    // objects.forEach(o => set.add(o));
    let realm = {
        id: 'realm',
        children: []
    }

    objects.forEach(item => {
        realm.children.push({
            id: getName(item),
            o: item,
            collapsed: true
        })
    })

    let count = 0
    void function dp(node = realm) {
        if(!node.children || node.children.length === 0) {
            delete  node.children
            return false
        }
        for (let i = 0; i < node.children.length; i++) {
            let item = node.children[i]
            let o = node.children[i].o
            set.add(o)
            for (let p of Object.getOwnPropertyNames(o)) {
                let d = Object.getOwnPropertyDescriptor(o, p)
                if ((d.value !== null && typeof d.value === "object") || (typeof d.value === "function")) {
                    if (!set.has(d.value)) {
                        set.add(d.value)
                        item.children = item.children || []
                        item.children.push({
                            count: count++,
                            id: count++ + 'value' + getName(d.value),
                            o: d.value
                        })
                    }
                }
                if (d.get) {
                    if (!set.has(d.get)) {
                        set.add(d.get)
                        item.children = item.children || []
                        item.children.push({
                            count: count++,
                            id: count++ + 'get' + getName(d.get),
                            o: d
                        })
                    }
                }
                if (d.set) {
                    if (!set.has(d.set)) {
                        set.add(d.set)
                        item.children = item.children || []
                        item.children.push({
                            count: count++,
                            id: count++ + 'set' + getName(d.set),
                            o: d
                        })
                    }
                }
            }
            dp(item)
        }

    }()

    function getName(obj) {
        if (Object.getOwnPropertyNames(obj).includes('name')) {
            return obj.name
        }
        if (Object.getOwnPropertySymbols(obj).includes(Symbol.toStringTag)) {
            return obj[Symbol.toStringTag]
        }
        if (obj === Reflect) {
            return 'Reflect'
        }
        return 'prototype'
    }

    console.log(realm)


    const width = document.querySelector('#container').scrollWidth;
    const height = document.querySelector('#container').scrollHeight || 800;
    const graph = new G6.TreeGraph({
        container: 'container',
        width,
        height,
        linkCenter: true,
        modes: {
            default: [
                {
                    type: 'collapse-expand'
                },
                'drag-canvas',
                'zoom-canvas',
            ],
        },
        defaultNode: {
            size: 26,
            anchorPoints: [
                [0, 0.5],
                [1, 0.5],
            ],
            style: {
                fill: '#C6E5FF',
                stroke: '#5B8FF9',
            },
        },
        defaultEdge: {
            type: 'cubic-vertical',
            style: {
                stroke: '#A3B1BF',
            },
        },
        layout: {
            type: 'compactBox',
            direction: 'TB',
            getId: function getId(d) {
                return d.id;
            },
            getHeight: function getHeight() {
                return 16;
            },
            getWidth: function getWidth() {
                return 16;
            },
            getVGap: function getVGap() {
                return 80;
            },
            getHGap: function getHGap() {
                return 20;
            },
        },
    });

    graph.node(function (node) {
        let position = 'top';
        let rotate = Math.PI * 1.75;
        if (!node.children) {
            position = 'top';
            rotate = Math.PI / 4;
        }
        return {
            label: node.id,
            labelCfg: {
                position,
                offset: 5,
                style: {
                    rotate,
                    textAlign: 'start',
                },
            },
        };
    });

    graph.data(realm);
    graph.render();
    graph.fitView();


```