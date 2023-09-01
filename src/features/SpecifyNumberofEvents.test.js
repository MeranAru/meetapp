import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('User has not picked how many events that they want shown to them', () => {
            AppComponent = render(<App />);
        });

        when('User select the city to show the events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        then('32 events are shown', () => {
            expect(eventList.length).toEqual(32);
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        given('User has picked the amount of events they want displayed', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList[0]).toBeTruthy();
        });
    });

        when('User selects the events', async () => {
            const button = AppComponent.queryByTestId('numberOfEventsInput');
            await userEvent.type(button, '{backspace}{backspace}10');
        });

        then('A number will be shown of how many events are displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(10);
        });
    });
});