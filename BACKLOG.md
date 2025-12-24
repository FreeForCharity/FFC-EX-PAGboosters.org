# Manual Data Input Backlog

This document tracks manual data inputs and configuration updates needed for the PAG Booster website.

**IMPORTANT:** When addressing any backlog item, ensure changes are applied across ALL pages of the site to maintain consistency.

## Social Media Links - High Priority

**Status:** Pending Configuration  
**Locations:** All pages with social media links:
- `index.html` (footer section, lines ~1634-1642)
- `meet-schedule.html` (footer section, lines ~714-722)
- `privacy.html` (footer section, lines ~324-332)
- `terms.html` (footer section, lines ~338-346)

**Current State:** Placeholder links are greyed out and non-functional across all pages

### Required Actions:

1. **Facebook Account URL**
   - Current: `#` (placeholder)
   - Required: Official PAG Booster Facebook page URL
   - Format: `https://facebook.com/[official-pagbooster-account]`
   - Update in: All 4 pages listed above

2. **Instagram Account URL**
   - Current: `#` (placeholder)
   - Required: Official PAG Booster Instagram account URL
   - Format: `https://instagram.com/[official-pagbooster-account]`
   - Update in: All 4 pages listed above

3. **Twitter Account URL**
   - Current: `#` (placeholder)
   - Required: Official PAG Booster Twitter/X account URL
   - Format: `https://twitter.com/[official-pagbooster-account]`
   - Update in: All 4 pages listed above

### Instructions for Update:

When social media accounts are established:

1. **Update ALL 4 pages** (index.html, meet-schedule.html, privacy.html, terms.html)
2. Replace `href="#"` with the actual social media URL
3. Add `target="_blank"` attribute to open in new tab
4. Remove the `class="placeholder"` attribute
5. Remove the `role="button"`, `tabindex="-1"`, and `aria-disabled="true"` attributes
6. Update the `title` attribute to remove "placeholder" text
7. Update `aria-label` to remove "(placeholder)" suffix

**Example of completed link:**
```html
<a href="https://facebook.com/pagbooster" target="_blank" title="Visit us on Facebook" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
</a>
```

---

## Additional Notes

- The email link (`contact@pagbooster.org`) is already configured and functional
- Social media icons will remain greyed out and disabled across all pages until official URLs are provided
- Visual indicator (opacity: 0.5, grey background) helps distinguish placeholders from active links
- The cursor changes to "not-allowed" when hovering over placeholder icons
- **Always apply updates to all pages** to ensure consistent user experience site-wide

---

**Last Updated:** December 24, 2024  
**Priority:** High - Complete before full site launch
