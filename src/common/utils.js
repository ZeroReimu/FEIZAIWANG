export default {
    //随机数
    sum(m, n) {
        var num = Math.floor(Math.random() * (m - n) + n);
        return (num)
    },

    //切换页头logo
    logo() {
        var Logohref = document.getElementById('TopLogo').href;
        var num = this.sum(0, 10);
        Logohref = "static/bilibili-TV" + num + ".png"
        console.log(Logohref);
    },

    //重新加载css
    addCss(path){
        if(!path || path.length === 0){
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
} 