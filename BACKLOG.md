# Manual Data Input Backlog

This document tracks manual data inputs, configuration updates, and known inconsistencies needing resolution for the PAG Booster website.

**IMPORTANT GUIDELINES:**
1. **Site-wide Consistency:** When addressing any backlog item (especially brand updates like colors, fonts, or styles), ensure changes are applied across ALL pages of the site to maintain consistency.
2. **Complete Implementation:** UX improvements should be fully implemented across all relevant pages when initially completed, not just on index.html. This prevents inconsistencies and ensures a cohesive user experience.
3. **Documentation Accuracy:** Update this backlog to accurately reflect which files were modified and the scope of changes made.

---

## User Experience Improvements

### 1. Back to Top Button
**Status:** ✅ Completed (December 25, 2024)  
**Files:** index.html, meet-schedule.html, privacy.html, terms.html, **css/back-to-top.css, js/back-to-top.js**  
**Implementation:** Added floating "Back to Top" button that appears after scrolling 300px down the page
**Features:**
- Smooth scroll animation to top of page (respects prefers-reduced-motion preference)
- Visibility toggles based on scroll position
- Accessible with proper ARIA label and visible focus outline
- Hover effects for visual feedback
- Fixed position in bottom-right corner
- Mobile-optimized sizing and positioning (44x44px button positioned 20px from bottom and right edges on mobile)
- Null checks for robust error handling
- Throttled scroll events with trailing edge support for optimal performance
**Code Organization:**
- Shared styles: `css/back-to-top.css` (used by all pages)
- Shared functionality: `js/back-to-top.js` (used by privacy.html, terms.html, meet-schedule.html)
- index.html: Uses integrated scroll handler for navbar + navigation + back-to-top (optimized for its unique needs)

### 2. Mobile Touch Target Optimization
**Status:** ✅ Completed (December 27, 2024)  
**Priority:** Medium  
**Description:** Ensure all interactive elements (buttons, links) meet the minimum 44x44px touch target size recommended for mobile devices  
**Affected Areas:**
- Navigation menu items on mobile - ✅ Added min-height: 44px with proper padding
- Social media icons in footer - ✅ Already 45x45px (exceeds minimum requirement)
- FAQ accordion buttons - ✅ Already adequate with 20px padding
- Fundraising submenu links - ✅ Added min-height: 44px with flexbox alignment
**Implementation:**
- ✅ Added min-height and min-width CSS properties to interactive elements
- ✅ Increased padding on mobile navigation items
- ✅ Added flexbox alignment for proper centering
- ✅ Verified all touch targets meet or exceed 44x44px minimum

### 3. Loading States for Embedded Content
**Status:** ✅ Completed (December 27, 2024)  
**Priority:** Medium  
**Description:** Add loading indicators for Zeffy donation iframes to improve perceived performance  
**Affected Areas:**
- Program funding thermometers (4 iframes) - ✅ All updated
- Donation form iframe - ✅ Updated
- Thermometer widget iframe - ✅ Updated
**Implementation:**
- ✅ Added CSS-based loading spinner with orange brand color
- ✅ Used JavaScript onload event to detect iframe load complete
- ✅ Implemented smooth fade-out transition for loading indicator
- ✅ Added support for prefers-reduced-motion accessibility preference
- ✅ Total of 6 Zeffy iframes now have loading indicators

### 4. Enhanced Keyboard Navigation
**Status:** ✅ Completed (December 27, 2024)  
**Priority:** High (Accessibility)  
**Description:** Improve keyboard-only navigation experience  
**Implementation:**
- ✅ Added "Skip to main content" link at top of all pages (index.html, meet-schedule.html, privacy.html, terms.html)
- ✅ Improved focus indicators (3px solid orange outline with 2px offset)
- ✅ Ensured proper focus order
- ✅ Added main content landmarks with id="main-content" and role="main"
- ✅ Enhanced focus visibility for all interactive elements (links, buttons, inputs, etc.)
- ✅ Skip link becomes visible on keyboard focus
**Compliance:**
- ✅ Follows WCAG 2.1 Level AA guidelines
- ✅ All interactive elements are keyboard accessible
- ✅ Consistent focus indicators across all pages

### 5. Meta Theme Color & Brand Color Update
**Status:** ✅ Completed (December 25, 2024)  
**Priority:** Medium  
**Description:** Add meta theme-color tag and update entire site to burnt red/orange brand colors matching Phoenix Academy gymnast uniforms  

**New Color Palette:**
- Primary Orange: `#E8652D` (buttons, links, accents)
- Dark Orange: `#D84315` (hover states)
- Burgundy: `#8B2E16` (headings, navbar, footer)
- Medium Burnt Red: `#A0442C` (gradients, secondary elements)
- Dark Burgundy: `#6B1F0F` (darkest accents)

**Implementation:**
```html
<meta name="theme-color" content="#E8652D">
```

**Files Updated:** All HTML files (index.html, meet-schedule.html, privacy.html, terms.html) and CSS file (css/footer.css)
- ✅ Replaced most instances of old blue palette (#2ea3f2, #457b9d, #3498db, #14213d) with new burnt orange/red palette
- ✅ Note: Some heading styles (h2 in privacy.html and terms.html) were updated from #1d3557 to #8B2E16 in this iteration
- ✅ Updated gradients, backgrounds, borders, and text colors in all HTML pages
- ✅ Updated centralized footer.css with new color scheme for consistent footer appearance across all pages
- ✅ Added meta theme-color tag to all pages

**Benefit:** 
- Creates cohesive visual experience on mobile devices (theme-color in browser UI)
- Ensures brand consistency across all pages
- Matches Phoenix Academy's official gymnast uniform colors
- Professional, unified appearance site-wide

### 6. Image Lazy Loading Optimization
**Status:** ✅ Completed (December 25, 2024)  
**Priority:** Medium  
**Description:** Add lazy loading to images below the fold to improve initial page load  
**Current State:** All images have loading="lazy" attribute
**Implementation:**
- ✅ Audited all images on the page (2 images found)
- ✅ Main team photo (DSC_1795-1-1280x641.jpg) has loading="lazy"
- ✅ TeamLocker QR code (teamlocker-qr.png) has loading="lazy"
- ✅ Both images are below the fold and benefit from lazy loading
**Performance Impact:** Improves First Contentful Paint (FCP) and reduces initial page weight

### 7. Form Accessibility Enhancements
**Status:** ✅ Completed (December 27, 2024)  
**Priority:** Medium  
**Description:** Ensure all form elements have proper labels and ARIA attributes  
**Implementation:**
- ✅ Added aria-expanded attributes to FAQ accordion buttons
- ✅ Added aria-controls to link buttons with their content regions
- ✅ Added role="region" to FAQ answer sections
- ✅ Added aria-labelledby for proper associations
- ✅ JavaScript updates aria-expanded state dynamically when FAQ buttons are toggled
**Note:** Current site uses Zeffy for donation forms which handles its own accessibility. FAQ accordion is the primary interactive element requiring ARIA attributes, which have been fully implemented.

### 8. Mobile Button Visual Feedback
**Status:** ✅ Completed (December 27, 2024)  
**Priority:** Low  
**Description:** Improve button hover/active states specifically for mobile devices  
**Implementation:**
- ✅ Added :active pseudo-class styles to all button types
- ✅ Implemented subtle scale transformation (scale(0.95) to scale(0.99)) on tap
- ✅ Added color changes for better visual feedback
- ✅ Applied to:
  - Primary buttons (.btn) - scale(0.98) with reduced shadow
  - Secondary buttons (.btn-secondary) - scale(0.98)
  - Mobile menu toggle - scale(0.95) with background color change
  - Fundraising submenu links - scale(0.95)
  - FAQ accordion buttons - scale(0.99)
  - Social media icons - scale(0.95) with darker color
**Result:** Enhanced tactile feedback for mobile users across all interactive elements

### 9. Progressive Enhancement for Animations
**Status:** ✅ Completed (December 25, 2024)  
**Priority:** Low  
**Description:** Respect user's motion preferences  
**Implementation:**
```css
/* Scoped to back-to-top button only */
@media (prefers-reduced-motion: reduce) {
    .back-to-top,
    .back-to-top::before,
    .back-to-top::after {
        animation-duration: 0s !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0s !important;
    }
}
```
**Files Updated:** index.html, meet-schedule.html, privacy.html, terms.html  
**Benefit:** Improves accessibility for users with vestibular disorders or motion sensitivity. Respects system-level preferences for reduced motion (WCAG 2.1 Success Criterion 2.3.3). Implemented site-wide for consistent accessibility experience.

### 10. Improve Error Messaging
**Status:** ✅ Completed (December 27, 2024)  
**Priority:** Medium  
**Description:** Add user-friendly error messages and success states  
**Implementation:**
- ✅ Created comprehensive notification system with CSS and JavaScript
- ✅ Supports multiple notification types: success, error, info
- ✅ Features:
  - Fixed positioning in top-right corner (mobile-responsive)
  - Smooth slide-in/slide-out animations
  - Auto-dismiss after configurable duration (default 5 seconds)
  - Manual close button with accessible label
  - ARIA live region for screen reader announcements
  - Color-coded border for visual distinction
- ✅ Utility function `showNotification(title, message, type, duration)` ready for future use
- ✅ Mobile-optimized layout (full-width on small screens)
**Ready for:** Form validation, network error handling, success confirmations, and any future user feedback needs

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

**Last Updated:** December 27, 2024  
**Priority:** High - Complete before full site launch
