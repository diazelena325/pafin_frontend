export interface IWelcome {
    AssistantFeature: IAssistantFeature;
}

export interface IAssistantFeature {
    quickAccess: IQuickAccess[];
    containers:  IContainer[];
}

export interface IContainer {
    id:          string;
    icon:        string;
    heading:     string;
    description: string;
    steps:       IStep[];
}

export interface IStep {
    id:          string;
    title:       string;
    description: string;
    badge:       string;
    info:        string;
    complete:    boolean;
    active:      boolean;
}

export interface IQuickAccess {
    id:          string;
    heading:     string;
    description: string;
}
