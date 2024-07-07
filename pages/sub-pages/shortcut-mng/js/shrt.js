let shortcuts = [
    { id: 1, name: 'Dodi Repacks', url: 'https://dodi-repacks.site' },
    { id: 2, name: 'Fitgirl Repacks', url: 'https://fitgirl-repacks.site' },
    { id: 3, name: 'Online-Fix.Me', url: 'https://online-fix.me' },
];

function getFavicon(url) {
    // Check if the URL contains a domain, otherwise use a default favicon
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}`;
}

function createShortcutElement() {
    const container = document.getElementById('shortcutWrap');
    if (!container) {
        console.error("Shortcut container not found.");
        return;
    }
    container.classList.add('row');

    // Clear existing children/shortcuts
    container.innerHTML = '';

    shortcuts.forEach((item) => {
        const shortcutItem = document.createElement('div');
        shortcutItem.classList.add('col-2', 'shortcut');

        // Shortcut wrapper
        const shortcutItemWrapper = document.createElement('div');
        shortcutItemWrapper.classList.add('shortcut-item');
        shortcutItemWrapper.addEventListener('click', function(){
            openUrlToNewTab(item.url);
        });
        shortcutItem.appendChild(shortcutItemWrapper);

        // Ellipsis icon
        const ellipsisIconWrapper = document.createElement('div');
        ellipsisIconWrapper.classList.add('item-menu-icon-wrapper');
        shortcutItemWrapper.appendChild(ellipsisIconWrapper);
        const ellipsisIcon = document.createElement('i');
        ellipsisIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('open menu');
        });
        ellipsisIcon.classList.add('fa-solid', 'fa-ellipsis', 'item-menu-icon');
        ellipsisIconWrapper.appendChild(ellipsisIcon);

        // Website logo
        const shortcutIconWrapper = document.createElement('div');
        shortcutItemWrapper.appendChild(shortcutIconWrapper);
        const shortcutIcon = document.createElement('img');
        shortcutIcon.classList.add('shortcut-icon');
        shortcutIcon.src = getFavicon(item.url);
        shortcutIconWrapper.appendChild(shortcutIcon);

        // Website name
        const shortcutNameWrapper = document.createElement('div');
        shortcutItemWrapper.appendChild(shortcutNameWrapper);
        const shortcutName = document.createElement('span');
        shortcutName.classList.add('shortcut-name');
        shortcutName.textContent = item.name;
        shortcutNameWrapper.appendChild(shortcutName);

        container.appendChild(shortcutItem);
    });
}

function addShortcut() {
    const nameInput = document.getElementById('shortcutNameInput');
    const urlInput = document.getElementById('shortcutUrlInput');
    const closeButton = document.getElementById('closeFormButton');

    if (nameInput.value && urlInput.value) {
        const newShortcut = { id: shortcuts.length + 1, name: nameInput.value, url: urlInput.value };
        shortcuts.push(newShortcut);
        nameInput.value = '';
        urlInput.value = '';

        createShortcutElement();
        saveShortcutsToCookie(); // Save shortcuts to cookie
    }
    closeButton.click(); // Close modal after adding shortcut
}

// Cookies
function saveShortcutsToCookie() {
    const jsonShortcuts = JSON.stringify(shortcuts);
    document.cookie = `shortcuts=${jsonShortcuts}; expires=${getCookieExpirationDate()}; path=/`;
}

function loadShortcutsFromCookie() {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ');

    let shortcutsCookie = '';
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].split('=');
        if (cookie[0] === 'shortcuts') {
            shortcutsCookie = cookie[1];
            break;
        }
    }

    if (shortcutsCookie) {
        try {
            shortcuts = JSON.parse(shortcutsCookie);
            createShortcutElement();
        } catch (error) {
            console.error('Error parsing shortcuts from cookie:', error);
        }
    }
}

function getCookieExpirationDate() {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Expires in 1 year
    return expirationDate.toUTCString();
}

function openUrlToNewTab(url) {
    window.open(url, '_blank');
}

function addFocusClassToInput() {
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
}

// Execute code on load
document.addEventListener('DOMContentLoaded', function(){
    loadShortcutsFromCookie(); // Load shortcuts from cookie
    createShortcutElement();
    addFocusClassToInput();

    // Bind addShortcut function to "Save changes" button click
    const saveButton = document.getElementById('saveShrt');
    if (saveButton) {
        saveButton.addEventListener('click', addShortcut);
    } else {
        console.error("Save changes button not found.");
    }

     // Clear inputs when modal is hidden
     const modalElement = document.getElementById('exampleModal');
     modalElement.addEventListener('hidden.bs.modal', function () {
         const nameInput = document.getElementById('shortcutNameInput');
         const urlInput = document.getElementById('shortcutUrlInput');
         nameInput.value = '';
         urlInput.value = '';
     });
});
