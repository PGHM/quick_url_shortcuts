# Quick URL Shortcuts Chrome extension

Chrome extension made out of frustration when [Chrome dropped support](https://issues.chromium.org/issues/397720842) for opening urls with single key press from omnibox.

I only ever "misused" the site search feature without actual "%s" string as a workaround for Chrome not having shortcuts for opening bookmarks/urls quickly. So now that there really was no great way to do that I made this extension.

# How to use

1. Install the extension from [Chrome Web Store](https://chromewebstore.google.com/detail/quick-url-shortcuts/ogobhopommhbfnaghacgikgieebfadkf)
2. Go to the extension settings
3. Assign as many urls as you need, remember which url you assigned to which number
4. Go to `chrome://extensions/shortcuts` and assign keyboard shortcut to each number
5. Now the url you assigned will open to a new tab when you invoke the keyboard shortcut

# Limitations

I know it is not great that you have to remember the number and assign keyboard shortcuts based on that. But this is the only way to directly assign a keyboard shortcut. The commands that can have an extension shortcut need to be declared in manifest.json so they cannot be altered in options later. I hope someday Chrome will allow assigning keyboard shortcuts to bookmarks which will make this extension obsolete.

You can customize maximum of 25 urls that you can open using the extension hotkeys. The number is again defined in manifest.json. I thought 25 is a nice number as 10 seemed too low and 50 seemed excessive. You can create your own extension with even more commands and thus possibilities to assign shortcuts if you need.

# Notes

This was the first project ever that I succesfully used the help of an LLM (Microsoft Copilot in this case). I have tried previously at work but every time my requests are too complex and the answers are too generic.

Here it could handily provide the interfaces and startup code for the extension. It also provided some css for the options page and nicely did some monkey work of duplicating code in the manifest. I must say that the advantages stopped pretty quickly when I asked something even remotely complex, but it did save me some googling about Chrome extensions and css, so there is that!
