# System Patterns: Avukat Ezgi Cura Law Firm Website

## Architecture Overview
The website follows a simple static web architecture with HTML, CSS, and minimal JavaScript. As a static website, it doesn't require server-side processing or database connectivity.

```
└── Static Web Architecture
    ├── Presentation Layer (HTML/CSS/JS)
    └── Asset Layer (Images, Fonts, etc.)
```

## Design Patterns

### Component-Based Structure
- **Header Component**: Consistent navigation bar across all pages
- **Footer Component**: Consistent footer with contact information and copyright
- **Content Sections**: Modular content blocks that can be reused across pages

### Responsive Design Pattern
- Mobile-first approach using Bootstrap's grid system
- Responsive breakpoints for different device sizes:
  - Extra small devices (phones, less than 576px)
  - Small devices (tablets, 576px and up)
  - Medium devices (laptops, 768px and up)
  - Large devices (desktops, 992px and up)
  - Extra large devices (large desktops, 1200px and up)

### Navigation Pattern
- Horizontal navigation bar for desktop view
- Collapsible hamburger menu for mobile view
- Active page highlighting

## Component Relationships
- All pages inherit from a common template
- Shared components (header, footer) are consistently implemented across all pages
- Content sections are unique to each page but follow consistent styling patterns

## File Organization
```
/
├── HTML Pages (Root Level)
│   ├── index.html
│   ├── about.html
│   └── contact.html
├── Assets (Organized by Type)
│   ├── css/
│   ├── js/
│   └── img/
└── External Resources
    └── Bootstrap (via CDN)
```

## Styling Strategy
- Bootstrap as the foundation framework
- Custom CSS for unique branding and specific styling needs
- Consistent color scheme and typography throughout the site
- CSS class naming follows Bootstrap conventions 