# sim-bot
 A bot that becomes an actor in a software system simulation to carry out a specific role.

## First draft user-bot

I imagine two different types of bots:

- User bots, that act on the system with user level access.
- System bots, that support a simulation, such as a warehouse system that takes the current backlog of orders, and changes their status to progress them over time.

### Star Wars Bot

The first basic example user-bot, calls SWAPI, the Star Wars API. Please don't leave this bot running and spam them!

### Whats next?

The Star Wars example is hard-codes, the intention is to make the bot config driven, so configuration files can be used to control behavior, such as what API call to make and how often to run it.

Advanced functionality on top of this, would be to introduce patterns or weightings, so it can run multiple API calls from a list. So for example, get people half the time, and films the other half.

Another possible feature would be more sophisticated timing patterns, so instead of the hard coded 10s delay, it could be a pattern of different delays, or a range of delays and a delay is randomly chosen within that range each iteration.

## Setup and run


### Manage node via NVM

Node Version Manager is the easiest way to manager node. You can get it at: <>

Once you have nvm, you can install the currently configured version of node for this project by running:

```
nvm use
```

### Install dependencies

The project is using npm, so you can run:

```
npm install
```

### Start the bot

```
npm run start
```

### Example output

```
npm run start

> start
> ts-node bot.ts

Starwars Bot Starting
Luke Skywalker
C-3PO
```