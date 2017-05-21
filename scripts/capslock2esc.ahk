Capslock::Esc

; OR uncomment to only map inside the Vim app
; http://vim.wikia.com/wiki/Map_caps_lock_to_escape_in_Windows
; classname = ""
; keystate = ""

; *Capslock::
  ; WinGetClass, classname, A
  ; if (classname = "Vim")
  ; {
    ; SetCapsLockState, Off
    ; Send, {ESC}
  ; }
  ; else
  ; {
    ; GetKeyState, keystate, CapsLock, T
    ; if (keystate = "D")
      ; SetCapsLockState, Off
    ; else
      ; SetCapsLockState, On
    ; return
  ; }
  ; return
