# Ember Toolchain Evaluation - Ember Tools

Ember’s tooling story is getting better every day. This repo is a place to
evaluate the current options, with notes on their relative merits. Each
build tool will get its own branch and notes in the README.

Some factors for consideration:

- **Documentation**  
  - Excellent README
  - Bang up to date with latest Ember release
- **Maintainers**  
  - Ryan runs Ember 101, appeared on Ember Hot Seat, a frequent contributor
  - Seems like a really nice guy
- **Setup**  
  1. Install ember-tools
  2. `ember create ...`
  3. `ember build`
  4. Add `js/application.js` to karma config
  5. `karma start --single-run [FAIL]`
  6. Add route
  7. Add template
  8. `ember build`
  9. `karma start --single-run [PASS]`
- **Preview**  
  How easy is it to boot a preview server?
- **Testing**  
  How easy is it to run the test suite (with and without a runner)?
- **Build**  
  How easy is it to build deployable versions of the app?  
  Does it handle switching between debug/production versions of Ember?
- **Deploy**  
  Is there a deploy story and should there be one?
- **Noise**  
  How noisy is the project directory with this tool?
- **Configurability**  
  How easy is it to add/remove dependencies and change the layout?
- **Coupling**  
  How easy would it be to switch over to a different tool/framework?
- **Outlook**  
  How does the future look for this tool?

## Candidates

- [Ember Tools](https://github.com/rpflorence/ember-tools)
- [Ember App Kit](https://github.com/stefanpenner/ember-app-kit)
- [Yeoman with Charcoal](https://github.com/thomasboyt/charcoal)
- [Brunch with Ember Reloaded](https://github.com/gcollazo/brunch-with-ember-reloaded)
- More?

