#!/usr/bin/env python3
"""Retrieve a list of words in a document via a URL.

Usage:
    python3 words.py <URL>

Example URL:
    python3 words.py https://gist.githubusercontent.com/brettinternet/566ef8c457f764cbb0c311e1ecce042c/raw/2f1f285afb874d6a0c6cf8ac20078df9de53d839/two-cities.txt
"""

from sys import argv
from urllib.request import urlopen

def fetch_book_text(url):
    """Fetch a list of words from a URL.

    Args:
        url: The URL of a UTF-8 text document.

    Returns:
        A list of strings containing the words from the text document.
    """
    with urlopen(url) as paragraph:
            para_words = []
            for line in paragraph:
                words = line.decode('utf-8').split()
                for word in words:
                    para_words.append(word)
    return para_words


def print_word_list(para_words):
    """Another example doc string
    ...
    """
    for word in para_words:
        print(word)


def main(url):
    words = fetch_book_text(url)
    print_word_list(words)


if __name__ == '__main__':
    main(argv[1]) # the 0th arg is the module filename, our url arg is index 1
