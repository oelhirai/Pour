# Pour

This is the pure react rendition of the Pour app. 

With this, a user may:
- Configure the amount of coffee grounds they have (in grams)
  - The coffee-water ratio follows a standard 1 : 17ish ratio
- View their pourover session broken down into steps
  - Each step contains how much water to pour, and the target wright
  - When using a scale, this may help a user keep track of their progress 

<img src="./public/pour_react.gif" width=200 />

What this app does not do (yet?)
- Give guidance on grind size for coffee
- Allow input of how much water as opposed to coffee
- Set different ratios of coffee-to-water
  - Could be nice if using a Chemex with a larger weight of coffee (40g+) 

Developer notes:
- May be good to refactor view elements into a single grid
- Understand optimizations around inline componenet declarations and view renderings

## TODO

- Ensure view is responsive for all screen sizes.
