# flex-exercise-3
3rd Flexbox exercise from The Odin Project

Issue: Logo, links, and notification button are all in a column and need to be in a row as well as responsive when the page changes sizes.

Solution:

* For .header, added display: flex; justify-content: space-between, align-items: center; so header is now in a row and everything is centered on the cross axis and space between the contents on the main axis.
* For the notification button, i created a div container with class="notification-button" to keep button and purple circle together as one. Also keeps the "space-between" from affecting those items.
* Added a flex container for both logo and links, "<div class="logo-links">" and nested logo and links within. Made this container display: flex;.

