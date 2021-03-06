## Chapter 4 - Forms, Inputs and Services

### Built-in form validators
![Built-in form validators](https://github.com/brunojppb/angular-up-and-running/blob/chapter4/images/built-in-angular-form-states.png)

### Built-in error handling
![Built-in error handling](https://github.com/brunojppb/angular-up-and-running/blob/chapter4/images/built-in-angular-validators.png)

### CSS applied based on input states
![CSS applied based on input states](https://github.com/brunojppb/angular-up-and-running/blob/chapter4/images/CSS-aplied-by-angular.png)

### Checkbox

AngularJS provides some directives for checkbox:

 - ng-true-value: custom value instead of true or false
 - ng-false-value: custom value instead of true or false

```html
<input  type="checkbox"
        ng-model="controller.user.agree"
        ng-true-value="YES"
        ng-false-value="NO" />
```
