import { createMachine } from "xstate";

const promiseMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBA7gQwGswMBlAGzDAAcBPAYgBlUBXCAAgDtUBLAYzESgqqWNwAu3VB0EgAHogBMANgAMGACwBGAKwKAHAE4l6gOyaVCleoA0IGogMGMBhQs16F2pdoDM6-ZoAvoG2aJi4hMQAQmBQUNwcUHQA4twAbmBsACoATmB4YjLCohJSMvII5k4+2uZa+iYKPiYGerb2CAC06uoYLSZ6FiqDFgY+waHo2PhEdABieGRksGx4sBTURSLiktJIcojdvhhKRn4qF2ZNxu2H+goYHgZWYwomKtrqSuMhIGHY60oVEYLHYADkePwtiVduVDv4MD5NOoDJpUSp3p8DNpbl1tMNnJZVO8dO4fEoJn8plhAdQ6CQALZgJYrABmqFQEGhOzK+wqnU0lgwGP02PcH18Rlx3SUmg0XyUlmxSlOH3UwV+XAgcBk-wiRFIG1o3NKe1AFT8cuRVlMn38zRsdkOaMRA1OrVcstMBkpepmxBIvDweS5+2KPLNBy6pgwaNOZhUgoGei8SlxbgeXj0ShJ7iaHh+k3C-owMTiCSgJthfIcPkeBlMHj0mk0JmabfTJg0NR8wx0pz0HgUvup-qrvPNhzMsaMBgTScH2hM0pbXf6gxzvgUpisI-CtKo48j-NMct0Jm0KZaenUKlUOKdeJ0GiJLbf+NMe6PcOj2Iw58vJdWlve9pUvPQXzvFtezRZ51Q1IA */
  createMachine({
  id: "Dog",
  initial: "Awake",
  states: {
    Awake: {
      initial: "Begging",
      states: {
        Sleepy: {
          on: {
            "Loud noice": {
              target: "Scared",
            },
          },
        },
        Scared: {},
        Begging: {
          on: {
            "Give Treat": {
				target: "Begging",
			},
          },
        },
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
  /** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAtqgxgBYCWAdmAHQCyx+ATgPYAOhD51ArgC6QDEAqqRzcwiUEwaxiXYmzEgAHogC0AZlUAWCgHYAnAEYADLoAcG8wDZ1AGhABPFRu0UATAFZDn-fu0vjFk30LAF9g2zRMXAISdhp6ZlZ2QWEeCF4qEXkJKRk5JEVHVX0KfRdVC21VE1U3apM3WwcEZSdXD0NVDuN6tyLQ8IxsPCIySgA1YggwBgoAZVYAd1IyKCwAN0np3gAJTfXNhizJaVlSeSUEFwtDCjc3bUNtEwNdbWu3C0bHZ3dPQ29fP5AiEwiAIkNoqMKBMpjNdhAVvtYbx5gwFkjpkccqdzohtFpDNd-viOi4NPoNC4vs1Wr8vD4-LoAkFQqDSAwpvB8uCoiNYrRGCw2JQMqksSc8qALmoPBQTC4yk5dKZHmVqcoXBTXE8NLoOqo9Np9PL+mDBryYiKBQlhRRkiIIOLcmd8tLyjdOjVAvUnNVVNTSi4KJptHcLE4XD6KaaecNLdRrULyE6ca7HHcSmUKlUvVUGvYVJGfjrdB5vMbS6oY+a41CYdM5otlqRVhtYSnJQUEPpNLc9NdNVcniZHurNVoXDq3iZntpQxYXNXIrX2PW4ZNEW3MflshKXVLEH5VBRdC4mR9Os8R5UAwrg04wxGo-olxC+eMDh3913ZYSvCTVDJCkqQLZoi21MxAg+M9dE0V8LVGL9cRpPRM3KSpqlqPN1XdCCNBMBdyk1bxWWCIA */
  createMachine({
  type: "parallel",
  states: {
    Microphone: {
      initial: "Muted",
      states: {
        Muted: {
          on: {
            Unmute: {
              target: "Unmuted",
            },
          },
        },
        Unmuted: {
          on: {
            Mute: {
              target: "Muted",
            },
          },
        },
      },
    },
    Video: {
      initial: "Showning video",
      states: {
        "Showning video": {
          on: {
            "Hide video": {
              target: "Hiding video",
            },
          },
        },
        "Hiding video": {
          on: {
            "Show video": {
              target: "Showning video",
            },
          },
        },
      },
    },
  },
  id: "Call machine",
});
