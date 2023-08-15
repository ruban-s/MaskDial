# MaskDial: Phone Number Masking jQuery Plugin 📞

![version-badge](https://img.shields.io/badge/version-1.0.0-blue.svg)
![license-badge](https://img.shields.io/badge/license-MIT-green.svg)
![dependency-badge](https://img.shields.io/badge/dependency-jQuery-blue.svg)

**MaskDial** is a sleek, lightweight jQuery plugin crafted for formatting and masking phone numbers with ease. It provides dynamic phone number formatting based on the user's country or phone code. Whether you're building a web app for global users or just want to provide a better UX for phone number inputs, MaskDial is your perfect companion.

## 🌍 Features

- **Automatic Format Detection**: Just provide a country ISO code or phone code, and MaskDial will do the rest.
- **Fallback to Manual**: Even if no country or phone code is provided, the plugin intelligently guesses the format based on the entered number.
- **Customizable**: Easily extend or customize the masks to suit specific needs.
- **Lightweight**: Doesn't bloat your projects; it's as lightweight as plugins come!

## 🔧 Installation

### Via CDN:
```html
<script src="format.min.js"></script>
```

### Or download and link locally:

```html
<script src="format.min.js"></script>
```

### 🚀 Usage

- Ensure you've linked both jQuery and MaskDial.
- Initialize using the plugin on your desired input field:

```html
$('#your-input-id').maskedFormat({
    iso: 'US' // Or use phoneCode: '+1'
});

```

### 🛠 Configuration Options

    iso: The ISO country code. E.g., 'US', 'GB', 'IN', etc.
    phoneCode: The phone code, if you want to determine the format using that. E.g., '+1', '+44', '+91', etc.

### 🧩 Extending the Masks

We welcome and appreciate any contributions that help improve the MaskDial plugin.

### 📃 License
This project is licensed under the MIT License

### 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.
