

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans:**getElementById:**  
ans: akta id diye akta element nite getElementById use kora hoy . example: document.getElementById('header')

**getElementsByClassName:**  
akoi class sov gula nite getElementsByClassName use kora hoy. example: document.getElementsByClassName('btn')

**querySelector:**  
ans: css selector diye 1st element k nite querrySelector use kore hoy.   example: document.querySelector('.btn') বা document.querySelector('#header')

**querySelectorAll:**  
ans: Css selector diye sov element k nite querySelectorAll use kora hoy. example: document.querySelectorAll('.btn')


2. How do you **create and insert a new element into the DOM**?
  ans: 1, new element create kora and element jei khane bosbe sei kl hane bosano.

3. What is **Event Bubbling** and how does it work?
ans: Jokhon kono element-e event (jemne: click) hoy, tokhon sei event niche theke uporer dike DOM tree-te propagate kore. Mane event-ta shobcheye vitorer element theke shuru kore root element (jemne: window) porjonto uthte thake.

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:Event delegation holo JavaScript-er ekta powerful technique jekhane parent element-e ekta event listener diye tar shob child elements-er event handle kora hoy.
Event bubbling-er upor vitti kore kaaj kore. Jokhon child element-e event hoy, tokhon seta bubble up kore parent element porjonto ashe. Parent element-er event listener seta catch kore.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: Eta browser-er default behavior bondho kore dey.
Link-e click korle page change howa bondho korte
Form submit korle page reload howa bondho korte
Right-click kore menu open howa bondho korte



