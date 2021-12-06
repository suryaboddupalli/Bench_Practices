import React, { Component } from "react";
import Animals from "./Animals";
import ErrorBoundary from "./Errorboundary";

class ComponentB extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Animals animalName="lion" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Animals animalName="Tiger" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Animals animalName="Apple" />
                </ErrorBoundary>
            </div>
        )
    }
}

export default ComponentB