# Atom packages
[Atom Packages](https://atom.io/packages)

## Essentials
- [Sync-settings](https://atom.io/packages/sync-settings) - [Gist with settings](https://gist.github.com/brettinternet/47895a558ace70431f147139473b600b)
- [minimap](https://atom.io/packages/minimap)
- [minimap-pigments](https://atom.io/packages/minimap-pigments)
- [pigments](https://atom.io/packages/pigments)
- [color-picker](https://atom.io/packages/color-picker)
- [Sublime-Style-Column-Selection](https://atom.io/packages/sublime-style-column-selection)
- [platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal)
  - _NOTE:_ I recommend remapping the new terminal window key:
  ```coffeescript
  '.platform-darwin atom-workspace':
    'cmd-shift-l': 'platformio-ide-terminal:new'
  ```
    The mapping was `cmd-shift-t`. However, `cmd-shift-t` should be reserved for reopening previously closed tabs. See [How to change your keybindings](http://stackoverflow.com/questions/22744401/change-keymap-for-tree-viewtoggle-in-atom).


- [file-icons](https://atom.io/packages/file-icons)
- [atom-beautify](https://atom.io/packages/atom-beautify)
- [Emmet](https://atom.io/packages/emmet)
- [atom-live-server](https://atom.io/packages/atom-live-server)

## Syntax support
- [angularjs](https://atom.io/packages/angularjs)
- react
- [language-log](https://atom.io/packages/language-log)

## Opinionated
- [bracket-padder](https://atom.io/packages/bracket-padder)
- [vim-mode-plus](https://atom.io/packages/vim-mode-plus)

## UI
- [atom-material-ui](https://github.com/atom-material/atom-material-ui)
- [atom-material-syntax-dark](https://github.com/atom-material/atom-material-syntax-dark)

## Bonus
- [atom-spotify2](https://atom.io/packages/atom-spotify2)

### Shortcuts
For some Atom shortcuts, [check this out](https://github.com/brettinternet/atom-keyboard-shortcuts).

# Atom Resources
- [Vim mode plus tutorial](https://github.com/t9md/atom-vim-mode-plus/wiki/AdvancedTopicTutorial)

# Custom CSS
```css
.atom-dock-toggle-button-visible
{
    display: none;
}
```


```css
.editor .selection .region {
background-color: rgba(0, 0, 0, 0.2);
}

.editor.is-focused  .selection .region {
background-color: rgba(200, 57, 241, .2);
}

atom-text-editor::shadow .lines .line.cursor-line {
   background-color: ;
}
```
