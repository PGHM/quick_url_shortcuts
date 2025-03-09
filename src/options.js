document.addEventListener('DOMContentLoaded', function() {
    const optionsContainer = document.getElementById('optionsContainer');
    const numberOfOptions = 25

    for (let i = 1; i <= numberOfOptions; i++) {
        const optionTitle = document.createElement('label');
        const paddedNumberString = `${i}`.padStart(2, '0');
        optionTitle.textContent = `URL for shortcut #${paddedNumberString}:`;
        optionTitle.className = 'optionTitle';

        const optionInput = document.createElement('input');
        optionInput.type = 'text';
        optionInput.id = `urlShortcut${i}`;
        optionInput.className = 'optionInput';

        const optionRow = document.createElement('div');
        optionRow.className = 'optionRow';
        optionRow.appendChild(optionTitle);
        optionRow.appendChild(optionInput);
        optionsContainer.appendChild(optionRow);

        // Save value on change
        optionInput.addEventListener('input', function() {
            const updatedOptionValue = {};
            updatedOptionValue[`urlShortcut${i}`] = optionInput.value;
            chrome.storage.sync.set(updatedOptionValue, function() { });
        });
    }

    // Load previously saved values
    chrome.storage.sync.get(null, function(previousValues) {
        for (let i = 1; i <= numberOfOptions; i++) {
            const optionInput = document.getElementById(`urlShortcut${i}`);
            if (previousValues[`urlShortcut${i}`]) {
                optionInput.value = previousValues[`urlShortcut${i}`];
            }
        }
    });
});
