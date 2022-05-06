import { createMachine } from "xstate";

const promiseMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBA7gQwGswMBlAGzDAAcBPAYgBlUBXCAAgDtUBLAYzESgqqWNwAu3VB0EgAHogCMAViUYFATnUAWAOxKATDoDMABkMAOfQBoQNREoUYdOk0fXmd6hTv0A2LeZKAL5BNmiYuIRgdABieGRksGx4sBTUMsKiElIy8ggAtEbmWhiaWiYq6v5GbuY2dgUa6mpG+vomvtrmZgpGwaEg4diplFSMLOwAcjz8GSLiktJIcoh+GEXG-up9Pubm6jr1iPla+qptRjr+vka+yq4hYejDaWMkALZgCUkAZqioEDmWUWuWODnWLjuCl6zhc0KOBUuOicWgOOkCzl8Sh8-QGXAgcBkQ0iRFIrwaQnm2SWoDy+j6pX0WhuRm8JgUN2stmOvmRSlMAT6VXp0P0j0GzxJxBIvDwACdIECFjllnl8sp9BgtAoLPzzL59fo6tyEByStqDfqjFpmfoNOLifgiErqaDGlctTr0XqDb4jQj1eUMPyTAFLJ0bXtzA7JSN0stMsqaSsCuVNZYQ94VH62gGtKynPSrh5WroFFoY1AXSDVcdTr4MBnTFmlDmuQ18kpQ4WkdaKgavBWQkEgA */
  createMachine({
    id: "Dog",
    initial: "Asleep",
    states: {
      Awake: {
        initial: "Sleepy",
        states: {
          Sleepy: {
            on: {
              "Loud noice": {
                target: "Scared",
              },
            },
          },
          Scared: {},
        },
        on: {
          "Falls asleep": {
            target: "Asleep",
          },
        },
      },
      Asleep: {
        on: {
          "Loud Noice": {
            target: "#Dog.Awake.Scared",
          },
          "Smells food": {
            target: "#Dog.Awake.Sleepy",
          },
        },
      },
    },
  });

const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHcCGAbA1gOjQSwBc8A7KAYnTFQDcwACACwHsBbMRUABydkLyeIcQAD0QBaAIwAWAKzYADAHYAHBImKATBPkA2RTICcUgDQgAnog0bsOgMwqDuqfPkGDGzQF9PptFmwCdKh0fphkMAR0AEaoAMaYjKzsSCDcvEQCQqIIkjI62BIGOsoymrYaBrYyEqYWCBryEtgGMkpt6lYGEsrePiDETBBwQqG4qHykQml8mSnZYra28gV6yq46Og0bOrWIEvkS9srHS7ZSjrbu3r4YOIHBoVM8M4JziLbYyiqyis6KZR4pIpdggJBoPjIpM55DJLgZ-osJNcQKNQnQwMQhhAnul+K9QPMzlJsJCNMoNFJCrCpLZlCClstzoZYYodJCZF9kY8UtMMviROJbMUSVIyRSqWdaSCxHlPpttBUtLC1LZep4gA */
  createMachine({
    initial: "waiting",
    states: {
      waiting: {
        on: {
          "leave home": {
            target: "on a walk",
          },
        },
      },
      "on a walk": {
        on: {
          "get back home": {
            target: "walk ended",
          },
        },
      },
      "walk ended": {
        type: "final",
      },
    },
    id: "walk",
  });

const machine2 =
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgGEBDAGxIAIBbIgYwAsBLDMAOgFkGaAnLABzqzN8IXllgMALg0HCAHogC0AJgBsAThYBWAMwBGTQBYlm3doAcKlQfQBPRbrMB2FvrOnDKh0u2alyNCDEZFS0jEJIImKS0hhyikpq2lp6hsamFla28SoADC6abqbeFgZmTv7+QA */
  createMachine({
  type: "parallel",
  states: {
    Microphone: {},
  },
  id: "Call machine",
});
