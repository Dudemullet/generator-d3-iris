# generator-d3-iris

Is a [yeoman generator](http://yeoman.io/) meant to provide a small platform for rapid prototyping with [D3](http://d3js.org/). This generator will provide the [iris dataset](http://en.wikipedia.org/wiki/Iris_flower_data_set) in 2 differet formats (csv and json under /csv and /json). It will also provide livereload of all your changes.

I left all the html/css/js in a single to make it easier to publish your examples into [bl.ocks.org](http://bl.ocks.org/).

## Getting Started

Install the generator directly via npm or yeoman

To install generator-d3-iris via npm, run:

```
$ npm install -g generator-d3-iris
```

Run the generator:

```
$ mkdir <project-dir>
$ cd <project-dir>
$ yo d3-iris
$ node server
```

### Create a new test case

```
$ yo d3-iris:new <name>
```
or
```
$ yo d3-iris:adv <name>
```

## License

MIT
