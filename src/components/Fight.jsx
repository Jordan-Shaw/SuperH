import React, { Component } from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Result from "./Result";

export default class Fight extends Component {
  state = {
    super1: {
      response: "success",
      id: "1",
      name: "A-Bomb",
      powerstats: {
        intelligence: "38",
        strength: "100",
        speed: "17",
        durability: "80",
        power: "24",
        combat: "64"
      },
      biography: {
        "full-name": "Richard Milhouse Jones",
        "alter-egos": "No alter egos found.",
        aliases: ["Rick Jones"],
        "place-of-birth": "Scarsdale, Arizona",
        "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
        publisher: "Marvel Comics",
        alignment: "good"
      },
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["6'8", "203 cm"],
        weight: ["980 lb", "441 kg"],
        "eye-color": "Yellow",
        "hair-color": "No Hair"
      },
      work: {
        occupation: "Musician, adventurer, author; formerly talk show host",
        base: "-"
      },
      connections: {
        "group-affiliation":
          "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
        relatives:
          "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
      }
    },
    super2: {
      response: "success",
      id: "1",
      name: "A-Bomb",
      powerstats: {
        intelligence: "38",
        strength: "100",
        speed: "17",
        durability: "80",
        power: "24",
        combat: "64"
      },
      biography: {
        "full-name": "Richard Milhouse Jones",
        "alter-egos": "No alter egos found.",
        aliases: ["Rick Jones"],
        "place-of-birth": "Scarsdale, Arizona",
        "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
        publisher: "Marvel Comics",
        alignment: "good"
      },
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["6'8", "203 cm"],
        weight: ["980 lb", "441 kg"],
        "eye-color": "Yellow",
        "hair-color": "No Hair"
      },
      work: {
        occupation: "Musician, adventurer, author; formerly talk show host",
        base: "-"
      },
      connections: {
        "group-affiliation":
          "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
        relatives:
          "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
      }
    },
    turn: true,
    chosenStat: null
  };

  componentDidMount() {
    let id1 = Math.floor(Math.random() * 700);
    let id2 = Math.floor(Math.random() * 700);

    fetch(`https://www.superheroapi.com/api.php/2536687333108055/${id1}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ ...this.state, super1: response });
      })
      .then(
        fetch(`https://www.superheroapi.com/api.php/2536687333108055/${id2}`)
          .then(response => {
            return response.json();
          })
          .then(response => {
            this.setState({ ...this.state, super2: response });
          })
      );
  }

  nextSuperHero = num => {
    if (num === 1) {
      let { id } = this.state.super1;
      id = Number(id);
      id = id + 1;
      const url = `https://www.superheroapi.com/api.php/2536687333108055/${id}`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.setState({ super1: response, ...this.state.super2 });
        });
    } else {
      let { id } = this.state.super2;
      id = Number(id);
      id = id + 1;
      const url = `https://www.superheroapi.com/api.php/2536687333108055/${id}`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.setState({ super2: response, ...this.state.super1 });
        });
    }
  };

  prevSuperHero = num => {
    if (num === 1) {
      let { id } = this.state.super1;
      id = Number(id);
      id--;
      const url = `https://www.superheroapi.com/api.php/2536687333108055/${id}`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (num === 1) {
            this.setState({ super1: response, ...this.state });
          } else {
            this.setState({ super2: response, ...this.state });
          }
        });
    } else {
      let { id } = this.state.super1;
      id = Number(id);
      id--;
      const url = `https://www.superheroapi.com/api.php/2536687333108055/${id}`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (num === 1) {
            this.setState({ super1: response, ...this.state.super2 });
          } else {
            this.setState({ super2: response, ...this.state.super1 });
          }
        });
    }
  };

  refreshNewHero = () => {
    let id1 = Math.floor(Math.random() * 700);
    let id2 = Math.floor(Math.random() * 700);

    fetch(`https://www.superheroapi.com/api.php/2536687333108055/${id1}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ ...this.state, super1: response });
      })
      .then(
        fetch(`https://www.superheroapi.com/api.php/2536687333108055/${id2}`)
          .then(response => {
            return response.json();
          })
          .then(response => {
            this.setState({ ...this.state, super2: response, turn: !this.state.turn });
          })
      );
  };

  statChooser = (stat) => {
    console.log(stat.target.value);
    this.setState({ ...this.state, chosenStat: stat.target.value })
  };

  render() {
    console.log('super1', this.state.super1.powerstats, 'super2', this.state.super2.powerstats)
    return (
      <div>
        <Result
          refreshNewHero={this.refreshNewHero}
          powerstats2={this.state.super2.powerstats}
          powerstats1={this.state.super1.powerstats}
          name1={this.state.super1.name}
          name2={this.state.super2.name}
          chosenStat={this.state.chosenStat}
        />
        <section className="Fight">
          <Hero1
            prevSuperHero={this.prevSuperHero}
            nextSuperHero={this.nextSuperHero}
            super={this.state.super1}
            turn={this.state.turn}
            statChooser={this.statChooser}
          />
          <Hero2
            prevSuperHero={this.prevSuperHero}
            nextSuperHero={this.nextSuperHero}
            super={this.state.super2}
            turn={this.state.turn}
            statChooser={this.statChooser}
          />
        </section>
      </div>
    );
  }
}
