# Ruby


## rbenv
Manages Ruby versions

### Setup
1. `sudo xcode-select --install`
1. Install rbenv with `brew install rbenv`
1. Add `eval "$(rbenv init -)"` to the end of ~/.zshrc or ~/.bash_profile
1. Install a ruby version rbenv install 2.3.0
1. Select a ruby version by rbenv rbenv global 2.3.0
1. Open a new terminal window
1. Verify that the right gem folder is being used with gem env home (should report something in your user folder not system wide)


## Other
[This guy](https://hackernoon.com/how-i-got-banned-from-codewars-c21ad6ebee1e) discovered a CodeWars hack that tricks the tests into passing.

```rb
class NilClass
  def ==(_)
    true
  end
end
def mymethod
end
```

I don't like the idea of cheating, but it's still an interesting trick and speaks somewhat to the silliness of relying on scores or grades.
