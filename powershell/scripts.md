# PS scripts

Recursively pull files out of directories to your current folder and optionally remove the directories.
`Get-ChildItem $folderPath -Recurse -File | Move-Item`
`Get-ChildItem $folderPath -Recurse -Directory | Remove-Item`


# Batch Scripts

###### Recursively extract from `*.iso`

```bat
for /R "%~dp0" %%I in ("*.iso") do (
  "C:\Program Files\7-Zip\7z.exe" x -y -xr!"*.rar" -o"%%~dpI" "%%~fI" && del "%%~fI"
)
```

[source](http://stackoverflow.com/questions/24339419/windows-batch-script-to-recursively-extract-specific-files-using-7zip)
