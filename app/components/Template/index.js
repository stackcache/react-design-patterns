/**
 *
 * Template
 *
 */

/* eslint-disable react/prefer-stateless-function */
export class TemplateBuilder {
  constructor() {
    this.test = () => {};
    this.lint = () => {};
    this.assemble = () => {};
    this.deploy = () => {};
    this.build = () => {
      const messages = [];
      messages.push(this.test());
      messages.push(this.lint());
      messages.push(this.assemble());
      messages.push(this.deploy());
      return messages;
    };
  }
}

export class AndroidBuilder extends TemplateBuilder {
  constructor() {
    super();
    this.test = () => 'Running android tests';
    this.lint = () => 'Linting the android code';
    this.assemble = () => 'Assembling the android build';
    this.deploy = () => 'Deploying android build to server';
  }
}

export class IosBuilder extends TemplateBuilder {
  constructor() {
    super();
    this.test = () => 'Running ios tests';
    this.lint = () => 'Linting the ios code';
    this.assemble = () => 'Assembling the ios build';
    this.deploy = () => 'Deploying ios build to server';
  }
}
