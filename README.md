***Restaurants RN project***

Please run ```yarn install``` to install the dependencies

Then run ```pod install``` from the ios folder to install the pods

In order to run the ios app please run

```yarn ios```

In order to run the android app please run 

```yarn android```

In the project there are some unit tests, in order to run them please execute:

```yarn test```

I tried to create a JSI module for the app version, but I never did it before so I just used a native module. Thanks btw for the request of a JSI module, it has been challenging, but due to time constraints I had to give up.

I also added storybook, I haven't had the time to properly set it up, so in order to activate it,  it is necessary to uncomment some code from the src/App file

I wish I had more time to spend on this to add Detox for e2e testing + more unit tests.

Thanks for taking the time and have a look at my code.

Mario
