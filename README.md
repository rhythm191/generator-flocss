# generator-flocss [![Build Status](https://secure.travis-ci.org/rhythm191/generator-flocss.png?branch=master)](https://travis-ci.org/rhythm191/generator-flocss)

> [Yeoman](http://yeoman.io) generator that create FLOCSS style scss files.


## Features

* craete FLOCSS files

## Getting Started

Setting your scss directory


```bash
yo flocss
```

## Generate FLOCSS files

To generate component file, run:


```bash
yo flocss:component button # genrate "assets/styles/object/component/_button.scss"
```

etc...

* foundation: `yo flocss:foundation base` 
* layout: `yo flocss:layout header` 
* component: `yo flocss:component button` 
* project: `yo flocss:project articles` 
* utility: `yo flocss:utility text` 


To delete component file, run:

```bash
yo flocss:component button --delete # delete "assets/styles/object/component/_button.scss"
```


## Generate FLOCSS imoprt files

To generate import file, fun:

```bash
yo flocss:import # create import file "assets/styles/_import.scss"
```

## License

MIT
