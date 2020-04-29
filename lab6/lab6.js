/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/
function testTime(){
    var val = 1;
    var counter = 0;
    let interval = setInterval(function(){
        val = val * 2;
        counter++;
        let date = new Date();
        if (counter === 10 || date.getSeconds() === 0) {
            if (counter === 10) {
                console.log('运行10次退出')
            }
            else {
                console.log('运行到整一分钟停止')
            }
            clearInterval(interval);
        }
        console.log('运行了'+counter+'次');
    }, 5000);

}
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/

function testMail(telephone,mail) {
    let tel_pattern = /^[1]([3-9])[0-9]{9}$/;
    let email_pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!(tel_pattern.test(telephone))) {
        console.log('telephone is wrong!');
    }else{
        console.log('telephone is right!');
    }
    if (!(email_pattern.test(mail))) {
        console.log('email is wrong!');
    }else{
        console.log('email is right!');
    }

}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/

// testRedundancy("jJ jj aa Aa Is is the cost of of gasoline going up up")
function testRedundancy(str) {
    let pattern = /\b([a-z]+) \1\b/ig;
    // console.log(str.match(pattern)); // Is is,of of,up up
    let res = str.match(pattern);
    let set = new Set();
    if (res.length <= 10)
        set.add(res);
    else {
        res.sort(function (a, b) {
            if(a[0].toString().toLowerCase()>b[0].toString().toLowerCase())
                return 1;
            return -1;
        });
        set.add(res.slice(0, 10))
    }
    console.log(set);
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
// testKeyBoard("7_This_is_a_test", "_hs_s_a_es");
function testKeyBoard(wantInput, actualInput) {
    let res = new Set();
    for (let i = 0; i < wantInput.length; i++) {
        let ch = wantInput[i];
        if (actualInput.indexOf(ch) === -1) {
            if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
                res.add(ch.toUpperCase());
            else
                res.add(ch);
        }

    }
    console.log(res)
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
// testSpecialReverse("the sky is blue");
function testSpecialReverse(str) {
    let regex = /\s+/;
    str = str.trim().replace(regex, ' ');
    let originalArr = str.split(' ');
    // console.log(originalArr);
    let res = new Array(originalArr.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = originalArr[res.length-1-i];
    }
    console.log(res);
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/
// twoSum([1,2,3,4], 5);
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) {
            console.log([i, map[diff]]);
        }
        else {
            map[nums[i]] = i;
        }

    }
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
// lengthOfLongestSubstring("ababcdebb");
function lengthOfLongestSubstring(str) {
    const map={};
    let max=0;
    let left=0;
    for(let i=0;i<str.length;i++)
    {
        let v=str[i];
        if(map[v]>=left)
        {
            left=map[v]+1;
        }
        map[v]=i;
        if(max<i-left+1)
        {
            max=i-left+1;
        }
    }
    console.log(max);

}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry1() {

}
DevelopingCountry1.prototype = new Country();
DevelopingCountry1.prototype.sayHi = function () {
    console.log("Hi,i am a developing country.");
};
let developingCountry1 = new DevelopingCountry1();
developingCountry1.sayHi();


function DevelopingCountry2() {
    Country.call(this);
}
DevelopingCountry2.prototype.sayHi = function () {
    console.log("Hi,i am a developing country.");
};
let developingCountry2 = new DevelopingCountry2();
developingCountry2.sayHi();


function DevelopingCountry3() {
    Country.call(this);
}
function inheritPrototype(subType, superType){
    let prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
inheritPrototype(DevelopingCountry3, Country);
DevelopingCountry3.prototype.sayHi = function () {
    console.log("Hi,i am a developing country.");
};

let developingCountry3 = new DevelopingCountry3();
developingCountry3.sayHi();


function PoorCountry1() {

}
PoorCountry1.prototype = new Country();
PoorCountry1.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};
let poorCountry1 = new PoorCountry1();
poorCountry1.saySad();


function PoorCountry2() {
    Country.call(this);
}
PoorCountry2.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};
let poorCountry2 = new PoorCountry2();
poorCountry2.saySad();


function PoorCountry3() {
    Country.call(this);
}

inheritPrototype(PoorCountry3, Country);
PoorCountry3.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};

let poorCountry3 = new PoorCountry3();
poorCountry3.saySad();


function DevelopedCountry1() {

}
DevelopedCountry1.prototype = new Country();
DevelopedCountry1.prototype.sayHappy = function () {
    console.log("I am a Happy developed country.");
};
let developedCountry1 = new DevelopedCountry1();
developedCountry1.sayHappy();


function DevelopedCountry2() {
    Country.call(this);
}
DevelopedCountry2.prototype.sayHappy = function () {
    console.log("I am a Happy developed country.");
};
let developedCountry2 = new DevelopedCountry2();
developedCountry2.sayHappy();


function DevelopedCountry3() {
    Country.call(this);
}

inheritPrototype(DevelopedCountry3, Country);
DevelopedCountry3.prototype.sayHappy = function () {
    console.log("I am a Happy developed country.");
};

let developedCountry3 = new DevelopedCountry3();
developedCountry3.sayHappy();