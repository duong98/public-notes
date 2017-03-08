## Minor PS scripts

Recursively pull files out of directories to your current folder and optionally remove the directories.
`Get-ChildItem $folderPath -Recurse -File | Move-Item`
`Get-ChildItem $folderPath -Recurse -Directory | Remove-Item`
