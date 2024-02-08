document.addEventListener('DOMContentLoaded', function() {
    // Target the .slide-in div
    var slideInDiv = document.querySelector('.slide-in');

    // Ensure the .slide-in div exists
    if (!slideInDiv) {
        console.error('The .slide-in div was not found.');
        return; // Exit if .slide-in div is not found
    }

    // Create the main toggle button
    var mainButton = document.createElement('button');
    mainButton.id = 'slide-in-menu-button';
    mainButton.className = 'slide-in-menu-button';
    mainButton.setAttribute('aria-controls', 'slide-in-menu');
    mainButton.setAttribute('aria-expanded', 'false');
    mainButton.innerHTML = '<span class="dashicons dashicons-search"></span>'; // Set the default icon
    // Add click event listener directly to the button during its creation
    mainButton.addEventListener('click', function() {
        // Logic to toggle the slide-in menu
        console.log('Menu button clicked');
        toggleMenu();
    });
    
    // Insert the main toggle button just before the .slide-in div
    slideInDiv.parentNode.insertBefore(mainButton, slideInDiv);

    // Function to update the button icon based on screen size
    function updateButtonIcon() {
        var iconSpan = mainButton.querySelector('.dashicons');
        if (window.innerWidth > 991) {
            iconSpan.className = 'dashicons dashicons-search';
            mainButton.setAttribute('aria-label', 'Search');
        } else {
            iconSpan.className = 'dashicons dashicons-menu';
            mainButton.setAttribute('aria-label', 'Menu');
        }
    }

    // Call updateButtonIcon initially and on window resize
    updateButtonIcon();
    window.addEventListener('resize', updateButtonIcon);

    
    // Toggle the visibility of the slide-in menu
    function toggleMenu() {
        var expanded = mainButton.getAttribute('aria-expanded') === 'true';
        mainButton.setAttribute('aria-expanded', !expanded);
        var slideInMenu = document.getElementById('slide-in-menu'); // Ensure this is the correct ID for your menu
        if (slideInMenu) {
            slideInMenu.setAttribute('aria-hidden', expanded);
            slideInMenu.classList.toggle('active', !expanded);
            document.body.classList.toggle('no-scroll', !expanded);
            if (!expanded) {
                // Dynamically add the close button inside slideInMenu when opening
                addCloseButton(slideInMenu);
            }
        }
    }

    // Function to dynamically add the close button inside slideInMenu
    function addCloseButton(menuContainer) {
        // Check if the close button already exists to avoid duplicates
        if (!document.getElementById('slide-in-menu-close')) {
            var closeButton = document.createElement('button');
            closeButton.id = 'slide-in-menu-close';
            closeButton.className = 'slide-in-menu-close';
            closeButton.setAttribute('aria-label', 'Close Menu');
            closeButton.innerHTML = '<span class="dashicons dashicons-no"></span>'; // Use Dashicon 'no' for close icon
            menuContainer.appendChild(closeButton); // Append close button to the menu container

            // Close menu action
            closeButton.addEventListener('click', function() {
                toggleMenu(); // Reuse toggleMenu to close
            });
        }
    }

    // Function to center the button in the site header
    function centerButtonInHeader() {
        var header = document.querySelector('.site-header');
        var button = document.getElementById('slide-in-menu-button');

        if (header && button) {
            var headerHeight = header.offsetHeight;
            var buttonHeight = button.offsetHeight;
            var offset = (headerHeight - buttonHeight) / 2;
            button.style.position = 'absolute'; // Or 'relative' depending on your layout
            button.style.top = `${offset}px`;
        }
    }

    // Call the function initially to center the button
    centerButtonInHeader();

    // Add a resize listener to re-center the button when the window size changes
    window.addEventListener('resize', centerButtonInHeader);

    // Add a scroll listener to adjust the button's position after scrolling begins
    window.addEventListener('scroll', function() {
        var button = document.getElementById('slide-in-menu-button');
        if (window.scrollY > 0) {
            // Reset or adjust the button's position when the page is scrolled
            button.style.position = 'fixed'; // Keep the button fixed at the top or adjust as necessary
            button.style.top = '5px'; // Adjust this value to fit your design
        } else {
            // Re-center the button if the page is scrolled back to the top
            centerButtonInHeader();
        }
    });
});
