## Modes
* Normal mode: the editor begins in this mode and can be accessed with the `[ESC]` key. Use to navigate the file.
* Insert mode: enter with an insertion or change command.
* Visual mode: highlight portions of the file to manipulate at once.
* Ex mode: command mode

command + motion
`caw` - delete whole word and insert
`di[` - delete in bracket
`yi)` - copy in parenthesis
`va"` - visual select including quotes

`.` - repeat the last motion where the cursor is

`yy` - copy current line


`m[key]` - mark a key to return to it with ``[key]`


* `,d` brings up [NERDTree](https://github.com/scrooloose/nerdtree), a sidebar buffer for navigating and manipulating files
* `,t` brings up [ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim), a project file filter for easily opening specific files
* `,b` restricts ctrlp.vim to open buffers
* `,a` starts project search with [ag.vim](https://github.com/rking/ag.vim) using [the silver searcher](https://github.com/ggreer/the_silver_searcher) (like ack, but faster)
* `ds`/`cs` delete/change surrounding characters (e.g. `"Hey!"` + `ds"` = `Hey!`, `"Hey!"` + `cs"'` = `'Hey!'`) with [vim-surround](https://github.com/tpope/vim-surround)
* `gcc` toggles current line comment
* `gc` toggles visual selection comment lines
* `vii`/`vai` visually select *in* or *around* the cursor's indent
* `Vp`/`vp` replaces visual selection with default register *without* yanking selected text (works with any visual selection)
* `,[space]` strips trailing whitespace
* `<C-]>` jump to definition using ctags
* `,l` begins aligning lines on a string, usually used as `,l=` to align assignments
* `<C-hjkl>` move between windows, shorthand for `<C-w> hjkl`

## Quitting
* **`:x`**	Exit, saving changes <br/>
* **`:q`**	Exit as long as there have been no changes <br/>
* **`ZZ`**	Exit and save changes if any have been made <br/>
* **`:q!`**	Exit and ignore any changes<br/>

## Inserting Text
* **`i`**	Insert before cursor <br/>
* **`I`**	Insert before line <br/>
* **`a`**	Append after cursor <br/>
* **`A`**	Append after line <br/>
* **`o`**	Open a new line after current line <br/>
* **`O`**	Open a new line before current line <br/>
* **`r`**	Replace one character <br/>
* **`R`**	Replace many characters <br/>

## Motion
* **`h`**	Move left <br/>
* **`j`**	Move down  <br/>
* **`k`**	Move up  <br/>
* **`l`**	Move right  <br/>
* **`w`**	Move to next word  <br/>
* **`W`**	Move to next blank delimited word <br/>
* **`b`**	Move to the beginning of the word <br/>
* **`B`**	Move to the beginning of blank delimited word <br/>
* **`e`**	Move to the end of the word <br/>
* **`E`**	Move to the end of Blank delimited word <br/>
* **`(`**	Move a sentence back <br/>
* **`)`**	Move a sentence forward <br/>
* **`{`**	Move a paragraph back <br/>
* **`}`**	Move a paragraph forward <br/>
* **`0`**	Move to the beginning of the line <br/>
* **`H`**	Move to _top_ of screen <br/>
* **`M`**	Move to _middle_ of screen <br/>
* **`L`**	Move to _bottom_ of screen <br/>
* **`%`**	Move to associated ( ), { }, [ ] <br/>
* **`^y`**/**`^e`** 	Scroll up and down on the page <br/>

## Search for strings
* **`/str`**	Search forward for string<br/>
* **`?str`**	Search back for string<br/>
* **`n`**	Search for next instance of string<br/>
* **`N`**	Search for previous instance of string<br/>

## Deleting Text
Almost all deletion commands are performed by typing `d` followed by a motion. For example, **`dw`** deletes a word. A few other deletes are:

* **`x`**	Delete character to the right of cursor<br/>
* **`X`**	Delete character to the left of cursor<br/>
* **`D`**	Delete to the end of the line<br/>
* **`dd`**	Delete current line<br/>
* **`:d`**	Delete current line<br/>

## Replace
The search and replace function is accomplished with the :s command. It is commonly used in combination with ranges or the :g command (below).

* **`:s/pattern/string/flags`**	Replace pattern with string according to flags. (Example: `:%s/foo/bar/`. Find each occurrence of 'foo' (in all lines), and replace it with 'bar'.) <br/>
* **`g`** Flag - Replace all occurrences of pattern <br/>
* **`c`** Flag - Confirm replaces. <br/>
* **`&`** Repeat last :s command <br/>

## Files
* **`:w file`**	Write to file<br/>
* **`:r file`**	Read file in after line<br/>
* **`:n`**	Go to next file<br/>
* **`:p`**	Go to previous file<br/>
* **`:e file`**	Edit file<br/>
* **`!!program`**	Replace line with output from program<br/>

## Other
* **`~`**	Toggle up and lower case <br/>
* **`J`**	Join lines <br/>
* **`.`**	Repeat last text-changing command <br/>
* **`u`**	Undo last change <br/>
* **`U`**	Undo all changes to line <br/>
