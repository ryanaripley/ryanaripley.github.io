---
layout: default
title: Contact
permalink: /contact/
group: "navigation"
weight: 4
x_colors: "['#000000', '#602060', '#d98cd9', '#602060', '#000000']"
accent_color: '#ac39ac'
---

Find me on [Twitter](https://twitter.com/ryanaripley), [GitHub](https://github.com/ryanaripley), [CodePen](http://codepen.io/ryanaripley/), or:
        
### Leave a message

<form method="POST" action="http://formspree.io/ryanaripley@gmail.com">

  <input type="text" name="_gotcha" style="display:none" />
  <input type="hidden" name="_next" value="{{site.url}}/thanks" />
  
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" value="" />
  <label for="Email">Email:</label>
  <input type="email" name="email" id="email" value="" />

  <label for="message">Your message:</label>
  <textarea cols="40" rows="8" name="message" id="message"></textarea>

  <input type="submit" value="Submit" />

</form>