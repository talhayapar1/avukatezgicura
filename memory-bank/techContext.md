# Technical Context: Avukat Ezgi Cura Law Firm Website

## Technologies Used

### Core Technologies
- **HTML5**: Markup language for structuring the website
- **CSS3**: Styling language for design and layout
- **JavaScript**: Minimal use for interactive elements
- **Bootstrap 5**: CSS framework for responsive design

### Development Tools
- **Visual Studio Code**: Recommended code editor
- **Git**: Version control system
- **GitHub**: Repository hosting and collaboration
- **Browser DevTools**: For testing and debugging

### Deployment
- **Static Hosting**: Any static web hosting service can be used
- **Domain**: www.avukatezgicura.com

## Technical Constraints

### Performance Requirements
- Page load time under 3 seconds
- Optimized images and assets
- Minimal use of JavaScript to ensure fast loading
- Mobile-optimized for various connection speeds

### Browser Compatibility
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper contrast ratios
- Screen reader compatibility
- Keyboard navigation support

## Dependencies

### External Libraries
- Bootstrap 5 (CSS and JS)
- Bootstrap Icons (optional)
- Google Fonts (for typography)
- Font Awesome (optional, for icons)

### CDN Resources
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- Bootstrap Icons (optional) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
```

## Development Setup
1. Clone the repository
2. Open the project folder in VS Code or preferred editor
3. Edit HTML, CSS, and JS files as needed
4. View changes by opening HTML files in a browser
5. No build process or compilation required

## Testing Strategy
- Manual testing across different browsers and devices
- Responsive design testing using browser DevTools
- Lighthouse performance testing
- WAVE or axe accessibility testing 