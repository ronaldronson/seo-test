;(function(w, d, undefined) {
    function renderBlock() {
        var p = d.createElement('p')
        var t = d.createTextNode(new Date)

        p.appendChild(t)
        d.querySelector('.content').appendChild(p)
    }

    w.setInterval(renderBlock, 1000)

}(this, document))