import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-[#e1f3d0] py-4">
            <h2 className='text-3xl text-center font-bold '>Some Important Questions</h2>
            <hr style={{ color: '#acc396', height: '4px', backgroundColor: '#acc396' }} className='mt-7 mb-14' />
            <div className='flex flex-col mb-4 rounded-lg items-start p-8 bg-white w-[90%] md:w-4/5 mx-auto'>
                <h4 className='text-2xl font-semibold mb-4 text-[#899c7a]'>What are the different ways to manage a state in a React application?</h4>
                <p>React state management is a process for managing the data that React components need in order to render themselves.There are four main types of state you need to properly manage in your React apps:Local state.Global state.Server state.URL state.</p>
            </div>
            <div className='flex flex-col mb-4 rounded-lg items-start p-8 bg-white w-[90%] md:w-4/5 mx-auto'>
                <h4 className='text-2xl font-semibold mb-4 text-[#899c7a]'> How does prototypical inheritance work?</h4>
                <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.When we read a property from object, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
            </div>
            <div className='flex flex-col mb-4 rounded-lg items-start p-8 bg-white w-[90%] md:w-4/5 mx-auto'>
                <h4 className='text-2xl font-semibold mb-4 text-[#899c7a]'>What is a unit test? Why should we write unit tests?</h4>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='flex flex-col mb-4 rounded-lg items-start p-8 bg-white w-[90%] md:w-4/5 mx-auto'>
                <h4 className='text-2xl font-semibold mb-4 text-[#899c7a]'>React vs. Angular vs. Vue?</h4>
                <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.Each framework is component-based and allows the rapid creation of UI features. <br />
                    Before jumping into a new framework, there are a few things to consider.First, your team's experience can be a deciding factor when choosing a new technology.Similarly, you have to consider the talent that is available in your area so that you can hire developers for your project.Finally, when it comes to the project itself, the complexity and scope can also affect your choice of framework.</p>
            </div>
        </div>
    );
};

export default Blogs;