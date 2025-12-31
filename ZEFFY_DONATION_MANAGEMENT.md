# Zeffy Donation Management System

This document provides a comprehensive guide to all Zeffy donation campaigns used by PAG Booster, including the different types of integration code for each campaign.

## ⚠️ Important: Unique Form IDs

**Each campaign must have its own unique Zeffy form ID.** No two different campaigns or buttons should share a form ID unless they are the exact same campaign. Each form ID is a unique identifier that tracks donations, ticket sales, or memberships for a specific campaign. Reusing form IDs across different campaigns will result in inaccurate tracking and reporting.

When implementing a new campaign button:
1. Obtain the specific form ID from the Zeffy dashboard for that campaign
2. Use the complete form ID without shortening or making assumptions
3. Document the full form ID in this file for future reference
4. Never reuse a form ID from a different campaign

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
**Campaign ID:** `1bbf7eac-7a56-419e-8aab-7d39111709a7`  
**Amount Raised:** $873.50  
**Donations:** 5  
**Description:** Specific campaign to fund state competition attendance.

**Zeffy Link:** `https://www.zeffy.com/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7`

**IMPORTANT:** This campaign uses the same form ID as the "Pag Parents Inc USAG Team Memberships 2025 (Annual)" campaign, indicating they may be part of the same fundraising effort or the ID was reused. Each unique campaign should ideally have its own unique form ID for accurate tracking.

#### Integration Code:

**Type 1 - Direct Link:**
```html
<a href="https://www.zeffy.com/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7" target="_blank" rel="noopener noreferrer" class="btn">
    Send PAG to States
</a>
```

**Type 2 - Modal Popup (Currently Used):**

*Header Script (already added to `<head>`):*
```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
```

*Button Code:*
```html
<button zeffy-form-link="https://www.zeffy.com/embed/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7?modal=true" class="btn">
    Support This Campaign
</button>
```

**Type 3 - Embedded Form:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Send PAG to States donation form powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/donation-form/1bbf7eac-7a56-419e-8aab-7d39111709a7" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

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

### Campaign: Backpacks for New Gymnasts

**Type:** Donation  
**Status:** Active (Currently on site)  
**Campaign ID/Name:** `backpacks-new-gymnasts`  
**Amount Raised:** $1,305.66  
**Donations:** 15  
**Description:** Help reduce the cost of entry for our youngest team members. When a gymnast starts on the team, they need brand new backpacks and other gear. This fundraiser helps support new gymnasts joining the team.

**Zeffy Link:** `https://www.zeffy.com/donation-form/backpacks-new-gymnasts`

#### Integration Code:

**Type 1 - Direct Link:**
```html
<a href="https://www.zeffy.com/donation-form/backpacks-new-gymnasts" target="_blank" rel="noopener noreferrer" class="btn">
    Support New Gymnasts
</a>
```

**Type 2 - Modal Popup (Recommended - Currently Used):**

*Header Script (already added to `<head>`):*
```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
```

*Button Code:*
```html
<button zeffy-form-link="https://www.zeffy.com/embed/donation-form/backpacks-new-gymnasts?modal=true" class="btn">
    Support New Gymnasts
</button>
```

**Type 3 - Embedded Form:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Backpacks for New Gymnasts donation form powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/donation-form/backpacks-new-gymnasts" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

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

### Campaign: Fly Away Meet Registration

**Type:** Event  
**Status:** Active (Currently on site)  
**Campaign ID/Name:** `fly-away-meet-registration`  
**Amount Raised:** $676  
**Sales:** 4  
**Location:** Tampa, Florida  
**Description:** Registration and funding for team members attending an out-of-state fly-away meet. These larger meets in major cities outside of Region 7 help expand State College gymnastics beyond regional boundaries.

**Zeffy Link:** `https://www.zeffy.com/ticketing/fly-away-meet-registration`

#### Integration Code:

**Type 1 - Direct Link:**
```html
<a href="https://www.zeffy.com/ticketing/fly-away-meet-registration" target="_blank" rel="noopener noreferrer" class="btn">
    Register for Fly-away Meet
</a>
```

**Type 2 - Modal Popup (Recommended - Currently Used):**

*Header Script (already added to `<head>`):*
```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-helper.min.js"></script>
```

*Button Code:*
```html
<button zeffy-form-link="https://www.zeffy.com/embed/ticketing/fly-away-meet-registration?modal=true" class="btn">
    Support Fly-away Meet
</button>
```

**Type 3 - Embedded Form:**
```html
<div style="position:relative;overflow:hidden;height:1200px;width:100%;">
    <iframe title="Fly Away Meet registration powered by Zeffy" 
            style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%" 
            src="https://www.zeffy.com/embed/ticketing/fly-away-meet-registration" 
            allowpaymentrequest 
            allowTransparency="true"></iframe>
</div>
```

**Thermometer Widget:**
```html
<iframe title="Fly-away Meet thermometer powered by Zeffy" 
        style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:120px" 
        src="https://www.zeffy.com/embed/thermometer/fly-away-meet-registration" 
        allowTransparency="true"></iframe>
```

---

## Backlog Campaigns

The following campaigns are visible in the Zeffy dashboard but are not currently integrated into the website:

*No campaigns currently in backlog. All identified campaigns from the Zeffy dashboard have been integrated.*

---

## Campaign ID Reference

This section provides a quick reference of all Zeffy form IDs currently in use. **Remember: Each unique campaign must have its own unique form ID.**

### Currently Active Form IDs

| Form ID | Campaign Name | Type | Status |
|---------|---------------|------|--------|
| `fundraising-opt-out` | Fundraising Opt-Out | Donation | ✅ Active on site |
| `1bbf7eac-7a56-419e-8aab-7d39111709a7` | Pag Parents Inc USAG Team Memberships 2025 (Annual) | Membership | ✅ Active on site |
| `1bbf7eac-7a56-419e-8aab-7d39111709a7` | Donate to Send our Girls to USAG States!! | Donation | ✅ Active on site (same form as membership) |
| `wise-crackers-comedy-charity-night` | Wise Crackers Comedy Charity Night! | Event | ✅ Active on site |
| `fly-away-meet-registration` | Fly Away Meet Registration | Event | ✅ Active on site |
| `backpacks-new-gymnasts` | Backpacks for New Gymnasts | Donation | ✅ Active on site |

### Form IDs Needed (Currently Using Placeholder IDs)

The following campaigns are currently incorrectly sharing the membership form ID `1bbf7eac-7a56-419e-8aab-7d39111709a7` and need their own unique form IDs:

| Campaign Name | Current Form ID (Incorrect) | Action Required |
|---------------|----------------------------|-----------------|
| Region 7 Competition Fees | `1bbf7eac-7a56-419e-8aab-7d39111709a7` | ⚠️ Needs unique form ID from Zeffy dashboard |
| Direct Donations (General) | `1bbf7eac-7a56-419e-8aab-7d39111709a7` | ⚠️ Needs unique form ID from Zeffy dashboard |

### Campaigns Not Yet Integrated

| Campaign Name | Form ID | Amount Raised | Status |
|---------------|---------|---------------|--------|
| Pag Parents Inc USAG Team Memberships 2024 (Monthly) | Unknown | $9,321.56 | Need form ID |
| Pag Parents Inc USAG Team Memberships 2024 (Annual) | Unknown | $11,420 | Need form ID |
| Donate to Make a Difference for Our Gymnasts | Unknown | $681 | Need form ID |

---

## Implementation Notes

### Current Site Usage

The website currently uses:
1. **Type 1 (Direct Links)** - Used for program funding buttons that open in new tabs
2. **Type 2 (Modal Popups)** - Used for Fundraising Opt-Out, Comedy Night tickets, States campaign, Fly Away Meet, and Backpacks for New Gymnasts
3. **Type 3 (Embedded iframes)** - Used for thermometer widgets and embedded donation forms in the fundraising section

### Recommended Additions

1. **Standardize Campaign IDs** - Obtain specific campaign IDs for all active campaigns to ensure accurate tracking
2. **Update Placeholder IDs** - Replace the shared membership form ID with unique IDs for:
   - Fly-away Meet funding
   - Regional Competition funding  
   - General direct donations

### Best Practices

1. **Use Type 2 (Modal Popup)** for:
   - Primary donation calls-to-action
   - Membership signup buttons
   - Event ticketing
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
2. Obtain the unique campaign ID or custom URL slug
3. **Verify the ID is unique** - do not reuse IDs from other campaigns
4. Add campaign details to this document with full form ID
5. Choose appropriate integration type
6. Test all three code types before deployment
7. Update website with chosen integration method

**When updating campaigns:**

1. Update campaign details in Zeffy dashboard
2. Update this documentation with new information
3. Test integration still works correctly
4. Update any marketing materials with new links

---

*Last Updated: December 31, 2024*
