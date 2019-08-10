# Hammerhead UI

### iXsystem's Cross-Project UI Components for Angular

## About

iXsystems builds and maintains many products with the Angular framework. The Hammerhead UI library was created to share Angular components across all of iXsystem's Angular projects.

## Installation

Use your favorite package manager to add `hammerhead-ui` to your project.

```sh
yarn add hammerhead-ui
```

Then, add `HammerheadUiModule` to a module in your Angular project.

```ts
import { NgModule } from '@angular/core';
import { HammerheadUiModule } from 'hammerhead-ui';

@NgModule({
    imports: [HammerheadUiModule]
})
export class AppModule {}
```

## Dependencies

A list of the library's peer dependencies can be found in its [`package.json` file](https://github.com/iXsystems/hammerhead-ui/blob/master/projects/hammerhead-ui/package.json). Generally speaking, the library relies on Angular 8+.
```json
{
  "name": "hammerhead-ui",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/animations": "8.1.1",
    "@angular/cdk": "8.0.2",
    "@angular/common": "^8.1.1",
    "@angular/core": "^8.1.1",
    "@angular/flex-layout": "^8.0.0-beta.26",
    "@angular/material": "^8.0.2"
  }
}

``` 

## Development

The Hammerhead UI repo consists of two distinct but interrelated projects: the library itself (`hammerhead-ui`) and the library demo web app (`hammerhead-ui-app`). Both are Angular projects, both are managed by the [Angular CLI](https://cli.angular.io/).

## Publishing

Steps for publishing new verions of the library.
