# WW Exercise

## Pre-requisites

### Dockerized w/ Lando
- Lando

### Non-dockerized
- NPM

## Getting Started (with Lando)
```bash
# start app
lando start # View API responses at http://ww.lndo.site/products/10191

# stream logs
lando logs -t -f

```

## Getting Started (non-docker)
```bash
# initialize
npm i

# run
npm run local # View API responses at http://localhost:3000/products/10191
```

## API Documentation
### Routes
- `/health`
- `/products`
- `/products/:catID`

### API Documentation
#### View documentation
Go to path `/doc`

#### Automatically update documentation
Run `npm run swagger`

## Improvements
- Better error handling, making sure all API throw the proper http status codes and clear error messages
- Add unit tests
- Re-organize code to follow MVC pattern
- Integrate babel for ES6
- Update API docs to include full set of params

## Architecture and DB Diagrams
[View on Lucid Charts](https://lucid.app/lucidchart/2931fbae-7f97-46a9-ae12-1d0ed40b5f2f/view?page=0_0#)

## Agile Workflow
I believe in self-organizing teams and letting the agile process work out kinks out over time. I would let the Product Owner write the initial stories with acceptance criteria. Then the developers would refine and point the tickets, and if needed, break the stories into smaller stories and tasks.

The developers can choose to assign the tickets in sprint planning or can pick up tickets from a To Do column in a Kanban board after the sprint starts.

Any sort of modifications to this process, I would expect to happen through iterations on discoveries and ideas generated in the sprint retrospectives.