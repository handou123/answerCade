<template>
    <div id="app">
    <div id="bigbox">
      <div id="start">
        <h2>请认真完成测试题。准备好了吗？</h2>
        <img src="../assets/img/start.jpg" alt="" id='go'>
      </div>
      <div id="test1" class='testpaper'>
            <h3>jQuery是什么？</h3>
            <span>javascript库</span>
            <span>CSS库</span>
            <span>PHP框架</span>
            <span>以上都不是</span>
            <img src="../assets/img/next.jpg" alt="" class='next'>
            <p>1/4</p>
      </div>
      <div id="test2" class='testpaper'>
        <h3>找出不同类的一项</h3>
            <span>写字台</span>
            <span>沙发</span>
            <span>电视</span>
            <span>桌布</span>
            <img src="../assets/img/prev.jpg" alt="" class='prev'>
            <img src="../assets/img/next.jpg" alt="" class='next'>
              <p>2/4</p>
      </div>
      <div id="test3" class='testpaper'>
        <h3>国土面积最大的国家是：</h3>
            <span>美国</span>
            <span>中国</span>
            <span>俄罗斯</span>
            <span>加拿大</span>
            <img src="../assets/img/prev.jpg" alt="" class='prev'>
            <img src="../assets/img/next.jpg" alt="" class='next'>
              <p>3/4</p>
      </div>
      <div id="test4" class='testpaper'>
            <h3>月球距离地球多远？</h3>
              <span>18万公里</span>
            <span>38万公里</span>
            <span>100万公里</span>
            <span>180万公里</span>
            <img src="../assets/img/prev.jpg" alt="" class='prev'>
            <img src="../assets/img/over.jpg" alt="" class='over next'>
            <p>4/4</p>
      </div>
      <div id="answer">
            <h3 id='speak'></h3>    	
            <h3>你的分数是: <b>100</b></h3>
            <span>#1 <em class='result'></em></span>
            <span>#2 <em class='result'></em></span>
            <span>#3 <em class='result'></em></span>
            <span>#4 <em class='result'></em></span>
            <p>已结束</p>
      </div>
      <div id="narrow1" class='narrow'>
          <h3>jQuery是什么？</h3>
          <li class='correct'>javascript库</li>
          <li>CSS库</li>
          <li>PHP框架</li>
          <li>以上都不是</li> 
      </div>
      <div id="narrow2" class='narrow'>
          <h3>找出不同类的一项?</h3>
          <li>写字台</li>
          <li>沙发</li>
          <li>电视</li>
          <li class='correct'>桌布</li>
      </div>
      <div id="narrow3" class='narrow'>
          <h3>国土面积最大的国家是：</h3>
          <li>美国</li>
          <li>中国</li>
          <li class='correct'>俄罗斯</li>
          <li>加拿大</li> 
      </div>
      <div id="narrow4" class='narrow'>
          <h3>月球距离地球多远？</h3>
          <li>18万公里</li>
          <li class='correct'>38万公里</li>
          <li>100万公里</li>
          <li>180万公里</li> 
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

*{margin:0;padding: 0;list-style: none;cursor: pointer;}
   p{position: absolute;top: 20px;right:50px;border: 1px solid #ccc;padding: 5px}
   #bigbox{position: relative;width:640px;height: 440px;margin: 80px auto;}
   #start{width:610px;height: 250px;border: 1px solid #ccc;border-radius: 20px;}
   #start h2{margin-top:50px;text-align: center;}
   #start img{margin:50px 0 0 40%;}
   .testpaper{position: absolute;left:0;top:0;display: none;border-radius: 20px;border: 1px solid #ccc;width:640px;height: 440px;}
   .testpaper h3{margin: 20px;}
   .testpaper span{display: inline-block;margin: 10px 50px;border-radius: 5px; width: 500px;background: #eee;border: 1px solid #000; padding:5px 0 5px 10px;}
   #answer h3{margin-top:20px;text-align: center;}
   #answer{width:610px;height: 250px;border: 1px solid #ccc;border-radius: 20px;}
   #answer span{display: inline-block;margin:10% 0 0 10%;padding: 5px 20px 8px 10px;}
   .correct{ background: green;border-radius: 5px;color:#fff;}
   .fault{background: red;border-radius: 5px;color:#fff;}
   .next{display: none;position: absolute;bottom: 80px;right: 50px;}
   .prev{position: absolute;bottom: 80px;left: 50px;}
   .narrow{display: none;background: #fff; border: 2px solid #ccc;padding: 10px; width: 250px;height: 150px;border-radius: 6px;}
   .narrow li{border: 1px solid #ccc;margin: 8px;padding-left: 5px;}
   #narrow1{position: absolute;bottom:60px;left:60px;}
   #narrow2{position: absolute;bottom:60px;left:200px;}
   #narrow3{position: absolute;bottom:60px;left:340px;}
   #narrow4{position: absolute;bottom:60px;left:480px;}
   #answer{display: none;}
</style>
