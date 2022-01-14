

window.onload = function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCSjx1wjxeqfIrP56EImI06luFIjFYvf-c",
        authDomain: "ntut-web-e7842.firebaseapp.com",
        projectId: "ntut-web-e7842",
        storageBucket: "ntut-web-e7842.appspot.com",
        messagingSenderId: "640385577381",
        appId: "1:640385577381:web:60241823acb577e859f84c",
        measurementId: "G-H6SP0015E0"
      };
    
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    function MouseGame() {
        this.mousesWrap = this.$('.game-content');
        this.mouses = this.$('.game-content div');
        this.gameStart = this.$('#game-start');
        this.gameState = this.$('#game-state');
        this.gameTime = this.$('#game-time');
        this.gameScore = this.$('#game-score');
        this.totScore = 1;
        this.isStart = false;
        this.bindEvent();
    }

    MouseGame.prototype = {
        constructor: MouseGame,

        /**
         * 獲取元素
         * @param  {String} elem 元素的字符串
         * @example
         * $('div') | $('p.active')
         * @return {NodeList}      獲取的元素集
         */
        $: function (elem) {
            return document.querySelectorAll(elem);
        },

        /**
         * 获取给定范围的随机数
         * @param  {Number} from 起始
         * @param  {Number} to   结束
         * @return {Number}      隨機數
         */
        getRandom: function (from, to) {
            return Math.floor(Math.random() * (to - from + 1)) + from + 1;
        },

        /**
         * 设置元素内容
         * @param  {HTMLElement} elem 要設置的元素
         * @param  {String} val  設置的內容
         * @return {String}      設置好的内容|元素本身的内容
         */
        text: function (elem, val) {
            if (elem.textContent) {
                return val !== undefined ? elem.textContent = val : elem.textContent;
            } else if (elem.innerText) {
                return val !== undefined ? elem.innerText = val : elem.innerText;
            }
        },

        // 操作
        moveUpAndDown: function () {
            var that = this;

            // 隨機定義地鼠個數
            that.moveTime = setInterval(function () {

                for (var i = 0, j = that.mouses.length; i < j; ++i) {
                    that.mouses[i].setAttribute('clicked', '0');
                    that.mouses[i].className = 'hamster active';
                    that.mouses[i].style.display = 'none';
                }

                // 要显示的个数
                var showNum = that.getRandom(0, 9);
                for (var i = 0; i < showNum; i++) {
                    that.mouses[that.getRandom(0, 59)].style.display = 'block';
                }
            }, 2000);
        },

        // 打地鼠操作
        bindEvent: function () {
            var that = this;
            var db = firebase.firestore();
            var ref = db.collection('rat').doc('record');
            var reftotal = db.collection('rat').doc('total');
            var scoreboard = document.getElementById("record");
            var count = document.getElementById("total");
            var oldsc;
            var oldtotal;
            reftotal.get().then(doc => {
                oldtotal=doc.data().total;
                count.innerText=String(oldtotal);
            });
            ref.get().then(doc => {
                console.log("get old");
                oldsc= doc.data().sc;
                scoreboard.innerText=String(oldsc);
                c
               });

            

            // 遊戲開始/重新開始
            that.gameStart[0].addEventListener('click', function () {
                if (!that.isStart) that.startGame();
                else { that.totalTime = 1; that.text(that.gameState[0], "Game over"); that.text(that.gameTime[0], "0"); 
                
                var newsc=that.score;
                var newtotal=that.score + oldtotal;

                reftotal.set({
                    total:newtotal
                    
                });
                count.innerText=String(newtotal);
                
                if(newsc > oldsc){
                    oldsc = newsc;
                    console.log("new record");
                    ref.set({
                        sc:newsc,
                        
                    });
                    scoreboard.innerText=String(newsc);
                    
                }
                

            }
            }, false);

            // 打地鼠操作
            that.mousesWrap[0].addEventListener('click', function (e) {
                e = e || window.event;
                var elem = e.target

                //多次點擊只得一分
                if (elem.getAttribute('clicked') === '1') {
                    return;
                }


                // 加分
                if (elem.className.indexOf('hamster') !== -1) {
                    that.score += that.totScore;
                }

                elem.setAttribute('clicked', '1');
                if (that.score < 0) that.score = 0;
                that.text(that.gameScore[0], that.score);
            }, false);
        },

        // 剩餘遊戲时间
        countDown: function () {
            var that = this;
            that.text(that.gameState[0], "Playing");
            var t = setInterval(function () {
                that.text(that.gameTime[0], --that.totalTime);
                if (that.totalTime === 0) {
                    clearInterval(t);
                    clearInterval(that.moveTime);
                    that.isStart = false;
                    for (var i = 0, j = that.mouses.length; i < j; ++i) {
                        that.mouses[i].style.display = 'none';
                    }
                    if (that.score < 0) that.score = 0;
                    alert('Game over.\nYour score：' + that.score);
                }
            }, 1000);
        },

        // 開始
        startGame: function () {
            this.score = 0;
            this.totalTime = 30;
            this.text(this.gameTime[0], this.totalTime);
            this.text(this.gameScore[0], this.score);
            this.countDown();
            this.moveUpAndDown();
            this.isStart = true;

        }
    };

    new MouseGame();
}