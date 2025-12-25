# Manual Data Input Backlog

This document tracks manual data inputs, configuration updates, and known inconsistencies needing resolution for the PAG Booster website.

**IMPORTANT:** When addressing any backlog item, ensure changes are applied across ALL pages of the site to maintain consistency.

---

## User Experience Improvements

### 1. Back to Top Button
**Status:** ✅ Completed (December 25, 2024)  
**File:** index.html  
**Implementation:** Added floating "Back to Top" button that appears after scrolling 300px down the page
**Features:**
- Smooth scroll animation to top of page
- Visibility toggles based on scroll position
- Accessible with proper ARIA label
- Responsive design with hover effects
- Fixed position in bottom-right corner

### 2. Mobile Touch Target Optimization
**Status:** Pending  
**Priority:** Medium  
**Description:** Ensure all interactive elements (buttons, links) meet the minimum 44x44px touch target size recommended for mobile devices  
**Affected Areas:**
- Navigation menu items on mobile
- Social media icons in footer
- FAQ accordion buttons
- Fundraising submenu links
**Implementation Notes:**
- Add min-height and min-width CSS properties to interactive elements
- Increase padding on smaller buttons
- Test on actual mobile devices

### 3. Loading States for Embedded Content
**Status:** Pending  
**Priority:** Medium  
**Description:** Add loading indicators for Zeffy donation iframes to improve perceived performance  
**Affected Areas:**
- Program funding thermometers (4 iframes)
- Donation form iframe
- Thermometer widget iframe
**Implementation Notes:**
- Add CSS-based loading spinner
- Use JavaScript to detect iframe load complete
- Show placeholder or skeleton screen while loading

### 4. Enhanced Keyboard Navigation
**Status:** Pending  
**Priority:** High (Accessibility)  
**Description:** Improve keyboard-only navigation experience  
**Required Changes:**
- Add "Skip to main content" link at top of page
- Improve focus indicators (make them more visible)
- Ensure proper focus order
- Add keyboard shortcuts for common actions
**Implementation Notes:**
- Follow WCAG 2.1 Level AA guidelines
- Test with screen readers
- Ensure all interactive elements are keyboard accessible

### 5. Meta Theme Color for Mobile Browsers
**Status:** Pending  
**Priority:** Low  
**Description:** Add meta theme-color tag to enhance mobile browser appearance  
**Implementation:**
```html
<meta name="theme-color" content="#2ea3f2">
```
**Files to Update:** All HTML files (index.html, meet-schedule.html, privacy.html, terms.html)

### 6. Image Lazy Loading Optimization
**Status:** Pending  
**Priority:** Medium  
**Description:** Add lazy loading to images below the fold to improve initial page load  
**Current State:** Some images already have loading="lazy"
**Required Changes:**
- Audit all images on the page
- Add loading="lazy" to images not in viewport on load
- Keep hero images as eager loading
**Performance Impact:** Expected to improve First Contentful Paint (FCP)

### 7. Form Accessibility Enhancements
**Status:** Pending  
**Priority:** Medium  
**Description:** Ensure all form elements have proper labels and ARIA attributes  
**Affected Areas:**
- Contact form (if present)
- Newsletter signup form
- FAQ accordion (already has good accessibility)
**Implementation Notes:**
- Add aria-describedby for error messages
- Ensure label/input associations
- Add required field indicators

### 8. Mobile Button Visual Feedback
**Status:** Pending  
**Priority:** Low  
**Description:** Improve button hover/active states specifically for mobile devices  
**Implementation:**
- Add :active pseudo-class styles
- Implement subtle scale or color change on tap
- Consider adding ripple effect for material design feel
**Files to Update:** All HTML files with inline styles, or create shared CSS file

### 9. Progressive Enhancement for Animations
**Status:** Pending  
**Priority:** Low  
**Description:** Respect user's motion preferences  
**Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
**Benefit:** Improves accessibility for users with vestibular disorders

### 10. Improve Error Messaging
**Status:** Pending  
**Priority:** Medium  
**Description:** Add user-friendly error messages and success states  
**Areas:**
- Form validation
- Network errors for embedded iframes
- Fallback content for blocked external resources
**Implementation Notes:**
- Use toast notifications or inline messages
- Provide clear next steps for users

---

## Inconsistencies Identified

### 1. Duplicate CSS Definition for Mobile Menu Toggle
**Status:** Resolved  
**File:** meet-schedule.html  
**Issue:** The `.mobile-menu-toggle` selector was defined twice with overlapping properties  
**Resolution:** Consolidated into a single CSS rule

---

## Social Media Links - High Priority

**Status:** Pending Configuration  
**Locations:** All pages with footer social media links:
- `index.html` - Footer section in "Connect With Us" column
- `meet-schedule.html` - Footer section in "Connect With Us" column
- `privacy.html` - Footer section in "Connect With Us" column
- `terms.html` - Footer section in "Connect With Us" column

**How to find:** Search for `class="social-links"` or `Connect With Us` in each file to locate the footer section containing social media links.

**Current State:** 
- All pages now consistently use `<span>` elements for placeholders (not `<a>` elements)
- Placeholder elements are greyed out and non-functional across all pages
- All placeholders have `tabindex="-1"` and `aria-disabled="true"` attributes
- No `role="button"` or `role="link"` attributes (semantic correctness)

### Required Actions:

1. **Facebook Account URL**
   - Current: Placeholder `<span>` element (non-clickable)
   - Required: Official PAG Booster Facebook page URL
   - Format: `https://facebook.com/[official-pagbooster-account]`
   - Update in: All 4 pages listed above

2. **Instagram Account URL**
   - Current: Placeholder `<span>` element (non-clickable)
   - Required: Official PAG Booster Instagram account URL
   - Format: `https://instagram.com/[official-pagbooster-account]`
   - Update in: All 4 pages listed above

3. **Twitter Account URL**
   - Current: Placeholder `<span>` element (non-clickable)
   - Required: Official PAG Booster Twitter/X account URL
   - Format: `https://twitter.com/[official-pagbooster-account]`
   - Update in: All 4 pages listed above

### Instructions for Update:

When social media accounts are established:

1. **Update ALL 4 pages** (index.html, meet-schedule.html, privacy.html, terms.html)
2. In each file, search for `class="social-links"` to find the social media section
3. For each placeholder `<span>` element (with `class="placeholder"`):
   - Replace the `<span>` with an `<a>` element
   - Add `href="[actual social media URL]"` attribute
   - Add `target="_blank"` attribute to open in new tab
   - Add `rel="noopener noreferrer"` for security
   - Remove the `class="placeholder"` attribute
   - Remove the `tabindex="-1"` and `aria-disabled="true"` attributes
   - Update the `title` attribute to remove "placeholder" text
   - Update `aria-label` to remove "(placeholder)" suffix

**Example of completed link:**
```html
<a href="https://facebook.com/pagbooster" target="_blank" rel="noopener noreferrer" title="Visit us on Facebook" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
</a>
```

---

## Additional Notes

- The email link (`contact@pagbooster.org`) is already configured and functional on all pages
- Social media icons will remain greyed out and disabled across all pages until official URLs are provided
- Visual indicator (opacity: 0.5, grey background) helps distinguish placeholders from active links
- The cursor changes to "not-allowed" when hovering over placeholder icons
- **Always apply updates to all pages** to ensure consistent user experience site-wide
- Footer styles are now centralized in `css/footer.css` for easier maintenance
- All pages now use consistent `<span>` placeholders for semantic correctness
- Copyright year is dynamically generated on all pages, ensuring it stays current automatically
- Font Awesome 6.5.2 is used consistently across all pages

---

**Last Updated:** December 24, 2024  
**Priority:** High - Complete before full site launch
