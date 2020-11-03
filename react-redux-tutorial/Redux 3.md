I knew how to access the current state with getState. I knew how to dispatch an action with dispatch and how to listen for state changes with subscribe.

You will use connect with two or three arguments depending on the use case:

a mapStateToProps function (you can name it also “select”)
a mapDispatchToProps function
mapStateToProps does exactly what its name suggests: it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.

mapDispatchToProps does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to send messages to the store.

https://redux.js.org/introduction/three-principles

Always remember: the state in redux comes from reducers.

- getState - gets current state
- dispatch - invokes an action
- subscribe - listens to state change

- actions - Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

- reducers - Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
