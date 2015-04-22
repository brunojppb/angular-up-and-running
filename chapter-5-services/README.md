# Chapter 5 - Services (Factories, Services and Providers)

Basic behaviour difference between a controller and a service:

|      Controllers     |       Services        |
| -------------------- | --------------------- |
|Presentation logic|Business Logic|
|Directly linked to a View|Independent of views|
|Drives the UI|Drives the application|
|One-off, specific|Reusable|
|Responsable for decisions like what data to tech, data to show, how to handle user interactions, styling and display UI|Responsable for making server calls, common validation logic, application-level stores and reusable business logic|

# AngularJS Services Namespace

AngularJS uses the '$' sign as a prefix of its services($log, $http, $window). This creates a namespace where we can identify when we are using AngularJS services

# When do I need to create a service?

|         Reason       |       Description      |
| -------------------- | --------------------- |
| It needs to be reusable | More than one controller or service will need to access the particular function that is being implemented |
| Application-level state | Controllers get created and destroyed. If we need state stored across our application(e.g. Current user) |
| It is independent of the view | If what we are implementing is not directly linked to a view |
| Integrates with a thrid-party service | When we need a third-party service(e.g SocketIO), but we want to be able to mock or replace it in our unit tests |
| Caching/Factories | Do I need an object cache? Or something that creates model objects? |
