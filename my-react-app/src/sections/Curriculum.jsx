//testing


import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Code, Smartphone, Database, Globe, Settings, Zap, Trophy } from 'lucide-react';

const Curriculum = () => {
    const [expandedModules, setExpandedModules] = useState({});

    const toggleModule = (moduleId) => {
        setExpandedModules(prev => ({
            ...prev,
            [moduleId]: !prev[moduleId]
        }));
    };

    const getModuleIcon = (index) => {
        const icons = [
            Smartphone, Code, Settings, BookOpen, Settings,
            Zap, Database, Database, Database, Globe,
            Globe, Code, Trophy, Database
        ];
        const IconComponent = icons[index] || BookOpen;
        return <IconComponent className="w-5 h-5" />;
    };

    const modules = [
    {
      id: 1,
      title: "Introduction to React Native",
      topics: [
        "What is React Native?",
        "Creating Our First React Native App",
        "Dealing with Limitations of React Native"
      ]
    },
    {
      id: 2,
      title: "Diving into the Basics",
      topics: [
        "Module Introduction",
        "Creating a New Project",
        "JSX Elements you Can and Can't Use",
        "Switching Away from create-react-native-app",
        "How to Use the Attached Code",
        "Running the App on an Android Simulator (+ Setup)",
        "Running our App on a Real Android Device",
        "Preparing XCode (for iOS)",
        "Running our App on an iOS Simulator",
        "Running our App on an iOS Device",
        "A Good Development Setup",
        "Working on the App: Adding a Textinput",
        "Styling – Understanding the Basics",
        "Positioning Elements with Flexbox",
        "Adding a Button and Managing State",
        "Creating a Custom Component",
        "Listening to Touch Events",
        "Reacting to Press Events",
        "Using a ScrollView",
        "Rendering Lists Correctly",
        "Adding Static Images",
        "Using Network Images",
        "Adding a Modal",
        "React vs React Native",
        "JavaScript – Supported Features"
      ]
    },
    {
      id: 3,
      title: "Using Redux with React Native",
      topics: [
        "Module Introduction",
        "A Brief Redux Refresher",
        "Installing Redux and Creating a Basic Setup",
        "Setting Up Actions",
        "Setting Up the Reducer",
        "Creating the Store",
        "Connecting React Native to Redux"
      ]
    },
    {
      id: 4,
      title: "Debugging React Native Apps",
      topics: [
        "Module Introduction",
        "Using the Remote JavaScript Debugging console.log",
        "Debugging with Breakpoints",
        "Debugging+++ with React Native Debugger",
        "Debugging Redux",
        "Template Filters and Custom Filters",
        "Template Filters Coding Examples"
      ]
    },
    {
      id: 5,
      title: "Linking and Using Third Party Libraries",
      topics: [
        "Module Introduction",
        "Installing Libraries",
        "Automatic Linking",
        "Linking Libraries on iOS",
        "Linking Libraries on Android",
        "Using Library Features: Adding Icons"
      ]
    },
    {
      id: 6,
      title: "Navigation in React Native Apps",
      topics: [
        "Module Introduction",
        "Navigation in Web Apps vs Native Apps",
        "Exploring Native Navigation Solutions",
        "Adding React Native Navigation to iOS",
        "Adding React Native Navigation to Android",
        "Finishing the Library Setup",
        "Registering and Rendering a Screen",
        "Adding a Tabs Screen (Tabs Navigation)",
        "Adding Icons to Tabs",
        "Connecting Screens to Redux",
        "Updating Redux",
        "Pushing Pages (Navigating \"Forwards\")",
        "Popping Pages (Navigating \"Backwards\")",
        "More Navigator Methods",
        "Adding a Side Drawer",
        "Finishing the Drawer"
      ]
    },
    {
      id: 7,
      title: "Styling & Animating React Native Apps",
      topics: [
        "Module Introduction",
        "Using StyleSheet vs Normal JS Objects",
        "Vanilla CSS vs React Native Styles",
        "Flexbox in Action",
        "Styling with Relative Units",
        "\"Global Styles\" with Custom Components",
        "Synthetic Cascading of Styles",
        "Styling Text",
        "Cascading Text Styles",
        "Adding a Background Image",
        "Creating a Re-Usable Custom Button",
        "Cross Platform Styles & Responsiveness",
        "Using the Platform API",
        "Loading Different Icons for Different Platforms",
        "Using Different Entry Points (into the App)",
        "Cross-Platform UI Libraries",
        "Using the Dimensions API",
        "Adjusting Styles Dynamically",
        "Preparing the App for Animations",
        "Using the Animated API",
        "Animations Summary"
      ]
    },
    {
      id: 8,
      title: "Handling User Input",
      topics: [
        "Module Introduction",
        "Managing Input/ Control State",
        "Adding Custom Validation Logic",
        "Using the Validation State",
        "Dispatching an Auth Action",
        "Switching Form (Auth) Modes",
        "Configuring Text Input Components",
        "Handling the Soft Keyboard"
      ]
    },
    {
      id: 9,
      title: "Using Native Device Features",
      topics: [
        "Module Introduction",
        "Installing react-native-maps",
        "Rendering a Map",
        "Picking a Location on the Map",
        "Adding a Map Marker",
        "Animating Map Movement",
        "Locating the User",
        "Storing the Picked Location with Redux",
        "Installing react-native-image-picker",
        "Using the Image Picker",
        "Storing the Picked Images",
        "Image Picker and the Data it Returns"
      ]
    },
    {
      id: 10,
      title: "Networking – Sending Http Requests",
      topics: [
        "Module Introduction",
        "Sending Http Requests – Theory",
        "Firebase & The Right Database",
        "Creating the Server",
        "Using the Fetch-API",
        "Storing Data in Firebase",
        "Storing Images",
        "Finishing the Image Upload Function",
        "Storing the Remaining Data",
        "Adding the Activity Indicator",
        "Handling Errors",
        "Http, fetch() and Error Handling",
        "Getting Data from the Server"
      ]
    },
    {
      id: 11,
      title: "Authentication in React Native Apps",
      topics: [
        "Module Introduction",
        "How Authentication Works in React Native Apps",
        "Enabling Firebase Authentication",
        "Signing Users Up",
        "Using the Authentication Result (Response)",
        "Supporting Signup and Login",
        "Adding User Login",
        "Protecting Routes on Firebase",
        "Storing the Auth Token in Redux",
        "Using the Auth Token",
        "Fetching the Token in a Re-Usable Way",
        "Adding Places (Authenticated)",
        "Storing the Token in AsyncStorage",
        "Adding an Auto-Signin Functionality",
        "Managing the Token Expiration",
        "Clearing the Auth Storage (AsyncStorage)",
        "Refreshing the Token",
        "Adding User Logout",
        "Refreshing the Token Without App Reloads"
      ]
    },
    {
      id: 12,
      title: "Publishing the App",
      topics: [
        "Module Introduction",
        "Adding Launcher Icons",
        "Adding a Splash Screen",
        "Configuring & Building the App",
        "Publishing to Google Play Store (Android)",
        "Publishing to the App Store (iOS)",
        "Publishing the App – Detailed Instructions"
      ]
    }
  ];

    return (
        <section className="py-16  bg-blue-50">
            <div id="curriculum" className="max-w-full px-20 mx-auto  scroll-mt-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-sm font-semibold text-pink-700 uppercase tracking-wide mb-2">
                        COMPREHENSIVE CURRICULUM
                    </h3>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Complete Android Development Course
                    </h2>
                    <p className="text-lg mx-auto text-gray-600 max-w-3xl ">
                        Master Android development through our structured 14-module curriculum covering everything from basics to advanced topics with hands-on projects.
                    </p>
                </div>

                {/* Curriculum Grid */}
                <div className="grid gap-4">
                    {modules.map((module, index) => (
                        <div
                            key={module.id}
                            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Module Header */}
                            <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full px-6 py-8 flex items-center justify-between text-left hover:bg-gray-50 rounded-xl transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg flex items-center justify-center text-white shadow-lg">
                                        {getModuleIcon(index)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            Module {module.id}: {module.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {module.topics.length} topics
                                            {module.projects && ` • ${module.projects.length} projects`}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-medium">
                                        {module.topics.length + (module.projects?.length || 0)} items
                                    </span>
                                    {expandedModules[module.id] ? (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            {/* Module Content */}
                            {expandedModules[module.id] && (
                                <div className="px-6 pb-6 border-t border-gray-100">
                                    <div className="pt-4">
                                        {/* Topics */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
                                                <BookOpen className="w-4 h-4 mr-2" />
                                                Learning Topics
                                            </h4>
                                            <div className="grid gap-2">
                                                {module.topics.map((topic, topicIndex) => (
                                                    <div
                                                        key={topicIndex}
                                                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                                                    >
                                                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 leading-relaxed">{topic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Projects */}
                                        {module.projects && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
                                                    <Code className="w-4 h-4 mr-2" />
                                                    Hands-on Projects
                                                </h4>
                                                <div className="grid gap-2">
                                                    {module.projects.map((project, projectIndex) => (
                                                        <div
                                                            key={projectIndex}
                                                            className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200"
                                                        >
                                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span className="text-gray-700 font-medium leading-relaxed">{project}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                        <div className="text-sm text-gray-600">Modules</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-green-600 mb-2">140+</div>
                        <div className="text-sm text-gray-600">Topics</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                        <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                        <div className="text-sm text-gray-600">Practical</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-red-600 mb-2">₹21,200</div>
                        <div className="text-sm text-gray-600">Course Fees</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">45hrs</div>
                        <div className="text-sm text-gray-600">Duration</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;