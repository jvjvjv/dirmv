# DirMv

DirMv is a little script that recursively renames files in a directory. I just made this for myself.

## Installation

You can use `npx` if you like,

    $ npx dirmv <directory> <search> <replace>

or you can install it globally.

    $ [sudo] npm i -g dirmv

Sometimes I find that I need to `sudo` when installing npm packages

## Usage

It's easy. Just specify the directory to recursively scan, the Regular Expression to search for, and its replacement text. All searches are case-sensitive

### Examples

    $ dirmv /var/www/html/img gelat[oi] ice-cream

This will pore over /var/www/html/img and wherever it matches "gelato" or "gelati" in the filename, it will change it to "ice-cream", so

|Old Filename  |New filename    |
|--------------|----------------|
|gelato_sm.png |ice-cream_sm.png|
|gelati_lg.png |ice-cream_lb.png|
|Gelati_sm.png |Gelati_sm.png   |

The last one didn't get renamed because the search is case-sensitive.

## Uninstallation

If you are a fan of npx, never fear. The thing was never installed on your machine in the first place! If you did install it globally, it's easy to reverse that.

  $ [sudo] npm uninstall -g DirMv

Ta-da!

## Known Issues

* I made this super quick. It won't rename directories. Just files. It doesn't have running indices, so you can't, like, get files to be renamed `file001.jpg`, `file002.jpg`, etc unless they're being renamed from `oldfile001.jpg`, `olffile002.jpg`, etc.

## Contributing

I've got a GitHub. It's got an Issues board. I accept pull requests.

## License

I made this under the MIT license. Cos it's super easy for anyone to recreate, really.
