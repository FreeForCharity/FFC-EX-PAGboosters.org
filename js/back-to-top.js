/**
 * Back to Top Button - Shared JavaScript
 * Provides robust throttled scroll handling with trailing edge support
 */

(function() {
    'use strict';

    // Robust throttle implementation with trailing edge support
    function throttle(func, wait) {
        var lastCallTime = 0;
        var timeoutId = null;

        return function() {
            var now = Date.now();
            var timeSinceLastCall = now - lastCallTime;
            var remaining = wait - timeSinceLastCall;
            var context = this;
            var args = arguments;

            if (remaining <= 0 || remaining > wait) {
                // Leading edge - execute immediately
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastCallTime = now;
                func.apply(context, args);
            } else if (!timeoutId) {
                // Trailing edge - schedule for remaining time
                timeoutId = setTimeout(function() {
                    lastCallTime = Date.now();
                    timeoutId = null;
                    func.apply(context, args);
                }, remaining);
            }
        };
    }

    // Initialize back-to-top functionality when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        var backToTopBtn = document.getElementById('backToTop');
        
        // Only initialize if button exists on page
        if (!backToTopBtn) {
            return;
        }

        // Handle scroll to show/hide button
        function handleScroll() {
            var scrollY = window.scrollY;
            
            if (scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Add throttled scroll event listener
        window.addEventListener('scroll', throttle(handleScroll, 100));

        // Initialize correct state on page load
        handleScroll();

        // Handle click to scroll to top
        backToTopBtn.addEventListener('click', function() {
            var prefersReducedMotion = window.matchMedia && 
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });
})();
