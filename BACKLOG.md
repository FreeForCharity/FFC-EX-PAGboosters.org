# Manual Data Input Backlog

This document tracks manual data inputs and configuration updates needed for the PAG Booster website.

## Social Media Links - High Priority

**Status:** Pending Configuration  
**Location:** `meet-schedule.html` (footer section, lines ~713-721)  
**Current State:** Placeholder links are greyed out and non-functional

### Required Actions:

1. **Facebook Account URL**
   - Current: `#` (placeholder)
   - Required: Official PAG Booster Facebook page URL
   - Format: `https://facebook.com/[official-pagbooster-account]`
   - Update in: `meet-schedule.html` line ~713

2. **Instagram Account URL**
   - Current: `#` (placeholder)
   - Required: Official PAG Booster Instagram account URL
   - Format: `https://instagram.com/[official-pagbooster-account]`
   - Update in: `meet-schedule.html` line ~716

3. **Twitter Account URL**
   - Current: `#` (placeholder)
   - Required: Official PAG Booster Twitter/X account URL
   - Format: `https://twitter.com/[official-pagbooster-account]`
   - Update in: `meet-schedule.html` line ~719

### Instructions for Update:

When social media accounts are established:

1. Replace `href="#"` with the actual social media URL
2. Add `target="_blank"` attribute to open in new tab
3. Remove the `class="placeholder"` attribute
4. Update the `title` attribute to remove "placeholder" text
5. Update `aria-label` to remove "(placeholder)" suffix

**Example of completed link:**
```html
<a href="https://facebook.com/pagbooster" target="_blank" title="Visit us on Facebook" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
</a>
```

---

## Additional Notes

- The email link (`contact@pagbooster.org`) is already configured and functional
- Social media icons will remain greyed out and disabled until official URLs are provided
- Visual indicator (opacity: 0.5, grey background) helps distinguish placeholders from active links
- The cursor changes to "not-allowed" when hovering over placeholder icons

---

**Last Updated:** December 24, 2024  
**Priority:** High - Complete before full site launch
