# Manual Data Input Backlog

This document tracks manual data inputs, configuration updates, and known inconsistencies needing resolution for the PAG Booster website.

**IMPORTANT:** When addressing any backlog item, ensure changes are applied across ALL pages of the site to maintain consistency.

## Inconsistencies Identified

### 1. Duplicate CSS Definition for Mobile Menu Toggle
**Status:** Resolved  
**File:** meet-schedule.html  
**Issue:** The `.mobile-menu-toggle` selector was defined twice with overlapping properties  
**Resolution:** Consolidated into a single CSS rule

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
- Copyright year is dynamically generated on all pages except index.html (can be updated separately if needed)

---

**Last Updated:** December 24, 2024  
**Priority:** High - Complete before full site launch
