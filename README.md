# mobiscroll_city
Three level linkage selection of provincial and urban areas at mobile end

## 请用移动设备打开demo或者使用浏览器模拟移动端
[Demo](https://lemonliuchen.github.io/mobiscroll_city/index.html)

## options
```javascript
"title": '请选择',//标题(可选)
"defaultValue": "",//默认值-多个以空格分开（可选）
"type": 3,//需要联动级数[1、2、3]（可选）
"data": cityData,//数据(必传)
```

## example
```html
<h3>省二级</h3>
<input type="text" name="area" placeholder="请选择" value="" class="" id="area2" autocomplete="off">
```

```javascript
$("#area2").click(function () {
	var nowValue = $(this)[0];
	new Picker({
        "title": '请选择',//标题(可选)
        "defaultValue": "",//默认值-多个以空格分开（可选）
        "type": 2,//需要联动级数[1、2、3]（可选）
        "data": cityData,//数据(必传)
        "keys": {
        	"id": "Code",
        	"value": "Name",
            "childData": "level"//最多3级联动
        },//数组内的键名称(必传，id、text、data)
        "callBack": function (val) {
            //回调函数（val为选择的值）
            nowValue.value = val;
        }
    });
})
```