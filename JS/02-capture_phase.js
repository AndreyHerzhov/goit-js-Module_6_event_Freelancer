/* - Capture Phase: Event propagates starting from ancestors towards the parent of the target. 
 *   Propagation starts from Window object.
 * - Target Phase: The event reaches the target element or the element which started the event.
 * - Bubble Phase: This is the reverse of capture.
 */

 const block = document.querySelector('.js-block')
 const blockInner = document.querySelector('.js-block__inner')
 const blockInnerInner = document.querySelector('.js-block__inner-inner')

 block.addEventListener('click', function(event) {
     console.log('Click on a block')
    //  console.log(event.target)
 })

 blockInner.addEventListener('click', function(event) {
    console.log('Click on a inner-block')
})


blockInnerInner.addEventListener('click', function(event) {
    console.log('Click on a inner-innerblock')

    // event.stopPropagation();
})