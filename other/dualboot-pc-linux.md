## Backup your data

- [ ] Backup your data

## Make some room for Linux

#### Shrinking your volume
1. Access [Disk Management](http://pcsupport.about.com/od/windows-8/a/disk-management-windows-8.htm)
2. Right click on the **biggest** partition and select **Shrink Volume**.

You want at least `20` GB of space.

There's also a [full tutorial here](http://www.everydaylinuxuser.com/2015/11/how-to-shrink-windows-10-to-make-space.html) you can follow.

## Turn off Fast Startup

If you are running Windows 8+, you need to disable Fast Startup:

1. Download this: [turn_off_fast_startup.bat](https://raw.githubusercontent.com/brettinternet/171614402dea7b001ff5fa469d7f3d41/raw/38071dbdb00f2b8c4721c6b67834337e4e3c99c1/turn_off_fast_startup.bat) (right click, download).
1. Right click on the downloaded file and select **Run as administrator**

**OR**

Go to **Energy Settings** -> **Power Button**. Click on "Change settings that are currently unavailable** if needed then you should be able to **disable FastBoot** or untick the **Turn on fast startup (recommended)** option (depends on the Windows version).

## USB setup

Put **Ubuntu 16.04. LTS 64 bits** on a USB drive. You can create the install on the USB yourself from [OSX](http://web.archive.org/web/20151222000109/http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) or from [Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows).

## Install Ubuntu

1. Plug-in the USB stick, and restart your computer **holding the shift key**. A blue screen will appear. If this does not work, follow [this procedure](https://support.microsoft.com/en-us/instantanswers/f40a95aa-1e34-4907-98ba-a308fd10a786/get-to-safe-mode-and-other-startup-settings-in-windows-10) to get to the "Other startup" setting.
2. Once the computer has restarted, you need to select the startup mode. Choose **Other options**
3. Choose **Use a Device**. You should see the USB stick in the list (EFI USB Device). Select it, this way, Windows will restart using the Linux key.

Ubuntu should boot in live mode.

1. Install Ubuntu in **english** and alongside with Windows. **Do not** tick **Third-Party** and **do not** tick **Update ...**.
2. **Keyboard** settings: press <kbd>@</kbd> <kbd>#</kbd> <kbd>/</kbd> to check they are working correctly.
3. Fill in **User Information**.
4. Restart your machine and unplug the USB stick.

When it's done, **check that you can still boot on Windows**. The idea is that every time you boot your computer, you now have a menu to choose if you want to boot Windows **or** Linux.
