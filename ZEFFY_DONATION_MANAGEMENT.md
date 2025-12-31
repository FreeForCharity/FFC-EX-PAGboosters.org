# Zeffy Donation Management System

This document provides a comprehensive guide to all Zeffy donation campaigns used by PAG Booster, including the different types of integration code for each campaign.

## Table of Contents

1. [Campaign Types Overview](#campaign-types-overview)
2. [Active Campaigns](#active-campaigns)
3. [Backlog Campaigns](#backlog-campaigns)

---

## Campaign Types Overview

Zeffy offers three different types of campaign code for sharing and embedding donation forms:

### Type 1: Direct Button Link (Opens New Page)
A standard HTML link that opens the Zeffy donation form in a new browser tab/window.

**Usage:**
```html
<a href="https://www.zeffy.com/donation-form/[CAMPAIGN-ID]" target="_blank" rel="noopener noreferrer" class="btn">
    Donate Now
</a>
```

**Characteristics:**
- Simple HTML link
- Opens in new tab/window
- No additional scripts required
- Most compatible across all browsers

---

### Type 2: Modal Popup Button (Script-Led)
A button that uses Zeffy's JavaScript to open the donation form in a modal overlay on the current page.

**Required Header Script:**
```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
```

**Usage:**
```html
<button zeffy-form-link="https://www.zeffy.com/embed/donation-form/[CAMPAIGN-NAME-OR-ID]?modal=true" class="btn">
    Donate Now
</button>
```

**Characteristics:**
- Requires header script to be added once in the `<head>` section
- Opens as popup/modal overlay on the same page
- Better user experience (doesn't leave the page)
- Requires JavaScript to be enabled
- Uses `zeffy-form-link` attribute instead of `href`

---

### Type 3: Fully Embedded Form (No Button Required)
Embeds the donation form directly into the page content using an iframe.

**Usage:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Donation form powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/donation-form/[CAMPAIGN-ID]" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

**Characteristics:**
- No button click required
- Form is always visible on the page
- Takes up more page space
- Best for dedicated donation pages

---

## Active Campaigns

### Campaign: Fundraising Opt-Out

**Type:** Donation  
**Status:** Active (Not yet on site)  
**Campaign ID/Name:** `fundraising-opt-out`  
**Description:** For parents and family members who do not wish to participate in fundraising and will instead fully fund the booster club for post-season events (States and Regionals).

**Zeffy Link:** `https://www.zeffy.com/donation-form/fundraising-opt-out`

#### Integration Code:

**Type 1 - Direct Link:**
```html
<a href="https://www.zeffy.com/donation-form/fundraising-opt-out" target="_blank" rel="noopener noreferrer" class="btn">
    Fundraising Opt-Out
</a>
```

**Type 2 - Modal Popup (Recommended):**

*Header Script (add to `<head>` once):*
```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
```

*Button Code:*
```html
<button zeffy-form-link="https://www.zeffy.com/embed/donation-form/fundraising-opt-out?modal=true" class="btn">
    Fundraising Opt-Out
</button>
```

**Type 3 - Embedded Form:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Fundraising Opt-Out form powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/donation-form/fundraising-opt-out" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

---

### Campaign: Pag Parents Inc USAG Team Memberships 2025 (Annual)

**Type:** Membership  
**Status:** Active (Currently on site)  
**Campaign ID:** `1bbf7eac-7a56-419e-8aab-7d39111709a7`  
**Amount Raised:** $14,643  
**Sales:** 40  
**Description:** Annual membership for USAG team members - supports core program funding.

**Zeffy Link:** `https://www.zeffy.com/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7`

#### Integration Code:

**Type 1 - Direct Link:**
```html
<a href="https://www.zeffy.com/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7" target="_blank" rel="noopener noreferrer" class="btn">
    Join Membership
</a>
```

**Type 2 - Modal Popup:**
```html
<button zeffy-form-link="https://www.zeffy.com/embed/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7?modal=true" class="btn">
    Join Membership
</button>
```

**Type 3 - Embedded Form:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Membership form powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

**Thermometer Widget:**
```html
<iframe title="Donation thermometer powered by Zeffy" 
        style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:120px" 
        src="https://www.zeffy.com/embed/thermometer/1bbf7eac-7a56-419e-8aab-7d39111709a7" 
        allowTransparency="true"></iframe>
```

---

### Campaign: Pag Parents Inc USAG Team Memberships 2024 (Monthly)

**Type:** Membership  
**Status:** Active  
**Campaign ID:** Not yet identified  
**Amount Raised:** $9,321.56  
**Sales:** 32  
**Description:** Monthly membership payments for USAG team members.

**Note:** Campaign ID needs to be obtained from Zeffy dashboard for full integration.

---

### Campaign: Pag Parents Inc USAG Team Memberships 2024 (Annual)

**Type:** Membership  
**Status:** Active  
**Campaign ID:** Not yet identified  
**Amount Raised:** $11,420  
**Sales:** 10  
**Description:** Annual membership for 2024 season.

**Note:** This appears to be a previous year's campaign. Campaign ID needs to be obtained from Zeffy dashboard for full integration.

---

### Campaign: Donate to Send our Girls to USAG States!!

**Type:** Donation  
**Status:** Active (Currently on site)  
**Campaign ID:** Not yet identified (uses same ID as general donations)  
**Amount Raised:** $873.50  
**Donations:** 5  
**Description:** Specific campaign to fund state competition attendance.

**Current Implementation:** Uses the general donation campaign ID (1bbf7eac-7a56-419e-8aab-7d39111709a7)

**Note:** May need a dedicated campaign ID for accurate tracking.

---

### Campaign: Donate to Make a Difference for Our Gymnasts

**Type:** Donation  
**Status:** Active  
**Campaign ID:** Not yet identified  
**Amount Raised:** $681  
**Donations:** 5  
**Description:** General donation campaign for gymnast support.

**Note:** Campaign ID needs to be obtained from Zeffy dashboard for full integration.

---

### Campaign: Region 7 Competition Fees

**Type:** Membership  
**Status:** Active  
**Campaign ID:** Not yet identified  
**Amount Raised:** $1,850.13  
**Sales:** 9  
**Description:** Specific funding for Region 7 competition fees.

**Note:** Campaign ID needs to be obtained from Zeffy dashboard for full integration.

---

### Campaign: Backpacks - New Gymnasts

**Type:** Donation  
**Status:** Active  
**Campaign ID:** Not yet identified  
**Amount Raised:** $1,305.66  
**Donations:** 15  
**Description:** Funding to provide backpacks for new gymnasts joining the team.

**Note:** Campaign ID needs to be obtained from Zeffy dashboard for full integration.

---

### Campaign: Wise Crackers Comedy Charity Night!

**Type:** Event  
**Status:** Active (Currently on site)  
**Campaign ID/Name:** `wise-crackers-comedy-charity-night`  
**Event Date:** January 24, 2025  
**Amount Raised:** $100  
**Sales:** 4  
**Description:** Comedy night fundraiser event. Enjoy an evening of laughter while supporting our gymnasts.

**Zeffy Link:** `https://www.zeffy.com/ticketing/wise-crackers-comedy-charity-night`

#### Integration Code:

**Type 1 - Direct Link:**
```html
<a href="https://www.zeffy.com/ticketing/wise-crackers-comedy-charity-night" target="_blank" rel="noopener noreferrer" class="btn">
    Get Tickets
</a>
```

**Type 2 - Modal Popup (Recommended - Currently Used):**

*Header Script (already added to `<head>`):*
```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
```

*Button Code:*
```html
<button zeffy-form-link="https://www.zeffy.com/embed/ticketing/wise-crackers-comedy-charity-night?modal=true" class="btn">
    Get Tickets
</button>
```

**Type 3 - Embedded Form:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Wise Crackers Comedy Night tickets powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/ticketing/wise-crackers-comedy-charity-night" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

---

## Backlog Campaigns

The following campaigns are visible in the Zeffy dashboard but are not currently integrated into the website:

### Campaign: Fly Away Meet Registration

**Type:** Event  
**Status:** Backlog (Not on site)  
**Amount Raised:** $676  
**Sales:** 4  
**Description:** Registration for fly-away meet outside Region 7.

**Action Required:**
- Currently listed in Programs section but may need dedicated campaign page
- Verify if this should have its own Zeffy campaign integration
- Update with correct campaign ID when available

---

## Implementation Notes

### Current Site Usage

The website currently uses:
1. **Type 1 (Direct Links)** - Used for all donation buttons that open in new tabs
2. **Type 3 (Embedded iframes)** - Used for thermometer widgets and embedded donation forms in the fundraising section

### Recommended Additions

1. **Add Zeffy Header Script** - Add the modal popup script to enable Type 2 integrations:
   ```html
   <script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
   ```

2. **Implement Fundraising Opt-Out** - Add modal button for better user experience

3. **Standardize Campaign IDs** - Obtain specific campaign IDs for all active campaigns to ensure accurate tracking

### Best Practices

1. **Use Type 2 (Modal Popup)** for:
   - Primary donation calls-to-action
   - Membership signup buttons
   - Quick donation options

2. **Use Type 1 (Direct Link)** for:
   - Secondary donation options
   - Fallback when JavaScript is disabled
   - Email campaigns and external links

3. **Use Type 3 (Embedded)** for:
   - Dedicated donation/membership pages
   - Thermometer progress widgets
   - When you want the form always visible

---

## Maintenance

**When adding new campaigns:**

1. Create campaign in Zeffy dashboard
2. Obtain campaign ID or custom URL slug
3. Add campaign details to this document
4. Choose appropriate integration type
5. Test all three code types before deployment
6. Update website with chosen integration method

**When updating campaigns:**

1. Update campaign details in Zeffy dashboard
2. Update this documentation with new information
3. Test integration still works correctly
4. Update any marketing materials with new links

---

*Last Updated: December 31, 2024*
